var items=["item1","item2","item3","item4","item5"];

var list=document.querySelector("#myList");


items.forEach((item)=>{


   createItem(item);



});


document.querySelector('#deleteAll').onclick=function(){
    var elements=document.querySelectorAll('.checked');

    elements.forEach(function(item){
        item.style.display='none';
        
    })
}




list.addEventListener('click',(item)=>{

    if(item.target.tagName=="LI"){
        item.target.classList.toggle("checked");
        toggleDeleteButton();
    }




})


document.querySelector("#btnCreate").onclick=function(){

    var item=document.querySelector('#txtItem').value;
    if(item===""){
        alert("Enter a value")
        return;
    }

    createItem(item);


};


function createItem(item){
    var li=document.createElement('li');
    var t =document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li)

    var span=document.createElement('span');
    var text=document.createTextNode('\u00D7');

    span.className='close';

    span.appendChild(text);
    li.append(span);

    span.onclick=function (){
        var li = this.parentElement;
        li.style.display="none";
        li.classList.remove("checked")
        toggleDeleteButton();
    }

}
function toggleDeleteButton(){
    var checkList=document.querySelectorAll('.list-group-item.checked')
    
        if(checkList.length>0){
            document.querySelector('#deleteAll').classList.remove('d-none')
        }
        else{
            document.querySelector('#deleteAll').classList.add('d-none')

        }


}