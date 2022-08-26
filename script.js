const container = document.getElementById('container');
let x = 1;
let myLibrary = [
    theHobbit = {
        name: "The Hobbit.",
        author: "J.R.R. Tolkien.",
        pages: "295 pages.",
        read: "Not read yet.",
        info: "The Hobbit, by J.R.R. Tolkien, 295 pages, not read yet",
    },

];

function books(name, author, page, read){
    this.name = name;
    this.author = author; 
    this.page = page;
    this.read = read;
}

document.getElementById("name").innerHTML = theHobbit.name 
document.getElementById("author").innerHTML = theHobbit.author 
document.getElementById("pages").innerHTML = theHobbit.pages 
document.getElementById("read").innerHTML = theHobbit.read 

function addBook(){

    document.getElementById("card")
    let names = prompt("Book Name")
    let authors = prompt("Book Author")
    let pages = prompt("Book Pages")
    let read = prompt("Read or Not read yet?")
    const book = new books(names, authors, pages, read)
    myLibrary.push(book)

    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i])

    }

    

    
    const display = 
    
    `<div id="card" >
    <div id="name">${myLibrary[x].name}</div>
    <label for="author" style="color: #9BC1E8;" >author:</label>
    <div id="author">${myLibrary[x].author}</div>
    <label for="pages" style="color: #9BC1E8;">pages:</label>
    <div class="pages">${myLibrary[x].page}</div>
    <div id="read">${myLibrary[x].read}</div>
    </div>`
    container.innerHTML += display;

    x++
}

function deleteAllBooks() {
    location.reload()
}

