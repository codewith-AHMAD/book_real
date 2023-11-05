let books = [
    { title: "Into the Wild", author: "Jon Krakauer", isbn: "9780385486804" },
    { title: "Endurance: Shackleton's Incredible Voyage", author: "Alfred Lansing", isbn: "9780465062881" },
    { title: "Wild: From Lost to Found on the Pacific Crest Trail", author: "Cheryl Strayed", isbn: "9780307476074" },
    { title: "Alive: The Story of the Andes Survivors", author: "Piers Paul Read", isbn: "9780380003211" },
    { title: "Touching the Void", author: "Joe Simpson", isbn: "9780060730550" },
    { title: "The Revenant: A Novel of Revenge", author: "Michael Punke", isbn: "9781250066626" },
    { title: "Unbroken: A World War II Story of Survival, Resilience, and Redemption", author: "Laura Hillenbrand", isbn: "9780812974492" },
    { title: "In the Heart of the Sea: The Tragedy of the Whaleship Essex", author: "Nathaniel Philbrick", isbn: "9780141001821" },
    { title: "Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen", author: "Christopher McDougall", isbn: "9780307279187" },
];

const bookList = document.getElementById("book-list");
const addBookForm = document.getElementById("add-book-form");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            books.splice(index, 1);
            displayBooks();
        });
        listItem.appendChild(deleteButton);
        bookList.appendChild(listItem);
    });
}

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    books.push({ title, author, isbn });
    displayBooks();

    
    addBookForm.reset();
});


searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchResultsArray = books.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const authorMatch = book.author.toLowerCase().includes(searchTerm);
        return titleMatch || authorMatch;
    });

    searchResults.innerHTML = "";
    searchResultsArray.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author}`;
        searchResults.appendChild(listItem);
    });
});


books.push(
    { title: "Into the Wild", author: "Jon Krakauer", isbn: "9780385486804" },
    { title: "Endurance: Shackleton's Incredible Voyage", author: "Alfred Lansing", isbn: "9780465062881" },

);


displayBooks();
