console.log('👨‍💻 Author: Saurav Hathi \n🌟 GitHub: https://github.com/sauravhathi \n🚀Linkedin: https://www.linkedin.com/in/sauravhathi');

/**
 * Watches for the presence of a YouTube ad blocker popup and removes it.
 * Also adds a "Donate" button to the video owner's profile.
 */
function watchForElement() {
  const backdropSelector = "tp-yt-iron-overlay-backdrop.opened";
  const dialogSelector = "tp-yt-paper-dialog";
  const playButtonSelector = ".ytp-play-button.ytp-button";

  const donateBtn = document.createElement("button");
  donateBtn.innerHTML = "Donate";
  donateBtn.classList.add("donate-btn");
  donateBtn.addEventListener("click", () => {
    window.open("https://github.com/sauravhathi/youtube-ad-blocker-popup-removal#support-the-developer");
  });

  const observer = new MutationObserver(function (mutations) {
    const backdrop = document.querySelector(backdropSelector);
    const dialog = document.querySelector(dialogSelector);
    const playButton = document.querySelector(playButtonSelector);

    // If the backdrop and dialog exist, remove them.
    if (backdrop) {
      backdrop.remove();
    }

    // If the dialog exists, remove it and click the play button.
    if (dialog) {
      dialog.remove();
      if (playButton) {
        playButton.click();
      }

      observer.disconnect();
    }

  });

  observer.observe(document, { childList: true, subtree: true });
}

watchForElement();