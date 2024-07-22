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

    ap.on('ended',()=>{
        const link=`/songs/listen/${dataSong._id}`

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

// Button Favorite//
const buttonFavorite=document.querySelector("[button-favorite]")
if(buttonFavorite){
    buttonFavorite.addEventListener('click',()=>{
        const idSong=buttonFavorite.getAttribute('button-favorite')
        
        const isActive = buttonFavorite.classList.contains("active")    
        
        const typeFavorite = isActive ? "unfavorite" : "favorite"    
        
        const link=`/songs/favorite/${typeFavorite}/${idSong}`

        const option={
            method:"PATCH"
        }

        fetch(link,option)
            .then(res=>res.json())
            .then(data=>{
                buttonFavorite.classList.toggle("active")
            })
    })
}
// End Button Favorite//

// Search Suggest//
const boxSearch = document.querySelector('.box-search')
if(boxSearch){
   const input= boxSearch.querySelector("input[name='keyword']")
   const boxSuggest = boxSearch.querySelector('.inner-suggest')
   input.addEventListener('keyup',()=>{
    const keyword=input.value

    const link=`/search/suggest?keyword=${keyword}`

    fetch(link)
        .then(res=>res.json())
        .then(data=>{
            const songs = data.songs
            if(songs.length){
                boxSuggest.classList.add("show")
                
                const htmls= songs.map(song=>{
                    return`
                    <a class="inner-item" href="/songs/detail/${song.slug}">
                        <div class="inner-image"><img src=${song.avatar} /></div>
                        <div class="inner-info">
                            <div class="inner-title">${song.title}</div>
                            <div class="inner-singer"><i class="fa-solid fa-microphone-lines"></i> ${song.infoSinger.fullName}</div>
                        </div>
                    </a>
                    `
                })

                const boxList = boxSuggest.querySelector('.inner-list')
                boxList.innerHTML=htmls.join("")
            }else{
                boxSuggest.classList.remove("show")
            }
        })

   })
} 
// End Search Suggest//