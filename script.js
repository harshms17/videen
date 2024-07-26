gsap.from('#right1',{
    x: '100%',
    opacity:0.2,
    duration: 1,
    ease:'ease-in-out',
    delay: 0.5    
})
const num1=document.querySelector('#nmbr1')
const num2=document.querySelector('#nmbr2')
const num3=document.querySelector('#nmbr3')

const arr=[{elem:num1,val:18},{elem:num2,val:15},{elem:num3,val:523}]
arr.forEach(component => {
    setInterval(()=>{
            let increment = Math.floor(component.elem.innerHTML)+Math.floor(Math.random()*component.val/5)
            if(increment>component.val){
                increment = component.val
                clearInterval(this)
            }
            component.elem.innerHTML = increment
        },150)
    
})