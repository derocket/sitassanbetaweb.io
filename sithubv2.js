const categoriesContainer = document.getElementById('categories-container');
const dataContainer = document.getElementById('data-container');
const searchInput = document.getElementById('search-input');

let ebookData = []; // To store the fetched ebook data

// Fetch ebook data from Google Apps Script
fetch('https://script.google.com/macros/s/AKfycbw6tagUk6fiJUwc20fyfvtnx8pFBTlvs4c5r1C0QsqFVOuNMTGTY8sgw8M1BPQ8loLG/exec')
  .then(response => response.json())
  .then(data => {
    ebookData = data;
    populateCategories(); // Populate categories after fetching data
    updateEbookDisplay('all'); // Initial display with all ebooks
  })
  .catch(error => console.error('Error fetching data:', error));

// Populate categories
function populateCategories() {
  const categories = Array.from(new Set(ebookData.map(item => item.category)));
  categoriesContainer.innerHTML = `
    <div class="category" data-category="all">All</div>
    ${categories.map(category => `<div class="category" data-category="${category}">${category}</div>`).join('')}
  `;
  
  // Event listener for category clicks
  const categoryElements = categoriesContainer.querySelectorAll('.category');
  categoryElements.forEach(categoryElement => {
    categoryElement.addEventListener('click', () => {
      const selectedCategory = categoryElement.getAttribute('data-category');
      updateEbookDisplay(selectedCategory);
    });
  });
}

// Update displayed ebooks based on category and search query
function updateEbookDisplay(selectedCategory) {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredData = ebookData.filter(item => {
    return (
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery))
    );
  });

  dataContainer.innerHTML = ''; // Clear existing content

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    dataContainer.appendChild(noResultsMessage);
  } else {
    filteredData.forEach(item => {
      const ebookCard = document.createElement('div');
      ebookCard.className = 'ebook-card';
      ebookCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">View/Download</a>
      `;
      dataContainer.appendChild(ebookCard);
    });
  }
}

document.getElementById('search-button').addEventListener('click', () => {
    const selectedCategory = categoriesContainer.querySelector('.category.selected').getAttribute('data-category');
    updateEbookDisplay(selectedCategory);
  });



// Event listener for search input
searchInput.addEventListener('input', () => {
  const selectedCategory = categoriesContainer.querySelector('.category.selected').getAttribute('data-category');
  updateEbookDisplay(selectedCategory);
});
