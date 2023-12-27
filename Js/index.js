const play_btn = document.querySelector('.play__btn');
const video_bg = document.querySelector('.video-bg');

play_btn.addEventListener('click', () => {
    if(video_bg.paused){
        video_bg.play();
    }else{
        video_bg.pause();
    }
})
