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
        numClosedDoors -- ;
        if (numClosedDoors === 0){
            gameOver('win');
        } else if (isBot(door)) {
            gameOver('lose');
        }
    }

const isClicked = (door) =>  {
    door.src === closedDoorPath ? false : true;
}

const isBot = (door) =>  {
    door.src === botDoorPath ? true : false;
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
    

door1.onclick = () => {
    if (!isClicked(door1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(door1);
    }
}

door2.onclick = () => {
    if (!isClicked(door2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(door2);
    }
}

door3.onclick = () => {
    if (!isClicked(door3) && currentlyPlaying){
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