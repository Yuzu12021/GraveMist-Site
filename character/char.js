(() => {
  const characterData = {
    char01: {
      label: "Cool & bizz",
      name: "クール & ビズ",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。性格、ゲーム内での立ち位置、モチーフになったボードゲームとの関係などを書くと、初見の人にも魅力が伝わりやすくなります。",
      image: "../img/char01.png",
      iconBefore: "../img/char/before/char01_icon_before.png",
      iconAfter: "../img/char/after/char01_icon_after.png",
      expressions: [
        "../img/char/icon/char01_1.png",
        "../img/char/icon/char01_2.png",
        "../img/char/icon/char01_3.png"
      ],
      voices: [
        "../cv/char01_1.mp3",
        "../cv/char01_2.mp3",
        "../cv/char01_3.mp3"
      ]
    },

    char02: {
      label: "Hollow Clown",
      name: "ホロウクラウン",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char02.png",
      iconBefore: "../img/char/before/char02_icon_before.png",
      iconAfter: "../img/char/after/char02_icon_after.png",
      expressions: [
        "../img/char/icon/char02_1.png",
        "../img/char/icon/char02_2.png",
        "../img/char/icon/char02_3.png"
      ],
      voices: [
        "../cv/char02_1.mp3",
        "../cv/char02_2.mp3",
        "../cv/char02_3.mp3"
      ]
    },

    char03: {
      label: "KenCell",
      name: "ケンセル",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char03.png",
      iconBefore: "../img/char/before/char03_icon_before.png",
      iconAfter: "../img/char/after/char03_icon_after.png",
      expressions: [
        "../img/char/icon/char03_1.png",
        "../img/char/icon/char03_2.png",
        "../img/char/icon/char03_3.png"
      ],
      voices: [
        "../cv/char03_1.mp3",
        "../cv/char03_2.mp3",
        "../cv/char03_3.mp3"
      ]
    },

    char04: {
      label: "Killer Wolf",
      name: "キラーウルフ",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char04.png",
      iconBefore: "../img/char/before/char04_icon_before.png",
      iconAfter: "../img/char/after/char04_icon_after.png",
      expressions: [
        "../img/char/icon/char04_1.png",
        "../img/char/icon/char04_2.png",
        "../img/char/icon/char04_3.png"
      ],
      voices: [
        "../cv/char04_1.mp3",
        "../cv/char04_2.mp3",
        "../cv/char04_3.mp3"
      ]
    },

    char05: {
      label: "MineGirl",
      name: "マインガール",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char05.png",
      iconBefore: "../img/char/before/char05_icon_before.png",
      iconAfter: "../img/char/after/char05_icon_after.png",
      expressions: [
        "../img/char/icon/char05_1.png",
        "../img/char/icon/char05_2.png",
        "../img/char/icon/char05_3.png"
      ],
      voices: [
        "../cv/char05_1.mp3",
        "../cv/char05_2.mp3",
        "../cv/char05_3.mp3"
      ]
    },

    char06: {
      label: "PoppingKitty",
      name: "ポッピンキティ",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char06.png",
      iconBefore: "../img/char/before/char06_icon_before.png",
      iconAfter: "../img/char/after/char06_icon_after.png",
      expressions: [
        "../img/char/icon/char06_1.png",
        "../img/char/icon/char06_2.png",
        "../img/char/icon/char06_3.png"
      ],
      voices: [
        "../cv/char06_1.mp3",
        "../cv/char06_2.mp3",
        "../cv/char06_3.mp3"
      ]
    },

    char07: {
      label: "SailorBoy",
      name: "セーラーボーイ",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char07.png",
      iconBefore: "../img/char/before/char07_icon_before.png",
      iconAfter: "../img/char/after/char07_icon_after.png",
      expressions: [
        "../img/char/icon/char07_1.png",
        "../img/char/icon/char07_2.png",
        "../img/char/icon/char07_3.png"
      ],
      voices: [
        "../cv/char07_1.mp3",
        "../cv/char07_2.mp3",
        "../cv/char07_3.mp3"
      ]
    },

    char08: {
      label: "Yappy",
      name: "ヤッピー",
      subtitle: "ここにキャラクターの一言キャッチコピー",
      cv: "○○",
      text: "ここにキャラクター説明文を入れます。",
      image: "../img/char08.png",
      iconBefore: "../img/char/before/char08_icon_before.png",
      iconAfter: "../img/char/after/char08_icon_after.png",
      expressions: [
        "../img/char/icon/char08_1.png",
        "../img/char/icon/char08_2.png",
        "../img/char/icon/char08_3.png"
      ],
      voices: [
        "../cv/char08_1.mp3",
        "../cv/char08_2.mp3",
        "../cv/char08_3.mp3"
      ]
    }
  };

  const characterImage = document.getElementById("characterImage");
  const characterLabel = document.getElementById("characterLabel");
  const characterName = document.getElementById("characterName");
  const characterSubtitle = document.getElementById("characterSubtitle");
  const characterCv = document.getElementById("characterCv");
  const characterText = document.getElementById("characterText");

  const expression1 = document.getElementById("expression1");
  const expression2 = document.getElementById("expression2");
  const expression3 = document.getElementById("expression3");

  const voiceBtn1 = document.getElementById("voiceBtn1");
  const voiceBtn2 = document.getElementById("voiceBtn2");
  const voiceBtn3 = document.getElementById("voiceBtn3");

  const characterSelector = document.getElementById("characterSelector");
  const characterVisual = document.querySelector(".character-visual");
  const characterProfileContent = document.querySelector(".character-profile-content");

  let selectedCharacterId = "char01";
  let currentCharacterAudio = null;

  function getCharacterIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id && characterData[id]) {
      return id;
    }

    return "char01";
  }

  function setCharacter(id) {
    const character = characterData[id];

    if (!character) return;

    selectedCharacterId = id;

    if (currentCharacterAudio) {
      currentCharacterAudio.pause();
      currentCharacterAudio.currentTime = 0;
    }

    clearPlayingButtons();

    characterVisual.classList.remove("character-change");
    characterProfileContent.classList.remove("character-change");

    void characterVisual.offsetWidth;

    characterVisual.classList.add("character-change");
    characterProfileContent.classList.add("character-change");

    characterImage.src = character.image;
    characterImage.alt = character.name;

    characterLabel.textContent = character.label;
    characterName.textContent = character.name;
    characterSubtitle.textContent = character.subtitle;
    characterCv.textContent = character.cv;
    characterText.textContent = character.text;

    expression1.src = character.expressions[0];
    expression1.alt = `${character.name} 表情1`;

    expression2.src = character.expressions[1];
    expression2.alt = `${character.name} 表情2`;

    expression3.src = character.expressions[2];
    expression3.alt = `${character.name} 表情3`;

    voiceBtn1.onclick = () => playCharacterVoice(character.voices[0], voiceBtn1);
    voiceBtn2.onclick = () => playCharacterVoice(character.voices[1], voiceBtn2);
    voiceBtn3.onclick = () => playCharacterVoice(character.voices[2], voiceBtn3);

    createCharacterSelector();

    history.replaceState(null, "", `char.html?id=${id}`);
  }

  function playCharacterVoice(path, clickedButton) {
    if (currentCharacterAudio) {
      currentCharacterAudio.pause();
      currentCharacterAudio.currentTime = 0;
    }

    clearPlayingButtons();

    currentCharacterAudio = new Audio(path);
    currentCharacterAudio.volume = 0.9;

    clickedButton.classList.add("playing");
    clickedButton.textContent = "PLAYING";

    currentCharacterAudio.play()
      .catch(error => {
        console.error("音声再生エラー:", error);
        clickedButton.classList.remove("playing");
        resetVoiceButtonTexts();
      });

    currentCharacterAudio.addEventListener("ended", () => {
      clickedButton.classList.remove("playing");
      resetVoiceButtonTexts();
    });
  }

  function clearPlayingButtons() {
    document.querySelectorAll(".cv-btn").forEach(button => {
      button.classList.remove("playing");
    });

    resetVoiceButtonTexts();
  }

  function resetVoiceButtonTexts() {
    voiceBtn1.textContent = "Voice 1";
    voiceBtn2.textContent = "Voice 2";
    voiceBtn3.textContent = "Voice 3";
  }

  function getVisibleCharacterIds() {
    const ids = Object.keys(characterData);
    const currentIndex = ids.indexOf(selectedCharacterId);
    const visibleIds = [];

    for (let offset = -2; offset <= 2; offset++) {
      const index = (currentIndex + offset + ids.length) % ids.length;
      visibleIds.push(ids[index]);
    }

    return visibleIds;
  }

  function createCharacterSelector() {
    characterSelector.innerHTML = "";

    const visibleIds = getVisibleCharacterIds();

    visibleIds.forEach(id => {
      const character = characterData[id];

      const button = document.createElement("button");
      button.type = "button";
      button.className = "character-flip-card selector-card";
      button.dataset.characterId = id;

      if (id === selectedCharacterId) {
        button.classList.add("active");
      }

      button.innerHTML = `
        <div class="flip-inner">
          <img
            class="flip-face flip-front"
            src="${character.iconBefore}"
            alt="${character.name}"
          >
          <img
            class="flip-face flip-back"
            src="${character.iconAfter}"
            alt="${character.name} 裏面"
          >
        </div>
      `;

      button.addEventListener("click", () => {
        if (id === selectedCharacterId) return;

        setCharacter(id);

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

      characterSelector.appendChild(button);
    });
  }

  createCharacterSelector();

  const initialId = getCharacterIdFromUrl();
  setCharacter(initialId);
})();