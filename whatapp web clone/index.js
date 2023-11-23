const chat=document.getElementById("chatbox")
const chatInput= document.getElementById("textbox")


const users = document.querySelectorAll('.block');

users.forEach(user =>{
    user.addEventListener('click',function(){
        const leftSideClickedImg = this.querySelector('img').src;
        const leftSideClickedText = this.querySelector('h4').innerText;

        const rightSide= document.querySelector('.imgText');
        const rightSideImg = rightSide.querySelector('img');
        const rightSideText = rightSide.querySelector('h4');

        rightSideImg.src = leftSideClickedImg;
        rightSideText.innerText = leftSideClickedText;

       //makes the messages disappear
        chat.style.display="none";
        chatInput.classList.add("adjust")
    })
});