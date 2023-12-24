

    // --- -- Page Loading -- ---

window.addEventListener("load", () => {
    const loader = document.getElementById('loading');
    loader.classList.add('page-loder');

    loader.addEventListener("transition", () => {
        document.body.removeChild(loader);
    });
});

   // ------- Owl Carousel ----------
    $('#comment_slider').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        mouseDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

// ------- Back to Top Scroll Button -----------

let caleScrollValue = () => {
    let scrollProcess = document.getElementById('sc_btn');
    let processValue = document.querySelector('#sc_value');

    let pos = document.documentElement.scrollTop;
    console.log(pos);

    let caleHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / caleHeight);

    if(pos > 100){
        scrollProcess.style.display = "grid";
    }else{
        scrollProcess.style.display = "none";
    }
    
    scrollProcess.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProcess.style.background = `conic-gradient(#F3274C ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = caleScrollValue;
window.onload = caleScrollValue;




    // -------- POPUP -----------

let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add("open-popup");
}


function closePopup(){
    popup.classList.remove("open-popup");
}


