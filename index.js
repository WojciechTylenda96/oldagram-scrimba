const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Amadeus Mozart",
        username: "am666",
        location: "Vien, Austria",
        avatar: "images/avatar-mozart.jpg",
        post: "images/post-mozart.jpg",
        comment: "i am very happy today, yolo!",
        likes: 639
    }
]

const postsPage = document.getElementById("posts")
const likeBtn = document.getElementById("like")

function generatePosts() {
    for(i = 0; i < posts.length; i++) {
        postsPage.innerHTML += `
        <section>
            <div class="user-info">
                <img class="avatar-img" src="${posts[i].avatar}" alt="">
                <div class="row">
                            <p class="bold-text">${posts[i].name}</p>
                            <p>${posts[i].location}</p>
                </div>
            </div>
            <img class="post-img" ondblclick="addLike(${i})" src="${posts[i].post}" alt="">
                <div class="body-post">
                    <div class="icons">
                        <img id="like-btn" onclick="addLike(${i})" src="images/icon-heart.png" alt="">
                        <img src="images/icon-comment.png" alt="">
                        <img src="images/icon-dm.png" alt="">
                    </div>
                    <p class="bold-text">${posts[i].likes} likes</p>
                    <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
        </section> `
    }
} 

generatePosts()

function addLike(arg){
    posts[arg].likes++
    postsPage.innerHTML = ""
    generatePosts()
}