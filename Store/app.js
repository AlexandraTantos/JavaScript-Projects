import { products } from "./products.js";
let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      // or : .map({id,title,company,image,price})
      const { id, title, company, image, price } = product;

      return `<article class="product">
        <img src=${product.image}
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${product.title}</h5>
        <span class="product-price">${product.price}</span>
      </footer>
      </article>`;
    })
    .join("");
};
displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});
const companiesDOM = document.querySelector(".companies");
const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join(" ");
};
displayButtons();
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
