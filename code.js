const siteContent = {
    logo: {
      icon: "🌀",
      text: "Avatar TV"
    },
    nav: {
      links: [
        { text: "Home", href: "#top" },
        { text: "Characters", href: "#characters" },
        { text: "Episodes", href: "#episodes" },
        { text: "Merch", href: "#merch" }
      ],
      cta: "Back to Top"
    },
    hero: {
      title: "Avatar: Fire and Ash",
      meta: '<span>Genre: Fantasy / Adventure</span> • <span>Release: 2005</span> • <span>Seasons: 3</span>',
      description: "In a world divided into four nations—Water, Earth, Fire, and Air—a young boy named Aang must master all four elements to bring peace and stop the ruthless Fire Nation from conquering the world.",
      button: "Meet the Characters",
      aboutTitle: "About the Show",
      aboutText: "<strong>Avatar: The Last Airbender</strong> follows Aang, the last surviving Airbender and the Avatar destined to bring balance to the world. Together with his friends Katara, Sokka, and others, he travels across nations, facing powerful enemies, discovering ancient secrets, and learning what it truly means to be the Avatar."
    },
    sections: {
      characters: {
        title: "Main Characters",
        subtitle: "Click a character to view their full profile."
      },
      episodes: {
        title: "Episodes",
        subtitle: "Discover key episodes from different books (seasons).",
        randomButton: "Suggest a Random Episode"
      },
      merch: {
        title: "Merch & Collectibles",
        subtitle: "Fan-favorite items inspired by the Four Nations."
      }
    },
    footer: {
      copyright: "© 2025 Avatar TV - All Rights Reserved",
      disclaimer: "Fan-made site for educational purposes.",
      social: [
     
      ]
    }
  };

    const characters = [
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
  ];

  const episodes = [
    {
      title: "The Boy in the Iceberg",
      season: 1,
      episodeNumber: 1,
      focusCharacterId: "aang",
      description: "Katara and Sokka discover a mysterious boy trapped in an iceberg, awakening the last Airbender—and the Avatar."
    },
    {
      title: "The Warriors of Kyoshi",
      season: 1,
      episodeNumber: 4,
      focusCharacterId: "aang",
      description: "Aang enjoys his new fame on Kyoshi Island while Sokka learns humility from the elite Kyoshi Warriors."
    },
    {
      title: "The Waterbending Master",
      season: 1,
      episodeNumber: 18,
      focusCharacterId: "katara",
      description: "At the Northern Water Tribe, Katara challenges old traditions to become a true Waterbending master."
    },
    {
      title: "The Storm",
      season: 1,
      episodeNumber: 12,
      focusCharacterId: "zuko",
      description: "Parallel flashbacks reveal the painful pasts of both Aang and Zuko, exploring guilt, duty, and destiny."
    },
    {
      title: "The Crossroads of Destiny",
      season: 2,
      episodeNumber: 20,
      focusCharacterId: "zuko",
      description: "Allies and enemies collide in Ba Sing Se as Zuko faces a fateful choice between family and his own path."
    }
  ];

  const merch = [
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
      description: "Comfortable cotton tee featuring Aang, Katara, Sokka, and Toph.",
      price: "$19.99",
      image: "imgs/ChatGPT Image Dec 9, 2025, 11_46_53 AM.png",
      alt: "Team Avatar T-Shirt"
    }
  ];
  
  function populateStaticContent() {
    document.getElementById("logo-icon").textContent = siteContent.logo.icon;
    document.getElementById("logo-text").textContent = siteContent.logo.text;
    
    let navHTML = "";
    for (let i = 0; i < siteContent.nav.links.length; i++) {
      navHTML += `<a href="${siteContent.nav.links[i].href}">${siteContent.nav.links[i].text}</a>`;
    }
    document.getElementById("nav-links").innerHTML = navHTML;
    document.getElementById("nav-cta").textContent = siteContent.nav.cta;
    
    document.getElementById("show-title").textContent = siteContent.hero.title;
    document.getElementById("show-meta").innerHTML = siteContent.hero.meta;
    document.getElementById("show-description").textContent = siteContent.hero.description;
    document.getElementById("scroll-to-characters").textContent = siteContent.hero.button;
    document.getElementById("about-title").textContent = siteContent.hero.aboutTitle;
    document.getElementById("about-text").innerHTML = siteContent.hero.aboutText;
    
    document.getElementById("characters-title").textContent = siteContent.sections.characters.title;
    document.getElementById("characters-subtitle").textContent = siteContent.sections.characters.subtitle;
    document.getElementById("episodes-title").textContent = siteContent.sections.episodes.title;
    document.getElementById("episodes-subtitle").textContent = siteContent.sections.episodes.subtitle;
    document.getElementById("random-episode-btn").textContent = siteContent.sections.episodes.randomButton;
    document.getElementById("merch-title").textContent = siteContent.sections.merch.title;
    document.getElementById("merch-subtitle").textContent = siteContent.sections.merch.subtitle;
    
    renderFooter();
  }
  
  function renderFooter() {
    let socialHTML = "";
    for (let i = 0; i < siteContent.footer.social.length; i++) {
      socialHTML += `
        <a href="${siteContent.footer.social[i].href}" class="footer-social-link" title="${siteContent.footer.social[i].name}">
          <span>${siteContent.footer.social[i].icon}</span>
        </a>
      `;
    }
    
    const footerHTML = `
      <div class="footer-content">
        <div class="footer-links">
          ${socialHTML}
        </div>
        <p class="footer-copyright">${siteContent.footer.copyright}</p>
        <p class="footer-disclaimer">${siteContent.footer.disclaimer}</p>
      </div>
    `;
    
    document.getElementById("footer-content").innerHTML = footerHTML;
  }
  
  function renderCharacters() {
    let output = "";
    
    for (let i = 0; i < characters.length; i++) {
      output += `
        <article class="character-card">
          <img src="${characters[i].image}" alt="${characters[i].name}">
          <div class="character-card-body">
            <h3 class="character-card-name">${characters[i].name}</h3>
            <p class="character-card-role">${characters[i].role}</p>
            <p class="character-card-snippet">${characters[i].bio.slice(0, 110)}...</p>
          </div>
        </article>
      `;
    }
    
    document.getElementById("characters-grid").innerHTML = output;
  }
  
  function renderEpisodes() {
    let output = "";
  
    for (let i = 0; i < episodes.length; i++) {
      output += `
        <article class="episode-card">
          <h3 class="episode-title">${episodes[i].title}</h3>
          <p class="episode-meta">Book ${episodes[i].season} • Episode ${episodes[i].episodeNumber}</p>
          <p class="episode-description">${episodes[i].description}</p>
        </article>
      `;
    }
  
    document.getElementById("episodes-list").innerHTML = output;
  }
  
  function renderMerch() {
    let output = "";
    
    for (let i = 0; i < merch.length; i++) {
      output += `
        <article class="merch-card">
          <img src="${merch[i].image}" alt="${merch[i].alt}" />
          <h3>${merch[i].title}</h3>
          <p>${merch[i].description}</p>
          <span class="price">${merch[i].price}</span>
          <div class="merch-controls">
            <div class="quantity-controls">
              <button class="qty-btn minus-btn" data-id="${merch[i].id}">−</button>
              <span class="qty-display" id="qty-${merch[i].id}">1</span>
              <button class="qty-btn plus-btn" data-id="${merch[i].id}">+</button>
            </div>
            <button class="add-to-cart-btn" data-id="${merch[i].id}">Add to Cart</button>
          </div>
        </article>
      `;
    }
    
    document.getElementById("merch-grid").innerHTML = output;
    setupMerchControls();
  }
  
  function setupMerchControls() {
    const quantities = {};
    
    for (let i = 0; i < merch.length; i++) {
      quantities[merch[i].id] = 1;
    }
    
    const plusBtns = document.querySelectorAll(".plus-btn");
    for (let i = 0; i < plusBtns.length; i++) {
      plusBtns[i].addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        if (quantities[id] < 99) {
          quantities[id]++;
          document.getElementById("qty-" + id).textContent = quantities[id];
        }
      });
    }
    
    const minusBtns = document.querySelectorAll(".minus-btn");
    for (let i = 0; i < minusBtns.length; i++) {
      minusBtns[i].addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        if (quantities[id] > 1) {
          quantities[id]--;
          document.getElementById("qty-" + id).textContent = quantities[id];
        }
      });
    }
    
    const cartBtns = document.querySelectorAll(".add-to-cart-btn");
    for (let i = 0; i < cartBtns.length; i++) {
      cartBtns[i].addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        const qty = quantities[id];
        let itemName = "";
        
        for (let j = 0; j < merch.length; j++) {
          if (merch[j].id === id) {
            itemName = merch[j].title;
            break;
          }
        }
        
        this.textContent = "✓ Added!";
        this.style.background = "rgba(45, 212, 191, 0.2)";
        this.style.borderColor = "rgba(45, 212, 191, 0.8)";
        
        const btn = this;
        setTimeout(function() {
          btn.textContent = "Add to Cart";
          btn.style.background = "";
          btn.style.borderColor = "";
        }, 2000);
      });
    }
  }
  
  function setupRandomEpisode() {
    const btn = document.getElementById("random-episode-btn");
    const card = document.getElementById("random-episode-card");
  
    btn.addEventListener("click", function() {
      const randomIndex = Math.floor(Math.random() * episodes.length);
      const randomEpisode = episodes[randomIndex];
      let focusChar = null;
  
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === randomEpisode.focusCharacterId) {
          focusChar = characters[i];
          break;
        }
      }
  
      let output = `
        <h3>Random Pick: "${randomEpisode.title}"</h3>
        <p class="episode-meta">Book ${randomEpisode.season} • Episode ${randomEpisode.episodeNumber}</p>
        <p>${randomEpisode.description}</p>
      `;
  
      if (focusChar) {
        output += `<p>Focus character: ${focusChar.name} (${focusChar.role})</p>`;
      }
  
      card.innerHTML = output;
      card.classList.remove("hidden");
    });
  }
  
  function setupScrollButton() {
    const scrollBtn = document.getElementById("scroll-to-characters");
    
    scrollBtn.addEventListener("click", function() {
      const section = document.getElementById("characters");
      section.scrollIntoView({ behavior: "smooth" });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    populateStaticContent();
    setupScrollButton();
    renderCharacters();
    renderEpisodes();
    renderMerch();
    setupRandomEpisode();
  });
  