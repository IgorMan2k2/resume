window.addEventListener("scroll", function () {
    let header = this.document.querySelector('.header');
    if (window.scrollY > 0) { header.classList.add("sticky") }
    else { header.classList.remove("sticky"); }
})

const tabs = document.querySelectorAll('.album__tab__button');
const contents = document.querySelectorAll('.album__tab__icon');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {
        for (let c = 0; c < contents.length; c++) {
            contents[c].classList.remove('content-active');
        }
        contents[i].classList.add('content-active');
    });
}

let modal = document.querySelector('.modal');
let btn = document.querySelector('.contacts__btn');
let closer = document.querySelector('.modal__closer');

btn.onclick = function () {
    modal.style.display = "block";
}

closer.onclick = function () {
    modal.style.display = "none";
}

const defaultOptions = {
    wrapperSelector: ".slider-wrapper",
    itemSelector: ".slider-item",
    prevArrow: "prev",
    nextArrow: "next",
};

function slider(selector, options = {}) {
    const mergedOptions = { ...defaultOptions, ...options };
    const {
        wrapperSelector,
        itemSelector,
        prevArrow,
        nextArrow,
        slidesPerPage,
        slidesPerSlide,
        timeout,
        autoSlide,
        loop,
    } = mergedOptions;
    const prevArrowButton = document.getElementById(prevArrow);
    const nextArrowButton = document.getElementById(nextArrow);
    const slider = document.getElementById(selector);
    const wrapper = slider.querySelector(wrapperSelector);
    const items = wrapper.querySelectorAll(itemSelector);
    const itemsCount = items.length;
    let sliderWidth, itemWidth, position, isStart, intervalID, slideIndex = 0;


    const caluclateSliderItemWidth = () => {
        const previousWidth = itemWidth;

        sliderWidth = slider.offsetWidth;
        itemWidth = sliderWidth / slidesPerPage;
        items.forEach((item) => (item.style.width = `${itemWidth}px`));
        const newPosition = isNaN(position / previousWidth)
            ? 0
            : (position / previousWidth) * itemWidth;
        position = newPosition;
        wrapper.classList.add("no-anim");
        moveWrapper();

        setTimeout(() => {
            wrapper.classList.remove("no-anim");
        }, 0);
    };

    caluclateSliderItemWidth();

    window.addEventListener("resize", caluclateSliderItemWidth);

    prevArrowButton.addEventListener("click", () => {
        if (autoSlide) {
            clearInterval(intervalID);
            triggerAutoSlide();
        }
        calculateDescendingDirection();
    });

    function calculateDescendingDirection() {
        slideIndex--;

        const leftItems = Math.abs(position / itemWidth);

        position +=
            leftItems > slidesPerSlide
                ? itemWidth * slidesPerSlide
                : itemWidth * leftItems;

        moveWrapper();
    }

    nextArrowButton.addEventListener("click", () => {
        if (autoSlide) {
            clearInterval(intervalID);
            triggerAutoSlide();
        }
        calculateAscendingDirection();
    });

    function calculateAscendingDirection() {
        slideIndex++;
        const leftItems =
            itemsCount - (Math.abs(position / itemWidth) + slidesPerPage);
        position -=
            leftItems > slidesPerSlide
                ? itemWidth * slidesPerSlide
                : itemWidth * leftItems;
        moveWrapper();
    }

    function moveWrapper() {
        wrapper.style.transform = `translateX(${position}px)`;
    }


    function triggerAutoSlide() {
        intervalID = setInterval(() => {
            isStart = isStart ?? true;
            if (autoSlide && !loop) {
                isNoLoopSliderTurnEnd();
                return;
            } else if (autoSlide && loop) {
                isStart
                    ? calculateAscendingDirection()
                    : calculateDescendingDirection();
            }
        }, timeout ?? 1000);
    }
}

slider("slider", {
    wrapperSelector: ".slider-wrapper",
    itemSelector: ".slider-item",
    prevArrow: "prev",
    nextArrow: "next",
    slidesPerSlide: 1,
    slidesPerPage: 2,
    autoSlide: true,
    timeout: 2000,
    loop: true,
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const burgerLink1 = document.getElementById('b1');
const burgerLink2 = document.getElementById('b2');
const burgerLink3 = document.getElementById('b3');
const burgerLink4 = document.getElementById('b4');
const burgerLink5 = document.getElementById('b5');
const burgerLink6 = document.getElementById('b6');

burger.addEventListener("click", function (e) {
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
    menu.classList.toggle('menu-active');
    header.classList.toggle('header-active');

});

burgerLink1.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}

burgerLink2.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}

burgerLink3.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}

burgerLink4.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}

burgerLink5.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}

burgerLink6.onclick = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('menu-active');
        header.classList.remove('header-active');
    };
}