(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";
      div.innerHTML = `
        <p class="closing-text">${
          section.text || "Cảm ơn em đã xem món quà nhỏ này của anh."
        }</p>
        <button type="button" class="replay-btn" id="replay">${
          section.replayText || "Nhấn vào đây nếu em muốn xem lại."
        }</button>
        <p class="last-smile">❤️</p>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const ideaIn = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
      tl.from(el.querySelectorAll(".closing-text, #replay, .last-smile"), {
        duration: 1, ...ideaIn, stagger: 1.2,
      })
      // Enable replay button only after it becomes visible
      .set(el.querySelector("#replay"), { pointerEvents: "auto" })
      .to(el.querySelector(".last-smile"), {
        duration: 0.5, rotation: 90,
      }, "+=1");
    },
  };
})();
