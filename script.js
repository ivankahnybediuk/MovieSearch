$(document).ready(function(){
let searchRequest="";
$("#requestToSearch").keyup(function(){
    searchRequest=$(this).val();
    $(".requestDisplay").html(`You want search ${searchRequest}`)
})
.keyup();

const url= "http://www.omdbapi.com/?apikey=4941d150&";
let html1="";
$("#search").on("click", function(){
    let type = $("#type").val();
    let search =`${url}s=${searchRequest}&type=${type}`;
    $(".results").html(" ");
    fetch(search)
    .then((response)=>{
        return response.json();
        
    })
    .then((json)=>{
        console.log(json)
        
        let result=json["Search"];
        if (result){
            html1="";
        $(".results").html(html1);
        for(let i=0; i<result.length; i++){
            let image = result[i]["Poster"];
            let year =result[i]["Year"];
            let title = result[i]["Title"];
            html1+=`<div class="container" style="background-color: rgba(245, 233, 233, 0.350); border-radius:5px; margin-bottom: 30px; box-shadow: 5px 0 15px rgba(245, 233, 233, 0.350)">
            <div class="img"><img style="width:350px" src="${image}"/></div>
            <div class="title" style="font-size:23px; text-align:center; color: black; margin: 10px auto 10px auto; width:350px">${title}</div>
            <div class="year" style="font-size:23px; text-align:center; color: black">${year}</div>
            </div>`;
        };
        $(".results").html(html1)}
        else{
            html1=`<div style="font-size:50px; text-align:center; color: black; width:100%">Movie not found!</div>`;
            $(".results").html(html1)
        }
    });
        });
})