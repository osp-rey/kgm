import anchors from "./functions/anchors.js";
import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import changeModalTitle from "./functions/changeModalTitle.js";
import inputmask from "./functions/inputmask.js";
import map from "./functions/map.js";
import selectHandler from "./functions/select.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spoller.js";
import tab from "./functions/tab.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  sliders();
  buttonsNote();
  changeModalTitle();
  inputmask();
  tab();
  selectHandler();
  map();
  spoller();
  anchors();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
  // Fancybox.show([{ src: "#modal-feedback", type: "inline" }], {
  //   closeButton: false,
  // });
});
