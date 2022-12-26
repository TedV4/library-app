class Book {
  constructor(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
  }
}

//Store books here
let library = [];

//Get grid container
let gridContainer = document.querySelector(".grid-container");

//Append books to grid container
function addBookToLibrary(book) {
  let bookCard = document.createElement("div");

  let title = document.createElement("h1");
  title.textContent = book.title;

  let author = document.createElement("p");
  author.textContent = book.author;

  let pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;

  let readingStatus = document.createElement("button");
  readingStatus.title = "Update status";

  //If the book was read, display 'complete' styling, otherwise display 'incomplete'
  function toggleReadingStatusStyle() {
    if (book.read == true) {
      readingStatus.textContent = "Complete";
      readingStatus.classList.remove("incomplete");
      readingStatus.classList.add("complete");
    } else {
      readingStatus.textContent = "Incomplete";
      readingStatus.classList.remove("complete");
      readingStatus.classList.add("incomplete");
    }
  }

  //On click, change a books reading status and toggle its style
  readingStatus.addEventListener("click", function () {
    if (book.read == true) {
      book.read = false;
      toggleReadingStatusStyle();
    } else if (book.read == false) {
      book.read = true;
      toggleReadingStatusStyle();
    }
  });

  //Add book removal button
  let removeBookBtn = document.createElement("button");
  removeBookBtn.textContent = "X";
  removeBookBtn.title = "Delete";
  removeBookBtn.classList.add("delete-btn");
  //This will be compared to a books index value, so that only one book will be deleted at a time
  removeBookBtn.id = library.length;

  removeBookBtn.addEventListener("click", function () {
    if (book.index == removeBookBtn.id) {
      //Removes the book from the library
      library.splice(library[book.index], 1);
      //Removes the book from the dom
      removeBookBtn.parentElement.remove();
    }
  });

  toggleReadingStatusStyle();
  bookCard.append(title, author, pages, readingStatus, removeBookBtn);
  gridContainer.appendChild(bookCard);
}

//Get add-book-button
let addBookBtn = document.querySelector(".submit-btn");

//On click, add book to library
addBookBtn.addEventListener("click", function (event) {
  //Prevent form submission for the sake of using our array as storage
  event.preventDefault();

  //Get form values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readingStatus = document.getElementById(
    "reading-status-checkbox"
  ).checked;

  //Give the book an index value, will be used to remove a specific book from the library
  let index = library.length + 1;

  //Validate against empty form values
  if (title !== "" && author !== "" && pages !== "") {
    let book = new Book(title, author, pages, readingStatus, index);
    library.push(book);
    addBookToLibrary(book);
    //Clear form input fields
    document.querySelector("form").reset();
  }
});

//Example books for demonstration
let jPark = new Book("Jurassic Park", "Michael Crichton", 448, true, 1);
let oil = new Book("Oil!", "Upton Sinclair", 548, true, 2);
let annaK = new Book("Anna Karenina", "Leo Tolstoy", 864, false, 3);

library.push(jPark);
addBookToLibrary(jPark);
library.push(oil);
addBookToLibrary(oil);
library.push(annaK);
addBookToLibrary(annaK);
