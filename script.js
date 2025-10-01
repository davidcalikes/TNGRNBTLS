// Test function to verify JavaScript is working
function testJavaScript() {
    alert('JavaScript is working! The script.js file is properly linked.');
    console.log('Test function executed successfully!');
}

// Add event listener to the test button when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('test-button');
    
    if (testButton) {
        testButton.addEventListener('click', testJavaScript);
        console.log('Event listener attached to test button.');
    }
});
