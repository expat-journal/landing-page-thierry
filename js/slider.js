class ImageItem {
    constructor(imageName) {
        this.imageDiv = document.createElement('div')
        this.imageDiv.classList.add("image");
        this.img = document.createElement('img');
        this.img.src = imageDirectory + imageName;
        this.img.alt = altText;
        
        this.imageDiv.appendChild(this.img);
    }

    showImage() {
        document.querySelector('.bottom-content').appendChild(this.imageDiv);
    }

    removeImage() {
        document.querySelector('.bottom-content').removeChild(this.imageDiv);
    }
}

//event listener to scroll down page when clickin on down arrow
let arrow = document.querySelector(".arrow > img");
arrow.addEventListener('click', function() {
    window.scrollBy(0, 500);
})


 //functio to display next 4 images
function showFourImages(imageArray) {

    for(let i=imageIndex; i < imageIndex+4; i++) {
        imageArray[i % imageArray.length].showImage();
    }
}

//function to remove current 4 images
function removeFourImages(imageArray) {
    for (let i=imageIndex; i < imageIndex+4; i++) {
        imageArray[i % imageArray.length].removeImage();
    }
    imageIndex = (imageIndex + 4) % imageArray.length; //update starting index of 4 new images to display
}

//function to do a permanent image sliding 4 at a time
function cycleImages(imageArray) {

    showFourImages(imageArray);
    setInterval(function() {
        removeFourImages(imageArray);
        showFourImages(imageArray);
    }, 4000);
}


//Hardcoding images into objects
const imageDirectory = "./img/carousel/";
const altText = "Images of people or places abroad"

let imageIndex = 0
imageArray = []

imageArray.push(new ImageItem("deanna-ritchie-227649-unsplash.jpg"));
imageArray.push(new ImageItem("clem-onojeghuo-110452-unsplash.jpg"));
imageArray.push(new ImageItem("anders-jilden-307322-unsplash.jpg"));
imageArray.push(new ImageItem("jacek-dylag-579738-unsplash.jpg"));
imageArray.push(new ImageItem("juan-rojas-349568-unsplash.jpg"));
imageArray.push(new ImageItem("jovi-waqa-186174-unsplash.jpg"));
imageArray.push(new ImageItem("kazuend-32605-unsplash.jpg"));
imageArray.push(new ImageItem("mantas-hesthaven-135478-unsplash.jpg"));
imageArray.push(new ImageItem("satyam-bhuyan-1456723-unsplash.jpg"));
imageArray.push(new ImageItem("vaida-tamosauskaite-85608-unsplash.jpg"));


cycleImages(imageArray);
