function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function Animations() {
    var h1s = document.querySelectorAll(".loader-text h1")
    var tl = gsap.timeline();


    tl.to(".percent-text h4", {
        opacity: 1,
        onStart: function () {
            var h4 = document.querySelector(".percent-text h4")
            var percent = 0;
            var interval = setInterval(function () {
                if (percent < 100) {
                    percent++
                    h4.innerHTML = percent + "%"
                }
                else {
                    clearInterval(interval)
                    gsap.to(".percent-text h4", {
                        opacity: 0,
                        duration: .5
                    })
                }
            }, 30);

        },
    }, 'a')

    h1s.forEach(function (h1) {
        tl.to(h1, {
            opacity: 1,
            duration: 1,
            transform: "scale(1)",
            onComplete: function () {
                gsap.to(h1, {
                    opacity: 0,
                    duration: .5,
                })
            }
        })
    }, 'a')

    tl.to(".loader", {
        opacity: 0,
        duration: .5
    })
    tl.from(".page1", {
        y: -300,
        duration: 1,
        opacity: 0,
        ease: Power4
    })
    tl.to(".loader", {
        display: "none"
    })
    tl.from(".magnet", {
        y: -20,
        duration: .7,
        stagger: .15,
        opacity: 0
    }, 'b')
    
    tl.from("nav i", {
        opacity: 0,
        duration: .7
    })
    tl.from("nav",{
        opacity:0,
        duration:1
    },'b')
    tl.from(".linesvg", {
        opacity: 0,
        duration: .7
    })
    tl.to(".line h1", {
        transform: "translateY(0%)",
        stagger: .3,
        duration: .8
    }, 'b')
    tl.from("#fire-img", {
        opacity: 0,
        duration: .8
    }, 'b')
    tl.to(".page1-btm h3", {
        transform: "translateY(0%)",
        stagger: .3,
        duration: .9
    }, 'b')
    tl.from(".page2", {
        opacity: 0,
        duration: .5
    }, 'b')

}

function mouseFollower() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .5,
    });
}
function magnetHover() {
    Shery.makeMagnet(".magnet", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}

Shery.hoverWithMediaCircle(".hoverimg", {
    images: ["hover.jpg"]
});




function page2Anim() {
    gsap.to(".page2 img", {
        width: "100%",
        height: "100%",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "#main",
            start: "top 50%",
            end: "top 25%",
            scrub: 3
        }
    });

}

function page3Anim() {
    var mm = gsap.matchMedia(); // Create a single matchMedia instance

    // Animation for screens with a width greater than 600px
    mm.add("(min-width: 600px)", function () {
        gsap.from("#p3-heading h1", {
            opacity: 0,
            scale: 0.8,
            duration: 0.7,
            scrollTrigger: {
                trigger: ".page3",
                scroller: "#main",
                start: "top 50%",
                end: "top 75%",
                scrub: 3
            }
        });
    });

    // Animation for screens with a width of 600px or less
    mm.add("(max-width: 600px)", function () {
        gsap.from("#p3-heading h1", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: ".page3",
                scroller: "#main",
                start: "top 70%",
                end: "top 75%",
                scrub: 3
            }
        });
    });
}
function page4Anim() {
    Shery.imageEffect(".p4-images", {
        style: 6,
        config: { "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.1357061953802434 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 28 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    });
    gsap.from(".page4 h1",{
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: ".page4",
            scroller: "#main",
            start: "top 50%",
            end:"top 20%",
            scrub: 2
        }
    })
}

function page5Anim() {
    var pauseIcon = document.querySelector(".pause")
    var mutedIcon = document.querySelector(".mute")
    var video = document.querySelector(".video-container video")
    pauseIcon.addEventListener("click", function () {
        if (pauseIcon.classList.contains("ri-pause-line")) {
            video.pause();
            pauseIcon.classList.remove("ri-pause-line");
            pauseIcon.classList.add("ri-play-fill")
        }
        else {
            video.play();
            pauseIcon.classList.remove("ri-play-fill")
            pauseIcon.classList.add("ri-pause-line")
        }
    })
    mutedIcon.addEventListener("click", function () {
        if (mutedIcon.classList.contains("ri-volume-mute-line")) {
            video.muted = false;
            mutedIcon.classList.remove("ri-volume-mute-line");
            mutedIcon.classList.add("ri-volume-up-line")
        }
        else {
            video.muted = true;
            mutedIcon.classList.remove("ri-volume-up-line")
            mutedIcon.classList.add("ri-volume-mute-line")
        }
    })


    var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page5",
                scroller: "#main",
                start: "top 70%",
                end: "top 20%",
                scrub: 3
            }
            });
    tl.from(".page5 h1",{
        opacity : 0,
        scale: .8,
        duration: 1,
        y: 20,
        
    })
    tl.from(".page5 .video-container",{
        opacity : 0,
        scale: .8,
        duration: 1,
        y: 20,
    })
}

