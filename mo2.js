var aim = [];
const fi = {
    ci: 0,
    mi: 1345
};
var count = 0;

const can = document.querySelector(".can");
const ctx = can.getContext("2d");


function loadim(v, j) {
    if (v >= 0 && v <= j) {
        const lm = aim[v];
        can.width = window.innerWidth;
        can.height = window.innerHeight;
        const scaleX = can.width / lm.width;
        const scaleY = can.height / lm.height;
        const scale = Math.max(scaleX, scaleY);
        const nw = lm.width * scale;
        const nh = lm.height * scale;
        const ofsx = (can.width - nw) / 2;
        const ofsy = (can.height - nh) / 2;

        ctx.clearRect(0, 0, can.width, can.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(lm, ofsx, ofsy, nw, nh);
        fi.ci = v;
        console.log(v);
    }
}
var tu=[]
function perim(a, b) {
    for (let i = 1; i <= b; i++) {
        const ul = `./hibh/frame_${i.toString().padStart(4, "0")}.png`;
        const img = new Image();
        img.src = ul;
        img.onload = () => {
            count++;
            var q = Math.floor(count*100/fi.mi)
            if(q in tu){
                
                // console.log("q in tu")

            }
            else{
                tu.push(q)
                // console.log(tu)
            }

           
            document.querySelector(".txt").innerHTML=`${q}%`
            


            if (count === b && q===100) {
                console.log("all load")
                
                loadim(a, b);
                startani();
                setTimeout(() => {
                    document.querySelector(".frame").style.display="block"
                }, 1000);
                
            }
        };
        aim.push(img);
    }
    console.log(aim);
}

perim(fi.ci, fi.mi);

function startani() {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".frame",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            markers: false
        }
    });
    function updata(index) {
        return{
         ci:index,
         ease:"linear",
         onUpdate: () => {
         loadim(Math.floor(fi.ci),fi.mi);
         }}
     }
     
     tl
     .to(fi,updata(2))
     .to(fi,updata(90),"a")
     .to(".heading1",{ y:49, opacity:0, ease:"linear"},"a")
     
     .to(fi,updata(150),"b")
     .from(".heading2",{ y:-140,opacity:0,ease:"expo"},"b")
     
     .to(fi,updata(180),"c")
     .to(".heading2",{ y:49 ,opacity:0, ease:"linear"},"c")

     .to(fi,updata(280),"d")
     .from(".sector",{y:-100,opacity:0,ease:"expo"},"d")

     .to(".show",{y:-555*6,ease:"linear"})
     
     .to(fi,updata(300),"e")
     .to(".sector",{y:49,display:"none",ease:"expo"},"e")


     .to(fi,updata(900),'f')
     .to(can,{scale:0.5,ease:"linear"},"f")

     .to(fi,updata(1200),"j")
     .from(".heading3",{opacity:0,scale:0.6,ease:"linear"},"j")
     
     .to(fi,updata(1250),"h")
     .to(can,{scale:1,ease:"linear"},"h")
     
     .to(fi,updata(1300),"i")
     .to(".heading3",{opacity:0,scale:0.6,ease:"linear"},"i")
     
     .to(fi,updata(1343),"k")
     .to(can,{opacity:0,ease:"expo"},"k")
     
     .to(fi,updata(fi.mi),"l")
     .to(can,{y:49,width:0,display:"none",ease:"linear"},"l")
    //  .to(".frame",{width:0,display:"none"},"l")
     
     
}
window.addEventListener("resize",()=>{
    loadim(Math.floor(fi.ci));
}) 

    
    
   
    

