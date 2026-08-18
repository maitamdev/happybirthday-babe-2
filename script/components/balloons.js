(function () {
  window.Components = window.Components || {};

  const SVGS = ["ballon1.svg", "ballon2.svg", "ballon3.svg"];

  window.Components.balloons = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-balloons";

      const count = section.count || 30;
      for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = `img/${SVGS[i % SVGS.length]}`;
        img.alt = "Bóng bay";
        div.appendChild(img);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const imgs = el.querySelectorAll("img");
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      tl.fromTo(
        imgs,
        { opacity: 0.9, y: 1400 },
        {
          opacity: 1,
          y: -1000,
          duration: isMobile ? 1.8 : 2.5,
          stagger: isMobile ? 0.1 : 0.2,
        }
      );
    },
  };
})();
