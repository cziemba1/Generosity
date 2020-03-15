//items animation//
const tl = new TimelineMax();

tl.from(".title", 2,
    {
        x: 5,
        opacity: 0,
        ease: Power2.easeOut
    })
    .from(".calories", 1, {
        opacity: 0,
        y: 5,
        ease: Power2.easeOut
    }, "-= .8")
    .from(".bottle", 1.3,
        {
            opacity: 0,
            y: 10,
            ease: Power2.easeIn
        }, "-=1.8")
    .from(".right", 1.5,
        {
            x: 10,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.9")
    .from(".left", 1.5,
        {
            x: -10,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.9");

//Scroll Magic//
//------Scene 1-------//
const controller = new ScrollMagic.Controller();

const tl1 = new TimelineMax();
tl1.from(".item-title-desc", 1.5,
    {
        y: 20,
        ease: Power2.easeInOut
    })
    .from(".item-title-text", 1.5,
        {
            y: 20,
            ease: Power2.easeInOut
        }, "-=1.3")
    .from(".item-title-list", 1.5,
        {
            y: 20,
            ease: Power2.easeInOut
        }, "-=1.1")
    .from("table", 1.5,
        {
            y: 20,
            ease: Power2.easeInOut
        }, "-=.9")

let scene1 = new ScrollMagic.Scene({
    triggerElement: ".item-info-desc",
    triggerHook: .8,
    offset: 0
})
    .setTween(tl1)
    .addIndicators()
    .addTo(controller);

//------Scene 2-------//
const tl2 = new TimelineMax();
tl2.fromTo(".bn-item-title", 1.5,
    {
        opacity: 0,
    },
    {
        opacity: 1,
        ease: Power2.easeInOut
    })
    .fromTo(".bn-item-desc", 1.5,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            ease: Power2.easeInOut
        }, "-= 1.2")

let scene2 = new ScrollMagic.Scene({
    triggerElement: ".benefits-item",
    triggerHook: .8,
    offset: 0
})
    .setTween(tl2)
    .addIndicators()
    .addTo(controller);