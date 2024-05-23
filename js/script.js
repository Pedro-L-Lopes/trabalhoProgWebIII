document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var postContent = document.getElementById("postContent").value;
    if (postContent.trim() === "") return;

    var postDiv = document.createElement("div");
    postDiv.className = "bg-white shadow-md rounded-lg mb-3 p-4"; // Tailwind CSS classes

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "flex flex-col"; // Tailwind CSS classes

    var userFlexDiv = document.createElement("div");
    userFlexDiv.className = "flex items-center mb-3"; // Tailwind CSS classes

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
    postText.className = "ml-14"; // Tailwind CSS classes (ml-14 para espaçamento similar ao original)
    postText.textContent = postContent;

    cardBodyDiv.appendChild(postText);

    var buttonFlexDiv = document.createElement("div");
    buttonFlexDiv.className = "flex justify-start mt-3"; // Tailwind CSS classes

    var likeButton = document.createElement("button");
    likeButton.className =
      "w-10 h-10 text-blue-500 hover:bg-blue-100 rounded-full hover:text-blue-700 mr-2 like-button transition-all"; // Tailwind CSS classes
    likeButton.innerHTML = '<i class="bi bi-heart"></i>'; // Ícone de curtir.

    var deleteButton = document.createElement("button");
    deleteButton.className =
      "w-10 h-10 text-red-500 hover:bg-red-100 rounded-full hover:text-red-700 delete-post transition-all"; // Tailwind CSS classes
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
    var targetElement = event.target;

    if (targetElement.closest(".like-button")) {
      // Tenta encontrar o ícone dentro do botão para alternar classes
      var likeIcon = targetElement.closest(".like-button").querySelector("i");
      likeIcon.classList.toggle("bi-heart");
      likeIcon.classList.toggle("bi-heart-fill");
    }

    if (targetElement.closest(".delete-post")) {
      targetElement.closest(".bg-white.shadow-md.rounded-lg.mb-3.p-4").remove();
    }
  });
});
