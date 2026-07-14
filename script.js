const WHATSAPP_NUMBER = "573002297406";

/* ================= CATÁLOGO REAL ================= */
// Combos: cada hamburguesa se puede pedir Sola, o en combo (Mini / Take it Easy / Severo)
// Mini: + acompañamiento + bebida chica (Coca-Cola lata o Manzana)
// Take it Easy: + acompañamiento + gaseosa/agua/té 400ml o Cola y Pola/Águila
// Severo: + acompañamiento + Corona, Stella Artois o Té Hatsu

const COMBO_LABELS = {
  sola: "Sola",
  mini: "Combo Mini",
  takeiteasy: "Combo Take it Easy",
  severo: "Combo Severo"
};

const BURGERS = [
  { id: "valle", name: "Valle", desc: "150g de carne de res, vegetales (tomate y cebolla) y queso cheddar.", price: { sola: 16000, mini: 27000, takeiteasy: 28000, severo: 33000 }, img: "assets/products/hamburguesa-valle.jpg", badge: "Precio amigo" },
  { id: "podio", name: "Podio", desc: "150g de carne 100% res, queso cheddar, tocineta, pomodoro y huevo frito gratinado.", price: { sola: 22000, mini: 33000, takeiteasy: 34000, severo: 39000 }, img: "assets/products/la-cumbre.jpg", badge: "La más pedida" },
  { id: "big-bang", name: "Big Bang", desc: "150g de carne de res, queso cheddar, tomate, tocineta, aros de cebolla y salsa crema de leña.", price: { sola: 22500, mini: 33500, takeiteasy: 34500, severo: 39500 }, img: "assets/products/la-trocha.jpg", badge: null },
  { id: "patagonia", name: "Patagonia", desc: "Hamburguesa doble, cada una 150g de carne de res, vegetales (tomate y cebolla) y queso cheddar.", price: { sola: 23000, mini: 34000, takeiteasy: 35000, severo: 40000 }, img: "assets/products/combo-doble-latido.jpg", badge: "Doble carne" },
  { id: "turin", name: "Turin", desc: "150g de carne 100% res, vegetales (tomate y cebolla), queso cheddar, queso mozzarella, peperoni y salsa de queso cheddar.", price: { sola: 21000, mini: 32000, takeiteasy: 33000, severo: 38000 }, img: "assets/products/la-nevada.jpg", badge: null },
  { id: "chingona", name: "Chingona", desc: "150g de carne 100% res, cebolla, queso cheddar, tocineta, pico de gallo, salsa búfalo y jalapeños.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 }, img: "assets/products/la-clasica.jpg", badge: "Picante" },
  { id: "frontera", name: "Frontera", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, champiñones gratinados, costillitas y salsa BBQ.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 } },
  { id: "urbana", name: "Urbana", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, tocineta, plátano maduro gratinado y salsa de maíz.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 } },
  { id: "manhattan", name: "Manhattan", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, tocineta, piña gratinada, costillitas, salsa búfalo y pepinillos agridulces.", price: { sola: 23500, mini: 34500, takeiteasy: 35500, severo: 40500 } },
  { id: "honolulu", name: "Honolulu", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, tocineta y piña caramelizada con canela.", price: { sola: 21000, mini: 32000, takeiteasy: 33000, severo: 38000 } },
  { id: "mompa", name: "Mompa", desc: "150g de carne de res, queso cheddar, vegetales (tomate y cebolla), chorizo santarrosano gratinado, tocineta y salsa BBQ.", price: { sola: 23000, mini: 34000, takeiteasy: 35000, severo: 40000 } },
  { id: "boluda", name: "Boluda", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, pimentón salteado, chorizo al vino y chimichurri.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 } },
  { id: "costena", name: "Costeña", desc: "150g de carne de res, vegetales (tomate y cebolla), queso cheddar, chips de plátano, butifarra, queso costeño rayado y suero costeño.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 } },
  { id: "fat-tony", name: "Fat Tony", desc: "150g de carne de res, queso cheddar, tomate cherry, albahaca, tocineta, queso gouda y salsa crema de leña.", price: { sola: 21500, mini: 32500, takeiteasy: 33500, severo: 38500 } },
  { id: "freddys", name: "Freddy's", desc: "150g de carne 100% res, queso cheddar, tocineta, 2 nuggets, mermelada de cebolla y salsa chipotle.", price: { sola: 22000, mini: 33000, takeiteasy: 34000, severo: 39000 } },
  { id: "pollo-inka", name: "Pollo Inka", desc: "150g de pechuga de pollo 100%, queso cheddar, vegetales (tomate y cebolla) y salsa BBQ picante.", price: { sola: 16000, mini: 27000, takeiteasy: 28000, severo: 33000 } }
];

const FEATURED_IDS = ["valle", "podio", "big-bang", "patagonia", "turin", "chingona"];

const SIDES = [
  { id: "choripan", name: "Choripán", desc: "Pan, chorizo a la parrilla, queso derretido y chimichurri tradicional.", price: 14000, img: "assets/products/alitas.jpg" },
  { id: "chorizo-granja", name: "Chorizo de la Granja", desc: "Chorizo de la granja, arepa de maíz peto y queso doble crema.", price: 10000 },
  { id: "chorizo-finas-hierbas", name: "Chorizo Finas Hierbas", desc: "Chorizo finas hierbas, arepa de maíz peto y queso doble crema.", price: 10000 },
  { id: "alitas-bbq-maple", name: "Alitas BBQ Maple", desc: "10 alitas, porción de papas a la francesa 150g y salsa dulce maíz o BBQ.", price: 25000 },
  { id: "alitas-dulce-maiz", name: "Alitas Dulce Maíz o BBQ", desc: "10 alitas, porción de papas a la francesa 150g y salsa dulce maíz o BBQ.", price: 25000 },
  { id: "alitas-limon-pimienta", name: "Alitas Limón y Pimienta", desc: "10 alitas, porción de 150g de papas a la francesa y limón pimienta.", price: 25000 },
  { id: "alitas-miel-mostaza", name: "Alitas Miel Mostaza", desc: "10 alitas, porción de papas a la francesa 150g y salsa miel mostaza.", price: 26000 },
  { id: "alitas-bbq-picante", name: "Alitas BBQ Picante", desc: "10 alitas, porción de papas a la francesa 150g y salsa BBQ picante.", price: 27000 },
  { id: "alitas-bufalo", name: "Alitas Salsa Búfalo", desc: "10 alitas, porción de papas a la francesa 150g y salsa búfalo.", price: 27000, img: "assets/products/alitas.jpg" },
  { id: "salchipapa", name: "Salchipapa", desc: "300g de papas a la francesa y salchicha alemana.", price: 16500 },
  { id: "salchipapa-limon", name: "Salchipapa Limón Pimienta", desc: "300g de papas a la francesa y salchicha alemana, sabor limón pimienta.", price: 17500 },
  { id: "papas-francesa", name: "Papas a la Francesa", desc: "Porción de papas fritas a la francesa 150g.", price: 7000 },
  { id: "papas-limon", name: "Papas a la Francesa Limón Pimienta", desc: "Porción de papas fritas a la francesa 150g, sabor a limón pimienta.", price: 7500 },
  { id: "aros-cebolla", name: "Aros de Cebolla", desc: "5 aros de cebolla, acompañados con salsa crema de leña.", price: 7500 },
  { id: "dedos-queso", name: "Dedos de Queso", desc: "5 dedos de queso rellenos, acompañados de jalea de guayaba.", price: 16000 },
  { id: "galleta-chips", name: "Galleta Chips", desc: "Galleta con chips de chocolate — unidad.", price: 4000 }
];

const DRINKS = [
  { id: "coca-400", name: "Coca-Cola 400ml", price: 5500 },
  { id: "coca-235", name: "Coca-Cola 235ml", price: 5000 },
  { id: "quatro-400", name: "Gaseosa Quatro 400ml", price: 5500 },
  { id: "manzana-269", name: "Gaseosa Manzana 269ml", price: 5000 },
  { id: "stella", name: "Cerveza Stella Artois", price: 12000 },
  { id: "corona", name: "Cerveza Corona", price: 11500 },
  { id: "club-colombia", name: "Club Colombia", price: 6000 },
  { id: "aguila", name: "Cerveza Águila", price: 5500 },
  { id: "cola-pola", name: "Cola y Pola", price: 5500 },
  { id: "go-sin-gas", name: "Agua GO+", price: 4500 },
  { id: "go-con-gas", name: "Agua GO+ con gas", price: 4500 },
  { id: "hatsu", name: "Té Hatsu", price: 9500 },
  { id: "fuze-tea", name: "Fuze Tea 400ml", price: 5000 }
];

const ADDONS = [
  { id: "pepinillos", name: "Pepinillos agridulces", price: 3000 },
  { id: "tocineta-ahumada", name: "Tocineta ahumada", price: 3000 },
  { id: "salsa-cheddar", name: "Porción salsa cheddar", price: 2500 },
  { id: "queso-cheddar", name: "Loncha queso cheddar", price: 3000 },
  { id: "queso-doble-crema", name: "Queso doble crema", price: 2000 },
  { id: "suero-costeno", name: "Suero costeño", price: 3000 },
  { id: "salchicha-alemana", name: "Salchicha alemana", price: 7500 },
  { id: "carne-extra", name: "Carne extra (150g)", price: 9500 }
];

const money = (n) => "$" + n.toLocaleString("es-CO");

let cart = {}; // key -> { qty, unitPrice, label, img }
let payMethod = "Nequi";

/* ================= RENDER: HAMBURGUESAS DESTACADAS ================= */
function renderFeaturedBurgers() {
  const grid = document.getElementById("menuGrid");
  const items = BURGERS.filter(b => FEATURED_IDS.includes(b.id));
  grid.innerHTML = items.map(item => `
    <article class="tag-card">
      <div class="photo">
        ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="perforation"></div>
      <div class="body">
        <h3>${item.name}</h3>
        <p class="desc">${item.desc}</p>
        <div class="combo-select" data-burger="${item.id}">
          ${Object.keys(COMBO_LABELS).map((key, i) => `
            <button class="combo-opt ${i === 0 ? "active" : ""}" data-variant="${key}">${COMBO_LABELS[key]}</button>
          `).join("")}
        </div>
        <div class="foot">
          <span class="price" data-price-for="${item.id}">${money(item.price.sola)}</span>
          <button class="add-btn" data-id="${item.id}" data-kind="burger">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".combo-select").forEach(sel => {
    sel.querySelectorAll(".combo-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        sel.querySelectorAll(".combo-opt").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const burgerId = sel.dataset.burger;
        const variant = btn.dataset.variant;
        const burger = BURGERS.find(b => b.id === burgerId);
        const priceEl = grid.querySelector(`[data-price-for="${burgerId}"]`);
        priceEl.textContent = money(burger.price[variant]);
        priceEl.closest(".tag-card").querySelector(".add-btn").dataset.variant = variant;
      });
    });
  });

  grid.querySelectorAll(".add-btn[data-kind='burger']").forEach(btn => {
    btn.addEventListener("click", () => {
      const variant = btn.dataset.variant || "sola";
      addBurgerToCart(btn.dataset.id, variant);
      flashAdded(btn);
    });
  });
}

/* ================= RENDER: CARTA COMPLETA (listas) ================= */
function renderBurgerRows() {
  const el = document.getElementById("burgerRows");
  el.innerHTML = BURGERS.map(b => `
    <div class="menu-row" data-burger-row="${b.id}">
      <div class="menu-row-main">
        <h4>${b.name}</h4>
        <p>${b.desc}</p>
      </div>
      <div class="menu-row-side">
        <select class="variant-select" data-burger="${b.id}">
          ${Object.keys(COMBO_LABELS).map(key => `<option value="${key}">${COMBO_LABELS[key]} — ${money(b.price[key])}</option>`).join("")}
        </select>
        <button class="row-add-btn" data-id="${b.id}" data-kind="burger">Agregar</button>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".row-add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".menu-row");
      const variant = row.querySelector(".variant-select").value;
      addBurgerToCart(btn.dataset.id, variant);
      flashAdded(btn);
    });
  });
}

