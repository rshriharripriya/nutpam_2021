$(window).on('load',function(){
  gsap.to('#header',0,{display:"block",delay:1});
  gsap.to('#breaker',0,{display:"none",delay:2});
  gsap.to('#breaker-two',0,{display:"none",delay:2});
  gsap.to('#about',0,{display:"block",delay:.7});
  gsap.to('#services',0,{display:"block",delay:.7});
  gsap.to('#contact',0,{display:"block",delay:.7});
  gsap.to('#blog',0,{display:"block",delay:.7})
})

$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   });

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }

        setTimeout(function() {
          that.tick();
        }, delta);
      };

      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

$('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#services',0,{display:"block",delay:.7});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#team',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
$('#team-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#services',0,{display:"block",delay:.7});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#team',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
$('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#services',0,{display:"block",delay:.7});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#contact',0,{display:"block",delay:.7});
   gsap.to('#team',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#about',0,{display:"block",delay:.7});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#services',0,{display:"block",delay:.7});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#about',0,{display:"block",delay:.7});
gsap.to('#services',0,{display:"block",delay:.7});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
   gsap.to('#about',0,{display:"block",delay:.7});
gsap.to('#services',0,{display:"block",delay:.7});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
//gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
 gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
// $('#sponsors-link').on('click',function(){
//       gsap.to('#navigation-content',0,{display:"none",delay:.7});
//       gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
//   gsap.to('#header',0,{display:"block",delay:.7});
// gsap.to('#blog',0,{display:"block",delay:.7});
// gsap.to('#services',0,{display:"block",delay:.7});
//    gsap.to('#breaker',0,{display:"block"});
//    gsap.to('#breaker-two',0,{display:"block",delay:.1});
// gsap.to('#contact',0,{display:"block",delay:.7});
//    gsap.to('#breaker',0,{display:"none",delay:2});
//    gsap.to('#breaker-two',0,{display:"none",delay:2});
//    gsap.to('#about',0,{display:"block",delay:.7});
//    //gsap.to('#sponsors',0,{display:"block",delay:.7});
//     gsap.to('#team',0,{display:"block",delay:.7});
//    gsap.to('#navigation-content',0,{display:'flex',delay:2});
//  })

})


var countDownDate = new Date("Dec 02, 2021 12:00:00").getTime();
// Demo date in a month
var date = new Date();


var digitSegments = [
	[1, 2, 3, 4, 5, 6],
	[2, 3],
	[1, 2, 7, 5, 4],
	[1, 2, 7, 3, 4],
	[6, 7, 2, 3],
	[1, 6, 7, 3, 4],
	[1, 6, 5, 4, 3, 7],
	[1, 2, 3],
	[1, 2, 3, 4, 5, 6, 7],
	[1, 2, 7, 3, 6]
];

document.addEventListener('DOMContentLoaded', function () {
	var _days = document.querySelectorAll('.days');
	var _hours = document.querySelectorAll('.hours');
	var _minutes = document.querySelectorAll('.minutes');
	var _seconds = document.querySelectorAll('.seconds');

	setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setNumber(_days[0], Math.floor(days / 10), 1);
		setNumber(_days[1], days % 10, 1);

		setNumber(_hours[0], Math.floor(hours / 10), 1);
		setNumber(_hours[1], hours % 10, 1);

		setNumber(_minutes[0], Math.floor(minutes / 10), 1);
		setNumber(_minutes[1], minutes % 10, 1);

		setNumber(_seconds[0], Math.floor(seconds / 10), 1);
		setNumber(_seconds[1], seconds % 10, 1);
	}, 1000);
});

var setNumber = function (digit, number, on) {
	var segments = digit.querySelectorAll('.segment');
	var current = parseInt(digit.getAttribute('data-value'));

	// only switch if number has changed or wasn't set
	if (!isNaN(current) && current != number) {
		// unset previous number
		digitSegments[current].forEach(function (digitSegment, index) {
			setTimeout(function () {
				segments[digitSegment - 1].classList.remove('on');
			}, index * 45)
		});
	}

	if (isNaN(current) || current != number) {
		// set new number after
		setTimeout(function () {
			digitSegments[number].forEach(function (digitSegment, index) {
				setTimeout(function () {
					segments[digitSegment - 1].classList.add('on');
				}, index * 45)
			});
		}, 250);
		digit.setAttribute('data-value', number);
	}
};



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  // initialSlide: 3,
  watchOverflow: true,
  grabCursor: true,
  loop: true,
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  $('body,html').animate({
        scrollTop : 0
    }, 900);
}

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = 'video/HEALTH BASKET PRODUCTS New.mp4';

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#health_basket_Modal").on('hide.bs.modal', function(){
        $(".embed-responsive-item-health").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#health_basket_Modal").on('show.bs.modal', function(){
        $(".embed-responsive-item-health").attr('src', url);
    });
});
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = 'video/nutpam-2k21.mp4';

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#exampleModal").on('hide.bs.modal', function(){
        $(".embed-responsive-item").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#exampleModal").on('show.bs.modal', function(){
        $(".embed-responsive-item").attr('src', url);
    });
});
