function menubar() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        if (toggle && nav) {
            const eventTypes = ["click", "touchend"];
            eventTypes.forEach((event) => {
                toggle.addEventListener(
                    event,
                    (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (nav.classList.contains("show-menu")) {
                            nav.classList.remove("show-menu");
                            toggle.classList.remove("show-icon");
                            if (window.innerWidth <= 1200) {
                                nav.style.display = "none";
                                console.log("1: 500");
                            } else {
                                nav.style.display = "flex";
                                console.log("1: 1500");
                            }
                            window.addEventListener("resize", function () {
                                if (window.innerWidth <= 1200) {
                                    nav.style.display = "none";
                                    console.log("resize 1:500");
                                } else {
                                    nav.style.display = "flex";
                                    console.log("resize 1:1500");
                                }
                            });
                        } else {
                            nav.classList.add("show-menu");
                            toggle.classList.add("show-icon");
                            if (window.innerWidth <= 1200) {
                                nav.style.display = "flex";
                                console.log("2: 500");
                            } else {
                                nav.style.display = "flex";
                                console.log("2: 1500");
                            }
                            window.addEventListener("resize", function () {
                                if (window.innerWidth <= 1200) {
                                    toggle.classList.remove("show-icon");
                                    nav.classList.remove("show-menu");
                                    nav.style.display = "none";
                                    console.log("resize 2:500");
                                } else {
                                    nav.style.display = "flex";
                                    console.log("resize 2:1500");
                                }
                            });
                        }
                    },
                    { passive: false }
                );
            });
        }
    };
    showMenu("navbar__toggleBtn", "navbar__menu");
    let links = document.querySelectorAll(".nav__link");
    links.forEach((link) => {
        const toggle = document.getElementById("navbar__toggleBtn");
        const nav = document.getElementById("navbar__menu");
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let targetId = link.getAttribute("href");
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                nav.classList.remove("show-menu");
                toggle.classList.remove("show-icon");
                if (window.innerWidth <= 1200) {
                    nav.style.display = "none";
                    console.log("4");
                } else {
                    nav.style.display = "flex";
                    console.log("5");
                }
                window.addEventListener("resize", function () {
                    if (window.innerWidth <= 1200) {
                        nav.style.display = "none";
                        console.log("resize 4");
                    } else {
                        nav.style.display = "flex";
                        console.log("resize 5");
                    }
                });
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
    let mailBtn = document.querySelector(".navbar__mailtoBtn--smallScreen");
    mailBtn.addEventListener("click", (e) => {
        const toggle = document.getElementById("navbar__toggleBtn");
        const nav = document.getElementById("navbar__menu");
        e.preventDefault();
        let targetId = mailBtn.getAttribute("href");
        let targetElement = document.querySelector(targetId);
        if (targetElement) {
            nav.classList.remove("show-menu");
            toggle.classList.remove("show-icon");
            if (window.innerWidth <= 1200) {
                nav.style.display = "none";
                console.log("4");
            } else {
                nav.style.display = "flex";
                console.log("5");
            }
            window.addEventListener("resize", function () {
                if (window.innerWidth <= 1200) {
                    nav.style.display = "none";
                    console.log("resize 4");
                } else {
                    nav.style.display = "flex";
                    console.log("resize 5");
                }
            });
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
    const activeMenu = window.location.pathname;
    const menuLinks = document.querySelectorAll("a.menuLink");
    menuLinks.forEach((link) => {
        if (link.href.includes(`${activeMenu}`)) {
            link.addEventListener("click", function () {
                menuLinks.forEach((item) => item.classList.remove("navbar__active"));
                link.classList.add("navbar__active");
            });
        }
    });
}
function swiperCode() {
    var swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        effect: "cube",
        grabCursor: true,
        speed: 1500,
        autoplay: { delay: 14000, disableOnInteraction: false },
        freeMode: false,
        mousewheel: { releaseOnEdges: true },
        touch: { passive: true },
        preventInteractionOnTransition: true,
        pagination: { el: ".swiper-pagination" },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        on: {
            slideChange: function () {
                const index_currentSlide = this.realIndex;
                var row1;
                var row2;
                var row3;
                var row4;
                if (index_currentSlide === 0) {
                    row1 = "";
                    row1 = row1 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
                    row1 = row1 + '<span class="loaderSwipe"></span>';
                    row1 = row1 + "</div>";
                    $("#slide1").html(row1);
                    setTimeout(slide1, 1500);
                } else if (index_currentSlide === 1) {
                    row2 = "";
                    row2 = row2 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
                    row2 = row2 + '<span class="loaderSwipe"></span>';
                    row2 = row2 + "</div>";
                    $("#slide2").html(row2);
                    setTimeout(slide2, 1500);
                } else if (index_currentSlide === 2) {
                    row3 = "";
                    row3 = row3 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
                    row3 = row3 + '<span class="loaderSwipe"></span>';
                    row3 = row3 + "</div>";
                    $("#slide3").html(row3);
                    setTimeout(slide3, 1500);
                } else if (index_currentSlide === 3) {
                    row4 = "";
                    row4 = row4 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
                    row4 = row4 + '<span class="loaderSwipe"></span>';
                    row4 = row4 + "</div>";
                    $("#slide4").html(row4);
                    setTimeout(slide4, 1500);
                } else {
                    alert("something went wrong");
                }
                function slide1() {
                    row1 = row1 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/1/index.html" frameborder="0" width="300" height="250"></iframe>';
                    $("#slide1").html(row1);
                }
                function slide2() {
                    row2 = row2 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/2/index.html" frameborder="0" width="300" height="250"></iframe>';
                    $("#slide2").html(row2);
                }
                function slide3() {
                    row3 = row3 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/3/index.html" frameborder="0" width="300" height="250"></iframe>';
                    $("#slide3").html(row3);
                }
                function slide4() {
                    row4 = row4 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/4/index.html" frameborder="0" width="300" height="250"></iframe>';
                    $("#slide4").html(row4);
                }
            },
        },
    });
}
function serviceCode() {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth >= 1026) {
        gsap.from(".displayAd__head", { x: "20%", y: "15%", stagger: 0.2, opacity: 0, scrollTrigger: { trigger: ".displayAd", start: "top 91%", toggleActions: "play none none none" } });
        var dynamicTl = gsap.timeline({ scrollTrigger: { trigger: ".dynamicAd", start: "top 91%", toggleActions: "play none none none" } });
        dynamicTl
            .from(".dynamicAd__head", { x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .to(".dynamicAd__images--one__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" })
            .to(".dynamicAd__ams--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__ams--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1")
            .to(".dynamicAd__images--two__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__rot--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__rot--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1")
            .to(".dynamicAd__images--three__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__den--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__den--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1");
    } else {
        gsap.from(".displayAd__head", { y: "30%", stagger: 0.2, opacity: 0, scrollTrigger: { trigger: ".displayAd", start: "top 80%", toggleActions: "play none none none" } });
        var dynamicTl = gsap.timeline({ scrollTrigger: { trigger: ".dynamicAd", start: "top 80%", toggleActions: "play none none none" } });
        dynamicTl
            .from(".dynamicAd__head", { y: "15%", stagger: 0.2, opacity: 0 })
            .to(".dynamicAd__images--one__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" })
            .to(".dynamicAd__ams--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__ams--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1")
            .to(".dynamicAd__images--two__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__rot--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__rot--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1")
            .to(".dynamicAd__images--three__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__den--arrow", { duration: 0.2, opacity: 1, ease: "power2.out" }, "-=0.1")
            .to(".dynamicAd__den--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: "power2.inOut" }, "-=0.1");
    }
    let video = document.querySelector(".weboramaAd__bg--content");
    let video1 = document.querySelector(".video-one");
    let video2 = document.querySelector(".video-two");
    let video3 = document.querySelector(".video-three");
    let apto = document.getElementById("apto");
    let interstial = document.getElementById("interstial");
    let swipeCubeWeb = document.getElementById("swipeCubeWeb");
    video.pause();
    function videoPlayPause() {
        if (!video.play()) {
            video1.play();
            video1.addEventListener("ended", function myHandler1() {
                video2.play();
                video1.style.display = "none";
                video3.style.display = "none";
                video2.style.display = "block";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "#024783";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#000000";
                interstial.style.color = "#ffffff";
                swipeCubeWeb.style.color = "#000000";
                video2.addEventListener("ended", function myHandler2() {
                    video3.play();
                    video1.style.display = "none";
                    video2.style.display = "none";
                    video3.style.display = "block";
                    apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                    interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                    swipeCubeWeb.style.background = "#024783";
                    apto.style.color = "#000000";
                    interstial.style.color = "#000000";
                    swipeCubeWeb.style.color = "#ffffff";
                    video3.addEventListener("ended", function myHandler3() {
                        video1.play();
                        video2.style.display = "none";
                        video3.style.display = "none";
                        video1.style.display = "block";
                        apto.style.background = "#024783";
                        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                        apto.style.color = "#ffffff";
                        interstial.style.color = "#000000";
                        swipeCubeWeb.style.color = "#000000";
                    });
                });
            });
        } else {
            video1.play();
            video1.addEventListener("ended", function myHandler1() {
                video2.play();
                video1.style.display = "none";
                video3.style.display = "none";
                video2.style.display = "block";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "#024783";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#000000";
                interstial.style.color = "#ffffff";
                swipeCubeWeb.style.color = "#000000";
                video2.addEventListener("ended", function myHandler2() {
                    video3.play();
                    video1.style.display = "none";
                    video2.style.display = "none";
                    video3.style.display = "block";
                    apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                    interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                    swipeCubeWeb.style.background = "#024783";
                    apto.style.color = "#000000";
                    interstial.style.color = "#000000";
                    swipeCubeWeb.style.color = "#ffffff";
                    video3.addEventListener("ended", function myHandler3() {
                        video1.play();
                        video2.style.display = "none";
                        video3.style.display = "none";
                        video1.style.display = "block";
                        apto.style.background = "#024783";
                        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                        apto.style.color = "#ffffff";
                        interstial.style.color = "#000000";
                        swipeCubeWeb.style.color = "#000000";
                    });
                });
            });
        }
    }
    var arrowLeft = document.querySelector(".weboramaAd__bg--prev");
    var arrowRight = document.querySelector(".weboramaAd__bg--next");
    var video1Web = document.querySelector(".video-one");
    var video2Web = document.querySelector(".video-two");
    var video3Web = document.querySelector(".video-three");
    video1Web.addEventListener("playing", function () {
        arrowRight.addEventListener("click", function () {
            video1.pause();
            video3.pause();
            video1.style.display = "none";
            video2.style.display = "block";
            video3.style.display = "none";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "#024783";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#000000";
            interstial.style.color = "#ffffff";
            swipeCubeWeb.style.color = "#000000";
            video2.currentTime = 0;
            video2.play();
            video2.addEventListener("ended", function myHandler(e) {
                video1.style.display = "none";
                video2.style.display = "none";
                video3.style.display = "block";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                swipeCubeWeb.style.background = "#024783";
                apto.style.color = "#000000";
                interstial.style.color = "#000000";
                swipeCubeWeb.style.color = "#ffffff";
                video3.play();
            });
        });
        arrowLeft.addEventListener("click", function () {
            video1.pause();
            video2.pause();
            video1.style.display = "none";
            video2.style.display = "none";
            video3.style.display = "block";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "#024783";
            apto.style.color = "#000000";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#ffffff";
            video3.currentTime = 0;
            video3.play();
            video3.addEventListener("ended", function myHandler(e) {
                video1.style.display = "block";
                video2.style.display = "none";
                video3.style.display = "none";
                apto.style.background = "#024783";
                interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#ffffff";
                interstial.style.color = "#000000";
                swipeCubeWeb.style.color = "#000000";
                video1.play();
            });
        });
    });
    video2Web.addEventListener("playing", function () {
        arrowRight.addEventListener("click", function () {
            video1.pause();
            video2.pause();
            video1.style.display = "none";
            video2.style.display = "none";
            video3.style.display = "block";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "#024783";
            apto.style.color = "#000000";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#ffffff";
            video3.currentTime = 0;
            video3.play();
            video3.addEventListener("ended", function myHandler(e) {
                video1.style.display = "block";
                video2.style.display = "none";
                video3.style.display = "none";
                apto.style.background = "#024783";
                interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#ffffff";
                interstial.style.color = "#000000";
                swipeCubeWeb.style.color = "#000000";
                video1.play();
            });
        });
        arrowLeft.addEventListener("click", function () {
            video2.pause();
            video3.pause();
            video1.style.display = "block";
            video2.style.display = "none";
            video3.style.display = "none";
            apto.style.background = "#024783";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#ffffff";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#000000";
            video1.currentTime = 0;
            video1.play();
            video1.addEventListener("ended", function myHandler(e) {
                video1.style.display = "none";
                video2.style.display = "block";
                video3.style.display = "none";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "#024783";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#000000";
                interstial.style.color = "#ffffff";
                swipeCubeWeb.style.color = "#000000";
                video2.play();
            });
        });
    });
    video3Web.addEventListener("playing", function () {
        arrowRight.addEventListener("click", function () {
            video2.pause();
            video3.pause();
            video1.style.display = "block";
            video2.style.display = "none";
            video3.style.display = "none";
            apto.style.background = "#024783";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#ffffff";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#000000";
            video1.currentTime = 0;
            video1.play();
            video1.addEventListener("ended", function myHandler(e) {
                video1.style.display = "none";
                video2.style.display = "block";
                video3.style.display = "none";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "#024783";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                apto.style.color = "#000000";
                interstial.style.color = "#ffffff";
                swipeCubeWeb.style.color = "#000000";
                video2.play();
            });
        });
        arrowLeft.addEventListener("click", function () {
            video1.pause();
            video3.pause();
            video1.style.display = "none";
            video2.style.display = "block";
            video3.style.display = "none";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "#024783";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#000000";
            interstial.style.color = "#ffffff";
            swipeCubeWeb.style.color = "#000000";
            video2.currentTime = 0;
            video2.play();
            video2.addEventListener("ended", function myHandler(e) {
                video1.style.display = "none";
                video2.style.display = "none";
                video3.style.display = "block";
                apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                swipeCubeWeb.style.background = "#024783";
                apto.style.color = "#000000";
                interstial.style.color = "#000000";
                swipeCubeWeb.style.color = "#ffffff";
                video3.play();
            });
        });
    });
    if (window.innerWidth >= 1026) {
        var weboramaAdTl = gsap.timeline({ scrollTrigger: { trigger: ".weboramaAd", start: "top 91%", toggleActions: "play none none none" } });
        weboramaAdTl.to(".weboramaAd__head", { x: 0, y: 0, stagger: 0.2, opacity: 1, onComplete: videoPlayPause }).to(".weboramaAd__devices", { stagger: 0.2, opacity: 1 });
    } else {
        var weboramaAdTl = gsap.timeline({ scrollTrigger: { trigger: ".weboramaAd", start: "top 80%", toggleActions: "play none none none" } });
        weboramaAdTl.fromTo(".weboramaAd__head", { y: "15%", opacity: 0, x: 0 }, { y: 0, stagger: 0.2, opacity: 1, onComplete: videoPlayPause }).to(".weboramaAd__devices", { stagger: 0.2, opacity: 1 });
    }
    var screenWidth = window.innerWidth;
    var shadowAdTl = gsap.timeline({ scrollTrigger: { trigger: ".shadowAd", start: "top 91%", toggleActions: "play none none none" } });
    if (screenWidth > 1600) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "94%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 1400 && screenWidth <= 1600) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "94%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 1200 && screenWidth <= 1400) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "94%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 1025 && screenWidth <= 1200) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "93%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 900 && screenWidth <= 1025) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "94%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 575 && screenWidth <= 900) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "93%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else if (screenWidth > 100 && screenWidth <= 575) {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "93%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-6%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "44%" }, "sc2");
    } else {
        shadowAdTl
            .from(".shadowAd__head", { duration: 0.5, x: "20%", y: "15%", stagger: 0.2, opacity: 0 })
            .add("sc0")
            .to(".after_1", { duration: 0.5, width: "100%" }, "sc0")
            .to(".scroller", { duration: 0.5, left: "95%" }, "sc0")
            .add("sc1")
            .to(".after_1", { duration: 1, width: "0%" }, "sc1")
            .to(".scroller", { duration: 1, left: "-5%" }, "sc1")
            .add("sc2")
            .to(".after_1", { duration: 0.5, width: "50%" }, "sc2")
            .to(".scroller", { duration: 0.5, left: "45%" }, "sc2");
    }
}
function weboramaCode() {
    let apto = document.getElementById("apto");
    let interstial = document.getElementById("interstial");
    let swipeCubeWeb = document.getElementById("swipeCubeWeb");
    let videoOne = document.querySelector(".video-one");
    let videoTwo = document.querySelector(".video-two");
    let videoThree = document.querySelector(".video-three");
    apto.addEventListener("click", function () {
        videoOne.style.display = "block";
        videoTwo.style.display = "none";
        videoThree.style.display = "none";
        apto.style.background = "#024783";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        apto.style.color = "#ffffff";
        interstial.style.color = "#000000";
        swipeCubeWeb.style.color = "#000000";
        videoOne.currentTime = 0;
        videoOne.play();
        videoOne.addEventListener("ended", function myHandler(e) {
            videoOne.style.display = "none";
            videoTwo.style.display = "block";
            videoThree.style.display = "none";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "#024783";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#000000";
            interstial.style.color = "#ffffff";
            swipeCubeWeb.style.color = "#000000";
            videoTwo.play();
        });
    });
    interstial.addEventListener("click", function () {
        videoOne.style.display = "none";
        videoTwo.style.display = "block";
        videoThree.style.display = "none";
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "#024783";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        apto.style.color = "#000000";
        interstial.style.color = "#ffffff";
        swipeCubeWeb.style.color = "#000000";
        videoTwo.currentTime = 0;
        videoTwo.play();
        videoTwo.addEventListener("ended", function myHandler(e) {
            videoOne.style.display = "none";
            videoTwo.style.display = "none";
            videoThree.style.display = "block";
            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "#024783";
            apto.style.color = "#000000";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#ffffff";
            videoThree.play();
        });
    });
    swipeCubeWeb.addEventListener("click", function () {
        videoOne.style.display = "none";
        videoTwo.style.display = "none";
        videoThree.style.display = "block";
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "#024783";
        apto.style.color = "#000000";
        interstial.style.color = "#000000";
        swipeCubeWeb.style.color = "#ffffff";
        videoThree.currentTime = 0;
        videoThree.play();
        videoThree.addEventListener("ended", function myHandler(e) {
            videoOne.style.display = "block";
            videoTwo.style.display = "none";
            videoThree.style.display = "none";
            apto.style.background = "#024783";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            apto.style.color = "#ffffff";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#000000";
            videoOne.play();
        });
    });
}
function shadowCode() {
    let active = false;
    let selectOne = document.getElementById("shadowAd__select--one");
    let selectTwo = document.getElementById("shadowAd__select--two");
    let selectThree = document.getElementById("shadowAd__select--three");
    var beforeOne = document.getElementsByClassName("before_1");
    var afterOne = document.getElementsByClassName("after_1");
    var beforeTwo = document.getElementsByClassName("before_2");
    var afterTwo = document.getElementsByClassName("after_2");
    var beforeThree = document.getElementsByClassName("before_3");
    var afterThree = document.getElementsByClassName("after_3");
    selectOne.addEventListener("click", function () {
        beforeOne[0].style.display = "block";
        afterOne[0].style.display = "block";
        beforeTwo[0].style.display = "none";
        afterTwo[0].style.display = "none";
        beforeThree[0].style.display = "none";
        afterThree[0].style.display = "none";
        selectOne.style.background = "#5636a6";
        selectTwo.style.background = "#fff";
        selectThree.style.background = "#fff";
        selectOne.style.color = "#fff";
        selectTwo.style.color = "black";
        selectThree.style.color = "black";
        selectOne.style.border = "1px solid #000";
        selectTwo.style.border = "1px solid #000";
        selectThree.style.border = "1px solid #000";
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "45%";
    });
    selectTwo.addEventListener("click", function () {
        beforeOne[0].style.display = "none";
        afterOne[0].style.display = "none";
        beforeTwo[0].style.display = "block";
        afterTwo[0].style.display = "block";
        beforeThree[0].style.display = "none";
        afterThree[0].style.display = "none";
        selectOne.style.background = "#fff";
        selectTwo.style.background = "#5636a6";
        selectThree.style.background = "#fff";
        selectOne.style.color = "black";
        selectTwo.style.color = "#fff";
        selectThree.style.color = "black";
        selectOne.style.border = "1px solid #000";
        selectTwo.style.border = "1px solid #000";
        selectThree.style.border = "1px solid #000";
        document.querySelector(".after_2").style.width = "50%";
        document.querySelector(".scroller").style.left = "45%";
    });
    selectThree.addEventListener("click", function () {
        beforeOne[0].style.display = "none";
        afterOne[0].style.display = "none";
        beforeTwo[0].style.display = "none";
        afterTwo[0].style.display = "none";
        beforeThree[0].style.display = "block";
        afterThree[0].style.display = "block";
        selectOne.style.background = "#fff";
        selectTwo.style.background = "#fff";
        selectThree.style.background = "#5636a6";
        selectOne.style.color = "black";
        selectTwo.style.color = "black";
        selectThree.style.color = "#fff";
        selectOne.style.border = "1px solid #000";
        selectTwo.style.border = "1px solid #000";
        selectThree.style.border = "1px solid #000";
        document.querySelector(".after_3").style.width = "50%";
        document.querySelector(".scroller").style.left = "45%";
    });
    document.querySelector(".scroller").addEventListener("mousedown", function () {
        active = true;
        document.querySelector(".scroller").classList.add("scrolling");
    });
    document.body.addEventListener("mouseup", function () {
        active = false;
        document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("mouseleave", function () {
        active = false;
        document.querySelector(".scroller").classList.remove("scrolling");
    });
    $(document).bind("touchmove mousemove", function (e) {
        if (!active) return;
        let x = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
        x -= document.querySelector(".wrapper").getBoundingClientRect().left;
        scrollIt(x);
    });
    function scrollIt(x) {
        var beforeOne = document.getElementsByClassName("before_1");
        var afterOne = document.getElementsByClassName("after_1");
        var beforeTwo = document.getElementsByClassName("before_2");
        var afterTwo = document.getElementsByClassName("after_2");
        var beforeThree = document.getElementsByClassName("before_3");
        var afterThree = document.getElementsByClassName("after_3");
        window.onload = function (e) {
            var screenWidth = window.innerWidth;
            if (screenWidth > 1600) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else if (screenWidth > 1200 && screenWidth <= 1600) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else if (screenWidth > 1025 && screenWidth <= 1200) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else if (screenWidth > 900 && screenWidth <= 1025) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else if (screenWidth > 575 && screenWidth <= 900) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else if (screenWidth > 100 && screenWidth <= 575) {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            } else {
                document.querySelector(".after_1").style.width = "50%";
                document.querySelector(".scroller").style.left = "44%";
            }
        };
        if (beforeOne[0].clientWidth > 0 || afterOne[0].clientWidth > 0) {
            let transform = Math.max(0, Math.min(x, document.querySelector(".wrapper").offsetWidth));
            document.querySelector(".after_1").style.width = transform + "px";
            document.querySelector(".scroller").style.left = transform - 25 + "px";
        }
        if (beforeTwo[0].clientWidth > 0 || afterTwo[0].clientWidth > 0) {
            let transform = Math.max(0, Math.min(x, document.querySelector(".wrapper").offsetWidth));
            document.querySelector(".after_2").style.width = transform + "px";
            document.querySelector(".scroller").style.left = transform - 25 + "px";
        }
        if (beforeThree[0].clientWidth > 0 || afterThree[0].clientWidth > 0) {
            let transform = Math.max(0, Math.min(x, document.querySelector(".wrapper").offsetWidth));
            document.querySelector(".after_3").style.width = transform + "px";
            document.querySelector(".scroller").style.left = transform - 25 + "px";
        }
    }
    scrollIt(150);
    document.querySelector(".scroller").addEventListener("touchstart", function () {
        active = true;
        document.querySelector(".scroller").classList.add("scrolling");
    });
    document.body.addEventListener("touchend", function () {
        active = false;
        document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("touchcancel", function () {
        active = false;
        document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("touchmove", function (e) {
        if (!active) return;
        let x = e.pageX;
        x -= document.querySelector(".wrapper").getBoundingClientRect().left;
        scrollIt(x);
    });
}
document.addEventListener("readystatechange", function () {
    document.body.style.visibility = "visible";
    let tHeader = gsap.timeline({ paused: true });
    var myBrowserWidth = window.innerWidth;
    if (myBrowserWidth > 300 && myBrowserWidth < 1301) {
        tHeader
            .add("head", "+=0.5")
            .to(".header__paralaxBlack", { duration: 3, maskPosition: "100% 0%", ease: "steps(44)" }, "head")
            .to(".header__paralaxColor", { duration: 0, filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)", ease: "none" }, "head+=0.1")
            .to(".header__paralaxBlack", { duration: 0, display: "none", ease: "none" });
    } else {
        tHeader
            .add("head", "+=0.5")
            .to(".header__paralaxBlack", { duration: 3, maskPosition: "100% 0%", ease: "steps(45)" }, "head")
            .to(".header__paralaxColor", { duration: 0, filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)", ease: "none" }, "head+=0.1")
            .to(".header__paralaxBlack", { duration: 0, display: "none", ease: "none" });
    }
    if (document.readyState === "complete") {
        document.getElementById("loader").style.display = "none";
        document.getElementById("allContents").style.display = "block";
        document.body.style.visibility = "visible";
        tHeader.play();
        menubar();
        swiperCode();
        serviceCode();
        weboramaCode();
        shadowCode();
    }
    function islandAnimation() {
        gsap.ticker.lagSmoothing(false);
        let tHeader4 = gsap.timeline({ repeat: 1, repeatDelay: -0.2 });
        tHeader4
            .add("island")
            .to("#small_island, #big_island_laptop", { duration: 2, y: -5, ease: "none" }, "island")
            .to("#middle_island, #middle_island_laptop", { duration: 2, y: -10, ease: "none" }, "island")
            .to("#big_island, #big_island_laptop", { duration: 2, y: -10, ease: "none" }, "island+=0.4")
            .to("#small_island_left, #middle_island_laptop", { duration: 2, y: -10, ease: "none" }, "island+=0.8")
            .add("island2", "-=0.2")
            .to("#small_island, #big_island_laptop", { duration: 4, y: 5, ease: "none" }, "island2")
            .to("#middle_island, #middle_island_laptop", { duration: 4, y: 10, ease: "none" }, "island2")
            .to("#big_island, #big_island_laptop", { duration: 4, y: 10, ease: "none" }, "island2+=0.4")
            .to("#small_island_left, #middle_island_laptop", { duration: 4, y: 10, ease: "none" }, "island2+=0.8")
            .add("island3", "-=0.4")
            .to("#small_island, #big_island_laptop", { duration: 2, y: 0, ease: "none" }, "island3")
            .to("#middle_island, #middle_island_laptop", { duration: 2, y: 0, ease: "none" }, "island3")
            .to("#big_island, #big_island_laptop", { duration: 2, y: 0, ease: "none" }, "island3+=0.4")
            .to("#small_island_left, #middle_island_laptop", { duration: 2, y: 0, ease: "none" }, "island3+=0.8");
    }
    window.addEventListener("scroll", () => {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            gsap.ticker.lagSmoothing(false);
            const bg = document.getElementById("bg");
            const planet = document.getElementById("planet1");
            const big_island = document.getElementById("big_island");
            const small_island_left = document.getElementById("small_island_left");
            const small_island = document.getElementById("small_island");
            const middle_island = document.getElementById("middle_island");
            const planet2 = document.getElementById("planet2");
            const grass = document.getElementById("grass");
            const sun = document.getElementById("sun");
            const header_text = document.getElementById("header__text");
            const bg_black = document.getElementById("bg_black");
            const planet_black = document.getElementById("planet1_black");
            const big_island_black = document.getElementById("big_island_black");
            const small_island_left_black = document.getElementById("small_island_left_black");
            const small_island_black = document.getElementById("small_island_black");
            const middle_island_black = document.getElementById("middle_island_black");
            const planet2_black = document.getElementById("planet2_black");
            const grass_black = document.getElementById("grass_black");
            const sun_black = document.getElementById("sun_black");
            const header_text_black = document.getElementById("header__textBlack");
            const header_paralaxBlack = document.getElementsByClassName("header__paralaxBlack");
            const bg_laptop = document.getElementById("bg_laptop");
            const planet1_laptop = document.getElementById("planet1_laptop");
            const big_island_laptop = document.getElementById("big_island_laptop");
            const middle_island_laptop = document.getElementById("middle_island_laptop");
            const planet2_laptop = document.getElementById("planet2_laptop");
            const grass_laptop = document.getElementById("grass_laptop");
            const sun_laptop = document.getElementById("sun_laptop");
            const header_text_laptop = document.getElementById("header__text_laptop");
            const bg_black_laptop = document.getElementById("bg_black_laptop");
            const planet1_black_laptop = document.getElementById("planet1_black_laptop");
            const big_island_black_laptop = document.getElementById("big_island_black_laptop");
            const middle_island_black_laptop = document.getElementById("middle_island_black_laptop");
            const planet2_black_laptop = document.getElementById("planet2_black_laptop");
            const grass_black_laptop = document.getElementById("grass_black_laptop");
            const sun_black_laptop = document.getElementById("sun_black_laptop");
            const header_text_black_laptop = document.getElementById("header__textBlack_laptop");
            const header_paralaxBlack_laptop = document.getElementsByClassName("header__paralaxBlack_laptop");
            let circleWrapTop = document.querySelector(".circleWrap");
            const headerHeight = document.querySelector(".header").offsetHeight;
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const value = Math.round(window.scrollY);
            const value2 = Math.round(window.scrollY);
            let threshold = (headerHeight - navbarHeight) * 0.5;
            if (value < threshold) {
                circleWrapTop.style.opacity = 0;
            } else {
                circleWrapTop.style.opacity = 1;
            }
            if (!(value2 >= 790)) {
                planet_black.style.marginBottom  = value2 * -0.03 + '%';
                big_island_black.style.marginBottom  = value2 * -0.01 + '%';
                small_island_black.style.marginBottom  = value2 * -0.001 + '%';
                small_island_left_black.style.marginBottom  = value2 * -0.005 + '%';
                middle_island_black.style.marginBottom  = value2 * -0.005 + '%';
                planet2_black.style.marginBottom  = value2 * -0.02 + '%';
                header_text_black.style.marginTop  = value2 * 0.019 + '%';
                sun_black.style.marginBottom  = value2 * -0.015 + '%';
                planet1_black_laptop.style.marginBottom  = value2 * -0.03 + '%';
                big_island_black_laptop.style.marginBottom  = value2 * -0.02 + '%';
                middle_island_black_laptop.style.marginBottom  = value2 * -0.01 + '%';
                planet2_black_laptop.style.marginBottom  = value2 * -0.02 + '%';
                header_text_black_laptop.style.marginTop  = value2 * 0.019 + '%';
                sun_black_laptop.style.marginBottom  = value2 * -0.02 + '%';
            }
            if (!(value >= 790)) {
                planet.style.marginBottom  = value * -0.03 + '%';
                big_island.style.marginBottom  = value * -0.01 + '%';
                small_island.style.marginBottom  = value * -0.001 + '%';
                small_island_left.style.marginBottom  = value * -0.005 + '%';
                middle_island.style.marginBottom  = value * -0.005 + '%';
                planet2.style.marginBottom  = value * -0.02 + '%';
                header_text.style.marginTop  = value * 0.019 + '%';
                sun.style.marginBottom  = value * -0.015 + '%';
                planet1_laptop.style.marginBottom  = value2 * -0.03 + '%';
                big_island_laptop.style.marginBottom  = value * -0.02 + '%';
                middle_island_laptop.style.marginBottom  = value * -0.01 + '%';
                planet2_laptop.style.marginBottom  = value * -0.02 + '%';
                header_text_laptop.style.marginTop  = value * 0.019 + '%';
                sun_laptop.style.marginBottom  = value * -0.02 + '%';
            }
            const header = document.querySelector(".header");
            const sections = document.querySelectorAll("section");
            const clientCircle = document.querySelector(".clientCircle");
            const displayCircle = document.querySelector(".displayCircle");
            const subscribeCircle = document.querySelector(".subscribeCircle");
            const richCircle = document.querySelector(".richCircle");
            const platformCircle = document.querySelector(".platformCircle");
            const dynamicCircle = document.querySelector(".dynamicCircle");
            const showreelCircle = document.querySelector(".showreelCircle");
            const productionCircle = document.querySelector(".productionCircle");
            const aboutCircle = document.querySelector(".aboutCircle");
            const circleWrap = document.querySelector(".circleWrap");
            window.addEventListener("resize", function () {
                if (window.innerWidth >= 576) {
                    circleWrap.style.display = "flex";
                } else {
                    circleWrap.style.display = "none";
                }
            });
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            if (window.innerWidth >= 576) {
                                circleWrap.style.display = "flex";
                            } else {
                                circleWrap.style.display = "none";
                            }
                            if (entry.target.id === "client") {
                                clientCircle.classList.add("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                            } else if (entry.target.id === "displayAd") {
                                clientCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                displayCircle.classList.add("active");
                            } else if (entry.target.id === "subscribe") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                subscribeCircle.classList.add("active");
                            } else if (entry.target.id === "weboramaAd") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                richCircle.classList.add("active");
                            } else if (entry.target.id === "platform") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                platformCircle.classList.add("active");
                            } else if (entry.target.id === "dynamicAd") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                dynamicCircle.classList.add("active");
                            } else if (entry.target.id === "showreel") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                showreelCircle.classList.add("active");
                            } else if (entry.target.id === "shadowAd") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                aboutCircle.classList.remove("active");
                                productionCircle.classList.add("active");
                            } else if (entry.target.id === "about") {
                                clientCircle.classList.remove("active");
                                displayCircle.classList.remove("active");
                                subscribeCircle.classList.remove("active");
                                richCircle.classList.remove("active");
                                platformCircle.classList.remove("active");
                                showreelCircle.classList.remove("active");
                                dynamicCircle.classList.remove("active");
                                productionCircle.classList.remove("active");
                                aboutCircle.classList.add("active");
                            }
                        }
                    });
                },
                { threshold: 0.15, rootMargin: "15% 0px 0px 15%" }
            );
            sections.forEach((section) => {
                observer.observe(section);
            });
        });
    });
});
