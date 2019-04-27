//Div containing sliding images are stored as objects fron the ImageItem class
class ImageItem {
    constructor(fileName, index) {
        this.imageDiv = document.createElement('div')
        this.imageDiv.classList.add("image");
        this.img = document.createElement('img');
        this.img.src = imageDirectory + fileName;
        this.img.alt = altText;
        this.index = index;

        this.imageDiv.appendChild(this.img);
    }


    //Show Next Image
    showImage() {
        document.querySelector('.bottom-content').appendChild(this.imageDiv);
        this.img.style.opacity = 0;
        this.fadeIn();
    }

    //Remove and show next image
    switchImage() {
        this.fadeOutAndIn()
    }

    //Fading old image out and fading new image in
    fadeOutAndIn() {
        let opacity = 1;
        let fadeOutTimer = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(fadeOutTimer);
                document.querySelector('.bottom-content').removeChild(this.imageDiv);
                imageArray[(this.index + 4) % imageArray.length].showImage() // Display and fading in new image
            }
            else {
                opacity -= 0.1;
                this.img.style.opacity = opacity;
            }
        }, 50);
    }

    //fading new image in
    fadeIn() {

        let opacity = 0.1;
        let fadeInTimer = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeInTimer)
            }
            else {
                opacity += 0.1;
                this.img.style.opacity = opacity;
            }

        }, 70);
    }
}

//event listener to scroll down page when clicking on center down arrow
const arrow = document.querySelector(".arrow > img");
arrow.addEventListener('click', function () {
    window.scrollBy(0, 500);
})

//function switch to next four images
function switchImages(imageArray) {

    let i = imageIndex;
    imageArray[i].switchImage();
    imageArray[(i + 1) % imageArray.length].switchImage();
    imageArray[(i + 2) % imageArray.length].switchImage();
    imageArray[(i + 3) % imageArray.length].switchImage();

    imageIndex = (imageIndex + 4) % imageArray.length; //update starting index of 4 new images to display
}

//Show first 4 pages when page initializes
function showFirstImages() {
    let endIndex = imageIndex + 4;
    for (let i=0; i<endIndex; i++) {
        document.querySelector('.bottom-content').appendChild(imageArray[i].imageDiv);
    }
}

//function to cycle through images permanently and four by four
function cycleImages(imageArray) {

    showFirstImages();
    setInterval(function () {
        switchImages(imageArray);
    }, 5000);
}


//Hardcoding images into objects
const imageDirectory = "./img/carousel/";
const altText = "Images of people or places abroad"


imageArray = []

imageArray.push(new ImageItem("deanna-ritchie-227649-unsplash.jpg", 0));
imageArray.push(new ImageItem("clem-onojeghuo-110452-unsplash.jpg", 1));
imageArray.push(new ImageItem("anders-jilden-307322-unsplash.jpg", 2));
imageArray.push(new ImageItem("jacek-dylag-579738-unsplash.jpg", 3));
imageArray.push(new ImageItem("juan-rojas-349568-unsplash.jpg", 4));
imageArray.push(new ImageItem("jovi-waqa-186174-unsplash.jpg", 5));
imageArray.push(new ImageItem("kazuend-32605-unsplash.jpg", 6));
imageArray.push(new ImageItem("mantas-hesthaven-135478-unsplash.jpg", 7));
imageArray.push(new ImageItem("satyam-bhuyan-1456723-unsplash.jpg", 8));
imageArray.push(new ImageItem("vaida-tamosauskaite-85608-unsplash.jpg", 9));

let imageIndex = 0
cycleImages(imageArray);
