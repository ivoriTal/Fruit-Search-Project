const fruits = ["Apple", "Banana", "Grape", "Orange", "Pineapple"];

const searchInput = document.getElementById('search');
const resultsList = document.getElementById('results');
searchInput.addEventListener('input', search);
resultsList.addEventListener('click', useSuggestion);

function search() {
  const userInput = searchInput.value.toLowerCase();
  const results = fruits.filter(fruit => fruit.toLowerCase().includes(userInput));
  displayResults(results);
}

function displayResults(results) {
  resultsList.innerHTML = '';
  if (results.length === 0) {
    resultsList.style.display = 'none';
    return;
  }
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    resultsList.appendChild(li);
  });
  resultsList.style.display = 'block';
}

function useSuggestion(event) {
  if (event.target.tagName === 'LI') {
    searchInput.value = event.target.textContent;
    resultsList.style.display = 'none';
  }
}
