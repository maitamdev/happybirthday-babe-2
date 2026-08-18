(function () {
  window.Components = window.Components || {};

  window.Components.gallery = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-gallery";

      const title = document.createElement("h3");
      title.className = "gallery-title";
      title.textContent = section.title || "Những khoảnh khắc của chúng ta";
      div.appendChild(title);

      if (section.subtitle) {
        const subtitle = document.createElement("p");
        subtitle.className = "gallery-subtitle";
        subtitle.textContent = section.subtitle;
        div.appendChild(subtitle);
      }

      const grid = document.createElement("div");
      grid.className = "memory-grid";

      (section.images || []).forEach((item, index) => {
        const figure = document.createElement("figure");
        figure.className = "memory-card";

        const img = document.createElement("img");
        img.src = typeof item === "string" ? item : item.src;
        img.alt = typeof item === "string"
          ? `Kỷ niệm ${index + 1}`
          : item.alt || `Kỷ niệm ${index + 1}`;
        img.loading = "lazy";
        img.decoding = "async";
        figure.appendChild(img);

        const caption = typeof item === "string" ? "" : item.caption;
        if (caption) {
          const figcaption = document.createElement("figcaption");
          figcaption.textContent = caption;
          figure.appendChild(figcaption);
        }

        grid.appendChild(figure);
      });

      div.appendChild(grid);
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const title = el.querySelector(".gallery-title");
      const subtitle = el.querySelector(".gallery-subtitle");
      const cards = el.querySelectorAll(".memory-card");
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      // The mobile timeline runs faster, so use a longer timeline hold to
      // keep the finished gallery visible for roughly 3 to 4 real seconds.
      const hold = isMobile ? 5 : 3.8;

      tl.from(title, {
        duration: 0.6, opacity: 0, y: 15,
      });

      if (subtitle) {
        tl.from(subtitle, {
          duration: 0.4, opacity: 0, y: 10,
        }, "-=0.25");
      }

      tl.from(cards, {
        duration: 0.7,
        opacity: 0,
        y: 30,
        scale: 0.92,
        stagger: 0.16,
        ease: "back.out(1.2)",
      }, "-=0.15");

      tl.to(el, { duration: hold });
    },

    exit(tl, el) {
      tl.to(el, {
        duration: 0.6, opacity: 0, y: -20,
      });
    },
  };
})();
