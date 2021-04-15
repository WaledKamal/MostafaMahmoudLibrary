
// Audio player 
/** MP3 Player By PureJS  *  
 * Author : Waled Kamal  
 * Version : 0.0.1
 * Email : Waledkama2510@gmail.com
 * Date of Creation : 31/3/2021 
 * Copyright : Open Source  
 */

// Var for Player //
let audiotitle = document.getElementById("readername");
let choose = document.querySelectorAll("#audio");
let myPlayer = document.getElementById("myPlayer");  // My Player 
let playBtn = document.getElementById("play-btn");   // My Play/Pause Button 
let Audioduration = document.getElementById("duration"); // My Audio Full time (duration)
let currenttime = document.getElementById("current_time");
let myRange = document.getElementById("myRange");
let myVolume = document.getElementById("Volume");
let currentTime = 0;
let fullvolume = document.getElementById("full-v");


function dtime(){
// Varibles for Duration of Audio 
let hours = Math.floor(myPlayer.duration/60/60);
let dmin = Math.floor(myPlayer.duration/60%60);
let dsec = Math.floor(myPlayer.duration - Math.floor(myPlayer.duration/60) * 60);
let mbrake = ":";
ttt = "0";
let n1 = "0";
    //** If Minutes Less Than 10 Minute put "0" before Minutes Numebr like 01:*/
    if(dsec < 10){
        dsec = "0" + dsec;
     }
     if(dmin > 10){
         ttt="";
     }
     if(dmin>60){
         dmin = "0" + dmin%60;
     }
     if(hours==0){

        hours = "";
        mbrake = ""; 
        n1 = "";
     }
     if(dmin<10){
         ttt="0";
     }

 
    Audioduration.innerHTML = n1+hours+mbrake+ttt+dmin+":"+dsec;
    if(Audioduration.innerText == "0NaN:0NaN:NaN"){
        Audioduration.innerText = "جاري التحميل .. ";
        Audioduration.style.fontSize= "10px";
        Audioduration.style.color= "red";
     }else{

        Audioduration.style.fontSize= "15px";
        Audioduration.style.color= "black";


     }
  
 }
 dtime();
setInterval(dtime,10)

// Play :: 
playBtn.addEventListener("click", function(){
    if(myPlayer.paused){
        myPlayer.play();
        playBtn.className = "fa fa-pause";
    }else{
        myPlayer.pause();
        playBtn.className = "fa fa-play";
    }
});

myPlayer.addEventListener("ended" , function(){
    playBtn.className = "fa fa-redo";
});
//// get current time 
myPlayer.addEventListener("timeupdate", cdtime);
    function cdtime(){
    myPlayer.volume = myVolume.value/100;
    myRange.value  = myPlayer.currentTime;
    let n23 = "";
    let tt = "0";
    let ns = "";
    let mbrake = ":";
    let hmin = Math.floor(myPlayer.currentTime/60/60);
    let Amin = Math.floor(myPlayer.currentTime/60);
    let Asec = Math.floor(myPlayer.currentTime - Amin * 60);
    // Slice time to HH:MM:SS 
    if(hmin<10){
        n23="0";
    }else{

        n23 = "";
    }

    if(Amin<10){
   
        tt="00";

    }else{

        tt="";
    }
    if(Amin>60){

        Amin = Amin%60;
        tt="0";
    }
    if(Amin<60){

        tt="";
    }
    if(Asec<10){

        ns = "0";
    }
    if(Amin<10){

        tt="0";
    }
// set Current Time to HTML DIV
currenttime.innerHTML = n23+hmin+mbrake+tt+Amin+":"+ns+Asec;
if(Audioduration.innerText == "0NaN:0NaN:NaN"){
    Audioduration.innerText = "جاري التحميل .. ";
    Audioduration.style.fontSize= "10px";
    Audioduration.style.color= "red";
 }else{

    Audioduration.style.fontSize= "15px";
    Audioduration.style.color= "black";


 }


}
// set Current Time to HTML DIV


// set MAX range.length //
setInterval(updateMax,1);
function updateMax(){
    myRange.setAttribute("max",myPlayer.duration);
}
// set current time & update range time 
myRange.addEventListener("change", function(){
    myPlayer.volume = myVolume.value/100;
    myPlayer.currentTime = myRange.value;
    // Varibles for CurrentTime of Audio 
    let n23 = "";
    let tt = "0";
    let mbrake = ":";
    let ns = "";
    let hmin = Math.floor(myPlayer.currentTime/60/60);
    let Amin = Math.floor(myPlayer.currentTime/60);
    let Asec = Math.floor(myPlayer.currentTime - Amin * 60);
    // Slice time to HH:MM:SS 

    if(hmin<10){
        n23="0";
    }else{

        n23 = "";
    }

    if(Amin<10){
   
        tt="00";

    }else{

        tt="";
    }
    if(Amin>60){

        Amin = Amin%60;
        tt="0";
    }
    if(Amin<60){

        tt="";
    }

    if(Asec<10){

        ns = "0";
    }
    if(Amin<10){

        tt="0";
    }
// set Current Time to HTML DIV
currenttime.innerHTML = n23+hmin+mbrake+tt+Amin+":"+ns+Asec;

});
function play(clicked_id){
document.getElementById(clicked_id).onclick = function(){   
    document.getElementById("myPlayer").src = this.getAttribute("src");
    document.getElementById("readername").innerHTML = this.getAttribute("author");
    document.getElementById("photo").src = this.getAttribute("photo");
    audiotitle.innerHTML = this.innerHTML;
    myRange.setAttribute("max",myPlayer.duration);
    myPlayer.play();
    playBtn.className = "fa fa-pause";
    document.title = document.getElementById("readername").textContent + "- كتاب صوتي";

    
   if(Audioduration.innerText == "0NaN:0NaN:NaN"){
    Audioduration.innerText = "جاري التحميل ..";
    Audioduration.style.fontSize= "10px";
}


    };
}

function viewpdf(clicked_id){
    document.getElementById(clicked_id).onclick = function(){
         document.getElementById("pdfV").src = this.getAttribute("src");
    }
}

document.getElementById('#bookfiltter').addEventListener('keyup', filterNames);

function filterNames(e) {
    const text = e.target.value.toLowerCase();
    document.getElementsByClassName('.listo').forEach(
      function(name) {
        let item = name.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
          name.style.display = 'block';
        } else {
          name.style.display = 'none';
        }
      }
    );
  }

