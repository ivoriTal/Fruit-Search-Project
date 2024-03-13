const fruits = ["Apple", "Banana", "Orange", "Grape", "Kiwi", "Mango", "Pineapple"];

const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');

searchInput.addEventListener('input', search);

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));
    displayResults(results);
}

function displayResults(results) {
    fruitList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        li.addEventListener('click', () => useSuggestion(result));
        fruitList.appendChild(li);
    });
}

function useSuggestion(suggestion) {
    searchInput.value = suggestion;
    fruitList.innerHTML = '';
}
