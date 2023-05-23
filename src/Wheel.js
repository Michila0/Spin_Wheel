function shuffle(array) {
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[currentIndex],array[currentIndex],];
    }
    return array;
}

function spin() {
    // Wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";


    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let a123 = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let ROG = shuffle([1570, 1930, 2290]);

    let result = shuffle([
        AC[0],
        Camera[0],
        a123[0],
        PS[0],
        Headset[0],
        Drone[0],
        ROG[0]
    ]);

    if(AC.includes(result[0])) SelectItem = "Air Conditioner";
    if(Camera.includes(result[0])) SelectItem = "Camera Sport Action";
    if(a123.includes(result[0])) SelectItem = "Michila";
    if(PS.includes(result[0])) SelectItem = "Playsation 4 Slim";
    if(Headset.includes(result[0])) SelectItem = "HEadset Gaming";
    if(Drone.includes(result[0])) SelectItem = "Drone Mini";
    if(ROG.includes(result[0])) SelectItem = "Laptop Asus ROG";
    

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + result[0] + "deg)";
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);

    setTimeout(function(){
        // alert
    })

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}