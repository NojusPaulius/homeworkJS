
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("form .name").value;
    let email = document.querySelector("form .email").value;
    let comment = document.querySelector("form .comment").value;

    let div = document.createElement("div")

    let nameElement = document.createElement("h2");
    nameElement.textContent = "Name: " + name;
    div.appendChild(nameElement);

    // Create and append email element
    let emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + email;
    div.appendChild(emailElement);

    // Create and append comment element
    let commentElement = document.createElement("p");
    commentElement.textContent = "Comment: " + comment;
    div.appendChild(commentElement);


    document.querySelector(".savedInfo").appendChild(div);

})

