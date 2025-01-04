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

        let changeReadStatus = document.createElement("input");
        changeReadStatus.setAttribute("type", "checkbox");
        changeReadStatus.setAttribute("name", "readStatus");
        changeReadStatus.checked = book.hasRead;
        if (book.hasRead) {
            card.classList.add("read");
        }
        let text = document.createElement("div");
        text.textContent = "Done";
        let removeContainer = document.createElement("div");
        removeContainer.appendChild(text);
        removeContainer.appendChild(changeReadStatus);
        removeContainer.style.display = "flex"
        removeContainer.style.justifyContent = "flex-start";
        removeContainer.style.alignItems = "center"
        removeContainer.style.gap = "10px"
        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove-btn");
        removeBtn.dataset.bookNumber = myLibrary.indexOf(book);
        removeBtn.textContent = "🗑️";
        removeBtn.style.maxHeight = "30px";
        

        titleContainer.textContent = book.title;
        titleContainer.style.fontSize = "1.2rem";
        titleContainer.style.fontWeight = "bold";
        authorContainer.textContent = book.author;
        pagesContainer.textContent = `${book.pages} pages`;
        removeContainer.appendChild(removeBtn);
        card.appendChild(titleContainer);
        card.appendChild(authorContainer);
        card.appendChild(pagesContainer);
        card.appendChild(removeContainer);
        container.appendChild(card);

        removeBtn.addEventListener("click", () => {
            let index = removeBtn.dataset.bookNumber;
            myLibrary.splice(index, 1);
            displayBooks();
        })

        changeReadStatus.addEventListener("click", () => {
            book.changeReadStatus();
            displayBooks();
        } )
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
    if (!newBookForm.checkValidity()){
        newBookForm.reportValidity();
        return;
    }
    
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus.checked);
    dialog.close();
    addBookToLibrary(newBook);
    displayBooks();
    newBookForm.reset();
})

const removeButtons = Array.from(document.querySelectorAll(".remove-btn"));


console.log(myLibrary)