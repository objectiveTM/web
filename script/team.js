let a = new IntersectionObserver((e)=>{
    e.forEach(box=>{
        if (box.isIntersecting){
            box.target.style.opacity = "1"
            box.target.style.transform = "translateY(0)"
        }else{
            // box.target.style.backgroundPositionX = "-400px";
        }
    })
})
let e1 = document.querySelectorAll("#a");
e1.forEach(e => {
    a.observe(e);
})

let e2 = document.querySelectorAll("#b");
e2.forEach(e => {
    a.observe(e);
})