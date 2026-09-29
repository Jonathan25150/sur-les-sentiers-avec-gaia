// Bonjour + prénom //
//  Page: index.html //
// =========================
// OVERLAY + PRENOM
// =========================

const overlay = document.getElementById("overlay");
const prenomInput = document.getElementById("prenom");
const btnPrenom = document.getElementById("btn-prenom");

// Récupère tous les messages de bienvenue
const welcomeMessages = document.querySelectorAll(".welcome-message");

// Vérifie si un prénom est enregistré
const prenomSauvegarde = localStorage.getItem("prenom");

if (prenomSauvegarde) {
  overlay.style.display = "none";
  welcomeMessages.forEach((message) => {
    message.textContent = `Bonjour ${prenomSauvegarde} 👋`;
  });
} else {
  overlay.style.display = "flex";
}

// Validation du prénom
btnPrenom.addEventListener("click", () => {
  const prenom = prenomInput.value.trim();

  // Empêche un prénom vide
  if (prenom === "") {
    alert("Veuillez saisir votre prénom.");
    return;
  }

  // Sauvegarde
  localStorage.setItem("prenom", prenom);

  // Affichage sur tous les écrans
  welcomeMessages.forEach((message) => {
    message.textContent = `Bonjour ${prenom} 👋`;
  });

  // Masque l'overlay
  overlay.style.display = "none";
});

// Afficher / Masquer un article //
// Page: crete-des-roches.html//

const toggleArticle = document.getElementById("toggle-article");
const article = document.querySelector(".text-article");

if (toggleArticle && article) {
  toggleArticle.addEventListener("click", () => {
    if (article.style.display === "none") {
      article.style.display = "block";

      toggleArticle.innerHTML =
        '<span class="icon-eye">👀</span> Masquer l\'article';
    } else {
      article.style.display = "none";

      toggleArticle.innerHTML =
        '<span class="icon-eye">👀</span> Afficher l\'article';
    }
  });
}

// Filtre par catégories //
//  Page: page-articles.html //
const btnTous = document.querySelector(".active");
const btnEasy = document.querySelector(".btn-difficulty-easy");
const btnMedium = document.querySelector(".btn-difficulty-medium");
const btnHard = document.querySelector(".btn-difficulty-hard");

const cards = document.querySelectorAll(".card");
console.log(btnTous);
console.log(btnEasy);
console.log(btnMedium);
console.log(btnHard);
console.log(cards);

// TOUS

btnTous.addEventListener("click", () => {
  cards.forEach((card) => {
    card.style.display = "block";
  });
});

// FACILE

btnEasy.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.querySelector(".difficulty-easy")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// MOYEN

btnMedium.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.querySelector(".difficulty-medium")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// DIFFICILE

btnHard.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.querySelector(".difficulty-hard")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Fin du devoir //

// Back to top test//
(() => {
  if (!CSS.supports || !CSS.supports("container-type", "scroll-state")) {
    const b = () => document.querySelector(".scroll-top");
    const u = () =>
      (b().style.transform = scrollY > 10 ? "" : "translateY(150%)");
    addEventListener("scroll", u, { passive: 1 });
    addEventListener("DOMContentLoaded", u);
    u();
  }
})();
// dark mode //
const checkbox = document.getElementById("checkbox");

// Chargement du thème enregistré
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");

  // Sur ce switch :
  // false = lune
  // true = soleil
  checkbox.checked = false;
} else {
  document.body.classList.remove("dark");

  checkbox.checked = true;
}

// Changement de thème
checkbox.addEventListener("change", () => {
  if (!checkbox.checked) {
    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");

    localStorage.setItem("theme", "light");
  }
});
