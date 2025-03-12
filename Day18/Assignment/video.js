let videoData=JSON.parse(localStorage.getItem("videoData"));
let mainContainer=document.getElementById("container");
let suggestion=document.getElementById("suggestionBox");
async function showVideo(data) {
    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

    iframe.height = "500px"
    iframe.width = "60%"

    let title = document.createElement("h3");
    title.innerText = data.snippet.title;

    let channel_title = document.createElement("h3");
    channel_title.innerText = data.snippet.channelTitle;

    iframe.setAttribute("allowfullscreen", true)



    mainContainer.append(iframe, title, channel_title)
}

showVideo(videoData)

let data=JSON.parse(localStorage.getItem("items"));
function showData(arr){
    arr.forEach(({snippet,id})=>{
        let div=document.createElement("div");
        div.className="suggestionVideo";
        let image=document.createElement("img");
        image.src=snippet.thumbnails.medium.url;
        let title=document.createElement("p");
        title.innerText=snippet.title;
        let channelTitle=document.createElement("p");
        channelTitle.innerText=`: ${snippet.channelTitle};`


        div.append(image,title,channelTitle);
        suggestion.append(div);
        div.onclick=()=>{
            
            let obj = {
                snippet,id
            };
            // console.log(obj);
           localStorage.setItem("videoData",JSON.stringify(obj));
           window.location.href="video.html";
        }
    });
}
showData(data);
// let videoData2=JSON.parse(localStorage.getItem("videoData2"));
// showVideo(videoData2);
