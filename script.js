const cards = document.querySelectorAll(".feature-card, .character-card, .glass-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

cards.forEach(card => {
  card.classList.add("fade-in");
  observer.observe(card);
});

// スクロール演出用CSSをJSから追加
const style = document.createElement("style");
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity .7s ease, transform .7s ease;
  }

  .fade-in.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

let currentAudio = null;

function playCV(path) {

  // 再生中なら停止
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(path);

  currentAudio.volume = 0.9;

  currentAudio.play();
}