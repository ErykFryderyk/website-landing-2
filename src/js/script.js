const $dropDown  = document.querySelector('.btn-drop');
const $closeMenuBtn  = document.querySelector('.hamburger-close-menu');
const $dropDownMenu  = document.querySelector('.drop-down-menu');
const $hamburger = document.querySelector('.hamburger');
const $mobileNav = document.querySelector('#mobile-nav');
const $mobileOverlay = document.querySelector('#mobile-body-overly');
const $body = document.querySelector('#body');


//NAVIGATION MOBILE 
const toggleDropDown = () => {
    if ($dropDownMenu.style.display === 'none'){
        $dropDownMenu.style.display = 'block'
        

    }else{
        $dropDownMenu.style.display = 'none';
    }
}

const handleClick = () => {
        $hamburger.style.display = 'none';
        $mobileNav.style.display = 'block';
        $mobileOverlay.style.display = 'block';
        $body.classList.add('mobile-nav-active');

}

const closeMobileMenu = () =>{
    $body.classList.remove('mobile-nav-active');
    $mobileOverlay.style.display = 'none';
    $mobileNav.style.display = 'none';
    $hamburger.style.display = 'block';

}

$hamburger.addEventListener('click', handleClick);
$closeMenuBtn.addEventListener('click', closeMobileMenu);



// SLIDER SLICK
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.responsive1').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});