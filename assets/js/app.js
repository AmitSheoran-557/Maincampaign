// ========================== businesses-generate-slider-js =================================
$(".businesses-generate-slider").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
//   =========================== footer-slider-js ====================================

$(".slider-footer").slick({
    dots: false,
    cssEase: 'linear',
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },

    ]
});
// =============================== navbar - JS =========================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menuList.classList.toggle("right-0");
    menubarFirst.classList.toggle("rotate-[40deg]");
    menubarSecond.classList.toggle("hidden");
    menubarThird.classList.toggle("-rotate-[40deg]");
    body.classList.toggle("overflow-lg-hidden")
})

// ========================= tab section js===================================
document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.querySelector(".tabs");

    function initializeTabs(tabsContainer) {
        const tabList = tabsContainer.querySelector(".tab-list");
        const tabItems = Array.from(tabList.children);
        const tabContent = tabsContainer.querySelector(".tab-content");
        const tabContentItems = Array.from(tabContent.children);
        let activeIndex = 0; // Initially set to 0 for the first child

        function setActiveTab(index) {
            tabItems.forEach(item => item.classList.remove("active"));
            tabContentItems.forEach(content => content.classList.remove("active"));
            tabItems[index].classList.add("active");
            tabContentItems[index].classList.add("active");
        }

        tabItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                activeIndex = index;
                setActiveTab(index);
            });
        });

        setActiveTab(activeIndex); // Initialize with the first child active
    }

    initializeTabs(tabsContainer);
});


// ====================================================================
document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.querySelector(".tabs-2");

    function initializeTabs(tabsContainer) {
        const tabList = tabsContainer.querySelector(".tab-list-2");
        const tabItems = Array.from(tabList.children);
        const tabContent = tabsContainer.querySelector(".tab-content-2");
        const tabContentItems = Array.from(tabContent.children);
        let activeIndex = 0; // Initially set to 0 for the first child

        function setActiveTab(index) {
            tabItems.forEach(item => item.classList.remove("active"));
            tabContentItems.forEach(content => content.classList.remove("active"));
            tabItems[index].classList.add("active");
            tabContentItems[index].classList.add("active");
        }

        tabItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                activeIndex = index;
                setActiveTab(index);
            });
        });

        setActiveTab(activeIndex); // Initialize with the first child active
    }

    initializeTabs(tabsContainer);
});
