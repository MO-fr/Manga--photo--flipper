//////////////////////////////JavaScript For ippo page/////////////////////////////////////////////////////
// get the url of the window, check to see if it contains the HTML page 
if (window.location.href === "http://127.0.0.1:5500/ippo.html"){

let url = "ippo.html";
let result = url.includes("ippo.html");


    
// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
  });
  
  // Function to handle feedback form submission
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const feedbackText = document.getElementById('feedback').value;
    const feedbackName = document.getElementById('feedbackName').value;
    const feedbackEmail = document.getElementById('feedbackEmail').value;
  
    // You can handle feedback submission logic here (e.g., send to server or store locally)
    
    // Display a response message
    document.getElementById('feedbackResponse').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}. Feel free to give some more feedback!`;
  
    // Optionally, save feedback to local storage (you can modify this as needed)
    localStorage.setItem('userFeedback', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));
  
    // Clear the form inputs
    document.getElementById('feedbackForm').reset();
  });
  
        


const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");

// Add event listeners to the buttons
likeButton.addEventListener("click", function(evnt) {

    console.log("like clicked", evnt);
    // Toggle 'active-like' class on like button and remove active class from dislike button
    likeButton.classList.toggle("green-like"); //This here connects to the "like-up" class and turns the button green when clicked
    dislikeButton.classList.remove("red-dislike"); // this removes the red on the dislike if green is active
});

dislikeButton.addEventListener("click", function() {
    // Toggle 'active-dislike' class on dislike button and remove active class from like button
    dislikeButton.classList.toggle("red-dislike");//This here connects to the "dislike-up" class and turns the button red when clicked
    likeButton.classList.remove("green-like"); // this removes the green on the like if red is active
});

// Comment button event listener
document.getElementById("comment-button").addEventListener("click", () => { 
    document.getElementById("comment-text-area").value = ''; // Clears text area
  
});


// Function to unhide the image
function unhideMangacover(playerId) {
    document.getElementById(playerId).style.display = 'block'; // Unhide the image container
}
// Function to hide the image
 function hideMangacover(playerId) {
        document.getElementById(playerId).style.display = 'none'; // Hide the image container
    }

}

 if (window.location.href === "http://127.0.0.1:5500/thorf.html"){
///////////////////////////////////Javascript for Thorf////////////////////////////////////////////////////////

const likeButton2 = document.getElementById("like-button2");
const dislikeButton2 = document.getElementById("dislike-button2");

// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton2').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection2');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
  });
  
  // Function to handle feedback form submission
  document.getElementById('feedbackForm2').addEventListener('submit2', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const feedbackText = document.getElementById('feedback2').value;
    const feedbackName = document.getElementById('feedbackName2').value;
    const feedbackEmail = document.getElementById('feedbackEmail2').value;
  
    // You can handle feedback submission logic here (e.g., send to server or store locally)
    
    // Display a response message
    document.getElementById('feedbackResponse2').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}. Feel free to give some more feedback!`;
  
    // Optionally, save feedback to local storage (you can modify this as needed)
    localStorage.setItem('userFeedback2', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));
  
    // Clear the form inputs
    document.getElementById('feedbackForm2').reset();
  });

  function unhideMangacover(playerId) {
    document.getElementById(playerId).style.display = 'block'; // Unhide the image container
}
// Function to hide the image
 function hideMangacover(playerId) {
        document.getElementById(playerId).style.display = 'none'; // Hide the image container
    }
  
// Add event listeners to the buttons
likeButton2.addEventListener("click", function() {
    // Toggle 'active-like' class on like button and remove active class from dislike button
    likeButton2.classList.toggle("green-like2"); //This here connects to the "like-up" class and turns the button green when clicked
    dislikeButton2.classList.remove("red-dislike2"); // this removes the red on the dislike if green is active
});

dislikeButton2.addEventListener("click", function() {
    // Toggle 'active-dislike' class on dislike button and remove active class from like button
    dislikeButton2.classList.toggle("red-dislike2");//This here connects to the "dislike-up" class and turns the button red when clicked
    likeButton2.classList.remove("green-like2"); // this removes the green on the like if red is active
});

// Comment button event listener
document.getElementById("comment-button2").addEventListener("click", () => { 
    document.getElementById("comment-text-area2").value = ''; // Clears text area
  
});
}



////////////////////////////////////////Javascript for guts////////////////////////////////////////////////////
 if (window.location.href === "http://127.0.0.1:5500/guts.html"){

const likeButton3 = document.getElementById("like-button3");
const dislikeButton3 = document.getElementById("dislike-button3");

// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton3').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection3');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
  });
  
  // Function to handle feedback form submission
  document.getElementById('feedbackForm3').addEventListener('submit3', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const feedbackText = document.getElementById('feedback3').value;
    const feedbackName = document.getElementById('feedbackName3').value;
    const feedbackEmail = document.getElementById('feedbackEmail3').value;
  
    // You can handle feedback submission logic here (e.g., send to server or store locally)
    
    // Display a response message
    document.getElementById('feedbackResponse3').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}. Feel free to give some more feedback!`;
  
    // Optionally, save feedback to local storage (you can modify this as needed)
    localStorage.setItem('userFeedback3', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));
  
    // Clear the form inputs
    document.getElementById('feedbackForm2').reset();
  });


// Add event listeners to the buttons
likeButton3.addEventListener("click", function() {
    // Toggle 'active-like' class on like button and remove active class from dislike button
    likeButton3.classList.toggle("green-like3"); //This here connects to the "like-up" class and turns the button green when clicked
    dislikeButton3.classList.remove("red-dislike3"); // this removes the red on the dislike if green is active
});

dislikeButton3.addEventListener("click", function() {
    // Toggle 'active-dislike' class on dislike button and remove active class from like button
    dislikeButton3.classList.toggle("red-dislike3");//This here connects to the "dislike-up" class and turns the button red when clicked
    likeButton3.classList.remove("green-like3"); // this removes the green on the like if red is active
});

// Comment button event listener
document.getElementById("comment-button3").addEventListener("click", () => { 
    document.getElementById("comment-text-area3").value = ''; // Clears text area
  
});

function unhideMangacover(playerId) {
    document.getElementById(playerId).style.display = 'block'; // Unhide the image container
}
// Function to hide the image
 function hideMangacover(playerId) {
        document.getElementById(playerId).style.display = 'none'; // Hide the image container
    }
  

}

