// drag
let items=document.getElementsByClassName("item");
for(let i=0;i<items.length;i++){
    let item=items[i];
    item.setAttribute("draggable",true);
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("itemId",item.id);
    })
}
// drop
let bin=document.getElementById("bin");
no.addEventListener("dragover",(e)=>{
    if(e.preventDefault) e.preventDefault();// allow to drop
});
no.addEventListener("drop",(e)=>{
    let itemId=e.dataTransfer.getData("itemId");
    let draggingItem= document.getElementById(itemId);
    e.target.appendChild(draggingItem);
})