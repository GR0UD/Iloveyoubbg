const config = window.VALENTINE_CONFIG;

// ============================================
// INITIALIZATION
// ============================================

document.title = config.pageTitle;

window.addEventListener("DOMContentLoaded", () => {
  validateConfig();
  initializeContent();
  createFloatingElements();
  createSparkles();
  createPetals();
  setupCursorTrail();
  setupMusicPlayer();
  setInitialPosition();
});

// Validate configuration
function validateConfig() {
  if (!config.valentineName) {
    config.valentineName = "My Love";
  }

  // Ensure all color values exist
  const defaultColors = {
    backgroundStart: "#ff9a9e",
    backgroundEnd: "#fecfef",
    backgroundAccent: "#fdfbfb",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    buttonGlow: "rgba(255, 107, 107, 0.5)",
    textColor: "#ff4757",
    accentColor: "#f093fb",
    sparkleColor: "#ffd700",
  };

  config.colors = { ...defaultColors, ...config.colors };
}

// Initialize page content
function initializeContent() {
  // Set main title
  document.getElementById(
    "valentineTitle"
  ).textContent = `${config.valentineName}, my love...`;

  // Set first question
  document.getElementById("question1Text").textContent =
    config.questions.first.text;
  document.getElementById("yesBtn1").textContent =
    config.questions.first.yesBtn;
  document.getElementById("noBtn1").textContent = config.questions.first.noBtn;
  document.getElementById("secretAnswerBtn").textContent =
    config.questions.first.secretAnswer;

  // Set second question
  document.getElementById("question2Text").textContent =
    config.questions.second.text;
  document.getElementById("startText").textContent =
    config.questions.second.startText;
  document.getElementById("nextBtn").textContent =
    config.questions.second.nextBtn;

  // Set third question
  document.getElementById("question3Text").textContent =
    config.questions.third.text;
  document.getElementById("yesBtn3").textContent =
    config.questions.third.yesBtn;
  document.getElementById("noBtn3").textContent = config.questions.third.noBtn;

  // Add heartbeat sound on yes button hover
  const yesBtn3 = document.getElementById("yesBtn3");
  const heartbeatSound = document.getElementById("heartbeatSound");
  yesBtn3.addEventListener("mouseenter", () => {
    heartbeatSound.currentTime = 0;
    heartbeatSound.play().catch(() => {});
  });

  // Hide secret answer button when clicked
  const secretAnswerBtn = document.getElementById("secretAnswerBtn");
  secretAnswerBtn.addEventListener("click", () => {
    const secretAnswerDiv = document.querySelector(".secret-answer");
    secretAnswerDiv.classList.add("hidden");
  });
}

// ============================================
// FLOATING ELEMENTS
// ============================================

function createFloatingElements() {
  const container = document.querySelector(".floating-elements");

  // Create hearts
  config.floatingEmojis.hearts.forEach((heart) => {
    const div = document.createElement("div");
    div.className = "heart";
    div.innerHTML = heart;
    setRandomPosition(div);
    container.appendChild(div);
  });

  // Create bears
  config.floatingEmojis.bears.forEach((bear) => {
    const div = document.createElement("div");
    div.className = "bear";
    div.innerHTML = bear;
    setRandomPosition(div);
    container.appendChild(div);
  });

  // Create sparkles
  if (config.floatingEmojis.sparkles) {
    config.floatingEmojis.sparkles.forEach((sparkle) => {
      const div = document.createElement("div");
      div.className = "sparkle-emoji";
      div.innerHTML = sparkle;
      setRandomPosition(div);
      container.appendChild(div);
    });
  }

  // Create flowers
  if (config.floatingEmojis.flowers) {
    config.floatingEmojis.flowers.forEach((flower) => {
      const div = document.createElement("div");
      div.className = "flower";
      div.innerHTML = flower;
      setRandomPosition(div);
      container.appendChild(div);
    });
  }
}

function setRandomPosition(element) {
  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDelay = Math.random() * 10 + "s";
  element.style.animationDuration = 15 + Math.random() * 20 + "s";
}

// ============================================
// SPARKLE EFFECTS
// ============================================

function createSparkles() {
  if (!config.effects?.sparkles?.enabled) return;

  const container = document.querySelector(".sparkle-container");
  const count = config.animations?.sparkleIntensity || 30;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 3 + "s";
    sparkle.style.width = 5 + Math.random() * 10 + "px";
    sparkle.style.height = sparkle.style.width;
    container.appendChild(sparkle);
  }
}

// ============================================
// PETAL EFFECTS
// ============================================

function createPetals() {
  if (!config.effects?.petals?.enabled) return;

  const container = document.querySelector(".petal-container");
  const count = config.effects.petals.count || 15;
  const petals = ["🌸", "🌺", "🌷", "💮"];

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 10 + "s";
    petal.style.animationDuration = 8 + Math.random() * 7 + "s";
    container.appendChild(petal);
  }
}

