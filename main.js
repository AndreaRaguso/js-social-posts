const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": "Phil Mangione",
        "image": "https://unsplash.it/300/300?image=15",
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author":  "Sofia Perlari",
        "image": "https://unsplash.it/300/300?image=10",
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": "Chiara Passaro",
        "image": "https://unsplash.it/300/300?image=20",
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author":"Luca Formicola",
        "image": null,
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": "Alessandro Sainato",
        "image": "https://unsplash.it/300/300?image=29",
        "likes": 95,
        "created": "2021-03-05"
    }
];



const container = document.getElementById("container");
// let back = document.getElementById("back");
// function btnlike() {
//     posts[1]['likes'] += 1;  
//     console.log(posts[1]['likes']);
// }

function post(){
    for (let i = 0; i < posts.length; i++){
    
        container.innerHTML += `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i]['author']}</div>
                        <div class="post-meta__time">${posts[i]['created']}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i]['content']}</div>
            <div class="post__image">
                <img src="${posts[i]['media']}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta" >
                        <button class="like-button  js-like-button" onclick="btnlike()" href="#" data-postid="1" >
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </button>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i]['likes']}</b> persone
                    </div>
                </div> 
            </div>            
            </div>`;
    };
    
}

post();


