console.log("Welcome to Spotify ! ");

//Initialize
let songIndex=0;
let masterSongName=document.getElementById('masterSongName')
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-ishq2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Salam-e-ishq3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Salam-e-ishq4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Salam-e-ishq5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Salam-e-ishq6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Salam-e-ishq7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Salam-e-ishq8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Salam-e-ishq9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Salam-e-ishq10",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songItems.forEach((element,i)=>
{   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;  //creating a list item for each element in the array
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  
    
})
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{

//update seeek bar
progress=parseInt(audioElement.currentTime/audioElement.duration*100);

myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{    
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');  
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
      makeallplays();
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      songIndex=parseInt(e.target.id);
      // Assuming you have an array of song file names, you can retrieve the song file name using index
    
  
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
  
      // Assuming you have a variable called gif
      gif.style.opacity = 1;
  
      // Assuming you have a variable called masterPlay
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    });
  });
  
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>9){
    songIndex=0;
}
else{
    songIndex+=1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');

    })


    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0;
        }
        else{
            songIndex-=1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
              masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
              audioElement.play();
              masterPlay.classList.remove('fa-play-circle');
              masterPlay.classList.add('fa-pause-circle');
        
            })