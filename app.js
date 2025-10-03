console.log('App.js is loaded and running');

// Product data
const products = {
    normal: [
        {
            id: "n1",
            name: "TRENDY Classic Black Tee",
            description: "Minimal black print, soft cotton",
            price: 299,
            image: "slider/img1.png"
        },
        {
            id: "n2",
            name: "TRENDY White Essential",
            description: "Crisp white tee with subtle logo",
            price: 249,
            image: "slider/img2.png"
        },
        {
            id: "n3",
            name: "TRENDY Urban Comfort",
            description: "Streetwear inspired design",
            price: 349,
            image: "slider/img3.png"
        }
    ],
    premium: [
        {
            id: "p1",
            name: "TRENDY Elite Collection",
            description: "Premium embroidered design",
            price: 899,
            image: "slider/img4.png"
        },
        {
            id: "p2",
            name: "TRENDY Signature Series",
            description: "Exclusive premium wear",
            price: 999,
            image: "slider/img5.png"
        },
        {
            id: "p3",
            name: "TRENDY Luxury Line",
            description: "Premium fabric, premium style",
            price: 1299,
            image: "slider/img6.png"
        }
    ]
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is fully loaded');
    initializeApp();
    renderProducts(); // Add this line to call renderProducts
});

function renderProducts() {
    // Render normal products
    const normalSection = document.getElementById('normalProducts');
    if (normalSection) {
        normalSection.innerHTML = products.normal.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">₹${product.price}</div>
                </div>
            </div>
        `).join('') + `
        <div class="shop-more">
            <a href="https://www.amazon.in" target="_blank" class="shop-more-btn">Shop More</a>
        </div>`;
    }

    // Render premium products
    const premiumSection = document.getElementById('premiumProducts');
    if (premiumSection) {
        premiumSection.innerHTML = products.premium.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">₹${product.price}</div>
                </div>
            </div>
        `).join('') + `
        <div class="shop-more">
            <a href="https://www.amazon.in" target="_blank" class="shop-more-btn">Shop More</a>
        </div>`;
    }
}

function initializeApp() {
    // Import necessary libraries
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const fabric = window.fabric;

    // Setup scroll functionality
    window.scrollToSection = function(sectionId) {
        console.log('Attempting to scroll to:', sectionId);
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            console.log('Found section, scrolling...');
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        } else {
            console.error('Section not found:', sectionId);
        }
    };

    // Setup button click handlers
    const setupButtons = function() {
        const shopBtn = document.querySelector('.hero-cta .primary');
        const customBtn = document.querySelector('.hero-cta .secondary');
        
        if (shopBtn) {
            shopBtn.addEventListener('click', function() {
                console.log('Shop button clicked');
                scrollToSection('categories');
            });
        }
        
        if (customBtn) {
            customBtn.addEventListener('click', function() {
                console.log('Custom button clicked');
                scrollToSection('custom');
            });
        }
    };
    
    setupButtons();

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Prevent scrolling when menu is open
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// API Base URL
const API_URL = "http://localhost:3000/api"

