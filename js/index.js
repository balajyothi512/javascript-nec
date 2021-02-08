 function loadJSON(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange=()=>{
        if(ajax.readyState ===4 && ajax.status===200){
            callback(ajax.responseText);

        }
    }
    ajax.send();
}   
loadJSON("js/json/data.json",(text)=>{
    var d=JSON.parse(text);
    console.log(d);
    detail(d.details);
    other(d.multipleData);

});
var root=document.getElementById("root");
 function detail(cse){
var h1=document.createElement("h1");
h1.setAttribute("class","Name");
h1.textContent=cse.name;
root.appendChild(h1);
 
 var j=document.createElement("p");
j.setAttribute("class","Name");
j.textContent=cse.mobile;
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