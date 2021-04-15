myFirstWord = document.getElementById("f-letter"); // first h3 
var typewriter = new Typewriter(myFirstWord, {
    loop: true
});

typewriter.typeString("الإنسان هو إنسان فقط إذا استطاع أن يقاوم ما يحب ويتحمل ما يكره")
    .pauseFor(2000)
    .deleteAll()
    .typeString("قيمة الإنسان هي ما يضيفه الى الحياة بين ميلاده و موته ")
    .start();

// Var 

content1 = document.getElementById("#content1");

content1.onclick = function(){
     
    document.documentElement.scrollTop = 1000;
    document.querySelector(".second-section").classList.add("show");
    
}

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
      document.querySelector(".second-section").classList.add("show");
    }

}

content2 = document.getElementById("blog-li");
content2.onclick = function(){
        document.documentElement.scrollTop = 1482;
    
}

