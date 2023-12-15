const ball = document.querySelector('.ball');
const body = document.querySelector('body');
 
ball.addEventListener('click', function(){
    body.classList.toggle('active')
})