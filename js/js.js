let input = document.querySelector('input');
const create=document.querySelector(".btn");
let task=document.querySelectorAll('listpriority-item');

create.addEventListener("click", function () {
     if (input.value !==''){
    let parent = document.querySelector('.listpriority');
    let newElement = document.createElement('li');
    newElement.classList.add("listpriority-item");
    newElement.innerHTML=input.value;
    parent.append(newElement);
    input.value="";
    newElement.addEventListener('click', closes)}
    else {alert ("введите задачу")}
  });

  closes = function() {
    this.remove();
  }
