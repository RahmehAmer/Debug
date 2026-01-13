document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const secondaryCtaButton = document.querySelector('.btn.secondary');
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = '<span class="icon">&#9728;</span>';  
    document.body.appendChild(themeToggle);

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const faqItems = document.querySelectorAll('.faq-item h3');
    const teamGrid = document.querySelector('.team-grid');

    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        // Show sun icon when in dark mode (clicking will make it light)
        // Show moon icon when in light mode (clicking will make it dark)
        themeToggle.innerHTML = document.body.dataset.theme === 'dark' ? '<span class="icon">&#9728;</span>' : '<span class="icon">&#9789;</span>';
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.dataset.theme = 'dark';
        // In dark mode, show sun icon (clicking will make it light)
        themeToggle.innerHTML = '<span class="icon">&#9728;</span>';
    } else {
        document.body.dataset.theme = 'light';
        // In light mode, show moon icon (clicking will make it dark)
        themeToggle.innerHTML = '<span class="icon">&#9789;</span>';
    }

    // Popup functionality
    const enrollPopup = document.getElementById('enroll-popup');
    const getStartedPopup = document.getElementById('get-started-popup');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            enrollPopup.classList.add('active');
        });
    }

    if (secondaryCtaButton) {
        secondaryCtaButton.addEventListener('click', () => {
            getStartedPopup.classList.add('active');
        });
    }

    // Close popup functionality
    document.querySelectorAll('.popup-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            enrollPopup.classList.remove('active');
            getStartedPopup.classList.remove('active');
        });
    });

    // Close popup when clicking outside
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        });
    }

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const answer = item.nextElementSibling;
            const toggleBtn = item.querySelector('.toggle-btn');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                toggleBtn.textContent = '+';
            } else {
                answer.style.display = 'block';
                toggleBtn.textContent = '−';
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');

    if (carouselTrack && carouselContainer) {
        let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.team-member').length;
        let autoSlideInterval;

        // Check if autoplay should run (only if content needs scrolling)
        function shouldAutoPlay() {
            const containerWidth = carouselContainer.offsetWidth;
            const totalItemsWidth = totalSlides * (document.querySelector('.team-member').offsetWidth + 30); // 30px includes margins
            return totalItemsWidth > containerWidth;
        }

        function updateCarousel() {
            const slideWidth = document.querySelector('.team-member').offsetWidth + 30; // 30px margin
            carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateCarousel();
            } else {
                // Stop autoplay when reaching the last item
                stopAutoSlide();
            }
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
                // Restart autoplay if it was stopped
                if (shouldAutoPlay() && !autoSlideInterval) {
                    startAutoSlide();
                }
            }
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            // Restart autoplay if it was stopped and not at the end
            if (shouldAutoPlay() && !autoSlideInterval && currentIndex < totalSlides - 1) {
                startAutoSlide();
            }
        }

        // Event listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        // Auto-slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 2500); // Change slide every 2.5 seconds
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Start auto-sliding only if needed
        if (shouldAutoPlay()) {
            startAutoSlide();
        }

        // Pause auto-sliding on hover (only if autoplay is running)
        if (shouldAutoPlay()) {
            carouselContainer.addEventListener('mouseenter', stopAutoSlide);
            carouselContainer.addEventListener('mouseleave', startAutoSlide);
        }

        // Update carousel on window resize
        window.addEventListener('resize', updateCarousel);

        // Initialize carousel
        updateCarousel();
    }
});