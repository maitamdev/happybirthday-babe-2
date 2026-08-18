(function () {
  window.Components = window.Components || {};

  window.Components.chatbox = {
    render(container, section, config = {}) {
      const div = document.createElement("div");
      div.className = "section section-chatbox";
      const avatarSrc = config.photo || "";
      const recipient = (config.name || "Emmbe").toLowerCase();
      div.innerHTML = `
        <div class="text-box">
          <div class="chatbox-header">
            <div class="chatbox-avatar">
              ${avatarSrc ? `<img src="${avatarSrc}" alt="Ảnh của ${recipient}" />` : "<span aria-hidden=\"true\">♡</span>"}
            </div>
            <div class="chatbox-meta">
              <strong>anhiu</strong>
              <span>gửi ${recipient} iu</span>
            </div>
            <span class="chatbox-heart" aria-hidden="true">♡</span>
          </div>
          <div class="chatbox-divider" aria-hidden="true"></div>
          <p class="hbd-chatbox"></p>
          <p class="chatbox-signature">- anhiu <span aria-hidden="true">♥</span></p>
          <button type="button" class="fake-btn">${section.buttonText || "Gửi em ❤️"}</button>
        </div>
      `;
      // Split message into individual character spans for typing animation
      const chatbox = div.querySelector(".hbd-chatbox");
      const msg = section.message || "Chúc mừng sinh nhật em!";
      chatbox.innerHTML = msg
        .split("")
        .map((ch) => `<span>${ch}</span>`)
        .join("");

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const spans = el.querySelectorAll(".hbd-chatbox span");
      const textBox = el.querySelector(".text-box");
      const header = el.querySelector(".chatbox-header");
      const button = el.querySelector(".fake-btn");
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      const typingStagger = isMobile ? 0.025 : 0.05;
      const sentPause = isMobile ? 2.5 : 4;
      const exitPause = isMobile ? 0.6 : 1;
      tl.from(textBox, {
        duration: 0.65, y: 18, scale: 0.97, opacity: 0,
        ease: "power2.out",
      })
      .from(header, {
        duration: 0.35, y: -8, opacity: 0,
        ease: "power2.out",
      }, "-=0.2")
      .from(button, {
        duration: 0.3, y: 8, scale: 0.96, opacity: 0,
        ease: "back.out(1.4)",
      })
      .to(spans, {
        duration: 1.5, visibility: "visible", stagger: typingStagger,
      })
      .to(button, {
        duration: 0.1, backgroundColor: "rgb(127, 206, 248)",
      }, `+=${sentPause}`)
      .to(textBox, {
        duration: 0.5, scale: 0.98, opacity: 0, y: -80,
      }, `+=${exitPause}`);
    },
  };
})();
