// Slider projektów
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  scrollToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  scrollToSlide(currentIndex);
});

function scrollToSlide(index) {
  const slideWidth = sliderContainer.offsetWidth;
  sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}




// Słuchaj zdarzenia zmiany rozmiaru okna
window.addEventListener('resize', updateSlideWidth);





// Animacje scrollowania
const scrollElements = document.querySelectorAll('.scrollowanie');

scrollElements.forEach((element) => {
    element.addEventListener('animationend', () => {
        element.style.animation = '';
        setTimeout(() => {
            element.style.animation = 'example-animation 2s infinite';
        }, 100);
    });
});

// Przykładowy formularz kontaktowy
const form = document.querySelector('.formularz');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imie = document.querySelector('#imie').value;
    const email = document.querySelector('#email').value;
    const wiadomosc = document.querySelector('#wiadomosc').value;

    // Tutaj dodaj kod do wysłania wiadomości e-mailem

    form.reset();
});



// Inicjalizacja ScrollReveal
ScrollReveal().reveal('.scroll-reveal-section', {
    duration: 1000, // Czas trwania animacji w milisekundach
    distance: '20px', // Odległość przesunięcia elementu
    origin: 'bottom', // Początkowe położenie elementu
    easing: 'ease-in-out', // Funkcja animacji
    reset: true // Resetowanie animacji przy ponownym pojawieniu się elementu na ekranie
  });


  function checkCollision() {
  const element1 = document.getElementById('element1');
  const element2 = document.getElementById('element2');

  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  if (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  ) {
    // Kolizja występuje
    console.log('Kolizja!');
  } else {
    // Brak kolizji
    console.log('Brak kolizji.');
  }
}

// Wywołanie funkcji sprawdzającej kolizję
checkCollision();

$(document).ready(function() {
  var stawki = {
      backend: {
          java: 50,
          python: 45,
          php: 40,
          csharp: 55
      },
      frontend: {
          html: 30,
          css: 25,
          javascript: 35
      },
      inne: {
          windows: 20,
          linux: 18,
          webdesign: 40,
          adobe: 50,
          figma: 35,
          dmax: 60,
          unity: 55
      }
  };

  // Obsługa kliknięcia na opcję usługi
  $('.service-option').click(function() {
      $('.service-option').removeClass('selected');
      $(this).addClass('selected');
  });

  // Obsługa przycisku "Oblicz"
  $('#oblicz-btn').click(function() {
      // Pobranie wartości pól formularza
      var usluga = $('.service-option.selected').data('service');
      var stawka = stawki[usluga];
      var liczbaGodzin = parseFloat($('#liczba-godzin').val());

      // Obliczenia
      var wynik = stawka * liczbaGodzin;

      // Wyświetlenie wyniku
      $('#wynik').val(wynik.toFixed(2));
  });
});
const translations = {
  polski: {
    aboutMe: "O mnie",
    projects: "Projekty",
    contact: "Kontakt",
    calculator: "Kalkulator",
    language: "Język",
    english: "English",
    polish: "Polski",
    welcome: "Witam Cię na mojej stronie portfolio!",
    intro: "Na stronie znajdziesz przegląd moich projektów...",
    contactForm: "Formularz kontaktowy",
    nameLabel: "Imię:",
    emailLabel: "Email:",
    messageLabel: "Wiadomość:",
    sendButton: "Wyślij",
    footerText: "&copy; 2023 Oleksandr Kostariev. Wszelkie prawa zastrzeżone."
  },
  english: {
    aboutMe: "About Me",
    projects: "Projects",
    contact: "Contact",
    calculator: "Calculator",
    language: "Language",
    english: "English",
    polish: "Polski",
    welcome: "Welcome to my portfolio website!",
    intro: "On this website, you will find an overview of my projects...",
    contactForm: "Contact Form",
    nameLabel: "Name:",
    emailLabel: "Email:",
    messageLabel: "Message:",
    sendButton: "Send",
    footerText: "&copy; 2023 Oleksandr Kostariev. All rights reserved."
  }
};

