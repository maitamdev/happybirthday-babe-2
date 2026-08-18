/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "memeStory"     → One love/meme photo paired with each sentence
 *   "gallery"       → Memory photo gallery
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Emmbe",
  photo: "./img/emmbe-02.jpg",     // Ảnh chân dung chính của Emmbe
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Gửi",
      subtitle: "Emmmbe iu của anhiu",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎂",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "emmbe của aiuu đã tròn 21 ùi :3",
    },
    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật emmmbe iu! Hôm nay là tròn 21 năm ngày một thiên thần nhỏ ra đời. Cảm ơn trời vì đã mang đến thế gian một cô công chúa bé nhỏ cho anh. Hôm nay là sinh nhật của người anh yêu thương nhất.",
      buttonText: "Gửi em ❤️",
    },
    {
      type: "memeStory",
      items: [
        {
          src: "./img/memes/meme-01-cuddle.jpg",
          alt: "Chú mèo ngậm một bông hoa hồng",
          text: "Anh muốn chúc em luôn xinh đẹp, vui vẻ, hạnh phúc với những điều mình đã chọn.",
        },
        {
          src: "./img/memes/meme-02-surprised.jpg",
          alt: "Chú mèo trắng đang đưa chân lên mặt",
          text: "Luôn nở nụ cười tươi trên môi dù trong bất kì hoàn cảnh khó khăn nào.",
        },
        {
          src: "./img/memes/meme-03-cats-hugging.jpg",
          alt: "Hai chú mèo vàng đang ôm nhau",
          text: "Hãy luôn nhớ rằng anhiu luôn đứng sau bảo vệ, chở che, chăm sóc emmbe 😘",
        },
        {
          src: "./img/memes/meme-04-sleeping-cat.jpg",
          alt: "Hai chú mèo đang ngủ cạnh nhau",
          text: "Chúng ta đã cùng nhau trên hành trình hơn hai năm ở bên nhauu.",
        },
        {
          src: "./img/memes/meme-05-kittens-close.jpg",
          alt: "Chú mèo đang rưng rưng nước mắt",
          text: "Anh biết rằng bản thân anh còn nhiều điều chưa tốt.",
        },
        {
          src: "./img/memes/meme-06-warm-cuddle.jpg",
          alt: "Hai chú mèo mặc đồ cưới đứng cạnh nhau",
          text: "anhiu sẽ cố gắng để cả hai ta cùng tiến xa hơn trên chặng đường sắp tới.",
        },
        {
          src: "./img/memes/meme-07-nuzzle.jpg",
          alt: "Nhân vật màu hồng đi giữa con đường loang màu",
          text: "Cảm ơn emmmbe vì đã bước vào cuộc đời của anh.",
        },
        {
          src: "./img/memes/meme-08-love.gif",
          alt: "Dudu hôn Bubu với những trái tim xung quanh",
          text: "Anhh iu emmmbe nhìu nhắmmmm <span>❤️</span>",
        },
      ],
    },
    {
      type: "gallery",
      title: "Những khoảnh khắc của chúng ta",
      subtitle: "Chúng ta đã cùng nhau trên hành trình hơn hai năm ở bên nhauu.",
      images: [
        {
          src: "./img/emmbe-01.jpg",
          alt: "Emmbe và anhiu bên nhau",
        },
        {
          src: "./img/emmbe-03.jpg",
          alt: "Một khoảnh khắc của Emmbe",
        },
        {
          src: "./img/emmbe-04.jpg",
          alt: "Emmbe và anhiu",
        },
      ],
    },
    {
      type: "quote",
      text: "Nhà của anh không phải là một nơi, mà là nơi có em.",
      author: "Anhiu",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Chúc mừng sinh nhật em yêu ❤️",
      wishText: "Cảm ơn em vì đã khiến những ngày bình thường của anh trở nên đặc biệt hơn.",
    },
  ],
};
