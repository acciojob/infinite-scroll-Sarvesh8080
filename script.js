const list = document.getElementById('infi-list');
let count = 1;

// Add 10 initial items
for (let i = 0; i < 10; i++) {
  addListItem();
}

// Function to add a single list item
function addListItem() {
  const li = document.createElement('li');
  li.textContent = `List Item ${count++}`;
  list.appendChild(li);
}

// Detect scroll and add items when scrolled to the bottom
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items
    addListItem();
    addListItem();
  }
});
