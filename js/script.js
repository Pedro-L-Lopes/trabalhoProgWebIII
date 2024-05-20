document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var postContent = document.getElementById("postContent").value;
    if (postContent.trim() === "") return;

    var postDiv = document.createElement("div");
    postDiv.className = "card mb-3"; // Bootstrap classes

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body flex flex-col"; // Tailwind CSS classes

    var userFlexDiv = document.createElement("div");
    userFlexDiv.className = "flex items-center"; // Tailwind CSS classes

    var userImg = document.createElement("img");
    userImg.src = "images/profile.jpg"; // Caminho da imagem do usuário
    userImg.className = "w-12 h-12 rounded-full mr-2"; // Tailwind CSS classes

    var userName = document.createElement("div");
    userName.className = "text-md font-bold"; // Tailwind CSS classes
    userName.textContent = "Crebin";

    userFlexDiv.appendChild(userImg);
    userFlexDiv.appendChild(userName);
    cardBodyDiv.appendChild(userFlexDiv);

    var postText = document.createElement("p");
    postText.className = "card-text ml-10 ";
    postText.textContent = postContent;

    cardBodyDiv.appendChild(postText);

    var buttonFlexDiv = document.createElement("div");
    buttonFlexDiv.className = "flex justify-start"; // Tailwind CSS classes

    var likeButton = document.createElement("button");
    likeButton.className = "btn btn-sm btn-outline-primary like-button mr-2"; // Bootstrap classes
    likeButton.innerHTML = '<i class="bi bi-heart"></i>'; // Ícone de curtir.

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-sm btn-outline-danger delete-post"; // Bootstrap classes
    deleteButton.innerHTML = '<i class="bi bi-x"></i>'; // Ícone de deletar.

    buttonFlexDiv.appendChild(likeButton);
    buttonFlexDiv.appendChild(deleteButton);
    cardBodyDiv.appendChild(buttonFlexDiv);

    postDiv.appendChild(cardBodyDiv);
    document.getElementById("postContainer").prepend(postDiv);

    document.getElementById("postContent").value = "";
  });

  // Adiciona o event listener diretamente ao document, pois os botões são criados dinamicamente
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-button")) {
      // Tenta encontrar o ícone dentro do botão para alternar classes
      var likeIcon = event.target.querySelector("i");
      likeIcon.classList.toggle("bi-heart");
      likeIcon.classList.toggle("bi-heart-fill");
    }
    if (event.target.classList.contains("delete-post")) {
      event.target.closest(".card").remove();
    }
  });
});
