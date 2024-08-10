let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const maxSlides = slides.length;

function showSlides(n) {
    if (n > maxSlides - 1) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = maxSlides - 1;
    }
    let translateValue = -slideIndex * 100 + '%';
    document.getElementById('image-slides').style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  } 


  <script>
    document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
</script>
