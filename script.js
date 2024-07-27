(()=>{
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
})()

gsap.from('#right1',{
    x: '100%',
    opacity:0.2,
    duration: 1.5,
    ease:'ease-in-out',
    delay: 0.5    
})
const num1=document.querySelector('#nmbr1')
const num2=document.querySelector('#nmbr2')
const num3=document.querySelector('#nmbr3')

const arr=[{elem:num1,val:18},{elem:num2,val:15},{elem:num3,val:523}]
arr.forEach(component => {
    setInterval(()=>{
            let increment = Math.floor(component.elem.innerHTML)+Math.floor(Math.random()*component.val/8)
            if(increment>component.val){
                increment = component.val
                clearInterval(this)
            }
            component.elem.innerHTML = increment
        },100)
    
})
gsap.from('#upperpage2',{
  scrollTrigger:{
    trigger: '#page2',
    scroller: '#main',
    start: "top 70%",
  },
  opacity: 0,
  y: 10,
  duration: 1
})
const links = []
const gridimage=document.querySelectorAll('.gridbox:nth-Child(1)')
gridimage.forEach((box,index)=>{
  console.log(box)
})