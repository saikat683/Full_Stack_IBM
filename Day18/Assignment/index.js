let API_KEY="AIzaSyBGkvDY2HiKW1hAjt5OpQUjA8j6HHOa7aQ"
let search_term=document.getElementById("input").value ||"India Gate";
let body=document.getElementById("horizontal2");

async function getData(){
    // let data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`);
    // let res= await data.json();
    showData(res.items);
    console.log(res.items);

}
getData();
function showData(arr){
    arr.forEach((el,index)=>{
        let div=document.createElement("div");
        div.className="singleVideo";
        let image=document.createElement("img");
        image.src=el.snippet.thumbnails.medium.url;
        let title=document.createElement("p");
        title.innerText=el.snippet.title;
        let channelTitle=document.createElement("p");
        channelTitle.innerText=`: ${el.snippet.channelTitle};`


        div.append(image,title,channelTitle);
        body.append(div);
    })
}