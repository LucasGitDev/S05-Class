const eventos = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    description:
      "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 2,
    title: "Workshop de IoT",
    date: "12/01",
    time: "08:00",
    location: "Laboratório CS&I",
    type: "tech",
    description:
      "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 3,
    title: "Festa dos Alunos 2025",
    date: "18/05",
    time: "19:00",
    location: "Área Esportiva do Inatel",
    type: "cultural",
    description:
      "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 4,
    title: "Feira de Oportunidades",
    date: "04/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "academic",
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const SECONDS_TO_NEXT_CAROUSEL = 5;
  let currentIndex = 0;
  let carouselTimerRef;

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
    themeToggle.checked = savedTheme === "dark";
    updateThemeIcon(savedTheme === "dark");
  }

  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    document.body.className = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
  });

  function updateThemeIcon(isDark) {
    themeIcon.textContent = isDark ? "🌙" : "☀️";
  }

  const carouselTrack = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");

  // Criar e adicionar todos os cards de eventos
  function createEventCards() {
    eventos.forEach((evento, index) => {
      const card = document.createElement("div");
      card.className = `noticia-card ${index === 0 ? "active" : ""}`;
      card.style.backgroundImage = `url('${evento.image}')`;

      card.innerHTML = `
        <div class="noticia-content">
          <div class="evento-info">
            <div class="evento-header">
              <span class="evento-tipo">${evento.type.toUpperCase()}</span>
              <h2>${evento.title}</h2>
              <p>${evento.date} às ${evento.time} - ${evento.location}</p>
            </div>
          </div>
        </div>
      `;

      carouselTrack.appendChild(card);
    });
  }

  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza as classes active
    document.querySelectorAll(".noticia-card").forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % eventos.length;
    updateCarousel();
    resetCarouselTimer();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + eventos.length) % eventos.length;
    updateCarousel();
    resetCarouselTimer();
  }

  function startCarouselTimer() {
    carouselTimerRef = setInterval(nextSlide, SECONDS_TO_NEXT_CAROUSEL * 1000);
  }

  function resetCarouselTimer() {
    clearInterval(carouselTimerRef);
    startCarouselTimer();
  }

  // Event Listeners
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevSlide();
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextSlide();
  });

  // Adicionar efeito de hover para pausar o carrossel
  const carouselContainer = document.querySelector(".carousel-container");

  carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(carouselTimerRef);
  });

  carouselContainer.addEventListener("mouseleave", () => {
    startCarouselTimer();
  });

  // Inicialização
  createEventCards();
  updateCarousel();
  startCarouselTimer();
});
