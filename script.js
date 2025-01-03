const myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.changeReadStatus = function(){
        this.hasRead = !(this.hasRead);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    let container = document.querySelector(".container");
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for (book of myLibrary){
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.dataset.bookNumber = myLibrary.indexOf(book);

        let titleContainer = document.createElement("div");
        let authorContainer = document.createElement("div");
        let pagesContainer = document.createElement("div");
        let readContainer = document.createElement("div");
        let removeContainer = document.createElement("div");
        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove-btn");
        removeBtn.dataset.bookNumber = myLibrary.indexOf(book);
        removeBtn.textContent = "Remove";
        

        titleContainer.textContent = book.title;
        titleContainer.style.fontSize = "1.2rem";
        titleContainer.style.fontWeight = "bold";
        authorContainer.textContent = book.author;
        pagesContainer.textContent = `${book.pages} pages` ;
        readContainer.textContent = (book.hasRead) ? "You have read this book." : "You have not read this book yet.";
        
        removeContainer.appendChild(removeBtn);
        card.appendChild(titleContainer);
        card.appendChild(authorContainer);
        card.appendChild(pagesContainer);
        card.appendChild(readContainer);
        card.appendChild(removeContainer);
        container.appendChild(card);

        removeBtn.addEventListener("click", () => {
            let index = removeBtn.dataset.bookNumber;
            myLibrary.splice(index, 1);
            displayBooks();
        })
    }
}

displayBooks();

const newBookButton = document.querySelector(".new-book-btn")
const dialog = document.querySelector("dialog");
const bookTitle = dialog.querySelector("input[name='book-title']");
const bookAuthor = dialog.querySelector("input[name='book-author']");
const bookPages = dialog.querySelector("input[name='book-pages']");
const readStatus = dialog.querySelector("input[name='read-status']");
const newBookForm = document.querySelector("form");
const cancelBtn = dialog.querySelector(".cancel-btn");
const submitBtn = dialog.querySelector(".submit-btn");

newBookButton.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus.value);
    dialog.close();
    addBookToLibrary(newBook);
    displayBooks();
    newBookForm.reset();
})

const removeButtons = Array.from(document.querySelectorAll(".remove-btn"));


