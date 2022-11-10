window.scrollTo({left: 0})

let observer = new IntersectionObserver((e)=>{
    e.forEach(box=>{
        if (box.isIntersecting){
            box.target.style.backgroundPositionX = "100px";
        }else{
            // box.target.style.backgroundPositionX = "-400px";
        }
    })
})

let paidLeft = new IntersectionObserver((e)=>{
    e.forEach(box=>{
        if (box.isIntersecting){
            box.target.style.opacity = "1";
            console.log(box.target.style)
            box.target.style.transform = "translateX(0)";
            
        }else{
            // box.target.style.opacity = "0";
            // box.target.style.transform = "translateX(-50px)";
        }
    })
})

let paidRight = new IntersectionObserver((e)=>{
    e.forEach(box=>{
        if (box.isIntersecting){
            box.target.style.opacity = "1";
            box.target.style.transform = "translateX(0)";
        }else{
            // box.target.style.opacity = "0";
            // box.target.style.transform = "translateX(50px)";
        }
    })
})

let e = document.querySelectorAll("#intro");
observer.observe(e[0]);

document.querySelectorAll(".paid-left").forEach(e=>{
    // console.log(e)
    paidLeft.observe(e);
})
// paidLeft.observe(document.querySelectorAll("paid-left")[0]);

document.querySelectorAll(".paid-right").forEach(e=>{
    paidRight.observe(e);
})