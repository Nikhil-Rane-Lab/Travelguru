
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less "; 
    moreText.style.display = "inline";
    }
    }


    async function get(){
        var choice=0;
         let res = await fetch("http://localhost:5000/api/products");
         let data = await res.json();
         console.log('data:', data[0].img_link)
     document.getElementById('poster').innerText=data[choice]["place_name"];
     var p1=data[0]["rating"];
     var t=10;
    var ty=document.getElementById('pic').src=data[0]["img_link"];
    document.getElementById('pic1').src=ty;
     document.getElementById('add').innerText=data[choice]["locality"];
     document.getElementById('rate').innerText=data[choice]["price"];
    
    }
     get();
     
     
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }