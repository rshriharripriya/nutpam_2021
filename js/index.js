$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"block",delay:3});
  gsap.to('#header',0,{display:"block",delay:1});
  gsap.to('#breaker',0,{display:"none",delay:2});
  gsap.to('#breaker-two',0,{display:"none",delay:2});
  gsap.to('#about',0,{display:"block",delay:.7});
  gsap.to('#portfolio',0,{display:"block",delay:.7});
  gsap.to('#contact',0,{display:"block",delay:.7});
  gsap.to('#blog',0,{display:"block",delay:.7})
// gsap.to('#navigation-content',0,{display:"none"});
//   gsap.to('#navigation-content',0,{display:"flex",delay:1});
//     gsap.to('#navigation-content',0,{display:"none",delay:.7});
//   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
// gsap.to('#header',0,{display:"none"});
// gsap.to('#navigation-content',0,{display:'flex',delay:2});
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
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
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
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
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
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
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
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#about',0,{display:"block",delay:.7});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
   gsap.to('#about',0,{display:"block",delay:.7});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
 gsap.to('#team',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

$('#sponsors-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#portfolio',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"block",delay:.7});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#sponsors',0,{display:"block",delay:.7});
    gsap.to('#team',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){

    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })

  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    })
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})

$(function(){
  var clock= document.querySelector('clock');

  // Grab the current date
  var currentDate = new Date();

  // Target future date/24 hour time/Timezone
  var targetDate = moment.tz("2021-19-11 00:00", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  var diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!")

  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!")
        }
      }
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});

var countDownDate = new Date("Nov 17, 2021 12:00:00").getTime();
// Demo date in a month
var date = new Date();
// var countDownDate = new Date(date.setMonth(date.getMonth()+1)).getTime();

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



window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Alice Stone",
            role: "UI Designer",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
        {
            name: "Adam Turner",
            role: "Project Manager",
            photo: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
        {
            name: "Nancy Hughes",
            role: "UX Specialist",
            photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
        {
            name: "Jonathan Campbell",
            role: "Front-End Developer",
            photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
        {
            name: "Jack Keller",
            role: "Back-End Developer",
            photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
        {
            name: "Sara Carroll",
            role: "Head of UI Design",
            photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
         {
            name: "Sara Carroll",
            role: "Head of UI Design",
            photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",

        },
    ];



    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < 6; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo


            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text pt-5">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                          
                        </article>
                      </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 40,
        threshold: 50,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 4,
                spaceBetween: 40,
                centeredSlides: true,
                loop: true,
            },
            799: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: true,
                loop: true,
            },
        }
    });



   function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});
