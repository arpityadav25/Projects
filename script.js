document.getElementById('add').addEventListener('click', function() {
    // get the value from the input box
    const inputText = document.getElementById('input-box').value;

    //check if the input is not empty
    if(inputText.trim()!==''){
        //create a new list item
        const li = document.createElement('li');
        const box = document.createElement('span');
        box.classList.add('small-box');
        li.textContent = inputText;
        box.addEventListener('click', function() {
            box.classList.toggle('checked');
        })

        li.appendChild(box);
    
        //Add the list item to the unordered list 
        document.getElementById('list-container').appendChild(li);

        //clear the Input box
        document.getElementById('input-box').value = '';
    } else {
        alert('please enter a valid item')
    }

});