// main.js

var volumeNumber = document.getElementById('volume-number');
var volumeSlider = document.getElementById('volume-slider');
var hornSound = document.getElementById('horn-sound');
var volumeIcon = document.getElementById('volume-image');
var soundImage = document.getElementById('sound-image');
var honkButton = document.getElementById('honk-btn');

var volumeIconImages = ["./assets/media/icons/volume-level-0.svg", 
    "./assets/media/icons/volume-level-1.svg", 
    "./assets/media/icons/volume-level-2.svg", 
    "./assets/media/icons/volume-level-3.svg"];
var hornSoundsList = ["./assets/media/audio/air-horn.mp3", 
    "./assets/media/audio/car-horn.mp3", 
    "./assets/media/audio/party-horn.mp3"];
var hornImageList = ["./assets/media/images/air-horn.svg", 
    "./assets/media/images/car.svg", 
    "./assets/media/images/party-horn.svg"];

var airHornButton = document.getElementById('radio-air-horn');
var carHornButton = document.getElementById('radio-car-horn');
var partyHornButton = document.getElementById('radio-party-horn');

volumeNumber.addEventListener("change", function(){updateVol(volumeNumber, volumeSlider);});

volumeSlider.addEventListener("change", function(){ updateVol(volumeSlider, volumeNumber);});

airHornButton.addEventListener("click", function(){ updateHorn(0);} );
carHornButton.addEventListener("click", function(){ updateHorn(1);} );
partyHornButton.addEventListener("click", function(){ updateHorn(2);} );

honkButton.addEventListener("click", function(event){ honkHorn(event);});

function updateVol(updated, toUpdate){
    var newVol = updated.value;
    toUpdate.value = newVol; 
    hornSound.volume = newVol/100;
    if(newVol >= 67){
        volumeIcon.setAttribute("src", volumeIconImages[3]);
        honkButton.disabled = false;
    }
    else if(newVol >= 34){
        volumeIcon.setAttribute("src", volumeIconImages[2]);
        honkButton.disabled = false;
    }
    else if(newVol >= 1){
        volumeIcon.setAttribute("src", volumeIconImages[1]);
        honkButton.disabled = false;
    }
    else{
        volumeIcon.setAttribute("src", volumeIconImages[0]);
        honkButton.disabled = true;
    }
}

function updateHorn( newHornIndex ){
    hornSound.setAttribute("src", hornSoundsList[newHornIndex]);
    soundImage.setAttribute("src", hornImageList[newHornIndex]);
}

function honkHorn(event){
    event.preventDefault();
    hornSound.play();
}
