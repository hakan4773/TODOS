
function Eklefunction(){//eleman ekleme
    const input=document.querySelector("#task");
    const inputvalue=input.value.trim();//boşlukları siler.
   
    //silme butonu oluşturma
    const closeButton = `<button onclick="sil(parentNode)" style="padding: 13px;" type="button" class="close" data-dismiss="toast" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>`

    
 
if(inputvalue!==""){//boş değilse ekler
    const liDom=document.createElement("li"); 
    liDom.innerHTML = `
    ${inputvalue} ${closeButton}`;    

    const Uldom=document.querySelector("#list");
    
    Uldom.append(liDom);

    $('.success').toast('show')
    input.value = '';
}
else{//liste boşsa veya boş karaktwr varsa
    $('.error').toast('show')


}

}
function sil(parentNode){//eleman silme
    parentNode.remove();
}
// Event listener to toggle class on task item click
const mark=document.addEventListener('DOMContentLoaded', function() {

    const taskList = document.getElementById('list');
    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    });
});