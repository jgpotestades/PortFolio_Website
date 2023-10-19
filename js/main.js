$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    //carousel (slideshow) function
    let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

    //accordion function
    const accordion = document.getElementsByClassName('contentBox');

    for(i=0; i<accordion.length; i++){
        accordion[i].addEventListener('click',function(){
            this.classList.toggle('active')
        })
    }
});


/*navbar clicking function
    const navbarLinks = document.querySelectorAll('#navbar li a');

    for (const link of navbarLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
    
        const targetElement = document.querySelector(this.dataset.target);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    }
    
    const titleElement = document.querySelector('#title');

    window.addEventListener('scroll', function() {
      if (titleElement.getBoundingClientRect().top < window.innerHeight) {
        titleElement.classList.add('active');
      } else {
        titleElement.classList.remove('active');
      }
    });
    */

    /*
    const videoThumbnails = document.querySelectorAll(
        ".video-gallery .all-videos .thumbnail"
      );
      const videoPlayer = document.querySelector(
        ".video-gallery .featured-video iframe"
      );
      const videoTitle = document.querySelector(".video-gallery .video-title");
      
      const showVideo = (videoId, title) => {
        let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
        videoPlayer.setAttribute("src", videoUrl);
        videoTitle.innerHTML = title;
      };
      
      videoThumbnails.forEach((v) => {
        v.addEventListener("click", () => {
          showVideo(v.dataset.id, v.dataset.title);
        });
      });
      */