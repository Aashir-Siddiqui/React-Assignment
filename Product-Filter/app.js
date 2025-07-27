// Data
const products = [
  {
    id: 1,
    image: "./images/products/burger.png",
    title: "Burger1",
    description:
      "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "./images/products/piz.jpg",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "./images/products/burger.png",
    title: "Burger2",
    description:
      "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "./images/products/piz.jpg",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "./images/products/burger.png",
    title: "Burger3",
    description:
      "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 3,
  },
  {
    id: 9,
    image: "./images/products/piz.jpg",
    title: "Pizza3",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 900,
    category: "Pizza",
    rating: 2,
  },
];

const categories = [
  { id: 1, title: "Burger", image: "" },
  { id: 2, title: "Shawarma", image: "" },
  { id: 3, title: "Pizza", image: "" },
];

const categoryTitles = categories.map((category) => category.title);

let selectedCategory = [];
let selectedPrice = 900;
let selectedRating = 0;
let sortOption = "default";

const categoryFilterEl = document.getElementById("categoryFilter");
const productContainer = document.getElementById("productContainer");
const priceRangeInput = document.getElementById("priceRange");
const priceDisplay = document.getElementById("priceDisplay");
const ratingFilter = document.getElementById("ratingFilter");

priceRangeInput.min = 0;
priceRangeInput.max = 900;
priceRangeInput.value = 900;

const onChangeCategory = (category, isChecked) => {
  if (isChecked) {
    selectedCategory.push(category);
  } else {
    selectedCategory = selectedCategory.filter((cat) => cat !== category);
  }
  renderProducts();
};

const getFilterData = (data, selectedCategory, selectedRating, selectedPrice, sortOption) => {
  let filteredProducts

  if (selectedCategory.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price <= selectedPrice
  );

  if (selectedRating) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= selectedRating
    );
  }

  switch (sortOption) {
    case "price-desc":
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    case "price-asc":
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case "rating-desc":
      filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
      break;
    case "rating-asc":
      filteredProducts = [...filteredProducts].sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }

  return filteredProducts;
};

// const onChangePriceRange = (event) => {
//   selectedPrice = parseInt(event.target.value);
//   if (priceDisplay) {
//     priceDisplay.textContent = `Max Price: $${selectedPrice}`;
//   }
//   renderProducts();
// };

let timeout;
const onChangePriceRange = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    selectedPrice = parseInt(event.target.value);
    priceDisplay.textContent = `Max Price: $${selectedPrice}`;
    renderProducts();
  }, 2000);
};

const onChangeRating = (rating) => {
  selectedRating = rating;
  renderRating();
  renderProducts();
};

const onChangeSort = (option) => {
  sortOption = option;
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.classList.remove("bg-blue-700", "text-white");
    btn.classList.add("bg-gray-600", "text-gray-300");
  });
  document.getElementById(`sort-${option}`).classList.remove("bg-gray-600", "text-gray-300");
  document.getElementById(`sort-${option}`).classList.add("bg-blue-700", "text-white");
  renderProducts();
};

const renderCategories = () => {
  categoryFilterEl.innerHTML = categoryTitles
    .map(
      (category) => `
        <div class="relative flex items-center">
            <div class="flex items-center h-5">
                <input 
                    type="checkbox"
                    class="w-4 h-4 rounded cursor-pointer text-blue-600"
                    onchange="onChangeCategory('${category}', this.checked)"
                />
            </div>
            <label class="ml-3 text-md text-white cursor-pointer font-medium">
                ${category}
            </label>
        </div>
      `
    )
    .join("");
};

const renderRating = () => {
  console.log("Rendering rating filter", selectedRating);
  ratingFilter.innerHTML = [5, 4, 3, 2, 1]
    .map(
      (rating) => `
        <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded" onclick="onChangeRating(${rating})">
            <div class="flex justify-start">
                ${Array(5)
          .fill()
          .map(
            (_, index) => `
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-400"
              } ${rating === selectedRating ? "!text-[#ff3d47]" : ""}" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                      </svg>
                    `
          )
          .join("")}
            </div>
            <p class="text-gray-400">
                ${rating === 5 ? "5.0" : rating.toFixed(1) + " +"}
            </p>
        </div>
      `
    )
    .join("");
};

const renderProducts = () => {
  const visibleProducts = getFilterData(
    products,
    selectedCategory,
    selectedRating,
    selectedPrice,
    sortOption
  );
  console.log(visibleProducts);

  productContainer.innerHTML = visibleProducts.length
    ? visibleProducts
      .map(
        (product) => `
            <div class="col-span-3 rounded-lg bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div>
                    <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg">
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-bold text-yellow-400">${product.title}</h3>
                    <p class="text-sm text-gray-300 mt-1">${product.description}</p>
                    <p class="text-lg font-semibold text-green-400 mt-2">Price: $${product.price}</p>
                    <div class="flex items-center mt-2">
                        ${Array(5)
            .fill()
            .map(
              (_, index) => `
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${index < product.rating ? "text-yellow-500" : "text-gray-400"
                }" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                              </svg>
                            `
            )
            .join("")}
                        <span class="ml-2 text-gray-400">${product.rating}.0</span>
                    </div>
                    <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
          `
      )
      .join("")
    : "<p class='text-white text-center col-span-12 text-lg font-semibold'>No products match the selected filters.</p>";
};

if (priceRangeInput) {
  priceRangeInput.addEventListener("input", onChangePriceRange);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderRating();
  renderProducts();
  if (priceDisplay) {
    priceDisplay.textContent = `Max Price: $${selectedPrice}`;
  }
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      onChangeSort(btn.id.replace("sort-", ""));
    });
  });
});