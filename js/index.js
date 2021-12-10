window.onscroll = () => {
    if(window.scrollY >= 500){
        document.querySelector('.up').style.opacity = "1";
    }
    else{
        document.querySelector('.up').style.opacity = '0';
    }
}
document.querySelector('.up').addEventListener('click',function(){
    window.scrollTo(0,0);
});