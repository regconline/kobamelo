// Mobile menu toggle
$(document).ready(function() {
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu').toggleClass('hidden');
    });
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        if (this.pathname === window.location.pathname) {
            e.preventDefault();
            
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top - 80,
                },
                500,
                'linear'
            );
        }
    });
    
    // FAQ Accordion
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();
        $(this).find('.faq-toggle').text(function(_, text) {
            return text === '+' ? '-' : '+';
        });
    });
    
    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = $('.testimonial-item');
    
    function showTestimonial(index) {
        testimonials.removeClass('active').eq(index).addClass('active');
    }
    
    $('.testimonial-next').click(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    $('.testimonial-prev').click(function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Initialize first testimonial
    showTestimonial(0);
});
