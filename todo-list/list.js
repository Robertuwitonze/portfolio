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
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML='<p>'+ input.value +'</p>'+
        '<div class="item-btn">'+
            '<i class="fa-solid fa-check"></i>'+
            '<i class="fa-sharp fa-solid fa-xmark"></i>'+
            
        '</div>';

        tasks.appendChild(newItem);
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
    }
})

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed'); 
    }
})