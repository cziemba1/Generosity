//Fullpage.js inicialization//

new fullpage("#fullpage", {
    anchors: ['home', 'strawberry', 'blueberry', 'lemon', 'cucumber', 'orange', 'contact'],
    navigation: true,
    sectionsColor: ["#ffffff", "#202020", "#202020", "#202020", "#202020", "#202020", "#02d3e6"],
    paddingTop: "0em",
    onLeave: (origin, destination, direction) => { //animation for the rest of slides
        const section = destination.item;

        const tl2 = new TimelineMax({ delay: 0.5 });
        tl2.from(".title", 1,
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
                }, "-=1.9")
    }
})

//Parallax Drops//
const scene = document.querySelector("#scene")
var parallaxInstance = new Parallax(scene);


