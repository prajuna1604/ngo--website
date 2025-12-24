
  let index = 0;
  const carousel = document.getElementById("carousel");
  const slides = carousel.children.length;

  function showSlide() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slides;
    showSlide();
  }

  function prevSlide() {
    index = (index - 1 + slides) % slides;
    showSlide();
  }

  // Auto slide
  setInterval(nextSlide, 5000);

  const modal = document.getElementById("donateModal");
  const donateButtons = document.querySelectorAll(".donate-btn");
  const closeModal = document.getElementById("closeModal");
  const form = document.getElementById("donateForm");
  const formWrapper = document.getElementById("donateFormWrapper");
  const successMessage = document.getElementById("successMessage");
  const closeSuccess = document.getElementById("closeSuccess");

  donateButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      formWrapper.classList.remove("hidden");
      successMessage.classList.add("hidden");
      form.reset();
    });
  });

  closeModal.addEventListener("click", closeAll);
  closeSuccess.addEventListener("click", closeAll);

  function closeAll() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // success
    formWrapper.classList.add("hidden");
    successMessage.classList.remove("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeAll();
  });
  
  const menuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      successMsg.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => {
        successMsg.classList.add('hidden');
      }, 3000);
    });
  });

