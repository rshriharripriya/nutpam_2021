$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"block",delay:3});
  gsap.to('#header',0,{display:"block",delay:1});
  gsap.to('#breaker',0,{display:"none",delay:2});
  gsap.to('#breaker-two',0,{display:"none",delay:2});
  gsap.to('#about',0,{display:"block",delay:.7});
  gsap.to('#services',0,{display:"block",delay:.7});
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
gsap.to('#services',0,{display:"block",delay:.7});
gsap.to('#sponsors',0,{display:"block",delay:.7});
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
gsap.to('#sponsors',0,{display:"block",delay:.7});
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
gsap.to('#services',0,{display:"block",delay:.7});
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

var countDownDate = new Date("Nov 18, 2021 12:00:00").getTime();
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
  grabCursor: true,
  loop: true,
  // breakpoints: {
  //   345: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   640: {
  //     slidesPerView: 3,
  //     spaceBetween: 60,
  //   }
  // },
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

    	var w = c.width = window.innerWidth,
    	h = c.height = window.innerHeight,
    	ctx = c.getContext( '2d' ),

    	minDist = 63,
    	maxDist = 108,
    	initialWidth = 2,
    	maxLines = 54,
    	initialLines = 3,
    	speed = 3,

    	lines = [],
    	frame = 0,
    	timeSinceLast = 0,

    	dirs = [
   			// straight x, y velocity
      		[ 0, .7 ],
      		[ .7, 0 ],
      		[ 0, -.7 ],
    		[ -.7, 0 ],
   			// diagonals, 0.7 = sin(PI/4) = cos(PI/4)
      		[ .5, .5 ],
      		[ .5, -.5 ],
      		[ -.5, .5 ],
      		[ -.5, -.5]
    	],

    	starter = { // starting parent line, just a pseudo line
      	//x:w/5
      	//y:h/5
     	x: w ,
      	y: h ,
      	vx: 0,
      	vy: 0,
      	width: initialWidth
    	};

		function init() {

		  lines.length = 0;

		  for( var i = 0; i < initialLines; ++i )
		    lines.push( new Line( starter ) );

		  ctx.fillStyle = '#171717';
		  ctx.fillRect( 0, 0, w, h );

		  // if you want a cookie ;)
		   ctx.lineCap = 'round';
		}

		function getColor( x ) {

		  // return 'hsl( hue, 80%, 50% )'.replace(
		  // 	'hue', x / w * 360 + frame
		  return 'white'.replace(
		   	'hue', x / w * 360 + frame);
		}

		function anim() {

		  window.requestAnimationFrame( anim );

		  ++frame;

		  ctx.shadowBlur = 0;
		  ctx.fillStyle = 'rgba(0,0,0,.02)';
		  ctx.fillRect( 0, 0, w, h );
		  ctx.shadowBlur = .5;

		  for( var i = 0; i < lines.length; ++i )

		    if( lines[ i ].step() ) { // if true it's dead

		      lines.splice( i, 1 );
		      --i;

		    }

		  // spawn new

		  ++timeSinceLast

		  if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {

		    timeSinceLast = 0;

		    lines.push( new Line( starter ) );

		    // cover the middle;
		    ctx.fillStyle = ctx.shadowColor = getColor( starter.x );
		    ctx.beginPath();
		    ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
		    ctx.fill();
		  }
		}

		function Line( parent ) {

		  this.x = parent.x | 0;
		  this.y = parent.y | 0;
		  this.width = parent.width / 1.25;

		  do {

		    var dir = dirs[ ( Math.random() * dirs.length ) |0 ];
		    this.vx = dir[ 0 ];
		    this.vy = dir[ 1 ];

		  } while (
		    ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );

		  this.vx *= speed;
		  this.vy *= speed;

		  this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );

		}
		Line.prototype.step = function() {

		  var dead = false;

		  var prevX = this.x,
		      prevY = this.y;

		  this.x += this.vx;
		  this.y += this.vy;

		  --this.dist;

		  // kill if out of screen
		  if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )
		    dead = true;

		  // make children :D
		  if( this.dist <= 0 && this.width > 1 ) {

		    // keep yo self, sometimes
		    this.dist = Math.random() * ( maxDist - minDist ) + minDist;

		    // add 2 children
		    if( lines.length < maxLines ) lines.push( new Line( this ) );
		    if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );

		    // kill the poor thing
		    if( Math.random() < .2 ) dead = true;
		  }

		  ctx.strokeStyle = ctx.shadowColor = getColor( this.x );
		  ctx.beginPath();
		  ctx.lineWidth = this.width;
		  ctx.moveTo( this.x, this.y );
		  ctx.lineTo( prevX, prevY );
		  ctx.stroke();

		  if( dead ) return true
		}

		init();
		anim();

		window.addEventListener( 'resize', function() {

		  w = c.width = window.innerWidth;
		  h = c.height = window.innerHeight;
		  starter.x = w / 2;
		  starter.y = h / 2;

		  init();
		} )