function renderSimpleRows(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(it => `
    <div class="menu-row">
      <div class="menu-row-main">
        <h4>${it.name}</h4>
        ${it.desc ? `<p>${it.desc}</p>` : ""}
      </div>
      <div class="menu-row-side">
        <span class="price">${money(it.price)}</span>
        <button class="row-add-btn" data-id="${it.id}" data-kind="simple">Agregar</button>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".row-add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = [...SIDES, ...DRINKS, ...ADDONS].find(i => i.id === btn.dataset.id);
      addSimpleToCart(item);
      flashAdded(btn);
    });
  });
}

function flashAdded(btn) {
  const original = btn.textContent;
  btn.classList.add("added");
  btn.textContent = "Agregado";
  setTimeout(() => { btn.classList.remove("added"); btn.textContent = original === "Agregado" ? "Agregar" : original; }, 900);
  showToast("Agregado al carrito");
}

/* ================= CARRITO ================= */
function addBurgerToCart(burgerId, variant) {
  const burger = BURGERS.find(b => b.id === burgerId);
  const key = `${burgerId}::${variant}`;
  if (!cart[key]) {
    cart[key] = {
      qty: 0,
      unitPrice: burger.price[variant],
      label: `${burger.name} (${COMBO_LABELS[variant]})`,
      img: burger.img || null
    };
  }
  cart[key].qty += 1;
  updateCartUI();
}

function addSimpleToCart(item) {
  const key = `simple::${item.id}`;
  if (!cart[key]) {
    cart[key] = { qty: 0, unitPrice: item.price, label: item.name, img: item.img || null };
  }
  cart[key].qty += 1;
  updateCartUI();
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  updateCartUI();
}

function cartCount() {
  return Object.values(cart).reduce((a, c) => a + c.qty, 0);
}

function cartTotal() {
  return Object.values(cart).reduce((sum, c) => sum + c.unitPrice * c.qty, 0);
}

function updateCartUI() {
  document.getElementById("cartCount").textContent = cartCount();

  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummary");
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">Tu carrito está vacío. Agrega algo rico del menú.</p>`;
    summaryEl.style.display = "none";
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }

  itemsEl.innerHTML = entries.map(([key, item]) => `
    <div class="cart-item">
      ${item.img ? `<img src="${item.img}" alt="${item.label}">` : `<div class="cart-item-noimg">🍔</div>`}
      <div>
        <p class="name">${item.label}</p>
        <span class="unit">${money(item.unitPrice)} c/u</span>
        <div class="qty-stepper">
          <button data-action="dec" data-key="${key}" aria-label="Quitar uno">-</button>
          <span>${item.qty}</span>
          <button data-action="inc" data-key="${key}" aria-label="Agregar uno">+</button>
        </div>
      </div>
      <span class="line-total">${money(item.unitPrice * item.qty)}</span>
    </div>
  `).join("");

  itemsEl.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      changeQty(btn.dataset.key, btn.dataset.action === "inc" ? 1 : -1);
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
  Object.values(cart).forEach(item => {
    lines.push(`${item.qty}x ${item.label} - ${money(item.unitPrice * item.qty)}`);
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

/* ================= TABS DE CATEGORÍAS ================= */
function initMenuTabs() {
  const tabs = document.querySelectorAll(".menu-tab");
  const panels = document.querySelectorAll(".menu-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.panel;
      panels.forEach(p => p.classList.toggle("show", p.id === target));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedBurgers();
  renderBurgerRows();
  renderSimpleRows("sideRows", SIDES);
  renderSimpleRows("drinkRows", DRINKS);
  renderSimpleRows("addonRows", ADDONS);
  initMenuTabs();
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
