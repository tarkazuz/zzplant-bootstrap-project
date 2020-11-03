
const commentForm = document.querySelector("#commentForm");

//when comment form is submited, do the following:
commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    const commentSection = document.querySelector("#comments");

    //create a new list element to save the comment in
    const commentUser = document.createElement('li');

//take input from username and comment field and append to the comment section
commentUser.innerHTML = `User ${commentForm.querySelector('#userName').value} says: "${commentForm.querySelector('#append').value}"`;
    commentSection.appendChild(commentUser);

    //when comment appended, delete content from input field
    commentForm.querySelector('#userName').value = " ";
    commentForm.querySelector('#append').value = " ";
}

);