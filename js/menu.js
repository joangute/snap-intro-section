const menu_item=document.querySelectorAll(".menu_item:has(~ .submenu)");

for(let i=0;i<menu_item.length; i++)
 menu_item[i].addEventListener("click", function(){
    if(this.nextElementSibling.classList.contains("grid"))
    {
      this.nextElementSibling.classList.remove("grid");
      this.classList.remove("arrow_up");
    }
    else{
      this.nextElementSibling.classList.add("grid");
      this.classList.add("arrow_up");
    }
 });

const menu_icon=document.querySelector(".menu_icon");
const modal=document.querySelector(".modal");
const menu=document.querySelector(".menu");
const signin=document.querySelector(".signin");

menu_icon.addEventListener("click",function(){

     if(modal.classList.contains("open")){
        modal.classList.remove("open");
        menu.classList.remove("flex");
        signin.classList.remove("flex");
        modal.parentElement.classList.remove("supermodal");
        modal.previousElementSibling.style.display="none";
        this.style.backgroundImage="url('./images/icon-menu.svg')";

     }
     else{
        modal.classList.add("open");
        modal.parentElement.classList.add("supermodal");
        modal.previousElementSibling.style.display="block";
        menu.classList.add("flex");
        signin.classList.add("flex");
        this.style.backgroundImage="url('./images/icon-close-menu.svg')";
     }
});