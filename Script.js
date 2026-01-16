// Language Toggle Functionality
const langToggle = document.getElementById("langToggle");
const headline = document.getElementById("headline");
const subheadline = document.getElementById("subheadline");
const cta = document.getElementById("cta");
const benefitsSubtitle = document.getElementById("benefitsSubtitle");
const benefitsIntro = document.getElementById("benefitsIntro");
const benefit1 = document.getElementById("benefit1");
const benefit2 = document.getElementById("benefit2");
const benefit3 = document.getElementById("benefit3");
const benefit4 = document.getElementById("benefit4");
const benefit5 = document.getElementById("benefit5");
const benefit6 = document.getElementById("benefit6");
const htmlElement = document.documentElement;

// Arabic content
const arabicContent = {
  headline: "تجربة شتوية دافئة في مطعم حلاوة",
  subheadline: "بوفيه غداء و بوفيه عشاء كل خميس و جمعة و سبت",
  cta: "جرب أجواء حلاوة الدافئة",
  benefitsSubtitle: "بتدور على فعالية شتوية تجمع العائلة وتقدّم تجربة طعام متكاملة في أجواء دافئة؟",
  benefitsIntro: "بتجربتنا رح تستمتعوا بـ:",
  benefit1: "مأكولات عربية",
  benefit2: "حلويات عربية",
  benefit3: "حلويات عالمية",
  benefit4: "مشروبات ساخنة",
  benefit5: "مشروبات باردة",
  benefit6: "أجواء شتوية عائلية",
};

// English content
const englishContent = {
  headline: "Warm Winter Experience at Halaweh Restaurant",
  subheadline: "Lunch Buffet & Dinner Buffet Every Thursday, Friday & Saturday",
  cta: "Experience Halaweh's Warm Atmosphere",
  benefitsSubtitle: "Looking for a winter event that brings the family together and offers a complete food experience in a warm atmosphere?",
  benefitsIntro: "With our experience, you'll enjoy:",
  benefit1: "Arabic Cuisine",
  benefit2: "Arabic Desserts",
  benefit3: "International Desserts",
  benefit4: "Hot Drinks",
  benefit5: "Cold Drinks",
  benefit6: "Family Winter Atmosphere",
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
    benefitsSubtitle.textContent = englishContent.benefitsSubtitle;
    benefitsIntro.textContent = englishContent.benefitsIntro;
    benefit1.textContent = englishContent.benefit1;
    benefit2.textContent = englishContent.benefit2;
    benefit3.textContent = englishContent.benefit3;
    benefit4.textContent = englishContent.benefit4;
    benefit5.textContent = englishContent.benefit5;
    benefit6.textContent = englishContent.benefit6;
    langToggle.textContent = "AR";
  } else {
    currentLang = "ar";
    htmlElement.setAttribute("lang", "ar");
    htmlElement.setAttribute("dir", "rtl");
    headline.textContent = arabicContent.headline;
    subheadline.textContent = arabicContent.subheadline;
    cta.textContent = arabicContent.cta;
    benefitsSubtitle.textContent = arabicContent.benefitsSubtitle;
    benefitsIntro.textContent = arabicContent.benefitsIntro;
    benefit1.textContent = arabicContent.benefit1;
    benefit2.textContent = arabicContent.benefit2;
    benefit3.textContent = arabicContent.benefit3;
    benefit4.textContent = arabicContent.benefit4;
    benefit5.textContent = arabicContent.benefit5;
    benefit6.textContent = arabicContent.benefit6;
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

// Reviews Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const reviewToggles = document.querySelectorAll(".review-toggle");

  reviewToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const reviewId = toggle.getAttribute("data-review");
      const answerElement = document.getElementById(`review-${reviewId}`);

      // Toggle active class on button
      toggle.classList.toggle("active");

      // Toggle show class on answer
      answerElement.classList.toggle("show");
    });
  });
});

