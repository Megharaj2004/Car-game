
// window.addEventListener('keydown', function (event) {
//     let car = document.querySelector('#car');
//     console.dir(event);
//     if (event.code == "KeyA" || event.code=="ArrowLeft") {
//         car.style.transform = "scale(0.35) translateY(170%) translateX(85%)";
//     }else if(event.code=="KeyD" || event.code=="ArrowRight"){
//         car.style.transform = "scale(0.35) translateY(170%) translateX(155%)";
//     }
    
// })


//Testing below!!!!!!!!!!!!!!!!!!!!!!!!!!
let brake_but= document.querySelector('.button_top');
let right_but=document.querySelector(".button_right");
let left_but=document.querySelector(".button_left");

let currentLane = 0;
const maxLanes = 3;

window.addEventListener('keydown', function (event) {
    let car = document.querySelector('#car');
    console.dir(event);


    if ((event.code == "KeyA" || event.code == "ArrowLeft") && currentLane > 0) {
        currentLane--;
    } 

    else if ((event.code == "KeyD" || event.code == "ArrowRight") && currentLane < maxLanes) {
        
        currentLane++;
    }

    else if(event.code=="Space"){
        let road_img=document.querySelector('.road_img');
        road_img.style.animationDuration="5000s";
        brake_but.style.transform= "translateY(0)";
       


    }
      // Calculate translateX percentage based on the current lane
    let translateXPercent = 85 + (currentLane * 70);  // Adjust this value based on spacing

    // Update car's transform with new translateX based on current lane
    car.style.transform = `scale(0.35) translateY(170%) translateX(${translateXPercent}%)`;
});

document.addEventListener('keyup', function(event){
    if(event.code=="Space"){
        let road_img=document.querySelector('.road_img');
        road_img.style.animationDuration="1600s";
        brake_but.style.transform= "translateY(-0.2em)";
    }
})
brake_but.addEventListener('mousedown', (event) =>{
    let road_img=document.querySelector('.road_img');
    road_img.style.animationDuration="5000s";


})
brake_but.addEventListener('mouseup', (event) =>{
    let road_img=document.querySelector('.road_img');
    road_img.style.animationDuration="1600s";
})

//right button
right_but.addEventListener("mousedown",(event)=>{
    if(currentLane < maxLanes){
    currentLane++;
    // Calculate translateX percentage based on the current lane
    let translateXPercent = 85 + (currentLane * 70);  // Adjust this value based on spacing

    // Update car's transform with new translateX based on current lane
    car.style.transform = `scale(0.35) translateY(170%) translateX(${translateXPercent}%)`;
    }
})

//left button
left_but.addEventListener("mousedown",(event)=>{
    if(currentLane > 0){
    currentLane--;
    // Calculate translateX percentage based on the current lane
    let translateXPercent = 85 + (currentLane * 70);  // Adjust this value based on spacing

    // Update car's transform with new translateX based on current lane
    car.style.transform = `scale(0.35) translateY(170%) translateX(${translateXPercent}%)`;
    }
})



