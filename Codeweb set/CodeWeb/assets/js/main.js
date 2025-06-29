(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){

const dropdownIcon = document.querySelectorAll(".dropdown__container")
const dropdownMenu = document.querySelectorAll(".dropdown__container_menu")
dropdownIcon.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        console.log("click")
        dropdownMenu.forEach((ele, id) => {
            if (index === id) {
                ele.classList.toggle("dropdown__container_menu-active")
            }
        })
    })
})

const menuIcon = document.querySelector(".menu__icon");
const bottomNavbar = document.querySelector(".header__bottom_navbar")
menuIcon.addEventListener("click", () => {
    bottomNavbar.classList.toggle("header__bottom_navbar-active")
})


function toggleOptions() {
    var options = document.getElementById('customSelect').getElementsByClassName('select-options')[0];
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function selectOption(option) {
    var selectedValue = option.innerText;
    var selectStyled = document.getElementById('customSelect').getElementsByClassName('select-styled')[0];
    selectStyled.innerText = selectedValue;
    toggleOptions();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.select-styled')) {
        var options = document.getElementById('customSelect').getElementsByClassName('select-options')[0];
        if (options.style.display === 'block') {
            options.style.display = 'none';
        }
    }
}

$('.testimonial__slides').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        }
    ],
    prevArrow: '<i class="fa-solid fa-arrow-right slide__nav prev-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-left slide__nav next-arrow"></i>',
    customPaging: function (slider, i) {
        return `<div class="slide__dots" id=${i}> 0${i + 1} </div>`;
    },
});

$('.testimonial__slides_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        }
    ],
    prevArrow: '<i class="fa-solid fa-arrow-right slide__nav prev-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-left slide__nav next-arrow"></i>',
    customPaging: function (slider, i) {
        return `<div class="slide__dots" id=${i}> 0${i + 1} </div>`;
    },
});


AOS.init();


/*START VIDEO JS*/
$('.video-play').magnificPopup({
    type: 'iframe'
});

// Video functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.querySelector('.video__element');
    const videoWrapper = document.querySelector('.video__wrapper');
    const videoOverlay = document.querySelector('.video__overlay');
    const videoLoading = document.querySelector('.video__loading');
    
    if (videoElement && videoWrapper && videoOverlay && videoLoading) {
        // Ensure video plays on mobile devices
        videoElement.setAttribute('playsinline', '');
        videoElement.setAttribute('webkit-playsinline', '');
        
        // Add click to play/pause functionality
        videoWrapper.addEventListener('click', function() {
            if (videoElement.paused) {
                videoElement.play();
                videoOverlay.style.opacity = '0';
            } else {
                videoElement.pause();
                videoOverlay.style.opacity = '1';
            }
        });
        
        // Show overlay when video is paused
        videoElement.addEventListener('pause', function() {
            videoOverlay.style.opacity = '1';
        });
        
        // Hide overlay when video is playing
        videoElement.addEventListener('play', function() {
            videoOverlay.style.opacity = '0';
        });
        
        // Handle video loading
        videoElement.addEventListener('loadstart', function() {
            videoLoading.style.display = 'block';
            videoWrapper.style.opacity = '0.7';
        });
        
        videoElement.addEventListener('canplay', function() {
            videoLoading.style.display = 'none';
            videoWrapper.style.opacity = '1';
        });
        
        // Handle video errors
        videoElement.addEventListener('error', function() {
            console.log('Video failed to load');
            videoLoading.style.display = 'none';
            videoWrapper.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
        });
        
        // Optimize for mobile performance
        if (window.innerWidth <= 768) {
            videoElement.setAttribute('preload', 'metadata');
        }
        
        // Hide loading initially if video is already loaded
        if (videoElement.readyState >= 2) {
            videoLoading.style.display = 'none';
        }
    }
});
/*END VIDEO JS*/

}); 

})(jQuery);