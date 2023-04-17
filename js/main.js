//settings bar
document.querySelector(".setting-bar .coin").onclick = () =>{

    document.querySelector(".setting-bar").classList.toggle("open");
    
}

// change colors
let colors = Array.from(document.querySelectorAll(".color-setting li"));

colors.forEach((el)=>{
    el.onclick = (e)=>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.col);
        // remove active class
        colors.forEach((ele)=>{
            if(ele.classList.contains("active")){
                ele.classList.remove("active")
            }
            // add active class
            e.target.classList.add("active");
            // add to localStorage
            localStorage.setItem("color", e.target.dataset.col);
        })
    }
})

// ckeck localStorage
if(localStorage.getItem("color")){
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
}


// Chenge Background

let landingPage = document.querySelector(".landing");

let arrayImg = ["images/01.jpg ", "images/02.jpg" , "images/03.jpg" , "images/04.jpg" , "images/05.jpg "];

let randomBack = "yes";

let theSet;

function chengeBackground() {
    if (randomBack === "yes") {
        theSet =  setInterval(() => {
            
            let random = Math.floor(Math.random() * arrayImg.length);
            
            landingPage.style.backgroundImage = `url(../${arrayImg[random]})`;
            
        }, 4000);
    }
}


chengeBackground()


// background option
let yesNo = Array.from(document.querySelectorAll(".optiones .backgrounds li"));

yesNo.forEach((el)=>{
    el.onclick = (e)=>{
        yesNo.forEach((ele)=>{
            if(ele.classList.contains("active")){
                ele.classList.remove("active");
                    
                }
            })
            e.target.classList.add("active")
            if(e.target.classList.contains("yes")){
                randomBack = "yes";
                chengeBackground()
            }else{
                randomBack = "no";
                clearInterval(theSet)
            }
        }
    })

    
    
    // bolls option
    let yesNoBoll = Array.from(document.querySelectorAll(".optiones .bullets li"));
    
    yesNoBoll.forEach((el)=>{
        el.onclick = (e)=>{
            yesNoBoll.forEach((ele)=>{
                if(ele.classList.contains("active")){
                    ele.classList.remove("active");
                    
                }
            })
            e.target.classList.add("active");
            if(e.target.classList.contains("yes")){
                document.querySelector(".bollets").style.display ="block";
            }else{
                document.querySelector(".bollets").style.display ="none";
            }
        }
    })

    
    // reset button
    document.querySelector(".button-reset").onclick = ()=>{
        
        localStorage.clear();
        window.location.reload();
    }


    // popup images
    let imgBox = document.querySelectorAll(".gallery .boxes .box");
    

    imgBox.forEach((el)=>{
        el.onclick = function () {

            // create elemntes
            let over =  document.createElement("div");
            over.classList.add("over");
            
            let pup = document.createElement("div");
            pup.classList.add("imgpup");

            let hed = document.createElement("h4")
            hed.textContent = el.dataset.name

            let img = document.createElement("img");
            img.src = el.children[0].src;

            let close = document.createElement("div");
            close.textContent = "X";
            close.classList.add("close");

            // close event
            close.onclick = function () {
                over.remove();
                pup.remove()
            }

            // all append 
            pup.append(hed,img,close)
            document.body.append(over , pup);
        }
    })

    
    // effects section
    
    
    
    document.onscroll = ()=>{

        // section about
        let aboutSec = document.querySelector("#about");

        if (window.scrollY >= aboutSec.offsetTop - 700 ){
            document.querySelector(".about-us .boxes .img img").style.transform = "translateX(0px)";
            document.querySelector(".about-us .boxes .text").style.transform = "translateX(0px)";
        }


        // skills section
        let skillSec = document.querySelector("#skills");
    
        if (window.scrollY >= skillSec.offsetTop - 600) {
            let line =  document.querySelectorAll(".skills .skill-box .line span").forEach((el)=>{
                el.style.width = el.dataset.wid;
            })
        }


        // gallery section
        let gallery = document.querySelector("#gallary");

        if(window.scrollY >= gallery.offsetTop - 500){
            document.querySelectorAll(".gallery .boxes .box").forEach((el)=>{
                el.style.opacity = "1";
            })
        }

        };




