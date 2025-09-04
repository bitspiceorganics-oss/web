// Interactive rendering and behavior
const sectionsData = [
  {
    id: 'trending',
    title: 'Trending Products',
    desc: 'Popular with buyers this month.',
    products: [
      {id:'tr-1',img:'trending-ghost-pepper.jpg',title:'Ghost Pepper',price:'$49/kg – Free Delivery',desc:'Authentic Bhut Jolokia, whole and powder.'},
      {id:'tr-2',img:'trending-lakadong-turmeric.jpg',title:'Lakadong Turmeric',price:'$3.9/kg – Free Delivery',desc:'High curcumin turmeric.'},
      {id:'tr-3',img:'trending-black-gram.jpg',title:'Black Gram',price:'$2.8/kg – Free Delivery',desc:'Protein-rich pulses.'},
      {id:'tr-4',img:'trending-cardamom.jpg',title:'Cardamom',price:'$24/kg – Free Delivery',desc:'Aromatic green pods.'},
      {id:'tr-5',img:'trending-cinnamon.jpg',title:'Cinnamon',price:'$15/kg – Free Delivery',desc:'Premium cinnamon sticks.'},
      {id:'tr-6',img:'trending-cloves.jpg',title:'Cloves',price:'$18/kg – Free Delivery',desc:'Fragrant cloves for blends.'},
      {id:'tr-7',img:'trending-star-anise.jpg',title:'Star Anise',price:'$12/kg – Free Delivery',desc:'Distinct licorice flavor.'},
      {id:'tr-8',img:'trending-joha-rice.jpg',title:'Joha Rice',price:'$1.5/kg – Free Delivery',desc:'Fragrant short-grain rice.'},
      {id:'tr-9',img:'trending-bay-leaf.jpg',title:'Bay Leaf',price:'$5/kg – Free Delivery',desc:'Classic culinary leaf.'},
    ]
  },
  {
    id:'best',
    title:'Best Sellers',
    desc:'Our most-ordered SKUs globally.',
    products:[
      {id:'b-1',img:'best-cardamom-1.jpg',title:'Cardamom Premium',price:'$24/kg – Free Delivery',desc:'Top-grade green cardamom.'},
      {id:'b-2',img:'best-lakadong-1.jpg',title:'Lakadong Turmeric Fingers',price:'$3.9/kg – Free Delivery',desc:'High color turmeric.'},
      {id:'b-3',img:'best-ghost-1.jpg',title:'Ghost Pepper Powder',price:'$49/kg – Free Delivery',desc:'Smoked and powder options.'},
      {id:'b-4',img:'best-joha-1.jpg',title:'Joha Rice Premium',price:'$2.0/kg – Free Delivery',desc:'Premium aromatic rice.'},
      {id:'b-5',img:'best-blackgram-1.jpg',title:'Black Gram Split',price:'$2.8/kg – Free Delivery',desc:'Split urad dal for processors.'},
      {id:'b-6',img:'best-cinnamon-1.jpg',title:'Cinnamon Sticks',price:'$15/kg – Free Delivery',desc:'Hand-selected sticks.'},
      {id:'b-7',img:'best-cloves-1.jpg',title:'Cloves (Export)',price:'$18/kg – Free Delivery',desc:'Cleaned and dried.'},
      {id:'b-8',img:'best-star-1.jpg',title:'Star Anise (Bulk)',price:'$12/kg – Free Delivery',desc:'Uniform sizing.'},
      {id:'b-9',img:'best-bay-1.jpg',title:'Bay Leaf Whole',price:'$5/kg – Free Delivery',desc:'Aromatic bay leaf.'},
    ]
  },
  {
    id:'regional',
    title:'Regional Spices',
    desc:'Unique flavors from North-East India.',
    products:[
      {id:'r-1',img:'reg-turmeric-1.jpg',title:'High Curcumin Turmeric',price:'$3.9/kg – Free Delivery',desc:'Distinctive Lakadong variety.'},
      {id:'r-2',img:'reg-ghost-1.jpg',title:'Smoked Ghost Pepper',price:'$49/kg – Free Delivery',desc:'Smoky heat profile.'},
      {id:'r-3',img:'reg-joha-1.jpg',title:'Fragrant Joha Rice',price:'$1.5/kg – Free Delivery',desc:'Short-grain aromatic rice.'},
      {id:'r-4',img:'reg-blackgram-1.jpg',title:'Organic Black Gram',price:'$2.8/kg – Free Delivery',desc:'Organically farmed.'},
      {id:'r-5',img:'reg-naga-mustard.jpg',title:'Naga Mustard Seeds',price:'$4/kg – Free Delivery',desc:'Spicy regional condiment.'},
      {id:'r-6',img:'reg-ginger.jpg',title:'Dry Ginger',price:'$2.5/kg – Free Delivery',desc:'Good for chai and extracts.'},
      {id:'r-7',img:'reg-cardamom-2.jpg',title:'Small Cardamom',price:'$20/kg – Free Delivery',desc:'Wild-harvested notes.'},
      {id:'r-8',img:'reg-japi.jpg',title:'Japi Herb Blend',price:'$6/kg – Free Delivery',desc:'Traditional aromatic mix.'},
      {id:'r-9',img:'reg-bamboo-shoot.jpg',title:'Pickled Bamboo Shoot (Dry)',price:'$3/kg – Free Delivery',desc:'For ethnic cuisines.'},
    ]
  },
  {
    id:'superfoods',
    title:'Superfoods',
    desc:'High-nutrition items and wellness ingredients.',
    products:[
      {id:'s-1',img:'super-moringa.jpg',title:'Moringa Powder',price:'$6/kg – Free Delivery',desc:'Rich in vitamins A, C, and E.'},
      {id:'s-2',img:'super-chia.jpg',title:'Chia Seeds',price:'$5/kg – Free Delivery',desc:'Omega-3 and fiber-rich.'},
      {id:'s-3',img:'super-quinoa.jpg',title:'Quinoa',price:'$4/kg – Free Delivery',desc:'Gluten-free high-protein grain.'},
      {id:'s-4',img:'super-flax.jpg',title:'Flax Seeds',price:'$3/kg – Free Delivery',desc:'Good for baking and oils.'},
      {id:'s-5',img:'super-hulled-psyllium.jpg',title:'Psyllium Husk',price:'$3.5/kg – Free Delivery',desc:'Dietary fiber for health markets.'},
      {id:'s-6',img:'super-honeypowder.jpg',title:'Honey Powder',price:'$7/kg – Free Delivery',desc:'Stable sweetener for blends.'},
      {id:'s-7',img:'super-turmeric-powder.jpg',title:'Turmeric Powder',price:'$3.9/kg – Free Delivery',desc:'Processed & sieved.'},
      {id:'s-8',img:'super-beetroot.jpg',title:'Beetroot Powder',price:'$5/kg – Free Delivery',desc:'Natural colorant & supplement.'},
      {id:'s-9',img:'super-millet.jpg',title:'Finger Millet',price:'$2/kg – Free Delivery',desc:'Ancient grain, rich calcium.'},
    ]
  },
  {
    id:'new',
    title:'New Arrivals',
    desc:'Freshly harvested and curated for new buyers.',
    products:[
      {id:'n-1',img:'new-ghost-2.jpg',title:'Bhut Jolokia Flakes',price:'$48/kg – Free Delivery',desc:'Flaky texture for blends.'},
      {id:'n-2',img:'new-turmer-2.jpg',title:'Turmeric Extract',price:'$25/kg – Free Delivery',desc:'Curcumin-rich extract powder.'},
      {id:'n-3',img:'new-joha-2.jpg',title:'Joha Rice (Special)',price:'$2.2/kg – Free Delivery',desc:'Handpicked fragrance.'},
      {id:'n-4',img:'new-blackgram-2.jpg',title:'Split Black Gram',price:'$2.6/kg – Free Delivery',desc:'Processor-ready split.'},
      {id:'n-5',img:'new-cocoa.jpg',title:'Raw Cocoa Nibs',price:'$7/kg – Free Delivery',desc:'For specialty food brands.'},
      {id:'n-6',img:'new-tea.jpg',title:'Assam Loose Leaf',price:'$3.5/kg – Free Delivery',desc:'Single-estate teas.'},
      {id:'n-7',img:'new-card-2.jpg',title:'Cardamom (Green)',price:'$23/kg – Free Delivery',desc:'Premium grade.'},
      {id:'n-8',img:'new-masala.jpg',title:'Custom Masala Blend',price:'$6/kg – Free Delivery',desc:'Private label mixes.'},
      {id:'n-9',img:'new-dates.jpg',title:'Dates (Deglet Noor)',price:'$4/kg – Free Delivery',desc:'Natural sweeteners.'},
    ]
  }
];

