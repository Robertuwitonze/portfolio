let input = document.querySelector('.lists');
let addbtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');


input.addEventListener('keyup', () => {
    if(input.value.trim() != 0)
    {
        addbtn.classList.add('active');
    }
    else{
        addbtn.classList.remove('active');


    }
})


addbtn.addEventListener('click', () => {
    if(input.value.trim() != 0)
    {
        
        toDo();
        // tasks.appendChild(newItem);
        input.value = '';
        
    }
    else{
        alert('plz enter a tesk');


    }
})

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark'))
    {
        e.target.parentElement.parentElement.remove(); 
        let val = e.target.parentElement.parentElement.getElementsByTagName('input')[0].value;
       console.log(val);

    deleteTodos(val);
    }
})

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed'); 
    }
})


// ==================== blog ============================
function toDo() {
   
 



  let title =  document.querySelector('.lists').value;
 




 
      let todo = {
        
        title: title,
        
  };
   console.log(todo);

     if(localStorage.getItem('todolist') === null)
    {
      let todolist = [];
      todolist.push(todo);
      localStorage.setItem('todolist', JSON.stringify(todolist));
    }
  else{
    let todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push(todo);
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }

  getTodos();





}

//  ========================== get blogs ---=======================
  function getTodos()
{
   let todolists = JSON.parse(localStorage.getItem('todolist'));
  console.log(todolists);
  let blogDiv = document.getElementById('todos');
  blogDiv.innerHTML="";

  for(var a=0; a< todolists.length; a++)

  {
  let title = todolists[a].title;


// blogDiv.innerHTML += 
// '<p>'+ todolists[a].title +'</p> <div class="item-btn"><i class="fa-solid fa-check"></i><i class="fa-sharp fa-solid fa-xmark"></i></div>';
    
let newItem = document.createElement('div');
newItem.classList.add('items');
newItem.innerHTML='<p>'+ todolists[a].title +'</p>'+
'<input type="hidden" value="'+todolists[a].title +'">'+
'<div class="item-btn">'+
    '<i class="fa-solid fa-check"></i>'+
    '<i class="fa-sharp fa-solid fa-xmark"></i>'+
    
'</div>';

tasks.appendChild(newItem);
input.value = '';
  }
}

function deleteTodos( del)
{
   let todolists = JSON.parse(localStorage.getItem('todolist'));
  console.log(todolists);
  let blogDiv = document.getElementById('todos');
  blogDiv.innerHTML="";

  for(var a=0; a< todolists.length; a++)

  {
    if( todolists[a].title == del){
      todolists.splice(a,1);
      localStorage.setItem('todolist', JSON.stringify(todolists));
      getTodos();
    }
//   let title = todolists[a].title;


// // blogDiv.innerHTML += 
// // '<p>'+ todolists[a].title +'</p> <div class="item-btn"><i class="fa-solid fa-check"></i><i class="fa-sharp fa-solid fa-xmark"></i></div>';
    
// let newItem = document.createElement('div');
// newItem.classList.add('items');
// newItem.innerHTML='<p>'+ todolists[a].title +'</p>'+
// '<div class="item-btn">'+
//     '<i class="fa-solid fa-check"></i>'+
//     '<i class="fa-sharp fa-solid fa-xmark"></i>'+
    
// '</div>';

// tasks.appendChild(newItem);
// input.value = '';
  }
}