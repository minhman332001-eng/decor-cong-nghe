const menuToggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".menu");
if(menuToggle&&menu){menuToggle.addEventListener("click",()=>{menu.classList.toggle("show")})}