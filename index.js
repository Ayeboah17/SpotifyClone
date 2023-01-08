const cover = document.getElementById('coverArt')
const trailer = document.getElementById('trailer')
const playing = document.getElementById('nowplaying')



const page = document.getElementsByTagName('body')
const play = document.getElementById('playsong')
const shuffle = document.getElementById('shuffle')

const list = document.querySelectorAll('.songlist')
const songs = document.querySelectorAll('.songs')

const player = document.getElementById('player')
const playerSong = document.getElementById('currentsong') 
const pause = document.getElementById('pause')
const playerPlay = document.getElementById('play')
const next = document.getElementById('next')





shuffle.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*8)
    if(songs[1].paused && songs[2].paused && songs[0].paused && songs[3].paused && songs[4].paused && songs[5].paused && songs[6].paused && songs[7].paused){
        songs.forEach(d => d.currentTime = 0)
        songs.forEach(e => e.controls = false)
        playSongs(random)
        playerPlay.style.display ='none'
        pause.style.display = 'block'
        pause.addEventListener('click', ()=>{
            pauseSongs(random)   
        })
        next.addEventListener('click', ()=>{
            playSongs(random)
        })
        
    }else{
        songs.forEach(q => q.pause())
        songs.forEach(d => d.currentTime = 0)
        songs.forEach(e => e.controls = false)
        playSongs(random)
        playerPlay.style.display ='none'
        pause.style.display = 'block'
        pause.addEventListener('click', ()=>{
            pauseSongs(random)   
        })
        next.addEventListener('click', ()=>{
            playSongs(random)
        })
        
    }
    
})

play.addEventListener('click',()=>{
    if(songs[1].paused && songs[2].paused && songs[0].paused && songs[3].paused && songs[4].paused && songs[5].paused && songs[6].paused && songs[7].paused){
        playSongs(0)
        playerPlay.style.display = 'none'
        pause.style.display = 'block'
        pause.addEventListener('click', ()=>{
            pauseSongs(0)   
        })
        next.addEventListener('click', ()=>{
            playSongs(1)
        })
        

    }
    else{
        songs.forEach(k => k.pause())
        songs.forEach(o => o.currentTime = 0)
        playSongs(0)
        pause.style.display = 'block'
        playerPlay.style.display = 'none'
        pause.addEventListener('click', ()=>{
            pauseSongs(0)   
        })
        next.addEventListener('click', ()=>{
            playSongs(1)
        })
        
    }
})



const listPlay = (song)=>{
if(songs[1].paused && songs[2].paused && songs[0].paused && songs[3].paused && songs[4].paused && songs[5].paused && songs[6].paused && songs[7].paused){
        playSongs(song)
        pause.style.display = 'block'
        playerPlay.style.display = 'none'
        pause.addEventListener('click', ()=>{
            pauseSongs(song)   
        })
        next.addEventListener('click', ()=>{
            playSongs(1)
        })
}else{
    songs.forEach(k => k.pause())
    songs.forEach(o => o.currentTime = 0)
    cover.style.display = ''
    trailer.style.display = 'none'
    list[song].style.color = 'black'
    pauseSongs(song)
    pause.style.display = 'block'
    playerPlay.style.display = 'none'
    pause.addEventListener('click', ()=>{
        pauseSongs(song)   
    })
    next.addEventListener('click', ()=>{
        playSongs(1)
    })
    playSongs(song)
}
}


const playSongs = (i) =>{
    trailer.style.display = 'none'
    cover.style.display = ''
    songs[i].play()
    songs.forEach(e => e.paused)
    songs.forEach(r => r.currentTime = 0)
    list[i].style.color = '#688C34'
    cover.style.display = 'none'
    trailer.style.display = 'block'
    playing.innerHTML = `Now Playing <span style = 'color:#688C34'>${list[i].innerHTML}</span>`
    player.style.display = 'block'
    playerSong.innerHTML = list[i].innerHTML
 

    

}



const pauseSongs = (k)=>{
    if(songs[k].paused && songs[k].currentTime > 2.5){
        songs.forEach(e => e.paused())
        songs.forEach(l => l.currentTime = 0)
        songs[k].play()
        pause.style.display = 'block'
        playerPlay.style.display = 'none'
        cover.style.display = 'none'
        trailer.style.display = 'block'
    }else{
    songs.forEach(e => e.controls = false)
    songs[k].pause()
    cover.style.display = ''
    trailer.style.display = 'none'
    pause.style.display = 'none'
    playerPlay.style.display = 'block'
    
    playerPlay.onclick = ()=>{
        songs[k].play()
        pause.style.display = 'block'
        playerPlay.style.display = 'none'
        cover.style.display = 'none'
        trailer.style.display = 'block'
    }
    }
}






