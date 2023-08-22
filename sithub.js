// Sample data
const categories = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3', 'Category 3']; // Include 'All' category
const ebooks = [


  
  { title: 'Stack', description: '', image: 'code.png', url: 'https://alokrajcse.github.io/Stack.io/', categories: ['DSA codes by Samaleswari Sir'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  { title: 'Ebook 1', description: 'Description of Ebook 1', image: 'ebook1.png', url: 'ebook1.pdf', categories: ['Category 1'] },
  { title: 'Ebook 2', description: 'Description of Ebook 2', image: 'ebook2.png', url: 'ebook2.pdf', categories: ['Category 2'] },
  // Add more ebooks here with their specific details
  
];

// Populate categories
const categoryContainer = document.getElementById('categoryContainer');
categories.forEach(category => {
  const categoryBtn = document.createElement('button');
  categoryBtn.className = 'category-btn';
  categoryBtn.textContent = category;
  categoryContainer.appendChild(categoryBtn);
});

// Populate ebooks based on category
function populateEbooks(selectedCategory) {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = ''; // Clear previous content

  const filteredEbooks = selectedCategory === 'All' ? ebooks : ebooks.filter(ebook => ebook.categories.includes(selectedCategory));

  filteredEbooks.forEach(ebook => {
    const ebookCard = document.createElement('div');
    ebookCard.className = 'ebook-card';

    const ebookImg = document.createElement('img');
    ebookImg.src = ebook.image;
    ebookImg.alt = ebook.title;

    const ebookCardContent = document.createElement('div');
    ebookCardContent.className = 'ebook-card-content';

    const ebookTitle = document.createElement('h2');
    ebookTitle.textContent = ebook.title;

    const ebookDescription = document.createElement('p');
    ebookDescription.textContent = ebook.description;

    const viewDownloadBtn = document.createElement('button');
    viewDownloadBtn.textContent = 'View/Download';
    viewDownloadBtn.className = 'view-download-button';
    viewDownloadBtn.addEventListener('click', () => {
      window.location.href = ebook.url;
    });

    ebookCardContent.appendChild(ebookTitle);
    ebookCardContent.appendChild(ebookDescription);
    ebookCardContent.appendChild(viewDownloadBtn);

    ebookCard.appendChild(ebookImg);
    ebookCard.appendChild(ebookCardContent);

    mainContent.appendChild(ebookCard);
  });
}

// Add click event to category buttons
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.textContent;
    populateEbooks(selectedCategory);
  });
});




// Search functionality
document.getElementById('searchButton').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const filteredEbooks = ebooks.filter(ebook => {
    const title = ebook.title.toLowerCase();
    const description = ebook.description.toLowerCase();
    return title.includes(searchTerm) || description.includes(searchTerm);
  });
  populateEbooks('All'); // Show all categories
  if (searchTerm !== '') {
    populateEbooksBySearch(filteredEbooks);
  }
});

// Initial population
populateEbooks('All'); // Show all categories