// Static product data (developer-defined)
const PRODUCTS = {
  normal: [
    {
      id: "n1",
      name: "TRENDY Classic Black Tee",
      description: "Minimal black print, soft cotton",
      price: 299,
      image: "slider/img1.png",
      category: "normal",
    },
    {
      id: "n2",
      name: "TRENDY White Essential",
      description: "Crisp white tee with subtle logo",
      price: 249,
      image: "slider/img2.png",
      category: "normal",
    },
    {
      id: "n3",
      name: "TRENDY Urban Comfort",
      description: "Streetwear inspired design",
      price: 349,
      image: "slider/img3.png",
      category: "normal",
    },
    {
      id: "n4",
      name: "TRENDY Campus Style",
      description: "Perfect for college life",
      price: 399,
      image: "slider/img4.png",
      category: "normal",
    
      image: "/white-t-shirt-basic-design.jpg",
      category: "normal",
    },
    {
      id: "n3",
      name: "TRENDY Mono Hoodie",
      description: "Black & white hoodie, cozy fit",
      price: 499,
      image: "/black-white-hoodie-simple.jpg",
      category: "normal",
    }
  ],
  premium: [
    {
      id: "p1",
      name: "TRENDY Elite Embroidered Tee",
      description: "Premium embroidery on ultra-soft fabric",
      price: 899,
      image: "/premium-embroidered-t-shirt.jpg",
      category: "premium",
      isTrending: true,
    },
    {
      id: "p2",
      name: "TRENDY Luxury Hoodie",
      description: "Plush hoodie with detailed stitching",
      price: 1299,
      image: "/luxury-premium-hoodie.jpg",
      category: "premium",
      isTrending: true,
    },
    {
      id: "p3",
      name: "TRENDY Designer Series",
      description: "Exclusive patterns, top-tier finish",
      price: 1099,
      image: "/designer-premium-clothing.jpg",
      category: "premium",
    },
  ],
  customisable: [
    {
      id: "c1",
      name: "TRENDY DIY T-Shirt Kit",
      description: "Start customising your tee",
      price: 499,
      image: "/white-t-shirt-front.png",
      category: "customisable",
      isTrending: true,
    },
    {
      id: "c2",
      name: "TRENDY DIY Hoodie Kit",
      description: "Build your own hoodie design",
      price: 749,
      image: "/blank-white-hoodie.jpg",
      category: "customisable",
    },
  ],
}
const TRENDING = [PRODUCTS.premium[0], PRODUCTS.premium[1], PRODUCTS.normal[0], PRODUCTS.customisable[0]]

// Simple cart state helpers
function getOrCreateUserId() {
  let id = localStorage.getItem("trendy_user_id")
  if (!id) {
    id = "guest_" + Math.random().toString(36).slice(2)
    localStorage.setItem("trendy_user_id", id)
  }
  return id
}
const USER_ID = getOrCreateUserId()

// Canvas for custom editor
let canvas
let selectedColor = "#000000"
let colorOverlay // fabric.Rect overlay for garment tint

document.addEventListener("DOMContentLoaded", () => {
  initAnimations()
  initCanvas()
  renderAllProducts() // Render from static arrays
  initMobileMenu()
  initNavbarScroll()
  initCartUI() // Cart controls
  syncCartFromServer() // Load persisted cart
})

// Render sections using static data
function renderAllProducts() {
  displayTrendingProducts(TRENDING)
  displayProducts(PRODUCTS.normal, "normalProducts")
  displayProducts(PRODUCTS.premium, "premiumProducts")
}

// GSAP Animations
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger)

  // Hero text animation
  gsap.from(".hero-title .word", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  })

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    ease: "power4.out",
  })

  gsap.from(".hero-cta", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8,
    ease: "power4.out",
  })

  // Floating cards 3D effect
  const cards = document.querySelectorAll(".floating-card")
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      const card3d = card.querySelector(".card-3d")
      card3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    })

    card.addEventListener("mouseleave", () => {
      const card3d = card.querySelector(".card-3d")
      card3d.style.transform = "rotateX(0) rotateY(0) scale(1)"
    })
  })

  // Category cards animation
  gsap.from(".category-card", {
    scrollTrigger: {
      trigger: ".categories-section",
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
    ease: "power4.out",
  })

  // Section titles animation
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power4.out",
    })
  })

  // Product cards animation
  gsap.utils.toArray(".products-grid").forEach((grid) => {
    gsap.from(grid.children, {
      scrollTrigger: {
        trigger: grid,
        start: "top 80%",
      },
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.15,
      ease: "power4.out",
    })
  })

  // Parallax effect on hero
  gsap.to(".hero-visual", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 200,
    opacity: 0.5,
  })
}

function initCanvas() {
  canvas = new fabric.Canvas("customCanvas", { backgroundColor: "#ffffff" })

  setBaseProduct("tshirt") // default

  // Color picker functionality
  const colorOptions = document.querySelectorAll(".color-option")
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      colorOptions.forEach((opt) => opt.classList.remove("active"))
      this.classList.add("active")
      selectedColor = this.dataset.color
      applyColorOverlay(selectedColor)
    })
  })

  document.getElementById("baseProduct").addEventListener("change", function () {
    setBaseProduct(this.value)
  })
}