function createProductCard(p){
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-id', p.id);
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <div class="price">${p.price}</div>
    <h3>${p.title}</h3>
    <p class="muted">${p.desc}</p>
  `;
  card.addEventListener('click', ()=>openModal(p));
  return card;
}

function renderSections(){
  const template = document.getElementById('product-section-template');
  sectionsData.forEach(sec=>{
    const clone = template.content.cloneNode(true);
    const section = clone.querySelector('section');
    section.id = sec.id;
    section.querySelector('.section-title').textContent = sec.title;
    section.querySelector('.section-desc').textContent = sec.desc;
    const grid = section.querySelector('.grid');
    grid.setAttribute('data-section-key', sec.id);
    sec.products.forEach(p=>{
      grid.appendChild(createProductCard(p));
    });
    document.querySelector('main').insertBefore(section, document.getElementById('export'));
  });
}

function openModal(p){
  const modal = document.getElementById('productModal');
  modal.setAttribute('open', '');
  document.getElementById('modalImage').src = p.img;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = p.price;
}

function closeModal(){
  const modal = document.getElementById('productModal');
  modal.removeAttribute('open');
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
  // document.getElementById("contactForm").addEventListener("submit", function(e) {
  // e.preventDefault();
  //   alert('Thank you for your message');
  // });

  // WhatsApp button
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

  // Contact via Email button (event delegation)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('addQuote')) {
      e.preventDefault();
      const productName = document.getElementById('modalTitle').textContent.trim();
      const email = "bitspiceorganics@gmail.com";
      const subject = encodeURIComponent(`Inquiry about ${productName}`);
      const body = encodeURIComponent(
        `Hello,\n\nI am interested in your product: ${productName}.\nPlease share more details.\n\nThank you.`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  });
  // ✅ Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('show');
    });

    // Close when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
      });
    });
  }
// === Product Showcase (Animated) ===
const products = [
  { name: "Cardamom", img: "cdm.png" },
  { name: "Ghost Pepper", img: "ghp.png" },
  { name: "Joha Rice", img: "jha.png" },
  { name: "Moringa Powder", img: "mp.png" },
  { name: "Split Black Gram", img: "bgm.png" }
];

const imgEl = document.getElementById("product-img");
const nameEl = document.getElementById("product-name");

let index = 0;

function animateProduct() {
  const product = products[index];
  imgEl.src = product.img;
  nameEl.textContent = product.name;

  // Reset positions
  imgEl.style.transition = "none";
  nameEl.style.transition = "none";
  imgEl.style.opacity = "0";
  nameEl.style.opacity = "0";
  imgEl.style.transform = "translate(200%, -200%)";
  nameEl.style.transform = "translateX(-200%)";

  void imgEl.offsetWidth; // trigger reflow

  // Animate image to center (swing)
  setTimeout(() => {
    imgEl.style.transition = "transform 1s ease, opacity 1s ease";
    imgEl.style.opacity = "1";
    imgEl.style.transform = "translate(-50%, -50%)";
  }, 200);

  // Animate name below image
  setTimeout(() => {
    nameEl.style.transition = "transform 1s ease, opacity 1s ease";
    nameEl.style.opacity = "1";
    nameEl.style.transform = "translateX(-50%)";
  }, 200);

  // Pause 2s, then exit
  setTimeout(() => {
    imgEl.style.transition = "transform 1s ease, opacity 1s ease";
    imgEl.style.transform = "translate(-150%, -150%)";
    imgEl.style.opacity = "0";

    nameEl.style.transition = "transform 1s ease, opacity 1s ease";
    nameEl.style.transform = "translateX(150%)";
    nameEl.style.opacity = "0";
  }, 2200);

  // Next product
  index = (index + 1) % products.length;
  setTimeout(animateProduct, 3500);
}

animateProduct();


});
