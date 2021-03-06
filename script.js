const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const startButton = document.querySelector("#start");
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const playDoor = (door) => {
        if (isBot(door)) {
            gameOver();
        }
        numClosedDoors -- ;
        if (numClosedDoors === 0){
            gameOver('win');
        }
    }

const isClicked = (door) =>  {
    if (door.src === closedDoorPath){
        return false
    } else {
        return true;
    }
}

const isBot = (door) =>  {
    if (door.src === botDoorPath) { 
        return true
    } else {
        return false
    }
}

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    
        if (choreDoor === 0 ){
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
    
        } else if (choreDoor === 1 ){
            openDoor2 = botDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor3 = beachDoorPath;
    
        } else {
            openDoor3 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor1 = beachDoorPath;
    
        }
    }
    

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(door1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(door2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(door3);
    }
}

startButton.onclick = () => {
    startRound();
}

const startRound = () => {
    if(!currentlyPlaying){
    numClosedDoors = 3;
    doorImage3.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage1.src = closedDoorPath;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good Luck';
}
    randomChoreDoorGenerator()
}

const gameOver = (status) => {
    if(status === 'win'){
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game Over! Play again?'
    }
    currentlyPlaying = false;
}

startRound();