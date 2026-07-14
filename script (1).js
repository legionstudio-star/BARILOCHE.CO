const WHATSAPP_NUMBER = "573002297406";

const MENU = [
  {
    id: "alitas",
    name: "Alitas Bariloche",
    desc: "Alitas bañadas en salsa buffalo de la casa, servidas con apio fresco.",
    price: 22000,
    img: "assets/products/alitas.jpg",
    badge: "Para compartir"
  },
  {
    id: "la-cumbre",
    name: "La Cumbre",
    desc: "Doble carne, huevo frito, tocineta crocante y queso cheddar fundido.",
    price: 32000,
    img: "assets/products/la-cumbre.jpg",
    badge: "La más pedida"
  },
  {
    id: "la-trocha",
    name: "La Trocha",
    desc: "Carne a la parrilla, tocineta, queso fundido y papas rústicas crocantes encima.",
    price: 28000,
    img: "assets/products/la-trocha.jpg",
    badge: null
  },
  {
    id: "combo-doble-latido",
    name: "Combo Doble Latido",
    desc: "Dos mini hamburguesas: una con tocineta y queso, otra con pimentón y cebolla.",
    price: 35000,
    img: "assets/products/combo-doble-latido.jpg",
    badge: "Para 2"
  },
  {
    id: "la-nevada",
    name: "La Nevada",
    desc: "Carne jugosa, doble queso cheddar y mozzarella, tomate fresco y mayo de la casa.",
    price: 24000,
    img: "assets/products/la-nevada.jpg",
    badge: null
  },
  {
    id: "hamburguesa-valle",
    name: "Hamburguesa Valle",
    desc: "Carne, queso cheddar, tomate, lechuga fresca, tocineta y jalapeño.",
    price: 26000,
    img: "assets/products/hamburguesa-valle.jpg",
    badge: null
  },
  {
    id: "la-clasica",
    name: "La Clásica",
    desc: "Carne a la parrilla, queso cheddar, pepinillo y cebolla morada.",
    price: 18000,
    img: "assets/products/la-clasica.jpg",
    badge: "Precio amigo"
  }
];

const money = (n) => "$" + n.toLocaleString("es-CO");

let cart = {};
let payMethod = "Nequi";

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = MENU.map(item => `
    <article class="tag-card">
      <div class="photo">
        ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="perforation"></div>
      <div class="body">
        <h3>${item.name}</h3>
        <p class="desc">${item.desc}</p>
        <div class="foot">
          <span class="price">${money(item.price)}</span>
          <button class="add-btn" data-id="${item.id}">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
      btn.classList.add("added");
      btn.textContent = "Agregado";
      setTimeout(() => { btn.classList.remove("added"); btn.textContent = "Agregar"; }, 900);
    });
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
  showToast("Agregado al carrito");
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  updateCartUI();
}

function cartCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find(m => m.id === id);
    return sum + item.price * qty;
  }, 0);
}

function updateCartUI() {
  const count = cartCount();
  document.getElementById("cartCount").textContent = count;

  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummary");
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">Tu carrito está vacío. Agrega algo rico del menú.</p>`;
    summaryEl.style.display = "none";
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }

  itemsEl.innerHTML = entries.map(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <p class="name">${item.name}</p>
          <span class="unit">${money(item.price)} c/u</span>
          <div class="qty-stepper">
            <button data-action="dec" data-id="${id}" aria-label="Quitar uno">-</button>
            <span>${qty}</span>
            <button data-action="inc" data-id="${id}" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <span class="line-total">${money(item.price * qty)}</span>
      </div>
    `;
  }).join("");

  itemsEl.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      changeQty(btn.dataset.id, btn.dataset.action === "inc" ? 1 : -1);
    });
  });

  const total = cartTotal();
  document.getElementById("subtotalOut").textContent = money(total);
  document.getElementById("totalOut").textContent = money(total);
  summaryEl.style.display = "block";
  document.getElementById("checkoutBtn").disabled = false;
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function buildWhatsAppMessage() {
  const lines = ["Hola Bariloche Che, quiero hacer este pedido:", ""];
  Object.entries(cart).forEach(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    lines.push(`${qty}x ${item.name} - ${money(item.price * qty)}`);
  });
  lines.push("");
  lines.push(`Total: ${money(cartTotal())}`);
  lines.push(`Pago: ${payMethod}`);
  lines.push("");
  lines.push("Mi dirección en Usme es: ");
  return encodeURIComponent(lines.join("\n"));
}

function setOpenStatus() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = hour >= 15 && hour < 22;
  const pill = document.getElementById("statusPill");
  const text = document.getElementById("statusText");
  pill.classList.add(isOpen ? "open" : "closed");
  text.textContent = isOpen ? "Abierto ahora" : "Cerrado ahora";
}

function runPreloader() {
  const preloader = document.getElementById("preloader");
  const fill = document.getElementById("preloaderFill");
  const percent = document.getElementById("preloaderPercent");
  if (!preloader) return;

  let progress = 0;
  const duration = 1300;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    progress = Math.min(100, Math.round((elapsed / duration) * 100));
    fill.style.width = progress + "%";
    percent.textContent = progress + "%";
    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => preloader.remove(), 600);
      }, 150);
    }
  }
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setOpenStatus();
  runPreloader();

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 600);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");

  const openCart = () => { drawer.classList.add("show"); overlay.classList.add("show"); };
  const closeCart = () => { drawer.classList.remove("show"); overlay.classList.remove("show"); };

  document.getElementById("cartOpenBtn").addEventListener("click", openCart);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);

  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("open");
  });

  document.querySelectorAll("#payOptions button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#payOptions button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      payMethod = btn.dataset.pay;
    });
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cartCount() === 0) return;
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  });
});
