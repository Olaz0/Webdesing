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

// Kalkulator 
$(document).ready(function() {
  // Utwórz obiekt z danymi stawek godzinowych dla usług
  var stawki = {
    html: 50,
    python: 80,
    c_cplusplus: 70,
    c_sharp: 90,
    web: 60
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
