// Don't forget to run "npm install" in the terminal before trying to use "readline-sync"
// import rs from "readline-sync";

// Example use of readline-sync
// Run "node solution.js" in the terminal to see how it works
// Feel free to delete the example code once you are clear about how to use "readline-sync"
// const userInput = rs.question("Say something: ");
// console.log(userInput);


//Book Store

import rs from "readline-sync";

let book1 = { name: "Origin", author: "Dan Brown", price: 15, shelf: "Shelf 5. Section 1" }
let book2 = { name: "The Da Vinci Code", author: "Dan Brown", price: 13, shelf: "Shelf 5. Section 2" }
let book3 = { name: "Inferno", author: "Dan Brown", price: 14, shelf: "Shelf 5. Section 3" }
let book4 = { name: "The Lost Symbol", author: "Dan Brown", price: 12, shelf: "Shelf 5. Section 4" }
let book5 = { name: "Angels & Demons", author: "Dan Brown", price: 13, shelf: "Shelf 5. Section 5" }
let book6 = { name: "Deception Point", author: "Dan Brown", price: 16, shelf: "Shelf 5. Section 6" }
let book7 = { name: "Digital Fortress", author: "Dan Brown", price: 14, shelf: "Shelf 5. Section 7" }

let book8 = { name: "You Like It Darker", author: "Stephen King", price: 17, shelf: "Shelf 4. Section 1" }
let book9 = { name: "If It Bleeds", author: "Stephen King", price: 15.5, shelf: "Shelf 4. Section 2" }
let book10 = { name: "The Bazaar of Bad Dreams", author: "Stephen King", price: 14.5, shelf: "Shelf 4. Section 3" }
let book11 = { name: "Full Dark, No Stars", author: "Stephen King", price: 13.9, shelf: "Shelf 4. Section 4" }
let book12 = { name: "Just After Sunset", author: "Stephen King", price: 16, shelf: "Shelf 4. Section 5" }
let book13 = { name: "Everything's Eventual", author: "Stephen King", price: 17, shelf: "Shelf 4. Section 6" }
let book14 = { name: "Hearts in Atlantis", author: "Stephen King", price: 18.5, shelf: "Shelf 4. Section 7" }

let book15 = { name: "The Hobbit, or There and Back Again", author: "J. R. R. Tolkien", price: 18.5, shelf: "Shelf 3. Section 1" }
let book16 = { name: "The Fellowship of the Ring", author: "J. R. R. Tolkien", price: 17.5, shelf: "Shelf 3. Section 2" }
let book17 = { name: "The Two Towers", author: "J. R. R. Tolkien", price: 18, shelf: "Shelf 3. Section 3" }
let book18 = { name: "The Return of the King", author: "J. R. R. Tolkien", price: 15.5, shelf: "Shelf 3. Section 4" }
let book19 = { name: "The Adventures of Tom Bombadil", author: "J. R. R. Tolkien", price: 13, shelf: "Shelf 3. Section 5" }
let book20 = { name: "The Silmarillion", author: "J. R. R. Tolkien", price: 19.5, shelf: "Shelf 3. Section 6" }
let book21 = { name: "Unfinished Tales", author: "J. R. R. Tolkien", price: 14, shelf: "Shelf 3. Section 7" }

