(function () {
  window.Components = window.Components || {};

  window.Components.memeStory = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-meme-story";

      const items = section.items || [];
      const stage = document.createElement("div");
      stage.className = "meme-story-stage";

      const progress = document.createElement("div");
      progress.className = "meme-story-progress";
      progress.setAttribute("aria-label", "Tiến trình các lời chúc");

      items.forEach((item, index) => {
        const data = typeof item === "string" ? { text: item } : item;
        const frame = document.createElement("article");
        frame.className = "meme-frame";
        frame.setAttribute("aria-label", `Lời chúc ${index + 1} trên ${items.length}`);

        const photo = document.createElement("div");
        photo.className = "meme-photo";

        const img = document.createElement("img");
        img.className = "meme-story-image";
        img.src = data.src || "";
        img.alt = data.alt || `Ảnh meme tình yêu ${index + 1}`;
        img.loading = index === 0 ? "eager" : "lazy";
        img.decoding = "async";
        photo.appendChild(img);

        const meSticker = document.createElement("span");
        meSticker.className = "meme-sticker meme-sticker-me";
        meSticker.textContent = data.meLabel || "anhiu";
        photo.appendChild(meSticker);

        const youSticker = document.createElement("span");
        youSticker.className = "meme-sticker meme-sticker-you";
        youSticker.textContent = data.youLabel || "emmbe";
        photo.appendChild(youSticker);

        const caption = document.createElement("div");
        caption.className = "meme-caption";

        const copy = document.createElement("p");
        copy.innerHTML = data.text || "";
        caption.appendChild(copy);

        frame.appendChild(photo);
        frame.appendChild(caption);
        stage.appendChild(frame);

        const dot = document.createElement("span");
        dot.className = "meme-progress-dot";
        dot.setAttribute("aria-hidden", "true");
        progress.appendChild(dot);
      });

      div.appendChild(stage);
      div.appendChild(progress);
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const frames = [...el.querySelectorAll(".meme-frame")];
      const dots = [...el.querySelectorAll(".meme-progress-dot")];
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      // The page timeline is faster on phones, so give every sentence enough
      // real time to be read before moving to the next photo.
      const hold = isMobile ? 5.4 : 3.6;

      if (!frames.length) return;

      frames.forEach((frame, index) => {
        const photo = frame.querySelector(".meme-photo");
        const caption = frame.querySelector(".meme-caption");
        const stickers = frame.querySelectorAll(".meme-sticker");
        const dot = dots[index];

        tl.fromTo(
          frame,
          { autoAlpha: 0, y: 22, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "back.out(1.2)",
          }
        );
        tl.fromTo(
          photo,
          { scale: 1.08 },
          { scale: 1, duration: 0.85, ease: "power2.out" },
          "<"
        );
        tl.from(
          [caption, ...stickers],
          {
            duration: 0.35,
            autoAlpha: 0,
            y: 12,
            stagger: 0.04,
          },
          "-=0.2"
        );

        if (dot) {
          tl.to(dot, {
            duration: 0.2,
            scale: 1.3,
            opacity: 1,
            backgroundColor: "var(--primary)",
          }, "<0.1");
        }

        tl.to(frame, { duration: hold });
        tl.to(frame, {
          duration: 0.45,
          autoAlpha: 0,
          y: -18,
          scale: 0.98,
          ease: "power2.in",
        });

        if (dot) {
          tl.to(dot, {
            duration: 0.2,
            scale: 1,
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.32)",
          }, "<0.08");
        }
      });
    },
  };
})();
