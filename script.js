// Sample data for demonstration
const sections = [
  {id:'trending', title:'Trending Products'},
  {id:'bestselling', title:'Best Selling'},
  {id:'regional', title:'Regional Spices'},
  {id:'superfoods', title:'Superfoods'},
  {id:'organic', title:'Organic Spices'},
  {id:'rare', title:'Rare & Exotic'},
  {id:'herbs', title:'Herbs & Medicinals'},
  {id:'blends', title:'Spice Blends'},
  {id:'powders', title:'Ground & Powdered'}
];

const products = [
  {id:1, section:'trending', title:'Ghost Pepper', desc:'Fiery hot chilli', img:'images/p1.jpg'},
  {id:2, section:'trending', title:'Turmeric Powder', desc:'Golden spice', img:'images/p2.jpg'},
  {id:3, section:'trending', title:'Black Cardamom', desc:'Smoky pods', img:'images/p3.jpg'},
  {id:4, section:'trending', title:'Moringa Powder', desc:'Superfood green', img:'images/p4.jpg'},
  {id:5, section:'trending', title:'Star Anise', desc:'Fragrant spice', img:'images/p5.jpg'},
  {id:6, section:'trending', title:'Green Cardamom', desc:'Sweet aromatic', img:'images/p6.jpg'},
  {id:7, section:'trending', title:'Triphala', desc:'Ayurvedic blend', img:'images/p7.jpg'},
  {id:8, section:'trending', title:'Chilli Powder', desc:'Spicy powder', img:'images/p8.jpg'},
  {id:9, section:'trending', title:'Joha Rice', desc:'Assamese rice', img:'images/p9.jpg'}
];

function renderSections(){
  const main = document.getElementById('main');
  sections.forEach(sec=>{
    const secEl = document.createElement('section');
    secEl.id = sec.id;
    secEl.innerHTML = `<h2>${sec.title}</h2><div class="grid-3x3"></div>`;
    main.appendChild(secEl);
    const grid = secEl.querySelector('.grid-3x3');
    products.filter(p=>p.section===sec.id).forEach(prod=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.title}">
        <div class="card-content">
          <h3>${prod.title}</h3>
          <p>${prod.desc}</p>
          <button class="btn" data-id="${prod.id}">View</button>
        </div>
      `;
      grid.appendChild(card);
    });
  });
  bindCardEvents();
}

function bindCardEvents(){
  document.querySelectorAll('.card .btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.target.getAttribute('data-id');
      const prod = products.find(p=>p.id==id);
      if(prod) openModal(prod);
    });
  });
}

function openModal(prod){
  const modal = document.getElementById('productModal');
  modal.querySelector('#modalImg').src = prod.img;
  modal.querySelector('#modalTitle').textContent = prod.title;
  modal.querySelector('#modalDesc').textContent = prod.desc;
  modal.classList.add('active');
}
function closeModal(){
  document.getElementById('productModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderSections();

  document.getElementById('productModal').addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('modal-close')){
      closeModal();
    }
  });

  // search
  const searchInput = document.getElementById('search');
  const clearBtn = document.getElementById('searchClear');
  clearBtn.addEventListener('click', ()=>{ searchInput.value=''; performSearch(''); });
  searchInput.addEventListener('input', (e)=> performSearch(e.target.value));

  function performSearch(q){
    q = q.trim().toLowerCase();
    document.querySelectorAll('.grid-3x3').forEach(grid=>{
      grid.querySelectorAll('.card').forEach(card=>{
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const match = !q || title.includes(q) || desc.includes(q);
        card.style.display = match ? '' : 'none';
      });
    });
  }

  // contact form basic handling (demo)
  document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks — demo only. Integrate a form backend to collect leads.');
  });

  // WhatsApp Contact
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

  // 📧 Contact via Email Button
  const emailBtn = document.getElementById("addQuote"); // matches HTML button id
  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
      const productName = document.getElementById("modalTitle").innerText || "Spice Product";
      const email = "bitspiceorganics@gmail.com";
      const subject = encodeURIComponent(`Inquiry about ${productName}`);
      const body = encodeURIComponent(
        `Hello Bitspice Organics Team,\n\nI am interested in your product: ${productName}.\n\nPlease provide me with pricing, MOQ, and packaging details.\n\nThank you.`
      );

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
});
