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