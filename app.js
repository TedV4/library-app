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
function addBookToLibrary() {
  for (let i = 0; i < library.length; i++) {
    let bookCard = document.createElement("div");

    let title = document.createElement("h1");
    title.textContent = library[i].title;

    let author = document.createElement("p");
    author.textContent = library[i].author;

    let pages = document.createElement("p");
    pages.textContent = `${library[i].pages} pages`;

    let readingStatus = document.createElement("button");
   
    //If the book was read, display complete, otherwise display incomplete
    if (library[i].read === true) {
      readingStatus.textContent = "Complete";
    } else {
      readingStatus.textContent = "Incomplete";
    }

    bookCard.append(title, author, pages, readingStatus);
    gridContainer.appendChild(bookCard);
  }
}

addBookToLibrary();
