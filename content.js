/**
 * Watches for the presence of a YouTube ad blocker popup and removes it.
 * Also adds a "Donate" button to the video owner's profile.
 */
function watchForElement() {
  const backdropSelector = "tp-yt-iron-overlay-backdrop.opened";
  const dialogSelector = "tp-yt-paper-dialog";
  const playButtonSelector = ".ytp-play-button.ytp-button";

  const observer = new MutationObserver(function (mutations) {
    const backdrop = document.querySelector(backdropSelector);
    const dialog = document.querySelector(dialogSelector);
    const playButton = document.querySelector(playButtonSelector);
    const p = document.querySelector("div#owner");

    const specialButton = document.createElement("button");
    specialButton.innerHTML = "Yo poto :)"

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
      if (p) {
        p.appendChild(specialButton);
      }
      observer.disconnect();
    }

  });

  observer.observe(document, { childList: true, subtree: true });
}

watchForElement();
