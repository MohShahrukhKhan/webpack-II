(()=>{"use strict";let e=async(e,t,n,l)=>{let r;localStorage.setItem("query",t),console.log("sort:",n),console.log("filter:",l),null==n&&null==l?r=`https://api.unsplash.com/search/photos?query=${t}&per_page=28&client_id=${e}`:null!=n&&null==l?r=`https://api.unsplash.com/search/photos?query=${t}&order_by=${n}&per_page=28&client_id=${e}`:null==n&&null!=l&&(r=`https://api.unsplash.com/search/photos?query=${t}&orientation=${l}&per_page=28&client_id=${e}`);try{let e=await fetch(r);return await e.json()}catch(e){console.log(e)}},t=(e,t)=>{e.forEach((({alt_description:e,urls:{small:n}})=>{let l=document.createElement("div"),r=document.createElement("img");r.setAttribute("class","image");let a=document.createElement("div");a.setAttribute("class","name");let o=document.createElement("h4");r.src=n,o.textContent=e,a.append(o),l.append(r,a),t.append(l)}))};const n="S5vipoDldwtWUoR_LDssbl87_oNMWUcI34hH_EUV03k";document.getElementById("navbar").innerHTML='\n    <div id="search_bar">\n        <input type="search" id="query" placeholder="Search image...">\n    </div>\n    <div id="categories">\n        <h3 id="nature">Nature</h3>\n        <h3 id="car">Cars</h3>\n        <h3 id="music">Music</h3>\n        <h3 id="cartoon">Cartoons</h3>\n        <h3 id="technology">Technology</h3>\n        <h3 id="marvel">Marvel</h3>\n    </div>',document.getElementById("query").addEventListener("keydown",(l=>{if("Enter"==l.key){let l,r,a=document.getElementById("query").value;e(n,a,l,r).then((e=>{let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}}));let l=document.getElementById("categories").children;function r(){e(n,this.id,undefined,undefined).then((e=>{let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}for(let e of l)e.addEventListener("click",r);document.getElementById("sortImg").addEventListener("change",(function(l){let r=l.target.value,a=localStorage.getItem("query");e(n,a,r,undefined).then((e=>{let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))})),document.getElementById("filter").addEventListener("change",(function(l){let r=l.target.value,a=localStorage.getItem("query");e(n,a,undefined,r).then((e=>{let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}))})();