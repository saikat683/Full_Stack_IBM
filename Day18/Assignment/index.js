let API_KEY="Write Your API Key";
let button=document.getElementById("search");
let body=document.getElementById("horizontal2");
let search_term=document.getElementById("input").value ||"Cricket";
function searchTerm(){
    search_term=document.getElementById("input").value;
}

async function getData(){
    let data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`);
    let res= await data.json();
    showData(res.items);
    localStorage.setItem("items",JSON.stringify(res.items));
    console.log(res.items);

}

getData();
// let data=JSON.parse(localStorage.getItem("items"));
function showData(arr){
    arr.forEach(({snippet,id})=>{
        let div=document.createElement("div");
        div.className="singleVideo";
        let image=document.createElement("img");
        image.src=snippet.thumbnails.medium.url;
        let title=document.createElement("p");
        title.innerText=snippet.title;
        let channelTitle=document.createElement("p");
        channelTitle.innerText=`: ${snippet.channelTitle};`


        div.append(image,title,channelTitle);
        body.append(div);
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
// showData(data);
button.addEventListener("click", async ()=>{
    console.log("Button clicked");
    searchTerm();
    body.innerHTML="";
    await getData();

});
