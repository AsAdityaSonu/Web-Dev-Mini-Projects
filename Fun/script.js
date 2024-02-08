const msg = document.getElementById('message');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const val = document.getElementById('val');
let timeoutId;


let count = 0;

const showMessage = (message) => {
    if(message=='yes'){
        msg.innerHTML = "yayyyyyy! 😍";
    }else if(message=='no'){

        timeoutId = setTimeout(() => { 
            noBtn.style.display = 'block';
            noBtn.style.position = 'absolute';
            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;
            noBtn.style.left = Math.random() * (window.innerWidth - btnWidth) + 'px'; 
            noBtn.style.top = Math.random() * (window.innerHeight - btnHeight) + 'px'; 

            if(count==0){
                noBtn.style.display = 'none';
            }
        }, 500);


        if(count==0){
            msg.innerHTML = "phir sochle ☹️";
        }else if(count==1){
            msg.innerHTML = "are you sure? 😢";
        }else if(count==2){
            msg.innerHTML = "last chance! 😭";
        }else if(count==3){
            msg.innerHTML = "aisa kya karti hai yrrr 😭";
        }else if(count==4){
            msg.innerHTML = "phir se sochle 😭";
        }else if(count==5){
            msg.innerHTML = "plzzzzzzzz 😢";
        }else if(count==6){
            msg.innerHTML = "thik hai koi na 😭 tu padle 🙃";
            clearTimeout(timeoutId); 
            noBtn.style.display = 'none';
            val.style.display = 'none';
            yesBtn.style.display = 'none';
            msg.style.fontSize = '72px';
            

            setTimeout(() => {
                window.location.href = "https://lms.thapar.edu/moodle/";
            }, 5000);
        }
        
    }
    
    count++;
}