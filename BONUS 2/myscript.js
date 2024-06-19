
const imageArray = [ 
    { image: 'img/01.webp', 
      title: 'Marvel\'s Spiderman Miles Morale', 
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    { image: 'img/02.webp', 
      title: 'Ratchet & Clank: Rift Apart', 
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { image: 'img/03.webp', 
      title: 'Fortnite', 
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 

    }, 
    { image: 'img/04.webp', 
      title: 'Stray', 
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 

    }, 
    { image: 'img/05.webp', 
      title: "Marvel's Avengers", 
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 

    } ];
const carouselContainer = document.querySelector(".carousel-container");
const thumbContainer = document.querySelector(".thumbnails-container");


for (let i = 0; i < imageArray.length; i++) {
    let carouselImg = imageArray[i].image;
    let carouselTitle = imageArray[i].title;
    let carouselText = imageArray[i].text;

    let carouselContent = 
    `
            <div class="carousel-image">
                <img src="${carouselImg}">
            </div>
            <div class="text-container">
                <div class="carousel-title">${carouselTitle}</div>
                <div class="carousel-text">${carouselText}</div>
            </div>
    `
    let thumbContent = 
    `
            <div class="thumb-image">
                <img src="${carouselImg}">
            </div>
    `
    carouselContainer.innerHTML += carouselContent;
    thumbContainer.innerHTML += thumbContent;

    
}

const getImage = document.getElementsByClassName("carousel-image");
const getTitle = document.getElementsByClassName("carousel-title");
const getText = document.getElementsByClassName("carousel-text");

const thumbnails = document.querySelectorAll(".thumb-image");

let activeItem = 0;

getImage[activeItem].classList.add("active");
getTitle[activeItem].classList.add("active");
getText[activeItem].classList.add("active");
thumbnails[activeItem].classList.add("thumb-active");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

next.addEventListener("click", nextImage)
previous.addEventListener("click", previousImage)

for (let i=0; i < 5; i++) {
    changeImage(i);
}

const autoScroll = setInterval(nextImage, 3000)

function nextImage () {
    if (activeItem < imageArray.length - 1) {
        
        getImage[activeItem].classList.remove("active");
        getTitle[activeItem].classList.remove("active");
        getText[activeItem].classList.remove("active");
        thumbnails[activeItem].classList.remove("thumb-active");

        activeItem++;

        getImage[activeItem].classList.add("active");
        getTitle[activeItem].classList.add("active");
        getText[activeItem].classList.add("active");
        thumbnails[activeItem].classList.add("thumb-active");

    }
    else {
        getImage[activeItem].classList.remove("active");
        getTitle[activeItem].classList.remove("active");
        getText[activeItem].classList.remove("active");
        thumbnails[activeItem].classList.remove("thumb-active");

        activeItem = 0;

        getImage[activeItem].classList.add("active");
        getTitle[activeItem].classList.add("active");
        getText[activeItem].classList.add("active");
        thumbnails[activeItem].classList.add("thumb-active");
    }
}

function previousImage () {
    if (activeItem > 0) {
        
        getImage[activeItem].classList.remove("active");
        getTitle[activeItem].classList.remove("active");
        getText[activeItem].classList.remove("active");
        
        thumbnails[activeItem].classList.remove("thumb-active");

        activeItem--;

        getImage[activeItem].classList.add("active");
        getTitle[activeItem].classList.add("active");
        getText[activeItem].classList.add("active");
        thumbnails[activeItem].classList.add("thumb-active");
    }
    else {

        getImage[activeItem].classList.remove("active");
        getTitle[activeItem].classList.remove("active");
        getText[activeItem].classList.remove("active");
        
        thumbnails[activeItem].classList.remove("thumb-active");

        activeItem = imageArray.length -1;

        getImage[activeItem].classList.add("active");
        getTitle[activeItem].classList.add("active");
        getText[activeItem].classList.add("active");
        thumbnails[activeItem].classList.add("thumb-active");
    }
}
function changeImage (i) {
    thumbnails[i].addEventListener("click", function(){
        if (activeItem != thumbnails[i]) {
            getImage[activeItem].classList.remove("active");
            getTitle[activeItem].classList.remove("active");
            getText[activeItem].classList.remove("active");
            thumbnails[activeItem].classList.remove("thumb-active");
    
            activeItem = i
    
            getImage[activeItem].classList.add("active");
            getTitle[activeItem].classList.add("active");
            getText[activeItem].classList.add("active");
            thumbnails[activeItem].classList.add("thumb-active");
        }
    
    })
}