
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

    // Calculate translateX percentage based on the current lane
    let translateXPercent = 85 + (currentLane * 70);  // Adjust this value based on spacing

    // Update car's transform with new translateX based on current lane
    car.style.transform = `scale(0.35) translateY(170%) translateX(${translateXPercent}%)`;
});
