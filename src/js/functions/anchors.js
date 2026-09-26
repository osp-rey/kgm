export default function anchors() {
  const containers = document.querySelectorAll(".anchors");
  const items = document.querySelectorAll(".anchor");

  if (containers.length) {
    items.forEach((item) => {
      const block = document.querySelector(
        `${item.getAttribute("href").replace("/", "")}`,
      );

      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (block) {
          block.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    containers.forEach((container) => {
      const blocks = [];
      const items = container.querySelectorAll("a");

      items.forEach((item) => {
        const block = document.querySelector(
          `${item.getAttribute("href").replace("/", "")}`,
        );
        if (block) blocks.push(block);

        item.addEventListener("click", (e) => {
          e.preventDefault();
          if (block) {
            block.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      const options = {
        root: null,
        rootMargin: "0px",
        scrollMargin: "0px",
        threshold: 0.01,
      };
      function callback(entries, observer) {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            const id = target.id;
            const anchorsItems = document.querySelectorAll(`a[href="/#${id}"]`);

            anchorsItems.forEach((item) => {
              const neighborsItems = item
                .closest(".anchors")
                .querySelectorAll("a");

              if (neighborsItems.length)
                neighborsItems.forEach((i) => i?.classList?.remove("_active"));

              item?.classList?.add("_active");
            });
          }
        });
      }
      const observer = new IntersectionObserver(callback, options);

      blocks.forEach((block) => {
        observer.observe(block);
      });
    });
  }
}
