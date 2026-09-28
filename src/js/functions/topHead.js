export default function topHead() {
  const items = document.querySelectorAll("._top-head");

  if (items.length) {
    const heightHeader = document.querySelector(".header").clientHeight;

    items.forEach(item => {
      item.style.top = `${heightHeader + 30}px`;
    })
  }
}