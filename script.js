const myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

book1 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
book2 = new Book("1984", "George Orwell", 328, true);
book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayBook(){
    let container = document.querySelector(".container");

    for (book of myLibrary){
        let card = document.createElement("div");
        card.setAttribute("class", "card");


        let titleContainer = document.createElement("div");
        let authorContainer = document.createElement("div");
        let pagesContainer = document.createElement("div");
        let readContainer = document.createElement("div");

        titleContainer.textContent = book.title;
        titleContainer.style.fontSize = "1.2rem";
        titleContainer.style.fontWeight = "bold";
        authorContainer.textContent = book.author;
        pagesContainer.textContent = `${book.pages} pages` ;
        readContainer.textContent = (book.hasRead) ? "You have read this book." : "You have not read this book yet.";

        card.appendChild(titleContainer);
        card.appendChild(authorContainer);
        card.appendChild(pagesContainer);
        card.appendChild(readContainer);
        container.appendChild(card);
    }
}

displayBook();