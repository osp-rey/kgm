export default function specWrap() {
  const items = document.querySelectorAll(".s-spec__item");

  if (items.length) {
    items.forEach((item, index) => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        if (index % 8 < 4) {
          item.classList.add("_fill");
        }
        if (index % 4 < 3) {
          item.classList.add("_separator");
        }
      } else if (
        window.matchMedia("(max-width: 1199px) and (min-width: 768px)").matches
      ) {
        if (index % 6 < 3) {
          item.classList.add("_fill");
        }
        if (index % 3 < 2) {
          item.classList.add("_separator");
        }
      } else {
        if (index % 4 < 2) {
          item.classList.add("_fill");
        }
      }
    });
  }
}
