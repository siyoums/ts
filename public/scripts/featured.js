const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');

// Add click event listeners to the cards
card1.addEventListener('click', function() {
  // Add your code to add a tag and redirect to another page for card 1
  // Example: window.location.href = "new_page_url";
  window.location.href = '../p/featured/covid-19.html';
  //   console.log('fucker')
});

card2.addEventListener('click', function() {
  // Add your code to add a tag and redirect to another page for card 2
  // Example: window.location.href = "new_page_url";
  window.location.href = '../p/featured/expansion.html';
});