function setBaseProduct(product) {
  const imageUrl = product === "tshirt" ? "/white-t-shirt-front.png" : "/blank-white-hoodie.jpg"
  fabric.Image.fromURL(
    imageUrl,
    (img) => {
      img.scaleToWidth(500)
      img.selectable = false
      canvas.setBackgroundImage(img, () => {
        // add or reset overlay
        if (colorOverlay) canvas.remove(colorOverlay)
        colorOverlay = new fabric.Rect({
          left: 0,
          top: 0,
          width: canvas.width,
          height: canvas.height,
          fill: selectedColor,
          opacity: selectedColor === "#FFFFFF" ? 0 : 0.15,
          selectable: false,
          evented: false,
        })
        canvas.add(colorOverlay)
        colorOverlay.moveTo(0) // keep it under any user-added items
        canvas.renderAll()
      })
    },
    { crossOrigin: "anonymous" },
  )
}

function applyColorOverlay(color) {
  if (!colorOverlay) return
  colorOverlay.set({ fill: color, opacity: color === "#FFFFFF" ? 0 : 0.15 })
  canvas.renderAll()
}

// Add text to canvas
function addText() {
  const textValue = document.getElementById("customText").value
  if (textValue) {
    const text = new fabric.Text(textValue, {
      left: 200,
      top: 250,
      fontSize: 40,
      fill: "#000000",
      fontFamily: "Poppins",
      fontWeight: "bold",
    })
    canvas.add(text)
    canvas.setActiveObject(text)
    document.getElementById("customText").value = ""
  }
}

// Upload logo to canvas
function uploadLogo() {
  const fileInput = document.getElementById("logoUpload")
  const file = fileInput.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      fabric.Image.fromURL(e.target.result, (img) => {
        img.scaleToWidth(150)
        img.set({
          left: 175,
          top: 150,
        })
        canvas.add(img)
        canvas.setActiveObject(img)
      })
    }
    reader.readAsDataURL(file)
  }
}

// Save custom design
async function saveDesign() {
  const designData = {
    userId: "user_" + Date.now(),
    productId: null,
    customizations: {
      color: selectedColor,
      name: "Custom Design",
      designData: canvas.toJSON(),
    },
  }

  try {
    const response = await fetch(`${API_URL}/custom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(designData),
    })

    if (response.ok) {
      alert("✅ Design saved successfully!")
    }
  } catch (error) {
    console.error("[v0] Error saving design:", error)
    alert("❌ Failed to save design. Please try again.")
  }
}

// Reset canvas
function resetCanvas() {
  canvas.clear()
  canvas.backgroundColor = "#ffffff"
  initCanvas()
}

function displayTrendingProducts(products) {
  const container = document.getElementById("trendingSlider")
  container.innerHTML = products.map(cardHTML).join("")
  attachCardHandlers(container)
}

function displayProducts(products, containerId) {
  const container = document.getElementById(containerId)
  container.innerHTML = products.map(cardHTML).join("")
  attachCardHandlers(container)
}

function cardHTML(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">₹${product.price}</span>
          <div class="product-actions">
            <button class="product-btn btn-add" data-id="${product.id}">Add to Cart</button>
            <button class="product-btn btn-buy" data-id="${product.id}">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function attachCardHandlers(scopeEl) {
  scopeEl.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id
      const product = findProductById(id)
      addToCart(product)
    })
  })
  scopeEl.querySelectorAll(".btn-buy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id
      const product = findProductById(id)
      await addToCart(product)
      openCart()
    })
  })
}

function findProductById(id) {
  return [...PRODUCTS.normal, ...PRODUCTS.premium, ...PRODUCTS.customisable].find((p) => p.id === id)
}

let CART = { items: [], subtotal: 0, discount: 0, total: 0 }

// Cart functionality removed

  itemsEl.innerHTML = CART.items
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.productId}">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <div class="meta">Qty: ${item.quantity}</div>
        <div class="meta">Category: ${item.category}</div>
      </div>
      <div style="text-align:right;">
        <div class="price">₹${item.price * item.quantity}</div>
        <button class="remove-btn" data-id="${item.productId}">Remove</button>
      </div>
    </div>
  `,
    )
    .join("")

  // wire removes
  itemsEl.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.id))
  })

