//your JS code here. If required.
//your JS code here. If required.
let resultarray=[];
const loadingElement= document.createElement("tr");
loadingElement.id="loading"
loadingElement.innerHTML=`<td colspan="2">Loading...</td>`
const tbodyElement=document.getElementById("output");
tbodyElement.append(loadingElement)
let start1=new Date().getTime();
let promise1=new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve()
let end1=new Date().getTime();
appendfunc("promise1",(end1-start1)/1000)
},1000)
})
let start2=new Date().getTime();
let promise2=new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve()
let end2=new Date().getTime();
appendfunc("promise2",(end2-start2)/1000)
},2000)
})
let start3=new Date().getTime();
let promise3= new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve()
let end3=new Date().getTime();
appendfunc("promise3",(end3-start3)/1000)
},3000)
})
function appendfunc(name,time) {
resultarray.push({name, time})
}
let all=Promise.all([promise1,promise2,promise3]);
all.then(()=>{
loadingElement.remove();
for (let i= 0; i<resultarray.length; i++) {
let resulttr= document.createElement("tr");
resulttr.innerHTML=`<td>${resultarray[i].name}</td>
<td>${resultarray[i].time}</td>`
tbodyElement.append(resulttr)
}
})