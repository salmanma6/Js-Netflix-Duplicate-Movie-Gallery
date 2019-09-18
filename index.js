var y=document.querySelectorAll(".ifr");
var o=document.querySelectorAll(".playbutton");
var z;
for (z = 0; z < y.length; z++) {
   y[z].style.display="none";
   o[z].style.display="none";
   o[z].addEventListener("mouseover",function(ele){
       //do nothing
       var number=ele.srcElement.classList[1].split("").slice(2,length).join("");
       var sel=document.querySelector(`.imer${number}`);
       sel.src=wideimagelist[number-1];
       sel.classList.add("posthover");
       document.querySelector(`.pl${number}`).style.display="block";
   });
   o[z].addEventListener("click",function(ele)
   {
    var number=ele.srcElement.classList[1].split("").slice(2,length).join("");
    document.querySelector(`.imer${number}`).style.display="none";
    document.querySelector(`.pl${number}`).style.display="none";
    document.querySelector(`.m${number}`).style.display="block";
    document.querySelector(`.m${number}`).src=videourls[number-1];
    
   });
   y[z].addEventListener("mouseout",function(ele){
       console.log("Out of freame");
    var number=ele.srcElement.classList[1].split("").slice(1,length).join("");
    document.querySelector(`.m${number}`).style.display="none";
    document.querySelector(`.imer${number}`).src=normalimagelist[number-1];
    document.querySelector(`.imer${number}`).style.display="block";
    setTimeout(function(){
     document.querySelector(`.imer${number}`).classList.remove("posthover");
    },50);
  
   });
  }
wideimagelist=[
"http://www.kylelambert.com/gallery/stranger-things-season-2-poster/images/stranger-things-season-2-poster-quad-by-kyle-lambert.jpg",
"https://1.bp.blogspot.com/--odtiLrL7LY/W7fNRzbYzFI/AAAAAAAB28o/RgnfN_CHfnguZ0GUp4YCJPhupLo5-holwCLcBGAs/s1600/the-haunting-of-hill-house-wide.jpg",
"https://i.ytimg.com/vi/JSs55ob8Rtg/maxresdefault.jpg",
"https://i1.wp.com/adamsight.com/wp-content/uploads/2018/12/AAAABR2Tfe6rjdfyltkKGNR4n4anUuDH6CnntAXTW4th8XUx6OWitDNbNT57kSEYsedKRiQSizAq_EFKn-pWMDqLqyCm102dPLkUkBa5jTnbPpNFCf4Me_mYJ9L13z7lGtLKCXCOn-Z55Ug.jpg?fit=1280%2C720&ssl=1",
"https://cdn1.clickthecity.com/images/articles/600/35810.jpg",
"http://static1.squarespace.com/static/5660b59ee4b05bfc47995de5/5660b840e4b02bc8dd3bcb6d/588c453af7e0ab9c0942db9b/1501650909737/black-mirror-season-3-poster.jpg?format=1500w",
"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTvSvpuZYja9QYriPh0ytaN_WoHZw2cqwRXXZRCNDGiGDYFPeWiY4m4JJSjC2quEkG00dfkmX8bae95qhk5j4Bl-x5pSkncCnVMO84NQxAaw2i-7jVLc.jpg?r=934",
"https://occ-0-987-990.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWkFree3Cc2CFlHlwccqeR-MlO1c1_991SB_WVPWbThLf542S5tDnRuBItRQgN_4E2mxfsd94F6FKBtys2-GSPqEfYGOiVkbAQ.jpg?r=35a",
"https://www.whats-on-netflix.com/wp-content/uploads/2017/03/iron-fist-season-2-renewal-release.jpg",
"https://i.kym-cdn.com/entries/icons/original/000/030/497/netflixxx.jpg"

];
normalimagelist=["https://images-na.ssl-images-amazon.com/images/I/71OB1IywjLL._SY741_.jpg",
"https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/41739C0FYlL.jpg",
"https://m.media-amazon.com/images/M/MV5BNmYxZWNlMDAtYzczZC00M2ViLWIwYjctMDg3M2QyN2E1MzlmXkEyXkFqcGdeQXVyNjE4ODA3NTY@._V1_.jpg",
"https://img.reelgood.com/content/show/be30fd3e-7424-4d86-b4ef-c7d62df9697c/poster-780.jpg",
"https://i.redd.it/bg1hqtnr1x301.jpg",
"https://i.jeded.com/i/selection-day.146661.jpg",
"https://st1.bollywoodlife.com/wp-content/uploads/2018/07/ghoul.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71u%2B6Q8qOhL._SY606_.jpg",
"https://m.media-amazon.com/images/M/MV5BYTQ0NzUyMTAtOTMzMS00ZDAwLWI1NjktYTVhN2Y0MzcwOGU5XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
];
videourls=[
    "https://www.youtube.com/embed/mnd7sFt5c3A",
    "https://www.youtube.com/embed/dA2OngsNXXk",
    "https://www.youtube.com/embed/jAy6NJ_D5vU",
    "https://www.youtube.com/embed/ZAXA1DV4dtI",
    "https://www.youtube.com/embed/VBLcYJ7C4F0",
    "https://www.youtube.com/embed/2bVik34nWws",
    "https://www.youtube.com/embed/z7He5XaQKuc",
    "https://www.youtube.com/embed/zg0N4L4mwFk",
    "https://www.youtube.com/embed/f9OKL5no-S0",
    "https://www.youtube.com/embed/cSqi-8kAMmM"
];
var x=document.querySelectorAll(".post");
var u=document.querySelectorAll(".playbutton");
console.log(x);
var i;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("mouseover",wideimagef);
  x[i].addEventListener("mouseout",normalimagef);
}

