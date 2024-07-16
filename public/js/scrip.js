// APLayer
const Aplayer=document.querySelector('#aplayer')
if(Aplayer){
    let dataSong=Aplayer.getAttribute('data-song')
    dataSong=JSON.parse(dataSong)

    let dataSinger=Aplayer.getAttribute('data-singer')
    dataSinger=JSON.parse(dataSinger)

    const ap = new APlayer({
        container: Aplayer,
        audio: [{
            name: dataSong.title,
            artist: dataSinger.fullName,
            url: dataSong.audio,
            cover: dataSong.avatar
        }],
        autoplay : true
    });
}
// End APLayer

// Button Like//
const buttonLike=document.querySelector("[button-like]")
if(buttonLike){
    buttonLike.addEventListener('click',()=>{
        const idSong=buttonLike.getAttribute('button-like')
        
        const isActive = buttonLike.classList.contains("active")    
        
        const type = isActive ? "dislike" : "like"    
        
        const link=`/songs/like/${type}/${idSong}`

        const option={
            method:"PATCH"
        }

        fetch(link,option)
            .then(res=>res.json())
            .then(data=>{
                const span=buttonLike.querySelector('span')
                span.innerHTML=`${data.like} thích`

                buttonLike.classList.toggle("active")
            })
    })
}
// End Button Like//