// Language Toggle Functionality
const langToggle = document.getElementById("langToggle");
const headline = document.getElementById("headline");
const subheadline = document.getElementById("subheadline");
const cta = document.getElementById("cta");
const htmlElement = document.documentElement;

// Arabic content
const arabicContent = {
  headline: "تجربة شتوية دافئة في مطعم حلاوة",
  subheadline: "بوفيه غداء و بوفيه عشاء كل خميس و جمعة و سبت",
  cta: "جرب أجواء حلاوة الدافئة",
};

// English content
const englishContent = {
  headline: "Warm Winter Experience at Halaweh Restaurant",
  subheadline: "Lunch Buffet & Dinner Buffet Every Thursday, Friday & Saturday",
  cta: "Experience Halaweh's Warm Atmosphere",
};

let currentLang = "ar";

langToggle.addEventListener("click", () => {
  if (currentLang === "ar") {
    currentLang = "en";
    htmlElement.setAttribute("lang", "en");
    htmlElement.setAttribute("dir", "ltr");
    headline.textContent = englishContent.headline;
    subheadline.textContent = englishContent.subheadline;
    cta.textContent = englishContent.cta;
    langToggle.textContent = "AR";
  } else {
    currentLang = "ar";
    htmlElement.setAttribute("lang", "ar");
    htmlElement.setAttribute("dir", "rtl");
    headline.textContent = arabicContent.headline;
    subheadline.textContent = arabicContent.subheadline;
    cta.textContent = arabicContent.cta;
    langToggle.textContent = "EN";
  }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const themes = ["sun", "moon", "auto"];
const themeIcons = ["☀️", "🌙", "🌓"];
let currentThemeIndex = 0;

themeToggle.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  body.setAttribute("data-theme", newTheme);
  themeIcon.textContent = themeIcons[currentThemeIndex];
});

