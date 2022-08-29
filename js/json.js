/**
 * ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
 */
const laodComment = () =>{
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => displayComment(data));
}
const displayComment = comment =>{
    const commentContainer = document.getElementById("comment-container");
    comment.slice(0, 20).forEach(element => {
        console.log(element)
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML =`
        <h4>ID: ${element.id}</h4>
        <p>Author: ${element.name}</p>
        <p>email: ${element.email}</p>
        <p>Comment: ${element.body}</p>
        <button onclick="displayDetalis(${element.id})">More Detalis</button>
        `;
        commentContainer.appendChild(commentDiv)
    });

}
const displayDetalis = (detalis) =>{
    
}
laodComment()
// const displayComment = (comment) =>{
//     const commentContainer = document.getElementById("comment-container");
//     comment.forEach(element => {
    //         const commentdiv = document.createElement('div');
//         commentdiv.classList.add("comment");
//         commentdiv.innerHTML = `
//         <h4>ID: ${element.id}</h4>
//         <p>Author: ${element.name}</p>      
//         <p>email: ${element.email}</p>
//         <p>Comment: ${element.body}</p>
//         `;
//         commentContainer.appendChild(commentdiv);
//     });
// }