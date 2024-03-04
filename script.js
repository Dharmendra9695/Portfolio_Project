const header=document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>0);
})


    // JavaScript to handle click event and toggle content visibility
document.getElementById('toggleButton').addEventListener('click', function() {
var content = document.getElementById('content1');
content.classList.toggle('active'); // Toggle the 'active' class
});


document.getElementById('toggleButton2').addEventListener('click', function() {
var content = document.getElementById('content2');
content.classList.toggle('active'); // Toggle the 'active' class
});

document.getElementById('toggleButton3').addEventListener('click',function(){
    var content= document.getElementById('content3');
    content.classList.toggle('active');
});


// menu-bar 

document.getElementById('menu-icon').addEventListener('click',function(){
    var content= document.getElementById('navlist');
    content.classList.toggle('active');
});




// typing web designer javascript
var typed = new Typed(".typing", { strings: ["Web Designer", "ASP.NET Developer", "Web Developer"], typeSpeed: 150, backSpeed: 80, loop: true })
    


