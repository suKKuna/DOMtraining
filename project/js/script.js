// unshowbleMenu
const unshowbleMenu1 = document.querySelector('.unshowbleMenu1');
const nav__menu = document.querySelector('.nav__menu');
const general = document.querySelector('.general');
general.addEventListener("mouseover",function(){
    unshowbleMenu1.classList.add("open");
});
general.addEventListener("mouseleave", function(event){
    unshowbleMenu1.addEventListener("mouseover",function(){
        unshowbleMenu1.classList.add("open");
    });
    unshowbleMenu1.addEventListener("mouseleave", function(){
        unshowbleMenu1.classList.remove("open");
    });

    unshowbleMenu1.classList.remove("open");
});
// news__block
const news__block = document.querySelectorAll('.news__block');

for(let i of news__block){
    i.addEventListener("mouseover",function(event){
        i.classList.add("blueBlockVisability");
    });

    i.addEventListener("mouseout",function(event){
        i.classList.remove("blueBlockVisability");
    });
}
//scroll
const scrollButtonImg = document.querySelector('.scrollButtonImg');

document.addEventListener("scroll", function(){

    scrollButtonImg.style.left = `${document.documentElement.clientWidth - 160}px`;
    scrollButtonImg.style.top = `${document.documentElement.clientHeight - 150}px`;

    if(scrollY >= 200){
        scrollButtonImg.classList.add('visibility');
    }
});
document.addEventListener("scroll",function(){
    if(scrollY < 200){
        scrollButtonImg.classList.remove('visibility');
    }
});
scrollButtonImg.addEventListener("click",function(){
    window.scrollTo(0,0);
});
//cardsBlock
const cardsBlock__list = document.querySelector('.cardsBlock__list');
const classBlockA = document.querySelectorAll('.classBlockA');

cardsBlock__list.addEventListener("mouseover",(event)=>{
    if(event.target.closest('a')){
        event.target.closest('a').classList.add('open');
    }
});

cardsBlock__list.addEventListener("mouseout",(event)=>{
    if(event.target.closest('a')){
        event.target.closest('a').classList.remove('open');
    }
    for(let count of classBlockA){
        count.classList.remove('open');
    }
});

//SWIPEimg
const cardsBlock__imgObj = document.querySelector('.cardsBlock__imgObj');

let imgArray = [
    "img/standart/og_heroes_warlock.jpg",
    "img/standart/og_heroes_paladin.jpg",
    "img/standart/Malfurion.jpg",
    "img/standart/og_heroes_priest.jpg",
    "img/standart/og_heroes_warrior.jpg",
    "img/standart/og_heroes_rouge.jpg",
    "img/standart/og_heroes_hunter.jpg",
    "img/standart/vignette-chaman-hearthstone-guide-678x381.jpg",
    "img/standart/og_heroes_mage.jpg"
];

let count = 0;
let srcMap = new Map();

for(let blockA in classBlockA) {

    if(classBlockA[blockA].tagName == "A"){
        classBlockA[blockA].addEventListener("mouseover", ()=>{
            if(srcMap.has(classBlockA[blockA])){
                cardsBlock__imgObj.src = `${srcMap.get(classBlockA[blockA])}`;
                console.log(srcMap.get(classBlockA[blockA]));
            } else{
                srcMap.set(classBlockA[blockA],imgArray[count]);
                cardsBlock__imgObj.src = `${srcMap.get(classBlockA[blockA])}`;
                count+=1;
            }
        });
        classBlockA[blockA].addEventListener("mouseleave", ()=>{
            cardsBlock__imgObj.src = "img/standart/wild_open_2019_waifu2x_art_noise2_scale_tta_1 — копия.png";
        })
    }
}

