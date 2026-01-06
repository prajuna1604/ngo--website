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
  //volunteer modal
  const volunteerButtons = document.querySelectorAll(".volunteer-btn");
  const volunteerModal = document.getElementById("volunteerModal");

  volunteerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      volunteerModal.classList.remove("hidden");
      volunteerModal.classList.add("flex");
    });
  });


  function closeVolunteerForm() {
    volunteerModal.classList.add("hidden");
    volunteerModal.classList.remove("flex");
  }
   //volunteer modal
  const sponsorButtons = document.querySelectorAll(".sponsorBtn");
  const sponsorModal = document.getElementById("sponsorModal");

  sponsorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
     sponsorModal.classList.remove("hidden");
      sponsorModal.classList.add("flex");
    });
  });


  function closeSponsorForm() {
   sponsorModal.classList.add("hidden");
    sponsorModal.classList.remove("flex");
  }
 
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
  // Select all forms that should trigger a success message
  const forms = document.querySelectorAll('form'); // or use a specific class like '.contact-form' / '.donate-form'

  forms.forEach(form => {
    // Find the success message that belongs to this form
    const successMsg = form.parentElement.querySelector('.successMsg');

    // Only attach listener if the success message exists
    if (successMsg) {
      form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent default form submission

        // Show the success message
        successMsg.classList.remove('hidden');

        // Reset the form fields
        form.reset();

        // Hide the success message after 3 seconds
        setTimeout(() => {
          successMsg.classList.add('hidden');
        }, 3000);
      });
    }
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


function startCountdown(timer) {
  const deadline = new Date(timer.dataset.deadline).getTime();

  const daysEl = timer.querySelector('[data-days]');
  const hoursEl = timer.querySelector('[data-hours]');
  const minutesEl = timer.querySelector('[data-minutes]');
  const secondsEl = timer.querySelector('[data-seconds]');

  function updateTimer() {
    const now = new Date().getTime();
    const diff = deadline - now;

    if (diff <= 0) {
      daysEl.textContent = "0";
      hoursEl.textContent = "0";
      minutesEl.textContent = "0";
      secondsEl.textContent = "0";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

document.querySelectorAll('[data-deadline]').forEach(startCountdown);

