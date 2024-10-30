// Helper function to toggle feedback form display
function toggleFeedbackForm(feedbackButtonId, feedbackFormSectionId) {
    document.getElementById(feedbackButtonId).addEventListener('click', function() {
        const feedbackFormSection = document.getElementById(feedbackFormSectionId);
        feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
    });
}

// Helper function to handle feedback form submission
function handleFeedbackFormSubmission(feedbackFormId, feedbackInputIds, feedbackResponseId, localStorageKey) {
    document.getElementById(feedbackFormId).addEventListener('submit', function(event) {
        event.preventDefault();
        
        const [feedbackTextId, feedbackNameId, feedbackEmailId] = feedbackInputIds;
        const feedbackText = document.getElementById(feedbackTextId).value;
        const feedbackName = document.getElementById(feedbackNameId).value || 'Guest';
        const feedbackEmail = document.getElementById(feedbackEmailId).value;
        
        document.getElementById(feedbackResponseId).textContent = `Thank you for your feedback, ${feedbackName}. Feel free to give some more feedback!`;

        localStorage.setItem(localStorageKey, JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));

        document.getElementById(feedbackFormId).reset();
    });
}

// Helper function to toggle like and dislike buttons
function setupLikeDislikeButtons(likeButtonId, dislikeButtonId, likeClass, dislikeClass) {
    const likeButton = document.getElementById(likeButtonId);
    const dislikeButton = document.getElementById(dislikeButtonId);

    likeButton.addEventListener("click", function() {
        likeButton.classList.toggle(likeClass);
        dislikeButton.classList.remove(dislikeClass);
    });

    dislikeButton.addEventListener("click", function() {
        dislikeButton.classList.toggle(dislikeClass);
        likeButton.classList.remove(likeClass);
    });
}

// Helper function to clear comment text area
function setupCommentButton(commentButtonId, commentTextAreaId) {
    document.getElementById(commentButtonId).addEventListener("click", () => {
        document.getElementById(commentTextAreaId).value = '';
    });
}

// Helper functions to show/hide manga cover images
function hideMangacover(playerId, shouldShow) {
    document.getElementById(playerId).style.display = shouldShow ? 'block' : 'none';
}

// Page-specific configurations
if (window.location.href.includes("ippo.html")) {
    toggleFeedbackForm('feedbackButton', 'feedbackFormSection');
    handleFeedbackFormSubmission('feedbackForm', ['feedback', 'feedbackName', 'feedbackEmail'], 'feedbackResponse', 'userFeedback');
    setupLikeDislikeButtons('like-button', 'dislike-button', 'green-like', 'red-dislike');
    setupCommentButton('comment-button', 'comment-text-area');

} else if (window.location.href.includes("thorf.html")) {
    toggleFeedbackForm('feedbackButton2', 'feedbackFormSection2');
    handleFeedbackFormSubmission('feedbackForm2', ['feedback2', 'feedbackName2', 'feedbackEmail2'], 'feedbackResponse2', 'userFeedback2');
    setupLikeDislikeButtons('like-button2', 'dislike-button2', 'green-like2', 'red-dislike2');
    setupCommentButton('comment-button2', 'comment-text-area2');

} else if (window.location.href.includes("guts.html")) {
    toggleFeedbackForm('feedbackButton3', 'feedbackFormSection3');
    handleFeedbackFormSubmission('feedbackForm3', ['feedback3', 'feedbackName3', 'feedbackEmail3'], 'feedbackResponse3', 'userFeedback3');
    setupLikeDislikeButtons('like-button3', 'dislike-button3', 'green-like3', 'red-dislike3');
    setupCommentButton('comment-button3', 'comment-text-area3');
}