function wideimagef(ele){
   
    var length=ele.srcElement.classList[1].split("").length;
    console.log(length);
    console.log(ele.srcElement.classList[1].split("").slice(4,length).join(""));
    var number=ele.srcElement.classList[1].split("").slice(4,length).join("");
    var image=ele.srcElement;
    image.src=wideimagelist[number-1];
    image.classList.add("posthover");
    document.querySelector(`.pl${number}`).style.display="block";
    translate+=100;
    document.querySelector(".gallery").style.transform = "translateX(" + translate + "px" + ")";
}
function normalimagef(ele){
   // console.log(ele.srcElement.classList[1].split("")[4]);
   var length=ele.srcElement.classList[1].split("").length;
    console.log(length);
    console.log(ele.srcElement.classList[1].split("").slice(4,length).join(""));
    var number=ele.srcElement.classList[1].split("").slice(4,length).join("");
    var image=ele.srcElement;
    image.classList.remove("posthover");
    image.src=normalimagelist[number-1];
    document.querySelector(`.pl${number}`).style.display="none";  
    translate-=100;
    document.querySelector(".gallery").style.transform = "translateX(" + translate + "px" + ")";
}

let translate=0;
document.querySelector(".leftnav").addEventListener("click",function(){
   
    console.log(document.querySelector(".gallery").style.transform.split("").slice(11));
    var array=document.querySelector(".gallery").style.transform.split("").slice(11);
    array.pop();
    array.pop();
    array.pop();
    var translateorig=array.join("");
    if(translateorig!=0){
    console.log(translateorig);
    translate += 500;
     document.querySelector(".gallery").style.transform = "translateX(" + translate + "px" + ")";
    }
     // document.querySelector(".gallery").animate({
// scrollLeft:"+=300px"
// },"slow");
});
document.querySelector(".rightnav").addEventListener("click",function(){
    
    console.log(document.querySelector(".gallery").style.transform.split("").slice(11));
    var array=document.querySelector(".gallery").style.transform.split("").slice(11);
    array.pop();
    array.pop();
    array.pop();
    var translateorig=array.join("");
    console.log(translateorig);
    if(translateorig==-2000)
     {
        translate -= 500;
        document.querySelector(".gallery").style.transform = "translateX(" + translate + "px" + ")";
     }
    if(translateorig>-2000){
    translate -= 500;
     document.querySelector(".gallery").style.transform = "translateX(" + translate + "px" + ")";
     
    }
    // document.querySelector(".gallery").animate({
    //     scrollLeft:"-=300px"
    //     },"slow");
});
