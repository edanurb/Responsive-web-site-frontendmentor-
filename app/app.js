const burgerMenuBtn=document.querySelector('.header__burger')
const header=document.querySelector('.header')
const mobileSize=600



burgerMenuBtn.addEventListener('click', function(){

    if(header.classList.contains("open")){
        header.classList.remove("open");
        document.querySelector('body').style.overflow="scroll";

    }
    else{
        header.classList.add(("open"));
        document.querySelector('body').style.overflow="hidden";
        
    }
    
});