function page6Anim(){
    var mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", function (){
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page6",
                scroller: "#main",
                start: "top 60%",
                end: "top 20%",
                scrub: 3,
            }
            });
            tl.from(".page6 h1",{
                opacity : 0,
                scale: .8,
                duration: 1,
                y: 20,
            },'c')
            tl.from(".page6 p",{
                opacity : 0,
                scale: .8,
                duration: 1,
            },'c')
    })




    mm.add("(max-width: 600px)", function (){
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page6",
                scroller: "#main",
                start: "top 90%",
                end: "top 50%",
                scrub: 3,
            }
            });
            tl.from(".page6 h1",{
                opacity : 0,
                scale: .8,
                duration: 1,
                y: 20,
            },'c')
            tl.from(".page6 p",{
                opacity : 0,
                scale: .8,
                duration: 1,
            },'c')
    })

   
}

function page7Anim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".page7",
            scroller: "#main",
            start: "top 60%",
            end: "top 35%",
            scrub:2
        }
    })
    tl.from(".page7 h1",{
        opacity: 0,
        scale: .8,
        duration:1,
    },'d')
    tl.from(".page7 .p7-left",{
        opacity:0,
        x: -100,
        duration:1
    },'d')
    tl.from(".page7 .p7-right",{
        opacity: 0,
        x : 100,
        duration:1
    })
}

function page8Anim(){
    var headings = document.querySelectorAll(".reveal")
    headings.forEach(function(h1){
       var splitedText = h1.textContent.split("")
       h1.innerHTML = ""
       splitedText.forEach(function(letter){
        h1.innerHTML += `<span>${letter}</span>`
       });
       gsap.to(".reveal span",{
        color: "#3A3A3A",
        stagger:.1,
        scrollTrigger:{
            trigger: ".page8 .reveal",
            scroller: "#main",
            start: "top 90%",
            end:"top 40%",
            scrub:1,
        }
       })
    })
    Draggable.create(".p8-right img", {
        bounds: ".p8-right",
        inertia: true,
        onRelease: function(){
            gsap.to(".p8-right img",{
                x:0,
                y:0,
                duration:1,
                ease: "elastic.out(1,0.3)", 
            })
        }
      });
}

function page9Anim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".page9",
            scroller: "#main",
            start: "top 95%",
            end: "top 40%",
            scrub:1
        }
    })
    tl.from(".page9 p",{
        opacity: 0,
        duration:1,
        y: 40
    })
    tl.from(".page9 h2",{
        opacity: 0,
        duration:1,
        y: 40
    })
}
locomotive()
Animations()
mouseFollower()
magnetHover()
page2Anim()
page3Anim()
page4Anim()
page5Anim()
page6Anim()
page7Anim()
page8Anim()
page9Anim()


var navOpen = document.querySelector("#n-right")
var icon = document.querySelector("nav i")
var flag = 0;
icon.addEventListener("click", function () {
    if (flag === 0) {
        navOpen.style.height = "20vh"
        flag = 1
    } else {
        navOpen.style.height = "0vh"
        flag = 0
    }
})

