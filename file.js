let mainleft = document.querySelector(".mainLeft")
let mainright = document.querySelector(".mainRight")
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
   mainleft.style.display="flex";

})
let close= document.querySelector(".close")
close.addEventListener("click",()=>{
    mainleft.style.display="none";
})
let card=document.querySelectorAll(".card1")
let music=new Audio('songs/tmenaiihou.mp3')
card.forEach(element => {
    element.addEventListener("click",()=>{
        if(music.paused){
            music.play();
            
        }
        else
        {
            music.pause();
        }
    })
});
document.addEventListener("keydown",(a)=>{
    if(a.key==' '){
        if(music.paused){
            music.play();
            
        }
        else
        {
            music.pause();
        }
    }
})