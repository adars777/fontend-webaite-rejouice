function locoScroll() {
  // flexible scroll by using locomotive + Scroll Trigger

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function page2Animation() {
  gsap.from(".elem h1, #upper p", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 80%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".elem-3 h2", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 80%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });
}

function swiper() {
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   loop: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: true,
  //   },
  // });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
          delay: 1000,
          disableOnInteraction: true,
        },
  });
}

function loadSite() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  });

  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader h3", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
  });

  tl.to("#loader", {
    opacity: 0,
  });

  tl.from("#page1-content span", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    delay: -0.5,
  });

  tl.to("#loader", {
    display: "none",
  });
}

function page5Animation() {
  gsap.from("#page5 svg", {
    rotation: -360,
    repeat: -1,
    ease: "none",
    duration: 3,
  });
}

function horizontalAnimation() {
  gsap.from("#page2 hr", {
    x: "-100%",
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers: true,
      ease: Linear,
      scrub: 2,
    },
  });

  gsap.from("#page4 hr", {
    x: "-100%",
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers: true,
      ease: Linear,
      scrub: 2,
    },
  });
}

function page4Animation() {
  gsap.from("#upper1 p", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 80%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".elem4 h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".elem4",
      scroller: "#main",
      start: "top 60%",
      end: "top 37%",
      scrub: 2,
    },
  });
}

function cursorEffect2() {
  var page5Content = document.querySelector("#page5-content");
  var cursor = document.querySelector("#cursor2");

  page5Content.addEventListener("mousemove", function (dets) {
    
    gsap.to(cursor,{
      x:0,
      y:0,
    })
  });

  page5Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page5Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function page6Animation() {
  gsap.from("#upper6 p", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 80%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".elem6 h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".elem6",
      scroller: "#main",
      start: "top 60%",
      end: "top 37%",
      scrub: 2,
    },
  });
}

function page8Animation(){
  gsap.from(".elem8 h1", {
    y: 120,
    // stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 50%",
      end: "top 27%",
      // markers: true,
      scrub: 2,
    },
  });
}

function page9Animation(){
  
var tl = gsap.timeline();
  tl.from("#elem9 span", {
    y: -70,
    duration: 5,
    opacity: 0,
    stagger: 0.8,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "top 20%",
      end: "top 17%",
      scrub: 8,
    },
  });
}



loadSite();
locoScroll();
cursorEffect();
page2Animation();
swiper();
page4Animation();
page5Animation();
// cursorEffect2();
page6Animation();
horizontalAnimation();
page8Animation();
page9Animation();


