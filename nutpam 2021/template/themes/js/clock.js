// <!DOCTYPE html>
// <html>
// <head>
//   <title>Some 7 Segment animations</title>
//
//   <script type="text/javascript" src='./libs/jquery-3.1.0.min.js'></script>
//
//   <link rel="stylesheet" type="text/css" href="./global.css">
//
// <script type="text/javascript">
//
// var clockmode = 1;
//
//
// var colorArray = ["green","red","red","red","red","red","red",
//                   "blue","red","red","red","red","red","red",
//                   "blue","red","red","red","red","red","red",
//                   "blue","red","red","red","red","red","red",
//                   "blue","red","red","red","red","red","red",
//                   "blue","red","red","red","red","red","red"];
// var colorSepArray =["red","blue","yellow","brown"];
// function cycle_modes()
// {
//   if(clockmode == 1) showCountdown() ;else
//     if(clockmode == 2) showStopWatch(); else
//       if(clockmode == 3)showTime();
//     }
//
//
//
// // parses the url for GET Vars
// function getQueryVariable(variable)
// {
//     var query = window.location.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         if (decodeURIComponent(pair[0]) == variable) {
//             return decodeURIComponent(pair[1]);
//         }
//     }
//     // console.log('Query variable %s not found', variable);
// }
//
// /*
// *  Loads a list of countdowns from the server
// */
// function getCountdownList()
// {
//   $.ajax({
//           url: "./ajax/countdowns.php",
//           data:
//           {
//             action : 'getList' ,
//             scope : 2
//           },
//           success: function( result )
//           {
//             //Todo : parse wtf the server returns and display it somewhere on the page
//             result = JSON.parse(result) ;
//             console.log(result);
//             var select = document.getElementById('countdownselect') ;
//             for (var i = 0; i < result.length; i++)
//             {
//               select.innerHTML += "<option value='"+result[i][0]+"'>"+result[i][2]+"</option>";
//               // result[i][0];
//             }
//
//           }
//       });
// }
//
// /*
// * Loads a countdown from the selected countdown menu and starts it
// */
// function loadCountdown()
// {
//
//   $.ajax({
//           url: "./ajax/countdowns.php",
//           data:
//           {
//             action : 'getList' ,
//             scope : 2
//           },
//           success: function( result )
//           {
//             //Todo : parse wtf the server returns and display it somewhere on the page
//             result = JSON.parse(result) ;
//             console.log(result);
//             var select = document.getElementById('countdownselect') ;
//             for (var i = 0; i < result.length; i++)
//             {
//               if(select.value == result[i][0])
//               {
//                 console.log(result[i]);
//                 document.getElementById('seconds').value = Math.trunc(result[i][1]/1000)% (60); //seconds
//                 document.getElementById('minutes').value = Math.trunc(result[i][1] /(1000*60)) %60 ;//get minutes passed this day
//                 document.getElementById('hours')  .value= Math.trunc(result[i][1] /(1000*60*60)) %24 ;//get hours passed this day
//                 // document.getElementById('days')   .value= Math.trunc(result[i][1] /(1000*60*60*24)) %88 ;//get hours passed this day
//                 document.getElementById('r').value = result[i][6];
//                 document.getElementById('g').value = result[i][7];
//                 document.getElementById('b').value = result[i][8];
//
//
//               }
//             }
//             setCountdown();
//
//           }
//       });
// }
// //save the countdown in the checkbox to our server
// function saveCountdown()
// {
//       $.ajax({
//           url: "./ajax/save.php",
//           data:
//           {
//             action : 'countdown' ,
//             time :  document.getElementById('seconds').value * 1000  +
//                        document.getElementById('minutes').value * 60*1000 +
//                        document.getElementById('hours')  .value * 60*60*1000 +
//                        document.getElementById('days')   .value * 24*60*60*1000 ,
//             name : document.getElementById('countdName').value,
//             description : document.getElementById('countdDesc').value ,
//             scope : 'public',
//             r : document.getElementById('r').value ,
//             g : document.getElementById('g').value ,
//             b : document.getElementById('b').value
//           },
//           success: function( result )
//           {
//             //Todo : parse wtf the server returns and display it somewhere on the page
//             console.log(result);
//             getCountdownList()
//
//           }
//       });
// }
//
//
// //Logs us out
// function logout()
// {
//       $.ajax({
//           url: "./ajax/pre_login.php",
//           data:
//           {
//             action : 'logout'
//           },
//           success: function( result )
//           {
//             //Todo : parse wtf the server returns and display it somewhere on the page (not that log out should fail)
//             //console.log('result' + result);
//
//             //checks that we logged out and update link as needed
//             checklogin();
//
//
//           }
//       });
//
// }
// //checks if we are loggedin
// function checklogin()
// {
//       $.ajax({
//           url: "./ajax/pre_login.php",
//           data:
//           {
//             action : 'checksession'
//           },
//           success: function( result )
//           {
//             if(result == 'true') // we are logged in
//               displayLogout();
//             else
//               displayLogin();
//
//
//           }
//       });
//
// }
// function displayLogin()
// {
//   document.getElementById('logindiv').innerHTML ="<a href='/clk/login.html' '>Login</a>";
// }
//
// function displayLogout()
// {
//   document.getElementById('logindiv').innerHTML ="<a href='#' onclick='logout();checklogin();'>Logout</a>";
// }
// function setstart()
// {
//   localStorage.setItem("start", Date.now() );
//   showStopWatch();
// }
// function setCountdown()
// {
//   //start = Date.now() ;//- (23*60*60*1000 + 59*60*1000 + 55*1000);
//   localStorage.setItem("startCountdown", Date.now() ); //sets time countdown starts at
//   var time = document.getElementById('seconds').value * 1000  +
//              document.getElementById('minutes').value * 60*1000 +
//              document.getElementById('hours')  .value * 60*60*1000 +
//              document.getElementById('days')   .value * 24*60*60*1000 ;
//
//   console.log(time);
//   localStorage.setItem("Countdown", time); //sets time countdown runs for
//   showCountdown();
// }
//
// function showTime()
// {
//   clockmode=1;
//   saveData();
//   document.getElementById("mode_label").innerHTML = 'Time';
// }
// function showCountdown()
// {
//   clockmode = 2 ;
//   saveData();
//   document.getElementById("mode_label").innerHTML = 'Countdown';
// }
// function showStopWatch()
// {
//   clockmode = 3 ;
//   saveData();
//   document.getElementById("mode_label").innerHTML = 'StopWatch';
// }
// function displayTime(colour)
// {
//   var timezone = document.getElementById('zone').value ;
//   timezone = parseInt(timezone);
//
//   clear_digit(0) ;
//   clear_digit(1) ;
//   clear_digit(2) ;
//   clear_digit(3) ;
//   clear_digit(4) ;
//   clear_digit(5) ;
//
//
//     var digits = timeToDigits(Date.now()%(1000*60*60*24)+timezone*1000*60*60);
//     do_stuff( 0 , digits[0] , colour ) ;
//     do_stuff( 1 , digits[1] , colour ) ;
//     do_stuff( 2 , digits[2] , colour ) ;
//     do_stuff( 3 , digits[3] , colour ) ;
//     do_stuff( 4 , digits[4] , colour ) ;
//     do_stuff( 5 , digits[5] , colour ) ;
//
// }
// function timeToDigits(time)
// {
//   var ss =  Math.trunc(time/10) %100; //divide by 10 to throw the smallest digit , then mod 100 to throw bigger than 100 away
//   var s = Math.trunc(time/1000)% (60); //seconds
//   var min = Math.trunc(time /(1000*60)) %60 ;//get minutes passed this day
//   var hours= Math.trunc(time /(1000*60*60)) %24 ;//get hours passed this day
//   var days= Math.trunc(time /(1000*60*60*24)) %30 ;//get days passed this day
//   var months= Math.trunc(time /(1000*60*60*24*30.5))%12 ;//get months passed this day
//   // var months= Math.trunc(time /(1000*60*60*24*30)%12) ;//get months passed this day
//
//   if(months > 0)
//   {
//     return [Math.trunc(months/10) , months%10 , Math.trunc(days/10) , days%10 , Math.trunc(hours/10) , hours%10 ] ;
//   }else
//   if(days > 0 )
//   {
//     return [Math.trunc(days/10) , days%10 , Math.trunc(hours/10) , hours%10 , Math.trunc(min/10) , min%10 ] ;
//   }else
//   if(hours > 0 )
//   {
//     return [Math.trunc(hours/10) , hours%10 , Math.trunc(min/10) , min%10 , Math.trunc(s/10) , s%10 ] ;
//   }else
//   {
//     return [Math.trunc(min/10) , min%10 , Math.trunc(s/10) , s%10 , Math.trunc(ss/10) , ss%10 ] ;
//   }
//
// }
// function displayStopwatch(colour)
// {
//     //clear all the digits
//     clear_digit(0) ;
//     clear_digit(1) ;
//     clear_digit(2) ;
//     clear_digit(3) ;
//     clear_digit(4) ;
//     clear_digit(5) ;
//
//     //diff dictates the elapsed time
//     var diff = 0 ; //defaults to zero if it has not started
//     if(localStorage.getItem("start" ) != undefined)
//      diff = (Date.now()-localStorage.getItem("start" ));
//
//     var digits = timeToDigits(diff);
//     do_stuff( 0 , digits[0] , colour ) ;
//     do_stuff( 1 , digits[1] , colour ) ;
//     do_stuff( 2 , digits[2] , colour ) ;
//     do_stuff( 3 , digits[3] , colour ) ;
//     do_stuff( 4 , digits[4] , colour ) ;
//     do_stuff( 5 , digits[5] , colour ) ;
//
//
// }
// function displayCountDown(colour)
// {
//     //clear all the digits
//     clear_digit(0) ;
//     clear_digit(1) ;
//     clear_digit(2) ;
//     clear_digit(3) ;
//     clear_digit(4) ;
//     clear_digit(5) ;
//     //diff dictates the elapsed time
//     var diff = 0 ; //defaults to zero if it has not started
//     if(localStorage.getItem("Countdown" ) != undefined && localStorage.getItem("startCountdown" ) != undefined)
//      diff = localStorage.getItem("Countdown") - (Date.now() - localStorage.getItem("startCountdown"));
//     if(diff<0)
//     {
//       diff = 0;
//     }
//         var digits = timeToDigits(diff);
//       do_stuff( 0 , digits[0] , colour ) ;
//       do_stuff( 1 , digits[1] , colour ) ;
//       do_stuff( 2 , digits[2] , colour ) ;
//       do_stuff( 3 , digits[3] , colour ) ;
//       do_stuff( 4 , digits[4] , colour ) ;
//       do_stuff( 5 , digits[5] , colour ) ;
//
//
// }
// function randomColor()
// {
//   tempr = (Math.round(Math.random()*255));
//   tempb = (Math.round(Math.random()*255));
//   tempg = (Math.round(Math.random()*255));
//   setColor(tempr,tempb,tempg);
// }
// function setColor(r,g,b)
// {
//   if(r > 0 )
//     document.getElementById("r").value = r ;
//   if(g > 0 )
//     document.getElementById("g").value = g ;
//   if(b > 0 )
//     document.getElementById("b").value = b ;
// }
// function getColor()
// {
//     var result =  [document.getElementById("r").value ,
//                    document.getElementById("g").value ,
//                    document.getElementById("b").value ];
//     return result;
// }
// //using the current state of the page , output and url so you can share
// function generateURL()
// {
//     var color = getColor();
//     var url = window.location.origin + window.location.pathname + '?' + 'r=' + color[0]+ '&g=' + color[1]+ '&b=' + color[2] +"&clockmode=" + clockmode ;
//     console.log(url);
// }
// function processURL()
// {
//     if(getQueryVariable("r") != undefined)
//       setColor(getQueryVariable("r"),-1,-1);
//     //document.getElementById("r").value = getQueryVariable("r")
//
//     if(getQueryVariable("g") != undefined)
//       setColor(-1,getQueryVariable("g"),-1);
//       //document.getElementById("g").value = getQueryVariable("g")
//
//     if(getQueryVariable("b") != undefined)
//       setColor(-1,-1,getQueryVariable("b"));
//       //document.getElementById("b").value = getQueryVariable("b")
//
//     if(getQueryVariable("clockmode") != undefined)
//     {
//       if(getQueryVariable("clockmode") == 'newyears')
//       {
//         clockmode = 2;
//
//         localStorage.setItem("Countdown", 1483228800000 + 1000*3600*24*365 - Date.now() - (document.getElementById('zone').value*3600*1000 ) );
//         localStorage.setItem("startCountdown", Date.now());
//         // 1483201294696
//
//         console.log('new year mode?');
//         console.log((document.getElementById('zone').value*3600 ));
//       }else
//       {
//         clockmode =  parseInt(getQueryVariable("clockmode"))
//       }
//
//     }
//
//     if(getQueryVariable("color") == "random")
//       randomColor();
//
//     if(getQueryVariable("start") != undefined)
//       localStorage.setItem("start", parseInt(getQueryVariable("start")));
//
//     if(getQueryVariable("startCountdown") != undefined)
//       localStorage.setItem("startCountdown", parseInt(getQueryVariable("startCountdown")));
//
// }
// function step()
// {
//   //console.log("stepping...");
//   //should actually load from localstorage , but meh , their values should not differ anyway
//   var r= document.getElementById('r').value;
//   var b= document.getElementById('b').value;
//   var g= document.getElementById('g').value;
//
//   //put values in an array
//   var colour = [r,g,b];
//
//   document.getElementById('r').style= 'background: linear-gradient( to right, rgb(' + 0 + ',' + g + ',' + b +'),rgb('+ 255 + ',' + g + ',' + b +') );height:10px;' ;
//   document.getElementById('g').style= 'background: linear-gradient( to right, rgb(' + r + ',' + 0 + ',' + b +'),rgb('+ r + ',' + 255 + ',' + b +') );height:10px;' ;
//   document.getElementById('b').style= 'background: linear-gradient( to right, rgb(' + r + ',' + g + ',' + 0 +'),rgb('+ r + ',' + g + ',' + 255 +') );height:10px;' ;
//
//
//
//   //make a pretty string
//   var colour2= "rgb("+ colour[0] + "," + colour[1] + "," + colour[2] +")";
//   // console.log("coulr is " + colour2);
//   var dividers = [document.getElementById('1-2')
//                   ,document.getElementById('1-2')
//                   ,document.getElementById('1-2')
//                   ,document.getElementById('1-2')];
//
//   var styledivider = ";stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1";
//
//     //cheks what the current mode is
//     if(clockmode === 1 )
//       displayTime( colour);
//     if(clockmode === 2 )
//       displayCountDown( colour);
//     if(clockmode === 3 )
//       displayStopwatch( colour);
//
//       colorSepArray[0] = colour2;
//       colorSepArray[1] = colour2;
//       colorSepArray[2] = colour2;
//       colorSepArray[3] = colour2;
//
//
//      var segments_canvas = document.getElementById("segments_canvas");
//      var seg = segments_canvas.getContext('2d');
//      seg.clearRect(0, 0, segments_canvas.width, segments_canvas.height);
//      drawClock(colorArray,colorSepArray);
//
//       // console.log(colorArray);
//      // console.log('redrawn');
// }
// setInterval( step , 7*9); // 60 * 1000 milsec
//
// function drawseg(segPoints,offset,color)
// {
//
//     segments_canvas = document.getElementById("segments_canvas");
//
//     var seg = segments_canvas.getContext('2d');
//     // seg.scale(0.9,0.9)
//     seg.fillStyle = color;
//     seg.beginPath();
//     seg.moveTo(offset[0]+ segPoints[0][0] , offset[1] + segPoints[0][1]);
//     for (var i = 0; i < segPoints.length; i++)
//     {
//       seg.lineTo(offset[0]+ segPoints[i][0] , offset[1] + segPoints[i][1]);
//     }
//     seg.closePath();
//     seg.fill();
//     return seg;
// }
// function drawSep(digitOffset,color)
// {
//    //polygon points for a seperator
//     sep = [[-9.904,61.469],
//           [0      ,24.273],
//           [30.847 ,0],
//           [48.587 ,24.236],
//           [38.583 ,61.471],
//           [7.852  ,85.715]] ;
//     var sepOffset1 = [380 , 290];
//     var sepOffset2 = [430 , 100];
//
//     drawseg(sep,[digitOffset[0] + sepOffset1[0] ,digitOffset[1] + sepOffset1[1]],color[1]);
//     drawseg(sep,[digitOffset[0] + sepOffset2[0] ,digitOffset[1] + sepOffset2[1]],color[0]);
//
// }
// function drawDigit(digitOffset,color,sepColor)
// {
//
//     //polygon points for a vertical segment
//     vseg = [[17.7562292,194.25705],
//             [0,        170.01151],
//             [38.9876442,24.27299],
//             [69.8343282,0],
//             [87.5751322,24.23576],
//             [48.4869642,170.01341]]  ;
//
//     //polygon points for a horizontal segment
//     hseg = [[0     ,24.268],
//            [30.781 ,0.01],
//            [176.493,0],
//            [194.25 ,24.265],
//            [163.446,48.607],
//            [17.747 ,48.551]];
//
//     //polygon points for a horizontal segment
//
//     var off2 = [56.585,32.713] ;
//     var off3 = [137.048,0] ;
//
//     var Voffset = [-56.529 , 211.14];
//     var Hoffset = [211.102 , -0.05];
//
//
//       //  666
//       // 3   4
//       // 3   4
//       // |222|
//       // 0   5
//       // 0   5
//       //  111
//
//     drawseg(vseg,[digitOffset[0] + off2[0] + Voffset[0] ,digitOffset[1] + off2[1] + Voffset[1]],color[0]); //segment 0
//     drawseg(vseg,[digitOffset[0] + off2[0]              , off2[1] + digitOffset[1]],color[3]);//segment 3
//     drawseg(vseg,[digitOffset[0] + off2[0] + Hoffset[0] ,digitOffset[1] + off2[1] + Hoffset[1]],color[4]);//segment 4
//
//     drawseg(vseg,[digitOffset[0] + off2[0] + Voffset[0] + Hoffset[0],digitOffset[1] + off2[1] + Voffset[1] +Hoffset[1]],color[5]);//segment 5
//
//     drawseg(hseg,[digitOffset[0] + off3[0] + Voffset[0]*2, digitOffset[1] + off3[1] + Voffset[1]*2],color[1]);//segment 1
//
//
//     drawseg(hseg,[digitOffset[0] + off3[0] + Voffset[0]  , digitOffset[1] + off3[1] + Voffset[1]],color[2]); //segment 2
//     drawseg(hseg,[off3[0] + digitOffset[0]               , off3[1] + digitOffset[1] ] ,color[6]);//segment 6
//
// }
//
// function drawClock(colorArray,colorSepArray)
// {
//   //example of states an stuff
//
//   segments_canvas = document.getElementById("segments_canvas");
//   var seg = segments_canvas.getContext('2d');
//   // seg.scale(0.5,0.5)
//   //*
//   drawDigit([0   ,0] ,colorArray.slice(0,6+1))
//   drawDigit([400 ,0] ,colorArray.slice(7,13+1))
//
//   drawSep([400 ,0] ,colorSepArray.slice(0,1+1))
//
//   drawDigit([900 ,0] ,colorArray.slice(14,20+1))
//   drawDigit([1300,0] ,colorArray.slice(21,27+1))
//
//   drawSep([1300,0] ,colorSepArray.slice(2,3+1))
//
//   drawDigit([1800,0] ,colorArray.slice(28,34+1))
//   drawDigit([2200,0] ,colorArray.slice(35,41+1))
//
//
//
// }
// document.addEventListener("DOMContentLoaded", function(event)
// {
//
//   segments_canvas = document.getElementById("segments_canvas");
//    var seg = segments_canvas.getContext('2d');
//     seg.scale(0.45,0.45)
//   drawClock(colorArray,colorSepArray);
//
//     if(localStorage.getItem("r" ) != undefined)
//       document.getElementById("r").value = localStorage.getItem("r" );
//
//     if(localStorage.getItem("g" ) != undefined)
//       document.getElementById("g").value = localStorage.getItem("g" );
//
//     if(localStorage.getItem("b" ) != undefined)
//       document.getElementById("b").value = localStorage.getItem("b" );
//
//     if(localStorage.getItem("clockmode" ) != undefined)
//       clockmode = parseInt(localStorage.getItem("clockmode" ));
//
//     processURL()
//
//     saveData(); //I'm to lazy to check of vars were passed , so shave anyway
//       // console.log("R :" + getQueryVariable("r"))
//       // console.log("G :" + getQueryVariable("g"))
//       // console.log("B :" + getQueryVariable("b"))
//       // console.log("mode :" + getQueryVariable("clockmode"))
//
//     });
//       checklogin();
//       getCountdownList();
//
//       function set_segment(segment , colour)
//       {
//         // if(document.getElementById(segment) != null)
//         // document.getElementById(segment).style = "fill:"+colour+";stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1";
//
//         // var segments_canvas = document.getElementById("segments_canvas");
//         // var seg = segments_canvas.getContext('2d');
//         // seg.clearRect(0, 0, segments_canvas.width, segments_canvas.height);
//         // console.log("setting segment  :" +segment + " to color " + colour);
//         colorArray[segment] = colour;
//         // drawClock(colorArray);
//
//         // console.log(colorArray);
//       }
//       function clear_all()
//       {
//         console.log("A broken fundtion was called");
//         // for (var i = 0; i >= 28; i++)
//         // {
//         //   set_segment(i , 'none') ;
//         // }
//       }
//       function clear_digit(digit) {
//         //for (var i = 0; i >= 28; i++)
//         // console.log("clearing digit " + digit) ;
//         set_segment(digit*7 +0 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +1 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +2 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +3 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +4 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +5 , 'rgb(8,8,8)') ;
//         set_segment(digit*7 +6 , 'rgb(8,8,8)') ;
//       }
//
//     function do_stuff(digit,char,colour)
//     {
//       // console.log("DOing stuff in colour " + colour) ;
//      // char = 8; //test string i presumme
//      // console.log ( "Char is " + char) ; //receives the chars just fine
//      // console.log ( "Digit is " + digit) ;
//      // if(digit = 2)
//       // return ;
//       colour = "rgb("+ colour[0] + "," + colour[1] + "," + colour[2] +")";
//       blank = "rgb("+ 0 + "," + 0 + "," + 0 +")";
//
//       //digit can be 1-4
//       //colour is anything css accepts
//       //char is what to display
//       //
//       //  777
//       // 4   5
//       // 4   5
//       // |333|
//       // 1   6
//       // 1   6
//       //  222
//
//       //  666
//       // 3   4
//       // 3   4
//       // |222|
//       // 0   5
//       // 0   5
//       //  111
//       //
//       // console.log("drawing digit " + char + " At postition " + digit );
//       if(char == '0')
//       {
//         set_segment(digit*7 + 0 , colour) ;
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//       }
//       if(char == '1')
//       {
//
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//
//       }
//       if(char == '2')
//       {
//         // set_segment(digit*7 + 6 , colour) ;
//         // set_segment(digit*7 + 4 , colour) ;
//         // set_segment(digit*7 + 2 , colour) ;
//         // set_segment(digit*7 + 0 , colour) ;
//         // set_segment(digit*7 + 1 , colour) ;
//
//         set_segment(digit*7 + 0 , colour) ;
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//
//       }
//       if(char == '3')
//       {
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//
//       }
//       if(char == '4')
//       {
//
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//       }
//       if(char == '5')
//       {
//
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//       }
//       if(char == '6')
//       {
//         set_segment(digit*7 + 0 , colour) ;
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//
//       }
//       if(char == '7')
//       {
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//
//       }
//       if(char == '8')
//       {
//
//         set_segment(digit*7 + 0 , colour) ;
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//       }
//       if(char == '9')
//       {
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 2 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//
//       }
//       if(char == 'a')
//       {
//         set_segment(digit*7 + 1 , colour) ;
//         set_segment(digit*7 + 3 , colour) ;
//         set_segment(digit*7 + 4 , colour) ;
//         set_segment(digit*7 + 5 , colour) ;
//         set_segment(digit*7 + 6 , colour) ;
//         set_segment(digit*7 + 7 , colour) ;
//       }
//
//
//
//     }
//
//   function saveData() //writes a bunch of states to localstorage
//   {
//     localStorage.setItem("r", document.getElementById("r").value);
//     localStorage.setItem("g", document.getElementById("g").value);
//     localStorage.setItem("b", document.getElementById("b").value);
//     localStorage.setItem("clockmode", clockmode);
//     console.log("stored values...");
//
//   }
// </script>
// </head>
// <!-- <button onclick="generateURL()"> generateurls()</button>   -->
// <details>
//   <summary>Menu</summary>
//   <div id=logindiv>
//   <a href='#' onclick='checklogin()'>Login </a>
//   </div>
//   <div  class='nice' style="color:white;">
//   <details>
//     <summary>General settings</summary>
//     <div  class='nice' style="color:white;">
//       <p>
//           <!-- FadeTime: <input type="range" id='fade' value='0.98' max="0.98" min="0" step="0.02"> -->
//           Red<input type="range" onchange="saveData()" id='r' max="255" min="0" step="1" >
//           Green<input type="range" onchange="saveData()" id='g' max="255" min="0" step="1" >
//           Blue<input type="range" onchange="saveData()" id='b' max="255" min="0" step="1" >
//           <!-- <details><summary>Hint</summary> Each slider represents how much of each color will be added but the color shown with each slider show what the color will become if you move it there.</details> -->
//       </p>
//       <p>
//         <button onclick="randomColor()">Random color</button>
//       </p>
//       <p >Timezone
//         <input type="number" id='zone' value=2 max=12 min=-12 step=1>
//       </p>
//       <!-- <p>
//         Mode <select id='mode'>
//             <option value='1'>Time</option>
//             <option value='2'>Countdown</option>
//             <option value='3'>Stop Watch</option>
//         </select>
//       </p> -->
//     </div>
//   </details>
//
//   <details>
//     <summary>Time</summary>
//     <div class="nice">
//         <button onclick="showTime()">Display time</button>
//     </div>
//   </details>
//   <details>
//     <summary>Stop Watch</summary>
//     <div class="nice">
//         <button onclick="setstart()">start/reset Stop watch</button>
//         <button onclick="showStopWatch()">Show Stop watch</button>
//
//     </div>
//
//   </details>
//   <details>
//     <summary>Countdown</summary>
//     <div class="nice">
//             days <input type="number" id='days' value=0 max=88 min=0 step=1 style='width:70px'>
//         hours <input type="number" id='hours' value=0 max=23 min=0 step=1 style='width:70px'>
//         minutes <input type="number" id='minutes' value=0 max=59 min=0 step=1 style='width:70px'>
//         seconds <input type="number" id='seconds' value=0 max=59 min=0 step=1 style='width:70px'>
//         <button onclick="setCountdown()">start/reset Count down</button> <!-- supposed to reveal the save div nicely<button>Save</button> -->
//         <button onclick="showCountdown()">Show Count down </button>
//       <details>
//         <summary>Save a Countdown</summary>
//           <div  class='nice' style="color:white;">
//           Countdown type:<br>
//             <input type="radio" name="countdowntype" value="duration"> Countdown a duration<br>
//             <input type="radio" name="countdowntype" value="date"> Countdown a date<br>
//
//
//             Name <input id='countdName'><br><br>
//             Description <input id='countdDesc'><br><br>
//             <button onclick='saveCountdown()'>Save countdown</button>
//           </div>
//       </details>
//       <details>
//         <summary>Load a Countdown</summary>
//           <div  class='nice' style="color:white;">
//             <select id='countdownselect'></select>
//             <!-- todo make this button lead to a something when clicked -->
//             <button onclick='loadCountdown()'>Load countdown</button>
//           </div>
//       </details>
//     </div>
//   </details>
//   <details>
//     <summary>TODOs</summary>
//     <s>Add random color mode button and link</s><br>
//     export to url<br>
//     cleanup url init<br>
//     <s>Initialize from URL ( RGB , mode , values)</s><br>
//     <s>make color persistent between reloads on a machine</s><br>
//     figure out sharing mechanisms<br>
//     make stop watches shareable<br>
//     make coundowns shareable<br>
//     make timers shareable<br>
//     make countdowns that count to a specific date <br>
//     fix svg height<br>
//     find and add sound effects<br>
//     ui settings<br>
//     api<br>
//     <s>Add mode buttons</s><br>
//   </details>
//
//   </div>
// </details>
// mode: <a href="#"><span id="mode_label" onclick="cycle_modes()" >Clock</span></a>
// <br><br>
// <canvas id="segments_canvas" width="1500px" height="250px"></canvas>
// <!-- <button onclick="step()" >TEST STEP</button> -->
// <p>fix this height</p>
// </body>
// </html>