// ============================================
// CURSOR TRAIL
// ============================================

function setupCursorTrail() {
  if (!config.effects?.cursorTrail?.enabled) return;

  const emoji = config.effects.cursorTrail.emoji || "💕";
  let lastTime = 0;

  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastTime < 50) return; // Throttle
    lastTime = now;

    const heart = document.createElement("div");
    heart.className = "trail-heart";
    heart.innerHTML = emoji;
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);

    setTimeout(
      () => heart.remove(),
      config.effects.cursorTrail.fadeSpeed || 1000
    );
  });
}

// ============================================
// QUESTION NAVIGATION
// ============================================

function showNextQuestion(questionNumber) {
  document
    .querySelectorAll(".question-section")
    .forEach((q) => q.classList.add("hidden"));
  const nextQuestion = document.getElementById(`question${questionNumber}`);
  nextQuestion.classList.remove("hidden");

  // Add entrance animation
  nextQuestion.style.animation = "fadeInUp 0.5s ease-out";
}

function moveButton(button) {
  // Show try again popup
  const popup = document.getElementById("tryAgainPopup");
  const slapSound = document.getElementById("slapSound");

  // Play slap sound
  slapSound.currentTime = 0;
  slapSound.play();

  // Show popup
  popup.classList.remove("hidden");

  // Hide popup after 1.5 seconds and remove the No button
  setTimeout(() => {
    popup.classList.add("hidden");
    button.remove(); // Remove the No button entirely
  }, 1500);
}

function moveButtonOld(button) {
  // Get safe boundaries
  const padding = 20;
  const maxX = window.innerWidth - button.offsetWidth - padding;
  const maxY = window.innerHeight - button.offsetHeight - padding;

  const x = padding + Math.random() * maxX;
  const y = padding + Math.random() * maxY;

  button.style.position = "fixed";
  button.style.left = x + "px";
  button.style.top = y + "px";
  button.style.zIndex = "1000";
  button.style.transition = "left 0.2s, top 0.2s";

  // Add wiggle effect
  button.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
}

// ============================================
// LOVE METER
// ============================================

const loveMeter = document.getElementById("loveMeter");
const loveValue = document.getElementById("loveValue");
const extraLove = document.getElementById("extraLove");

function setInitialPosition() {
  if (loveMeter) {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = "100%";
  }
}

if (loveMeter) {
  loveMeter.addEventListener("input", () => {
    const value = parseInt(loveMeter.value);

    // Animate the number change
    animateValue(loveValue, parseInt(loveValue.textContent), value, 100);

    if (value > 100) {
      extraLove.classList.remove("hidden");
      const overflowPercentage = (value - 100) / 9900;
      const extraWidth = overflowPercentage * window.innerWidth * 0.8;
      loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
      loveMeter.style.transition = "width 0.3s";

      if (value >= 5000) {
        extraLove.classList.add("super-love");
        extraLove.textContent = config.loveMessages.extreme;
        createHeartBurst(5);
      } else if (value > 1000) {
        extraLove.classList.remove("super-love");
        extraLove.textContent = config.loveMessages.high;
        createHeartBurst(3);
      } else {
        extraLove.classList.remove("super-love");
        extraLove.textContent = config.loveMessages.normal;
      }
    } else {
      extraLove.classList.add("hidden");
      extraLove.classList.remove("super-love");
      loveMeter.style.width = "100%";
    }
  });
}

// Animate number counting
function animateValue(element, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + range * progress);
    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Mini heart burst effect
function createHeartBurst(count) {
  const hearts = config.floatingEmojis.hearts;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "trail-heart";
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left =
        window.innerWidth / 2 + (Math.random() - 0.5) * 200 + "px";
      heart.style.top = window.innerHeight / 2 + "px";
      heart.style.fontSize = "2rem";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    }, i * 100);
  }
}

// ============================================
// CELEBRATION
// ============================================

function celebrate() {
  document
    .querySelectorAll(".question-section")
    .forEach((q) => q.classList.add("hidden"));

  // Play Yay sound
  const yaySound = document.getElementById("yaySound");
  if (yaySound) {
    yaySound.currentTime = 0;
    yaySound.playbackRate = 2;
    yaySound.play().catch(() => {});
  }

  // Hide the main title for cleaner celebration look
  document.getElementById("valentineTitle").style.display = "none";

  const celebration = document.getElementById("celebration");
  celebration.classList.remove("hidden");

  // Set celebration messages
  document.getElementById("celebrationTitle").textContent =
    config.celebration.title;
  document.getElementById("celebrationMessage").textContent =
    config.celebration.message;
  document.getElementById("celebrationEmojis").textContent =
    config.celebration.emojis;

  // Show photo gallery
  setupPhotoGallery();

  // Type out love letter
  if (config.celebration.loveLetter) {
    typeWriter(
      document.getElementById("loveLetter"),
      config.celebration.loveLetter
    );
  }

  // Effects!
  createHeartExplosion();
  createConfetti();

  // Screen shake
  if (config.effects?.screenShake) {
    const container = document.querySelector(".container");
    container.classList.add("shake");
    setTimeout(() => container.classList.remove("shake"), 500);
  }
}

