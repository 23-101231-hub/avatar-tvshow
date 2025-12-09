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