let book22 = { name: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", price: 13, shelf: "Shelf 2. Section 1" }
let book23 = { name: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling", price: 14, shelf: "Shelf 2. Section 2" }
let book24 = { name: "Harry Potter and the Prisoner of Azkaban", author: "J. K. Rowling", price: 15, shelf: "Shelf 2. Section 3" }
let book25 = { name: "Harry Potter and the Goblet of Fire", author: "J. K. Rowling", price: 15.5, shelf: "Shelf 2. Section 4" }
let book26 = { name: "Harry Potter and the Order of the Phoenix	", author: "J. K. Rowling", price: 13.5, shelf: "Shelf 2. Section 5" }
let book27 = { name: "Harry Potter and the Half-Blood Prince	", author: "J. K. Rowling", price: 17.5, shelf: "Shelf 2. Section 6" }
let book28 = { name: "Harry Potter and the Deathly Hallows	", author: "J. K. Rowling", price: 17, shelf: "Shelf 2. Section 7" }

let book29 = { name: "Watership Down", author: "Richard Adams", price: 13.8, shelf: "Shelf 1. Section 1" }
let book30 = { name: "She: A History of Adventure", author: "H. Rider Haggard", price: 14.5, shelf: "Shelf 1. Section 2" }
let book31 = { name: "The Alchemist", author: "Paulo Coelho", price: 12, shelf: "Shelf 1. Section 3" }
let book32 = { name: "One Hundred Years of Solitude", author: "Gabriel García Márquez", price: 15.5, shelf: "Shelf 1. Section 4" }
let book33 = { name: "Anne of Green Gables", author: "Lucy Maud Montgomery", price: 13.5, shelf: "Shelf 1. Section 5" }
let book34 = { name: "The Eagle Has Landed", author: "Jack Higgins", price: 15, shelf: "Shelf 1. Section 6" }
let book35 = { name: "The Godfather", author: "Mario Puzo", price: 12.5, shelf: "Shelf 1. Section 7" }

let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book16, book17, book18, book19, book20, book21, book22, book23, book24, book25, book26, book27, book28, book29, book30, book31, book32, book33, book34, book35];

let shelf11 = { code: "Shelf 1. Section 1", show: false }
let shelf12 = { code: "Shelf 1. Section 2", show: false }
let shelf13 = { code: "Shelf 1. Section 3", show: false }
let shelf14 = { code: "Shelf 1. Section 4", show: false }
let shelf15 = { code: "Shelf 1. Section 5", show: false }

let shelf21 = { code: "Shelf 2. Section 1", show: false }
let shelf22 = { code: "Shelf 2. Section 2", show: false }
let shelf23 = { code: "Shelf 2. Section 3", show: false }
let shelf24 = { code: "Shelf 2. Section 4", show: false }
let shelf25 = { code: "Shelf 2. Section 5", show: false }

let shelf31 = { code: "Shelf 3. Section 1", show: false }
let shelf32 = { code: "Shelf 3. Section 2", show: false }
let shelf33 = { code: "Shelf 3. Section 3", show: false }
let shelf34 = { code: "Shelf 3. Section 4", show: false }
let shelf35 = { code: "Shelf 3. Section 5", show: false }

let shelf41 = { code: "Shelf 4. Section 1", show: false }
let shelf42 = { code: "Shelf 4. Section 2", show: false }
let shelf43 = { code: "Shelf 4. Section 3", show: false }
let shelf44 = { code: "Shelf 4. Section 4", show: false }
let shelf45 = { code: "Shelf 4. Section 5", show: false }

let shelf51 = { code: "Shelf 5. Section 1", show: false }
let shelf52 = { code: "Shelf 5. Section 2", show: false }
let shelf53 = { code: "Shelf 5. Section 3", show: false }
let shelf54 = { code: "Shelf 5. Section 4", show: false }
let shelf55 = { code: "Shelf 5. Section 5", show: false }

let shelfs = [
    [shelf51, shelf52, shelf53, shelf54, shelf55],
    [shelf41, shelf42, shelf43, shelf44, shelf45],
    [shelf31, shelf32, shelf33, shelf34, shelf35],
    [shelf21, shelf22, shelf23, shelf24, shelf25],
    [shelf11, shelf12, shelf13, shelf14, shelf15],
]


function creatShelf () {
    const result = shelfs.map(shelf => {
        const section = shelf.map(section => {
            return `${section.code}`
        });
        return section.join(", ");
    })
    return result;
}

// Find book
function findBookLocation(bookName) {
  const lowerCaseBookName = bookName.toLowerCase();
  const location = shelfs
      .map(shelf => shelf.map(section => ({
          section: section.code,
          book: books.find(b => b.shelf === section.code && b.name.toLowerCase().includes(lowerCaseBookName))
      })))
      .find(shelf => shelf.some(section => section.book !== undefined));

  if (location) {
      const section = location.find(section => section.book !== undefined);
      return `Book containing "${bookName}" is on ${section.section}`;
  }

  return `Book containing "${bookName}" not found on any shelf`;
}

const bookNameToSearch = rs.question("Enter the book name to search: ");
console.log(findBookLocation(bookNameToSearch));


//Sorted by Price
function sortBooksByPrice(order) {
    const sortedBooks = books.slice().sort((a, b) => order === 'ascending' ? a.price - b.price : b.price - a.price);
    return sortedBooks;
}
const sortOrder = rs.question("Enter the sorting order ('ascending' or 'descending'): ");
console.log(sortBooksByPrice(sortOrder));


//Update book price
function updateBookPrice(bookName, newPrice) {
    const bookToUpdate = books.find(book => book.name.toLowerCase() === bookName.toLowerCase());

    if (bookToUpdate) {
        bookToUpdate.price = newPrice;
        console.log(`Price of book "${bookName}" has been updated to ${newPrice}.`);
    } else {
        console.log(`Book "${bookName}" not found.`);
    }
}
const updatedBookName = rs.question("Enter the book name to update price: ");
const newPrice = rs.questionFloat("Enter the new price: ");
updateBookPrice(updatedBookName, newPrice);


//Filtering by Author name
function findBooksByAuthor(authorName) {
    const booksByAuthor = books.filter(book => book.author.toLowerCase().includes(authorName.toLowerCase()));
    return booksByAuthor;
}


const findBooksByAuthor1 = rs.question("Enter the name of the author you are looking for: ")
console.log(findBooksByAuthor(findBooksByAuthor1));

//Shelf status
function showShelfStatus() {
  shelfs.forEach((shelf, index) => {
      const occupiedSections = shelf.filter(section => books.some(book => book.shelf === section.code));
      const percentageOccupied = (occupiedSections.length / shelf.length) * 100;

      rs.question(`Shelf ${index + 1} is ${percentageOccupied}% occupied. Press Enter to continue...`);
  });
}
showShelfStatus();

//Add Shelf and Section
function addShelfAndSection(shelfCode, sectionCode) {
    const newShelf = { code: shelfCode, show: false };
    const newSection = { code: sectionCode, show: false };

    const rowIndex = shelfs.findIndex(row => row.some(section => section.code === sectionCode));

    if (rowIndex === -1) {
        shelfs.push([newShelf, newSection]);
    } else {
        shelfs[rowIndex].push(newSection);
        shelfs[rowIndex].sort((a, b) => a.code.localeCompare(b.code));
    }
}


const shelfCode = rs.question("Enter the new shelf code: ");
const sectionCode = rs.question("Enter the new section code: ");
addShelfAndSection(shelfCode, sectionCode);
console.log(shelfs);


//Find books in price range
function findBooksInPriceRange() {
  const minPrice = parseFloat(rs.question("Enter the minimum price: "));
  const maxPrice = parseFloat(rs.question("Enter the maximum price: "));

  const booksInRange = books.filter(book => book.price >= minPrice && book.price <= maxPrice);
  
  console.log("Books in the specified price range:");
  console.log(booksInRange);
}
findBooksInPriceRange();


//Add book
function addBook(name, author, price, shelf) {
    const newBook = { name, author, price, shelf};
    books.push(newBook);
    return newBook;
}


const addName = rs.question("Enter the book name: ");
const addAuthor = rs.question("Enter the author name: ");
const addPrice = rs.question("Enter the price: ");
const addShelf = rs.question("Enter the shelf number: ");
const newBook = addBook(addName, addAuthor, addPrice, addShelf);
console.log("Newly added book:", newBook);


//Delete book
function deleteBook(bookName) {
    const indexToDelete = books.findIndex(book => book.name.toLowerCase() === bookName.toLowerCase());
    
    if (indexToDelete !== -1) {
        books.splice(indexToDelete, 1);
        return `Book "${bookName}" has been deleted.`;
    } else {
        return `Book "${bookName}" not found.`;
    }
}


const bookDelete = rs.question("Enter the name of the book you want to delete: ");
console.log(deleteBook(bookDelete));


//Update book info
function updateBookInfo(bookName, newInfo) {
    const bookToUpdate = books.find(book => book.name.toLowerCase() === bookName.toLowerCase());

    if (bookToUpdate) {
        Object.assign(bookToUpdate, newInfo);
        return `Book "${bookName}" information has been updated.`;
    } else {
        return `Book "${bookName}" not found.`;
    }
}

const bookName = rs.question("Enter the name of the book you want to update: ");
const priceInfo = rs.question("Enter the price of the book you want to update: ");
const shelfInfo = rs.question("Enter the shelf number of the book you want to update: ");

const updatedBook = updateBookInfo(bookName,priceInfo,shelfInfo);
console.log(updatedBook);


//Move to book new section
function moveBookToNewSection(bookName, newSection) {
    const bookToMove = books.find(book => book.name.toLowerCase() === bookName.toLowerCase());

    if (bookToMove) {
        const oldSection = shelfs.flat().find(section => section.code === bookToMove.shelf);
        const newSectionObj = shelfs.flat().find(section => section.code === newSection);

        if (oldSection && newSectionObj) {
            bookToMove.shelf = newSection;
            console.log(`Book "${bookName}" moved from ${oldSection.code} to ${newSection}.`);
        } else {
            console.log(`Invalid shelf or section.`);
        }
    } else {
        console.log(`Book "${bookName}" not found.`);
    }
}

const bookNameToMove = rs.question("Enter the name of the book to move: ");
const newSectionToMove = rs.question("Enter the new section: ");

moveBookToNewSection(bookNameToMove, newSectionToMove);