function createHeartExplosion() {
  const container = document.querySelector(".floating-elements");
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      const randomHeart =
        config.floatingEmojis.hearts[
          Math.floor(Math.random() * config.floatingEmojis.hearts.length)
        ];
      heart.innerHTML = randomHeart;
      heart.className = "heart heart-fall";
      heart.style.fontSize = 1.5 + Math.random() * 2 + "rem";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = -10 + "vh";
      heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, i * 30);
  }
}

function createConfetti() {
  const container = document.getElementById("confettiContainer");
  const colors = [
    "#ff6b6b",
    "#f093fb",
    "#a855f7",
    "#ffd700",
    "#ff8787",
    "#ffb8b8",
  ];
  const count = config.animations?.confettiCount || 150;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = -20 + Math.random() * 100 + "vh";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = 5 + Math.random() * 10 + "px";
      confetti.style.height = 5 + Math.random() * 10 + "px";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
      container.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }, i * 20);
  }
}

// Typewriter effect
function typeWriter(element, text) {
  element.textContent = "";
  let i = 0;
  const speed = config.animations?.typewriterSpeed || 50;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000); // Start after 1 second
}

// ============================================
// MUSIC PLAYER - AUTO-PLAY ON INTERACTION
// ============================================

function setupMusicPlayer() {
  const bgMusic = document.getElementById("bgMusic");
  const musicSource = document.getElementById("musicSource");

  const musicToggleBtn = document.getElementById("musicToggleBtn");

  if (!config.music?.enabled) {
    return;
  }

  // Set music source - LOCAL FILE or URL
  if (config.music.useLocalFile && config.music.localFileName) {
    musicSource.src = `music/${config.music.localFileName}`;
  } else {
    musicSource.src = config.music.musicUrl;
  }

  bgMusic.volume = config.music.volume || 0.5;
  bgMusic.load();

  // Update button state
  const updateButtonState = () => {
    if (bgMusic.paused) {
      musicToggleBtn.textContent = "🔇";
    } else {
      musicToggleBtn.textContent = "🔊";
    }
  };

  // Music toggle button click
  musicToggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    } else {
      bgMusic.pause();
    }
    updateButtonState();
  });

  // Try autoplay
  const tryPlay = () => {
    bgMusic
      .play()
      .catch(() => {
        // If autoplay fails, play on first user interaction
        document.addEventListener(
          "click",
          () => {
            bgMusic.play();
            updateButtonState();
          },
          { once: true }
        );
      })
      .then(() => updateButtonState());
  };

  if (config.music.autoplay) {
    tryPlay();
  }

  updateButtonState();
  // Handle music errors
  bgMusic.addEventListener("error", (e) => {
    console.error("Music loading error:", e);
  });
}

// ============================================
// PHOTO GALLERY
// ============================================

let currentPhotoIndex = 0;

function setupPhotoGallery() {
  if (!config.photos?.enabled || !config.photos?.images?.length) {
    return;
  }

  const gallery = document.getElementById("photoGallery");
  const dotsContainer = document.getElementById("galleryDots");

  // Create dots
  config.photos.images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "gallery-dot" + (index === 0 ? " active" : "");
    dot.onclick = () => goToPhoto(index);
    dotsContainer.appendChild(dot);
  });

  // Show first photo
  showPhoto(0);
  gallery.classList.remove("hidden");
}

function showPhoto(index) {
  const image = document.getElementById("galleryImage");
  const caption = document.getElementById("galleryCaption");
  const dots = document.querySelectorAll(".gallery-dot");

  if (config.photos.images[index]) {
    image.src = config.photos.folder + config.photos.images[index];
    caption.textContent = config.photos.captions?.[index] || "";

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentPhotoIndex = index;
  }
}

function nextPhoto() {
  const newIndex = (currentPhotoIndex + 1) % config.photos.images.length;
  showPhoto(newIndex);
}

function prevPhoto() {
  const newIndex =
    (currentPhotoIndex - 1 + config.photos.images.length) %
    config.photos.images.length;
  showPhoto(newIndex);
}

function goToPhoto(index) {
  showPhoto(index);
}

// Make functions globally available
window.showNextQuestion = showNextQuestion;
window.moveButton = moveButton;
window.celebrate = celebrate;
window.nextPhoto = nextPhoto;
window.prevPhoto = prevPhoto;
window.goToPhoto = goToPhoto;
