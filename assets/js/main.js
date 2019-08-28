

$('.owl-carousel').owlCarousel({
dots: false,
  lazyLoad: true,
  lazyLoadEager:true,
  rtl:true,
  nav:true,
  smartSpeed :900,
  navText : ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
  lazyLoad:true,
  autoHeight: true,
    loop:false,
    margin:10,
    autoplay:false,
  autoplayTimeout:6000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


// handle clickable cart


    function cartFunc() {
      var x = document.getElementById("carter");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    // tilt


    const tilt = $('.js-tilt').tilt();
tilt.on('change', callback);  // parameters: event, transforms
tilt.on('tilt.mouseLeave', callback); // parameters: event
tilt.on('tilt.mouseEnter', callback); // parameters: event

// gallery function

function gallery(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
