// Link:- `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I`

//  access key = "ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I" 
//  secret key = "XYG6bvKtj2Sx1jUpMxNBH1FBGZOc27SyRHHStJBg2wU" 

const API = "ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I";

import navbar from "../component/navbar.js";

// console.log(navbar)
let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();

import { searchImg, append } from "./fetch.js";




let search = (event) => {
    if (event.key == "Enter") {
        let query = document.getElementById("query").value;
        let sort = undefined;
        let filter = undefined;
        searchImg(API, query,sort,filter).then((data) => {
            // console.log(data.results);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });

    }
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

// console.log(categories);


function cSearch(){
    // console.log(this.id);
    let sort = undefined;
    let filter = undefined;
    searchImg(API, this.id,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
} 


for(let el of categories){
    el.addEventListener("click", cSearch)
}

//Sort functionality
document.getElementById("sortImg").addEventListener("change",function(event){
    let sort = event.target.value;
    // console.log(sort);
    let filter = undefined;
    let query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
});

//Filter functionality
document.getElementById("filter").addEventListener("change",function(event){
    let filter = event.target.value;
    // console.log(filter);
    let sort = undefined;
    let query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
})

