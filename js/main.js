const openbtn = document.querySelector(".btn-bar")
const closebtn = document.querySelector(".btn-close")
const list = document.querySelector(".header-action-bar-show")



openbtn.addEventListener('click',() => {
    list.classList.add("is-show")
})

closebtn.addEventListener('click',() => {
    list.classList.remove("is-show")
})


const openSearch = document.querySelector(".btn-search-overlay")
const closeSearch = document.querySelector(".btn-close-search")
const showSearch = document.querySelector(".header-action-search-overlay-show")


openSearch.addEventListener('click',() => {
    showSearch.classList.add("is-show-search")
})

closeSearch.addEventListener('click',() => {
    showSearch.classList.remove("is-show-search")
})

const showSearchFlex = document.querySelector(".header-action-search-overlay-show-flex")

showSearchFlex.addEventListener('click' , function(event) {
    event.stopPropagation();
});

showSearch.addEventListener('click' , function() {
    showSearch.classList.remove("is-show-search")
});


// Slick
$('.blog-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay:true,
  dots:true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  $('.review-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
  $('.user-image').slick({
    slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:false,
  loop:true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  // tăng số
var $findme = $('#numbers');
var exec = false;
function Scrolled() {
  $findme.each(function() {
    var $section = $(this),
      findmeOffset = $section.offset(),
      findmeTop = findmeOffset.top,
      findmeBottom = $section.height() + findmeTop,
      scrollTop = $(document).scrollTop(),
      visibleBottom = window.innerHeight,
      prevVisible = $section.prop('_visible');

    if ((findmeTop > scrollTop + visibleBottom) ||
      findmeBottom < scrollTop) {
      visible = false;
    } else visible = true;

    if (!prevVisible && visible) {
    	if(!exec){
              $('.fig-number').each(function() {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 1000,

            step: function(now) {
              $(this).text(Math.ceil(now));
              exec = true;
            }
          });
        });
      }
    }
    $section.prop('_visible', visible);
  });

}

function Setup() {
  var $top = $('#top'),
    $bottom = $('#bottom');

  $top.height(500);
  $bottom.height(500);

  $(window).scroll(function() {
    Scrolled();
  });
}
$(document).ready(function() {
  Setup();
});

// lây class tất cả thẻ input
const nodeList = document.querySelectorAll(".hiddenClick")
// chuyển nodelist thành array
const myArray = Array.from(nodeList)
console.log(myArray);

function abc(value){
  const result = myArray.filter(item => item.matches(value))
  const arr = myArray.filter(e => e !== result[0])
  arr.forEach(arrlist => {
    arrlist.checked = false;
  })
}

const btnmobile = document.querySelector('.btn-mobile-togle');
const headerlink =document.querySelector('.header-link')
btnmobile.addEventListener('click',() =>{
    headerlink.classList.toggle('is-show-mobile');
})

