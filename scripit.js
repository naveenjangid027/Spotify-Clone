console.log("Welcom to  spotify")

//Intitalize the song
let songIndex = 0;
let audioElement= new Audio('1.mp3');
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')

let songs = [
    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},

    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},

    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},

    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},

    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},

    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath:"1.mp3",coverPath:"covers/1.jpg"}

]
//audioElement.play();

// Handle Play/Pause Click
 masterplay.addEventListener('click',()=>{
    if(audioElement.Paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
// Listen to Event
myprogressbar.addEventListener('timeupdate',()=>{
    // upadate Seekbar
    progress = parsenInt((audioElement.currentTime/audioElement.duration)*100);


})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement; 
})