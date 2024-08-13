


document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    
    showTestimonial(currentIndex);
});
