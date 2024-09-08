document.getElementById('add').addEventListener('click', function() {
    
    const inputText = document.getElementById('input-box').value;

    if(inputText.trim()!==''){
        
        const li = document.createElement('li');
        const box = document.createElement('span');
        box.classList.add('small-box');
        li.textContent = inputText;
        box.addEventListener('click', function() {
            box.classList.toggle('checked');
        })

        li.appendChild(box);
    
        document.getElementById('list-container').appendChild(li);

        document.getElementById('input-box').value = '';
    } else {
        alert('please enter a valid item')
    }

});
