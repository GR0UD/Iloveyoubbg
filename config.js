// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  // Your Valentine's name that will appear in the title
  valentineName: "Ebru",

  // The title that appears in the browser tab
  pageTitle: "Will You Be My Valentine? 💝",

  // ✨ NEW: Your photos together (add to 'photos' folder)
  photos: {
    enabled: true,
    folder: "photos/",
    images: [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
    ],
    captions: [
      "Our memories 💕",
      "Together forever ❤️",
      "I treasure every moment with you 🌹",
      "Forever by your side 💕",
      "You complete me ❤️",
    ],
  },

  // Floating emojis that appear in the background
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓", "🎀", "💕", "💞"],
    bears: ["🧸", "🐻"],
    sparkles: ["✨", "⭐", "🌟", "💫"],
    flowers: ["🌹", "🌸", "🌺", "🌷", "💐"],
  },

  // Questions and answers
  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "I don't like you, I love you! ❤️",
    },
    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️",
    },
    third: {
      text: "Will you be my Valentine my askim, my gorgeous beautiful sexy girl 🌹",
      yesBtn: "Yes! 💕",
      noBtn: "No",
    },
  },

  // Love meter messages
  loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰💝",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰",
  },

  // Messages that appear after they say "Yes!"
  celebration: {
    title: "Yay! I'm the luckiest man in the world! ",
    message: "Now come get and give daddy a big kiss😉",
    emojis: "💖💝🎀❤️💕",
    // ✨ NEW: Personal love letter that types out
    loveLetter:
      "Every moment with you is a gift. You make my heart skip a beat, my soul sing, and my world complete. I love you more than words could ever express... 💕",
  },

  // Color scheme
  colors: {
    backgroundStart: "#ff9a9e",
    backgroundEnd: "#fecfef",
    backgroundAccent: "#fdfbfb",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    buttonGlow: "rgba(255, 107, 107, 0.5)",
    textColor: "#ff4757",
    accentColor: "#f093fb",
    sparkleColor: "#ffd700",
  },

  // Animation settings
  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5,
    cursorTrailEnabled: true,
    parallaxEnabled: true,
    typewriterSpeed: 50,
    sparkleIntensity: 30,
    confettiCount: 150,
  },

  // 🎵 Background Music - NOW SUPPORTS LOCAL FILES!
  music: {
    enabled: true,
    autoplay: true,

    // ✨ Use a local file - put your mp3 in the 'music' folder!
    useLocalFile: true,
    localFileName: "song.mp3",

    startText: "🎵 Play Our Song",
    stopText: "🔇 Pause Music",
    volume: 0.5,

    // Music visualizer bars
    visualizerEnabled: true,
    visualizerColor: "#ff6b6b",
  },

  // ✨ Special effects
  effects: {
    cursorTrail: {
      enabled: true,
      emoji: "💕",
      fadeSpeed: 1000,
    },
    sparkles: {
      enabled: true,
      count: 30,
    },
    petals: {
      enabled: true,
      count: 15,
    },
    screenShake: true,
    glowText: true,
  },
};

window.VALENTINE_CONFIG = CONFIG;
