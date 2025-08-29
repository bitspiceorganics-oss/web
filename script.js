// =========================
// Bitspice Organics Script
// =========================

// Catalog data placeholder (you can replace with JSON or API later)
const products = [
  {
    id: "turmeric",
    title: "High-Curcumin Turmeric",
    desc: "Export grade Lakadong turmeric, 7-9% curcumin content.",
    price: "$2400 / MT",
    image: "products/turmeric.jpg"
  },
  {
    id: "ghostpepper",
    title: "Bhut Jolokia (Ghost Pepper)",
    desc: "Authentic Assamese chilli, sun-dried, 100K+ SHU.",
    price: "$3500 / MT",
    image: "products/ghostpepper.jpg"
  },
  {
    id: "joha",
    title: "Joha Rice",
    desc: "Fragrant short-grain rice from Assam, GI-tagged.",
    price: "$1800 / MT",
    image: "products/joha.jpg"
  }
];

// ===== Render Product Sections =====
function renderProducts() {
  const template = document.querySelector("#product-section-template");
  const main = document.querySelector("#main");

  const sections = [
    { key: "trending", title: "Trending Now", desc: "Most searched & requested items." },
    { key: "best", title: "Best Sellers", desc: "Top selling export SKUs." },
    { key: "regional", title: "Regional Picks", desc: "Unique agri-products from Assam & Northeast." }
  ];

  sections.forEach(sec => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".section-title").textContent = sec.title;
    clone.querySelector(".section-desc").textContent = sec.desc;
    const grid = clone.querySelector(".grid");
    grid.dataset.sectionKey = sec.key;

    // Insert product cards
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <p class="price">${p.price}</p>
        <button class="btn small" data-id="${p.id}">View</button>
      `;
      grid.appendChild(card);
    });

    main.insertBefore(clone, document.querySelector("#export"));
  });
}

// ===== Modal Handling =====
const modal = document.querySelector("#productModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalDesc = document.querySelector("#modalDesc");
const modalPrice = document.querySelector("#modalPrice");
const contactSellerBtn = document.querySelector("#contactSeller");
let currentProduct = null;

document.addEventListener("click", e => {
  if (e.target.matches(".product-card button")) {
    const id = e.target.dataset.id;
    const product = products.find(p => p.id === id);
    if (product) {
      currentProduct = product;
      modalImage.src = product.image;
      modalTitle.textContent = product.title;
      modalDesc.textContent = product.desc;
      modalPrice.textContent = product.price;
      modal.setAttribute("aria-hidden", "false");
    }
  }
  if (e.target.matches(".modal-close")) {
    modal.setAttribute("aria-hidden", "true");
  }
});

// ===== WhatsApp Integration =====
contactSellerBtn.addEventListener("click", () => {
  if (!currentProduct) return;
  const phone = "916001236774"; // ✅ Replace with your WhatsApp number
  const text = encodeURIComponent(
    `Hello, I am interested in "${currentProduct.title}". Please share price, MOQ, and packaging details.`
  );
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
});

// ===== Quote Management =====
const addQuoteBtn = document.querySelector("#addQuote");
let quoteItems = [];

addQuoteBtn.addEventListener("click", () => {
  if (currentProduct) {
    quoteItems.push(currentProduct);
    alert(`${currentProduct.title} added to quote.`);
  }
});

// ===== Save Draft =====
document.querySelector("#saveQuote").addEventListener("click", () => {
  localStorage.setItem("draftQuote", JSON.stringify(quoteItems));
  alert("Quote saved locally.");
});

// ===== Search Function =====
const searchInput = document.querySelector("#search");
const searchClear = document.querySelector("#searchClear");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "" : "none";
  });
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  document.querySelectorAll(".product-card").forEach(card => (card.style.display = ""));
});

// ===== Init =====
renderProducts();