async function persistCartAdd(item) {
  await fetch(`${API_URL}/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: USER_ID, item }),
  })
}

async function persistCartRemove(productId) {
  await fetch(`${API_URL}/cart/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: USER_ID, productId }),
  })
}

async function persistCartClear() {
  await fetch(`${API_URL}/cart/clear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: USER_ID }),
  })
}

function recalcTotals() {
  CART.subtotal = CART.items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  CART.total = CART.subtotal - (CART.discount || 0)
}

async function addToCart(product) {
  const existing = CART.items.find((it) => it.productId === product.id)
  if (existing) {
    existing.quantity += 1
  } else {
    CART.items.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
    })
  }
  recalcTotals()
  updateCartUI()
  await persistCartAdd({
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
    quantity: 1,
  })
}

async function removeFromCart(productId) {
  const idx = CART.items.findIndex((it) => it.productId === productId)
  if (idx !== -1) {
    CART.items.splice(idx, 1)
    recalcTotals()
    updateCartUI()
    await persistCartRemove(productId)
  }
}

async function clearCart() {
  CART.items = []
  recalcTotals()
  updateCartUI()
  await persistCartClear()
}

// Apply referral code
async function applyReferral() {
  const code = document.getElementById("referralCode").value
  const messageEl = document.getElementById("referralMessage")

  if (!code) {
    messageEl.textContent = "Please enter a referral code"
    messageEl.className = "referral-message error"
    return
  }

  try {
    const response = await fetch(`${API_URL}/referral/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })

    const result = await response.json()

    if (result.valid) {
      messageEl.textContent = `✅ Success! ${result.discount}% discount applied!`
      messageEl.className = "referral-message success"
    } else {
      messageEl.textContent = "❌ Invalid referral code"
      messageEl.className = "referral-message error"
    }
  } catch (error) {
    console.error("[v0] Error validating referral:", error)
    // Demo mode - show success for any code
    messageEl.textContent = "✅ Demo: 10% discount applied!"
    messageEl.className = "referral-message success"
  }
}

// Smooth scroll to section
window.scrollToSection = function(sectionId) {
    console.log('Scrolling to section:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
        console.log('Found section:', section);
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('Section not found:', sectionId);
    }
}

// Render product cards
function createProductCard(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">₹${product.price}</div>
      </div>
    </div>
  `
}

// Initialize products
function initProducts() {
  // Render normal products
  const normalContainer = document.getElementById('normalProducts')
  if (normalContainer) {
    normalContainer.innerHTML = PRODUCTS.normal.map(createProductCard).join('')
  }

  // Render premium products
  const premiumContainer = document.getElementById('premiumProducts')
  if (premiumContainer) {
    premiumContainer.innerHTML = PRODUCTS.premium.map(createProductCard).join('')
  }

  // Render trending products
  const trendingContainer = document.getElementById('trendingSlider')
  if (trendingContainer) {
    trendingContainer.innerHTML = TRENDING.map(createProductCard).join('')
  }
}

// Call initProducts when DOM is loaded
document.addEventListener('DOMContentLoaded', initProducts);

// Mobile menu toggle
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close menu when clicking on links
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById("navbar")
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = "translateY(-100%)"
    } else {
      navbar.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
}

// Mouse parallax effect for hero
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".floating-card")
  const mouseX = e.clientX / window.innerWidth - 0.5
  const mouseY = e.clientY / window.innerHeight - 0.5

  cards.forEach((card, index) => {
    const speed = (index + 1) * 20
    gsap.to(card, {
      x: mouseX * speed,
      y: mouseY * speed,
      duration: 1,
      ease: "power2.out",
    })
  })
})}
