// carousel
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
  setInterval(nextSlide, 3000);
  // sponsor carousel
  const track = document.getElementById("sponsor-track");
  let scrollAmount = 0;
  function autoScroll() {
    scrollAmount += 1;
    track.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
  }
  let interval = setInterval(autoScroll, 60);
  track.addEventListener("mouseenter", () => clearInterval(interval));
  track.addEventListener("mouseleave", () => interval = setInterval(autoScroll, 60));
// donation modal
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
  
  document.querySelectorAll(".faq-btn").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector("i");

      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-45");
    });
  });



// faq
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector(".plus-icon");
  document.querySelectorAll(".accordion-content").forEach(item => {
    if (item !== content) {
      item.style.maxHeight = null;
      const otherIcon = item.previousElementSibling.querySelector(".plus-icon");
      otherIcon.classList.remove("rotate-45");
    }
  });
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.classList.remove("rotate-45");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("rotate-45");
  }
}


  function openJoinForm() {
    document.getElementById("joinModal").classList.remove("hidden");
  }

  function closeJoinForm() {
    document.getElementById("joinModal").classList.add("hidden");
  }

