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

console.log(myLibrary)