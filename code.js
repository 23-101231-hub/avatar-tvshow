const STATIC_TEXT = {
    documentTitle: "Avatar: The Last Airbender - Official Fan Site",
  
    logo: {
      icon: "🌀",
      text: "Avatar TV"
    },
  
    nav: {
      home: "Home",
      characters: "Characters",
      episodes: "Episodes",
      merch: "Merch",
      backToTop: "Back to Top"
    },
  
    hero: {
      title: "Avatar: Fire and Ash",
      meta: {
        genre: "Genre: Fantasy / Adventure",
        release: "Release: 2005",
        seasons: "Seasons: 3"
      },
      description:
        "In a world divided into four nations—Water, Earth, Fire, and Air— a young boy named Aang must master all four elements to bring peace and stop the ruthless Fire Nation from conquering the world.",
      cta: "Meet the Characters"
    },
  
    about: {
      title: "About the Show",
      text:
        "Avatar: The Last Airbender follows Aang, the last surviving Airbender and the Avatar destined to bring balance to the world. Together with his friends Katara, Sokka, and others, he travels across nations, facing powerful enemies, discovering ancient secrets, and learning what it truly means to be the Avatar."
    },
  
    sections: {
      characters: {
        title: "Main Characters",
        subtitle: "Click a character to view their full profile."
      },
      episodes: {
        title: "Episodes",
        subtitle: "Discover key episodes from different books (seasons)."
      },
      merch: {
        title: "Merch & Collectibles",
        subtitle: "Fan-favorite items inspired by the Four Nations."
      }
    },
  
    cart: {
      title: "Shopping Cart",
      closeBtn: "✕",
      totalLabel: "Total:",
      emptyMessage: "Your cart is empty",
      checkoutBtn: "Checkout",
      priceEachSuffix: " each"
    },
  
    randomEpisode: {
      button: "Suggest a Random Episode",
      prefix: 'Random Pick: "',
      focusCharacterLabel: "Focus character"
    },
  
    footer: {
      text: "Fan-made site for educational purposes."
    }
  };
  
  const DATA = {
    characters: [
      {
        id: "aang",
        name: "Neytiri",
        role: "The Last Airbender • Avatar",
        element: "Air (and all four elements)",
        bio: "Aang is the last surviving Airbender and the current incarnation of the Avatar, the spirit of light and peace. Frozen in an iceberg for 100 years, he emerges to find the world at war.",
        image: "imgs/Neytiri.Avatar.webp"
      },
      {
        id: "katara",
        name: "Jake Sully",
        role: "Waterbender • Healer",
        element: "Water",
        bio: "Katara is a powerful Waterbender from the Southern Water Tribe. After discovering Aang in an iceberg, she becomes his Waterbending teacher and moral compass.",
        image: "imgs/ChatGPT Image Dec 9, 2025, 11_03_04 AM.png"
      },
      {
        id: "zuko",
        name: "Na'vi backstory",
        role: "Fire Nation Prince • Firebender",
        element: "Fire",
        bio: "Zuko is the exiled prince of the Fire Nation, obsessed at first with capturing the Avatar to restore his honor. Over time, he undergoes a deep transformation.",
        image: "imgs/Avatar.webp"
      }
    ],
  
    episodes: [
      {
        title: "The Boy in the Iceberg",
        season: 1,
        episodeNumber: 1,
        focusCharacterId: "aang",
        description:
          "Katara and Sokka discover a mysterious boy trapped in an iceberg, awakening the last Airbender—and the Avatar."
      },
      {
        title: "The Warriors of Kyoshi",
        season: 1,
        episodeNumber: 4,
        focusCharacterId: "aang",
        description:
          "Aang enjoys his new fame on Kyoshi Island while Sokka learns humility from the elite Kyoshi Warriors."
      },
      {
        title: "The Waterbending Master",
        season: 1,
        episodeNumber: 18,
        focusCharacterId: "katara",
        description:
          "At the Northern Water Tribe, Katara challenges old traditions to become a true Waterbending master."
      },
      {
        title: "The Storm",
        season: 1,
        episodeNumber: 12,
        focusCharacterId: "zuko",
        description:
          "Parallel flashbacks reveal the painful pasts of both Aang and Zuko, exploring guilt, duty, and destiny."
      },
      {
        title: "The Crossroads of Destiny",
        season: 2,
        episodeNumber: 20,
        focusCharacterId: "zuko",
        description:
          "Allies and enemies collide in Ba Sing Se as Zuko faces a fateful choice between family and his own path."
      }
    ],
  
    merch: [
      {
        id: "aang-figure",
        title: "Aang Action Figure",
        description: "Highly detailed Aang figure with glider accessory.",
        price: "$24.99",
        image: "imgs/ChatGPT Image Dec 9, 2025, 11_43_38 AM.png",
        alt: "Aang Action Figure"
      },
      {
        id: "map-poster",
        title: "Four Nations Map Poster",
        description: "High-quality poster of the Avatar world map.",
        price: "$14.99",
        image: "imgs/427252933069.avif",
        alt: "Four Nations Map Poster"
      },
      {
        id: "team-shirt",
        title: "Team Avatar T-Shirt",
        description:
          "Comfortable cotton tee featuring Aang, Katara, Sokka, and Toph.",
        price: "$19.99",
        image: "imgs/ChatGPT Image Dec 9, 2025, 11_46_53 AM.png",
        alt: "Team Avatar T-Shirt"
      }
    ]
  };
  
  // ===== STATE =====
  let cart = [];
  let merchQuantities = {};
  
  // ===== CART FUNCTIONS =====
  function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cart-badge");
  
    if (total > 0) {
      badge.textContent = total;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }
  
  function calculateTotal() {
    return cart
      .reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price * item.quantity;
      }, 0)
      .toFixed(2);
  }
  
  function addToCart(itemId, quantity) {
    const item = DATA.merch.find((m) => m.id === itemId);
    if (!item) return;
  
    const existingItem = cart.find((c) => c.id === itemId);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: quantity
      });
    }
  
    updateCartBadge();
  }
  
  function renderCart() {
    const container = document.getElementById("cart-items");
  
    if (cart.length === 0) {
      container.innerHTML = `<p class="empty-cart-message">${STATIC_TEXT.cart.emptyMessage}</p>`;
    } else {
      container.innerHTML = cart
        .map(
          (item, idx) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-price">${item.price}${
            STATIC_TEXT.cart.priceEachSuffix
          }</div>
              <div class="cart-item-controls">
                <div class="cart-item-qty">
                  <button class="cart-qty-btn" onclick="updateCartQty(${idx}, -1)">−</button>
                  <span class="cart-qty-display">${item.quantity}</span>
                  <button class="cart-qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${idx})">Remove</button>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    }
  
    document.getElementById("cart-total-price").textContent =
      "$" + calculateTotal();
  }
  
  function updateCartQty(idx, delta) {
    if (cart[idx].quantity + delta > 0 && cart[idx].quantity + delta < 100) {
      cart[idx].quantity += delta;
      renderCart();
      updateCartBadge();
    }
  }
  
  function removeFromCart(idx) {
    cart.splice(idx, 1);
    renderCart();
    updateCartBadge();
  }
  
  function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
  
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  
    if (sidebar.classList.contains("active")) {
      renderCart();
    }
  }
  
  // ===== RENDER FUNCTIONS =====
  function renderCharacters() {
    const html = DATA.characters
      .map(
        (char) => `
        <article class="character-card">
          <img src="${char.image}" alt="${char.name}">
          <div class="character-card-body">
            <h3 class="character-card-name">${char.name}</h3>
            <p class="character-card-role">${char.role}</p>
            <p class="character-card-snippet">${char.bio.slice(0, 110)}...</p>
          </div>
        </article>
      `
      )
      .join("");
  
    document.getElementById("characters-grid").innerHTML = html;
  }
  
  function renderEpisodes() {
    const html = DATA.episodes
      .map(
        (ep) => `
        <article class="episode-card">
          <h3 class="episode-title">${ep.title}</h3>
          <p class="episode-meta">Book ${ep.season} • Episode ${ep.episodeNumber}</p>
          <p class="episode-description">${ep.description}</p>
        </article>
      `
      )
      .join("");
  
    document.getElementById("episodes-list").innerHTML = html;
  }
  
  function renderMerch() {
    const html = DATA.merch
      .map((item) => {
        merchQuantities[item.id] = 1;
        return `
          <article class="merch-card">
            <img src="${item.image}" alt="${item.alt}" />
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="price">${item.price}</span>
            <div class="merch-controls">
              <div class="quantity-controls">
                <button class="qty-btn" onclick="changeMerchQty('${item.id}', -1)">−</button>
                <span class="qty-display" id="qty-${item.id}">1</span>
                <button class="qty-btn" onclick="changeMerchQty('${item.id}', 1)">+</button>
              </div>
              <button class="add-to-cart-btn" onclick="handleAddToCart('${item.id}', this)">Add to Cart</button>
            </div>
          </article>
        `;
      })
      .join("");
  
    document.getElementById("merch-grid").innerHTML = html;
  }
  
  function changeMerchQty(id, delta) {
    const current = merchQuantities[id];
    const newQty = current + delta;
  
    if (newQty >= 1 && newQty <= 99) {
      merchQuantities[id] = newQty;
      document.getElementById(`qty-${id}`).textContent = newQty;
    }
  }
  
  function handleAddToCart(id, btn) {
    addToCart(id, merchQuantities[id]);
  
    btn.textContent = "✓ Added!";
    btn.style.background = "rgba(45, 212, 191, 0.2)";
    btn.style.borderColor = "rgba(45, 212, 191, 0.8)";
  
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.background = "";
      btn.style.borderColor = "";
    }, 2000);
  }
  
  function setupRandomEpisode() {
    document
      .getElementById("random-episode-btn")
      .addEventListener("click", () => {
        const ep =
          DATA.episodes[Math.floor(Math.random() * DATA.episodes.length)];
        const char = DATA.characters.find(
          (c) => c.id === ep.focusCharacterId
        );
  
        let html = `
          <h3>${STATIC_TEXT.randomEpisode.prefix}${ep.title}"</h3>
          <p class="episode-meta">Book ${ep.season} • Episode ${ep.episodeNumber}</p>
          <p>${ep.description}</p>
        `;
  
        if (char) {
          html += `<p>${STATIC_TEXT.randomEpisode.focusCharacterLabel}: ${char.name} (${char.role})</p>`;
        }
  
        const card = document.getElementById("random-episode-card");
        card.innerHTML = html;
        card.classList.remove("hidden");
      });
  }
  
  // ===== STATIC TEXT BINDING =====
  function applyStaticTexts() {
    document.title = STATIC_TEXT.documentTitle;
  
    const $ = (id) => document.getElementById(id);
  
    // Logo
    if ($("logo-icon")) $("logo-icon").textContent = STATIC_TEXT.logo.icon;
    if ($("logo-text")) $("logo-text").textContent = STATIC_TEXT.logo.text;
  
    // Nav
    if ($("nav-home")) $("nav-home").textContent = STATIC_TEXT.nav.home;
    if ($("nav-characters"))
      $("nav-characters").textContent = STATIC_TEXT.nav.characters;
    if ($("nav-episodes"))
      $("nav-episodes").textContent = STATIC_TEXT.nav.episodes;
    if ($("nav-merch")) $("nav-merch").textContent = STATIC_TEXT.nav.merch;
    if ($("nav-back-to-top"))
      $("nav-back-to-top").textContent = STATIC_TEXT.nav.backToTop;
  
    // Hero
    if ($("show-title")) $("show-title").textContent = STATIC_TEXT.hero.title;
  
    if ($("show-meta")) {
      $("show-meta").innerHTML = `
        <span>${STATIC_TEXT.hero.meta.genre}</span> •
        <span>${STATIC_TEXT.hero.meta.release}</span> •
        <span>${STATIC_TEXT.hero.meta.seasons}</span>
      `;
    }
  
    if ($("show-description"))
      $("show-description").textContent = STATIC_TEXT.hero.description;
  
    if ($("scroll-to-characters"))
      $("scroll-to-characters").textContent = STATIC_TEXT.hero.cta;
  
    // About
    if ($("about-title")) $("about-title").textContent = STATIC_TEXT.about.title;
    if ($("about-text")) $("about-text").textContent = STATIC_TEXT.about.text;
  
    // Sections
    if ($("characters-title"))
      $("characters-title").textContent = STATIC_TEXT.sections.characters.title;
    if ($("characters-subtitle"))
      $("characters-subtitle").textContent =
        STATIC_TEXT.sections.characters.subtitle;
  
    if ($("episodes-title"))
      $("episodes-title").textContent = STATIC_TEXT.sections.episodes.title;
    if ($("episodes-subtitle"))
      $("episodes-subtitle").textContent =
        STATIC_TEXT.sections.episodes.subtitle;
  
    if ($("merch-title"))
      $("merch-title").textContent = STATIC_TEXT.sections.merch.title;
    if ($("merch-subtitle"))
      $("merch-subtitle").textContent = STATIC_TEXT.sections.merch.subtitle;
  
    // Cart
    if ($("cart-title")) $("cart-title").textContent = STATIC_TEXT.cart.title;
    if ($("close-cart")) $("close-cart").textContent = STATIC_TEXT.cart.closeBtn;
    if ($("cart-total-label"))
      $("cart-total-label").textContent = STATIC_TEXT.cart.totalLabel;
    if ($("cart-total-price")) $("cart-total-price").textContent = "$0.00";
    if ($("checkout-btn"))
      $("checkout-btn").textContent = STATIC_TEXT.cart.checkoutBtn;
  
    // Random episode button
    if ($("random-episode-btn"))
      $("random-episode-btn").textContent = STATIC_TEXT.randomEpisode.button;
  
    // Footer
    if ($("footer-text"))
      $("footer-text").textContent = STATIC_TEXT.footer.text;
  }
  
  // ===== INITIALIZATION =====
  document.addEventListener("DOMContentLoaded", () => {
    // Static UI texts
    applyStaticTexts();
  
    // Render content
    renderCharacters();
    renderEpisodes();
    renderMerch();
    setupRandomEpisode();
  
    // Setup cart
    document.getElementById("cart-toggle").addEventListener("click", toggleCart);
    document.getElementById("close-cart").addEventListener("click", toggleCart);
    document.getElementById("cart-overlay").addEventListener("click", toggleCart);
  
    // Scroll button
    document.getElementById("scroll-to-characters").addEventListener("click", () => {
      document
        .getElementById("characters")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  