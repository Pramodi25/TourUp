const promptList = ["Enter your Name :", "Enter your surname :", "Enter your Age :", "Gender (Enter 'M' or 'F') :",
                    "Rational Tasks completed :", "DoA :", "Task :", "Place :",
                    "Area of Study :", "Highest degree :", "University :", "Completion date :",
                    "Enter you Telephone Number :", "Enter your Email :", "LinkedIn handle :", "Enter Address:"];

let currentIndex = 0;

function promptNextQuestion() {
    if (currentIndex < promptList.length) {
        let userInput = prompt(promptList[currentIndex]);

        if (userInput === null) {
            alert("Click start to begin.");
            return;
        }

        const question = document.getElementById(`question${currentIndex + 1}`);
        const answer = document.getElementById(`answer${currentIndex + 1}`);

        // question.textContent = promptList[currentIndex];
        answer.value = userInput;

        currentIndex++;
        setTimeout(promptNextQuestion, 0); // Prompt next question asynchronously to allow DOM update
    }
}

document.getElementById('start').addEventListener('click', () => {
    promptNextQuestion();
});

document.getElementById('reset').addEventListener('click', function() {
    location.reload(); 
});


const toggleBtn = document.querySelector('.togglebtn');
const dropDownMenu = document.querySelector('.dropdownMenu');

toggleBtn.onclick =function(){
    dropDownMenu.classList.toggle('open');
    
}


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        // header.style.background = 'rgba(15, 27, 50, 0.8)'; // Adjust the background color and opacity as needed
        header.style.backdropFilter = 'blur(10px)'; // Apply blur effect to the background
    } else {
        header.style.background = 'transparent'; // Reset background when at the top of the page
        header.style.backdropFilter = 'none'; // Remove blur effect
    }
});






