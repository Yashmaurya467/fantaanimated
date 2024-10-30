let mm = gsap.matchMedia();

mm.add("(min-width: 851px)", () => {
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"0% 95%",
            end:"70% 50%",
            scrub:true,
            duration:1,
        }
    })
    tl.to("#fantacan",{
        y:"160%",
        x:"-60%",
        duration:20
    },"orange")
    tl.to("#cutorange",{
        y:"400%",
        x:"-100%",
        duration:20
    },"orange")
    tl.to("#oranges",{
        rotate:720,
        y:"500%",
        x:"-120%",
        duration:20
    },"orange")
    tl.to("#leaf",{
        y:"500%",
        rotate:360
    })
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"0% 95%",
            end:"70% 50%",
            scrub:true,
        }
    })
    tl2.to("#cutorange",{
        y:"800%",
        x:"300%",
        rotate:720,
    })
    tl2.to("#card1",{
        x:"250%",
        duration:30
    },"drink")
    tl2.to("#card3",{
        x:"-250%",
        duration:30
    },"drink")
    tl2.to("#card2",{
        rotate:423,
        duration:20
    })
});

mm.add("(max-width: 850px)", () => {
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"0% 75%",
            end:"70% 50%",
            scrub:true,
            duration:1,
        }
    })
    tl.to("#fantacan",{
        y:"160%",
        x:"-60%",
        duration:20
    },"orange")
    tl.to("#cutorange",{
        y:"400%",
        x:"100%",
        duration:20
    },"orange")
    tl.to("#oranges",{
        rotate:720,
        y:"500%",
        x:"-120%",
        duration:20
    },"orange")
    tl.to("#leaf",{
        y:"500%",
        rotate:360
    })
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"0% 50%",
            end:"100% 80%",
            scrub:true,
        }
    })
    tl2.to("#card1",{
        x:"50%",
        y:"200%",
    },"drink")
    tl2.to("#card2",{
        rotate:530
    })
    tl2.to("#card3",{
        x:"-50%",
        y:"-200%",
    },"drink")
});



