document.getElementById("no").addEventListener("mouseenter", function(){
    const pic=["cat1.jpg", "cat2.jpg", "cat3.jpg","cat4.jpg"];
    const msg=["noo please","i will be sad :(","dont say noo","pweaseee","i love you :("," erally really love you :("];
    var x=Math.random()*1000;
    var y=Math.random()*1000;
    while (x>500|| y>600){
        x=Math.random()*1000;
        y=Math.random()*1000;
    }
    var randomImage = pic[Math.floor(Math.random() * pic.length)];
            var randomMessage = msg[Math.floor(Math.random() * msg.length)];

            document.getElementById("no").textContent = randomMessage;
            document.getElementById("picture").src = "./Assets/" + randomImage;
    
    document.getElementById("no").style.left=x+"px";
    document.getElementById("no").style.top=y+"px";
})

document.getElementById("yes").addEventListener("click",function(){
    window.location.href = "https://amorex.github.io/valnetinroute/";
})