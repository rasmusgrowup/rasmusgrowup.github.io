const images = document.querySelectorAll('.anim');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `animation-1 1.5s ${entry.target.dataset.delay} both cubic-bezier(0.215, 0.61, 0.355, 1)`;}
    })
})

    images.forEach(image => {
        observer.observe(image)
    })
