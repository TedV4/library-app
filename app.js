//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Example books
let oil = new Book("Oil!", "Upton Sinclair", 548, true);
let annaK = new Book("Anna Karenina", "Leo Tolstoy", 864, false);

//Store books here
let library = [oil, annaK];

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

    //If the book was read, display complete, otherwise display incomplete
    if (book.read === true) {
      readingStatus.textContent = "Complete";
    } else {
      readingStatus.textContent = "Incomplete";
    }

    bookCard.append(title, author, pages, readingStatus);
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
  let readingStatus = document.getElementById("reading-status-checkbox").value;
  console.log(readingStatus)
  
  //Convert checkbox value to boolean
  if (readingStatus == 'on') {
    readingStatus = true;
  } else (readingStatus = false);

  //Validate against empty form values
  if (title !== "" && author !== "" && pages !== "") {
    let book = new Book(title, author, pages, readingStatus);
    library.push(book);
    addBookToLibrary(book);
  }
});

addBookToLibrary();
