const mediaQuery = window.matchMedia('(max-width: 767px)');

if (mediaQuery.matches) {
    alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    letter_count = 0;
    el = $("#loading");
    word = el.html().trim();
    finished = false;

    el.html("");
    for (var i = 0; i < word.length; i++) {
      el.append("<span>"+word.charAt(i)+"</span>");
    }

    setTimeout(write, 30);
    incrementer = setTimeout(inc, 300);

    function write() {
      for (var i = letter_count; i < word.length; i++) {
        var c = Math.floor(Math.random() * 36);
        $("span")[i].innerHTML = alphabet[c];
      }
      if (!finished) {
        setTimeout(write, 30);
      }
    }

    function inc() {
      $("span")[letter_count].innerHTML = word[letter_count];
      $("span:eq("+letter_count+")").addClass("glow");
      letter_count++;
      if (letter_count >= word.length) {
        finished = true;
        setTimeout(reset, 300);
      } else {
        setTimeout(inc, 300);
      }
    }

    function reset() {
      letter_count = 0;
      finished = false;
      setTimeout(inc, 300);
      setTimeout(write, 30);
      $("span").removeClass("glow");
    }

    $(window).on("load", function(){

      setTimeout(removeLoader, 3500); //wait for page load PLUS 5 seconds.

    });


    function removeLoader(){

      $(".loader-body").fadeOut("slow");
      $("html").css("overflow","visible");
      $("html").css("scroll-behavior","smooth");

    }



}
else{
    alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    letter_count = 0;
    el = $("#loading");
    word = el.html().trim();
    finished = false;

    el.html("");
    for (var i = 0; i < word.length; i++) {
      el.append("<span>"+word.charAt(i)+"</span>");
    }

    setTimeout(write, 55);
    incrementer = setTimeout(inc, 700);

    function write() {
      for (var i = letter_count; i < word.length; i++) {
        var c = Math.floor(Math.random() * 36);
        $("span")[i].innerHTML = alphabet[c];
      }
      if (!finished) {
        setTimeout(write, 55);
      }
    }

    function inc() {
      $("span")[letter_count].innerHTML = word[letter_count];
      $("span:eq("+letter_count+")").addClass("glow");
      letter_count++;
      if (letter_count >= word.length) {
        finished = true;
        setTimeout(reset, 500);
      } else {
        setTimeout(inc, 500);
      }
    }

    function reset() {
      letter_count = 0;
      finished = false;
      setTimeout(inc, 500);
      setTimeout(write, 55);
      $("span").removeClass("glow");
    }

    

    $(window).on("load", function(){

      setTimeout(removeLoader, 5000); //wait for page load PLUS 5 seconds.

    });


    function removeLoader(){

      $(".loader-body").fadeOut("slow");
      $("html").css("overflow","visible");
      $("html").css("scroll-behavior","smooth");

    }

}




// DO NOT REMOVE
// $(window).on("load",function(){
//
//      $(".loader-body").fadeOut("slow");
// });
