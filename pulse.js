// Helper function to show or hide a feedback form
function toggleFeedbackForm(feedbackButtonId, feedbackFormSectionId) {
    // Find the button by its ID and add a click event to it
    document.getElementById(feedbackButtonId).addEventListener('click', function() {
        // Get the section of the form that should show/hide
        const feedbackFormSection = document.getElementById(feedbackFormSectionId);
        // Toggle between showing and hiding the form
        feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
    });
}

// Helper function to handle feedback form submission
function handleFeedbackFormSubmission(feedbackFormId, feedbackInputIds, feedbackResponseId, localStorageKey) {
    // Find the form by its ID and add an event to handle when it’s submitted
    document.getElementById(feedbackFormId).addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the page from refreshing after form submission

        // Get each part of the feedback form (text, name, email) by their IDs
        const [feedbackTextId, feedbackNameId, feedbackEmailId] = feedbackInputIds;
        const feedbackText = document.getElementById(feedbackTextId).value;
        const feedbackName = document.getElementById(feedbackNameId).value || 'Guest'; // Default name is "Guest"
        const feedbackEmail = document.getElementById(feedbackEmailId).value;

        // Show a thank-you message to the user after they submit feedback
        document.getElementById(feedbackResponseId).textContent = `Thank you for your feedback, ${feedbackName}. Feel free to give some more feedback!`;

        // Save the feedback to local storage, so it can be remembered on the same device
        localStorage.setItem(localStorageKey, JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));

        // Clear the form after submitting
        document.getElementById(feedbackFormId).reset();
    });
}

// Helper function to toggle like and dislike buttons
function setupLikeDislikeButtons(likeButtonId, dislikeButtonId, likeClass, dislikeClass) {
    // Find the like and dislike buttons by their IDs
    const likeButton = document.getElementById(likeButtonId);
    const dislikeButton = document.getElementById(dislikeButtonId);

    // When the like button is clicked, toggle the "liked" style and remove the "disliked" style
    likeButton.addEventListener("click", function() {
        likeButton.classList.toggle(likeClass); // Add/remove "liked" style
        dislikeButton.classList.remove(dislikeClass); // Remove "disliked" style if it's on
    });

    // When the dislike button is clicked, toggle the "disliked" style and remove the "liked" style
    dislikeButton.addEventListener("click", function() {
        dislikeButton.classList.toggle(dislikeClass); // Add/remove "disliked" style
        likeButton.classList.remove(likeClass); // Remove "liked" style if it's on
    });
}

// Helper function to clear (empty) the comment text area
function setupCommentButton(commentButtonId, commentTextAreaId) {
    // Find the button to clear the comment by its ID
    document.getElementById(commentButtonId).addEventListener("click", () => {
        // Set the comment area to be empty when the button is clicked
        document.getElementById(commentTextAreaId).value = '';
    });
}

// Helper function to hide multiple elements (like images) at once
function hideElements(elementIds) {
    // Go through each element ID provided in the array
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; // Hide each element by setting display to 'none'
        }
    });
}

// Helper function to show or hide elements based on a boolean (true/false) value
function toggleElementsVisibility(elementIds, shouldShow) {
    // Go through each element ID in the list
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Show the element if shouldShow is true, otherwise hide it
            element.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

// Code to set up the correct functions depending on the page (ippo, thorf, or guts)

// Check if we're on the "ippo" page
if (window.location.href.includes("ippo.html")) {
    toggleFeedbackForm('feedbackButton', 'feedbackFormSection'); // Show/hide feedback form
    handleFeedbackFormSubmission('feedbackForm', ['feedback', 'feedbackName', 'feedbackEmail'], 'feedbackResponse', 'userFeedback'); // Handle feedback form submission
    setupLikeDislikeButtons('like-button', 'dislike-button', 'green-like', 'red-dislike'); // Setup like/dislike buttons
    setupCommentButton('comment-button', 'comment-text-area'); // Setup comment clear button

// Check if we're on the "thorf" page
} else if (window.location.href.includes("thorf.html")) {
    toggleFeedbackForm('feedbackButton2', 'feedbackFormSection2');
    handleFeedbackFormSubmission('feedbackForm2', ['feedback2', 'feedbackName2', 'feedbackEmail2'], 'feedbackResponse2', 'userFeedback2');
    setupLikeDislikeButtons('like-button2', 'dislike-button2', 'green-like2', 'red-dislike2');
    setupCommentButton('comment-button2', 'comment-text-area2');

// Check if we're on the "guts" page
} else if (window.location.href.includes("guts.html")) {
    toggleFeedbackForm('feedbackButton3', 'feedbackFormSection3');
    handleFeedbackFormSubmission('feedbackForm3', ['feedback3', 'feedbackName3', 'feedbackEmail3'], 'feedbackResponse3', 'userFeedback3');
    setupLikeDislikeButtons('like-button3', 'dislike-button3', 'green-like3', 'red-dislike3');
    setupCommentButton('comment-button3', 'comment-text-area3');
}
