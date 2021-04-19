document.addEventListener("DOMContentLoaded", function() {
getBooks() .then(renderBooks)});

function getBooks(){
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
  .then(books => console.log(json))
}

function renderBooks() {
  const list = document.getElementById('list-panel');
  books.forEach(book => {
    const ul = document.getElementById('ul');
    ul.innerHTML = book.name;
    list.appendChild(ul);
  });
}


