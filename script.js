let  btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let ran_color = randomcolor();
    let h3 = document.querySelector("h3");
    h3.innerText = ran_color;

    let div = document.querySelector("div");
    div.style.backgroundColor = ran_color;

})



function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let a = Math.random();

    let color =  `rgba(${red}, ${green}, ${blue}, ${a})`;
    return color;

}