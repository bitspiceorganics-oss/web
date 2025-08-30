// Interactive rendering and behavior
const sectionsData = [
  {
    id: 'trending',
    title: 'Trending Products',
    desc: 'Popular with buyers this month.',
    products: [
      {id:'tr-1', img:'trending-ghost-pepper.jpg', title:'Ghost Pepper', price:'$49/kg – Free Delivery', desc:'Authentic Bhut Jolokia, whole and powder.'},
      {id:'tr-2', img:'trending-lakadong-turmeric.jpg', title:'Lakadong Turmeric', price:'$3.9/kg – Free Delivery', desc:'High curcumin turmeric.'},
      {id:'tr-3', img:'trending-black-gram.jpg', title:'Black Gram', price:'$2.8/kg – Free Delivery', desc:'Protein-rich pulses.'},
      {id:'tr-4', img:'trending-cardamom.jpg', title:'Cardamom', price:'$24/kg – Free Delivery', desc:'Aromatic green pods.'},
      {id:'tr-5', img:'trending-cinnamon.jpg', title:'Cinnamon', price:'$15/kg – Free Delivery', desc:'Premium cinnamon sticks.'},
      {id:'tr-6', img:'trending-cloves.jpg', title:'Cloves', price:'$18/kg – Free Delivery', desc:'Fragrant cloves for blends.'},
      {id:'tr-7', img:'trending-star-anise.jpg', title:'Star Anise', price:'$12/kg – Free Delivery', desc:'Distinct licorice flavor.'},
      {id:'tr-8', img:'trending-joha-rice.jpg', title:'Joha Rice', price:'$1.5/kg – Free Delivery', desc:'Fragrant short-grain rice.'},
      {id:'tr-9', img:'trending-bay-leaf.jpg', title:'Bay Leaf', price:'$5/kg – Free Delivery', desc:'Classic culinary leaf.'},
    ]
  },
  // Other sections remain unchanged
];

// Function to create product cards
function createProductCard(p) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-id', p.id);
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <div class="price">${p.price}</div>
    <h3>${p.title}</h3>
    <p class="muted">${p.desc}</p>
  `;
  card.addEventListener('click', () => openModal(p));
  return card;
}

// Function to render all sections
function renderSections() {
  const template = document.getElementById('product-section-template');
  sectionsData.forEach(sec => {
    const clone = template.content.cloneNode(true);
    const section = clone.querySelector('section');
    section.id = sec.id;
    section.querySelector('.section-title').textContent = sec.title;
    section.querySelector('.section-desc').textContent = sec.desc;
    const grid = section.querySelector('.grid');
    grid.setAttribute('data-section-key', sec.id);
    sec.products.forEach(p => {
      grid.appendChild(createProductCard(p));
    });
    document.querySelector('main').insertBefore(section, document.getElementById('export'));
  });
}

// Function to open product modal
function openModal(p) {
  const modal = document.getElementById('productModal');
  modal.setAttribute('open', '');
  document.getElementById('modalImage').src = p.img;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = p.price;
}

// Function to close product modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.removeAttribute('open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderSections();

  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  // Search functionality
  const searchInput = document.getElementById('search');
  const clearBtn = document.getElementById('searchClear');
  clearBtn.addEventListener('click', () => { searchInput.value = ''; performSearch(''); });
  searchInput.addEventListener('input', (e) => performSearch(e.target.value));

  function performSearch(q) {
    q = q.trim().toLowerCase();
    document.querySelectorAll('.grid-3x3').forEach(grid => {
      grid.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const match = !q || title.includes(q) || desc.includes(q);
        card.style.display = match ? '' : 'none';
      });
    });
  }

  // Contact form demo handling
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks — demo only. Integrate a form backend to collect leads.');
  });

  // WhatsApp contact handling
  const contactSellerBtn = document.getElementById('contactSeller');
  if (contactSellerBtn) {
    contactSellerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const titleEl = document.getElementById('modalTitle');
      const productName = titleEl ? titleEl.textContent.trim() : 'your product';
      const phone = '916001236774';
      const text = encodeURIComponent(`Hello, I am interested in your product: ${productName}`);
      const waUrl = `https://wa.me/${phone}?text=${text}`;
      window.open(waUrl, '_blank');
    });
  }

});
