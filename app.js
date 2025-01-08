document.addEventListener("DOMContentLoaded", function () {
  const exploreButton = document.querySelector(".Explore-Posts");
  const cards = document.querySelectorAll(".post-card");

  exploreButton.addEventListener("click", function (e) {
    e.preventDefault();
    const targetPosition = document.getElementById("Recent-post").offsetTop;
    let currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const step = distance / 30;

    let currentStep = 0;

    function scrollStep() {
      if (Math.abs(currentPosition - targetPosition) > Math.abs(step)) {
        currentPosition += step;
        window.scrollTo(0, currentPosition);
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, targetPosition);
      }
    }

    scrollStep();
  });

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });
  });

  const postCards = document.querySelectorAll(".post-card");

  const revealCards = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    postCards.forEach((card) => {
      observer.observe(card);
    });
  };

  revealCards();

  const taglineElement = document.querySelector(".Tagline");
  const taglineText = taglineElement.innerText;
  taglineElement.innerText = "";

  let i = 0;
  const typingEffect = () => {
    if (i < taglineText.length) {
      taglineElement.innerText += taglineText.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  };

  typingEffect();
});

let Tagline = document.querySelector(".Tagline");
const subtitle =
  "Discover the most amazing places around the world or Embark on your next adventure with our tips.";
let index = 0;

function change_subtitle() {
  if (index < subtitle.length) {
    Tagline.innerHTML += subtitle.charAt(index);
    index++;
    setTimeout(change_subtitle, 50);
  }
}

change_subtitle();

document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribeForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // التحقق من أن البريد الإلكتروني صالح
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name && emailRegex.test(email)) {
      // إخفاء النموذج
      subscribeForm.style.display = "none";

      // إظهار رسالة التأكيد
      confirmationMessage.classList.remove("hidden");
    } else {
      alert("please enter a valid email address.");}
      
  });
});
