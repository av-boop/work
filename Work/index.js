const toggle = document.querySelector(".toggle");

const navigation = document.querySelector(".navigation");

const imageSlide = document.querySelectorAll('.image-slide');

const thumbnail = document.querySelectorAll('.thumbnail');

toggle.addEventListener("click", () => {
    
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    
})

const currentactiveImage = (e, imgClicked = false) => {
    thumbnail.forEach(image => {
        image.classList.remove('active');
    })
    if  (imgClicked) {
        document.getElementById(e.target.id).classList.add("active");
    } else {
        document.getElementById(`img${e.target.id.substring(1,2)}`).classList.add("active");
    }
    
}

imageSlide.forEach(slide => {
    slide.addEventListener("click", currentactiveImage)
});

const moveToSelectedImage = (e) => {
    document.getElementById(`s${e.target.id.substring(3,4)}`).checked = true;
    currentactiveImage(e, true)
}

thumbnail.forEach(thumb => {
    thumb.addEventListener("click", moveToSelectedImage)
});
