const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add('active')
        })
        articles.forEach(function(article){
            article.classList.remove("active");
            const articleElement = document.getElementById(id);
            articleElement.classList.add('active');
        })
    }
    
})







/* let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');




addToDoButton.addEventListener('click', addParagraph);

function addParagraph(){
    
    if(inputField.value!==''){
    
    var deleteBtn = document.createElement('button');
    var paragraph = document.createElement('div');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    

    
    deleteBtn.innerHTML=('-');
    paragraph.appendChild(deleteBtn);
    deleteBtn.classList.add('deleteBtn');
    inputField.value = "";


    paragraph.addEventListener('mouseover', function(){
        deleteBtn.style.visibility = 'visible';
    })
    paragraph.addEventListener('mouseout', function(){
        deleteBtn.style.visibility = 'hidden';
    })    
        
    paragraph.addEventListener('click', function(){
        paragraph.style.backgroundColor='cadetblue'
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.border = 'thin solid #FFFFFF';
        deleteBtn.style.visibility = 'visible';
    
    })
 }   
         
 
    deleteBtn.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    })
} */