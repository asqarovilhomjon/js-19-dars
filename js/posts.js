const posts__wrapper = document.querySelector(".posts__wrapper");
const API__POSTS = "https://jsonplaceholder.typicode.com";

async function fetchPosts(api) {
    try {
        let response = await fetch(`${api}/posts`);
        let data = await response.json();
        createCard(data); 
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function createCard(data) {
    posts__wrapper.innerHTML = ''; 
    data.forEach((post) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="posts__img"><img src="./assets/hamza.svg" alt=""></div>
            <div class="posts__text">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
            <div class="posts__link">
            <a href="#"><p>Learn more...</p></a>
        </div> `;
        posts__wrapper.appendChild(card);
    });
}

fetchPosts(API__POSTS);
