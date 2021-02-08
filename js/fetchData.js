fetch("js/json/data.json").then(res=>{return res.json()}).then(d=>{
    console.log(d);
    detail(d.details);
    other(d.multipleData);
})
var root=document.getElementById("root");
 function detail(cse){
var h1=document.createElement("h1");
h1.setAttribute("class","card");
h1.textContent=cse.name;
root.appendChild(h1);
 
 var j=document.createElement("p");
j.setAttribute("class","w-100");
j.textContent=cse.mobile;
j.style.width="50%"
root.appendChild(j);
 }
 function other(r){
    var ul=document.createElement("ul");
    root.appendChild(ul);
    for(let i=0;i<r.length;i++){
        var li=document.createElement("li");
        li.textContent=r[i].name;
        ul.appendChild(li);
        var li1=document.createElement("li");
        li1.textContent=r[i].mobile;
        ul.appendChild(li1);
    }
 }

