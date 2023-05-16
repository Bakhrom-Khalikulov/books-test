// Step 1 get elements from HTML
var elBooksList = document.querySelector(".js-books__list");
var elBookTemplate = document.querySelector(".js-book__template").content;
var newBooksFragment = document.createDocumentFragment();


// Step 2 Booklarni DOMga chiqarib olish un, function yozishimiz kere
// function getBooks(_books, _node){
//     _books.forEach(function (book){
//         var newClonteTemplate = elBookTemplate.cloneNode(true);

//         newClonteTemplate.querySelector("js-book__img") = book.link;
//         newClonteTemplate.querySelector("js-book__title").textContent = book.title;
//         newClonteTemplate.querySelector("js-book__author").textContent = book.author;
//         newClonteTemplate.querySelector("js-book__year").textContent = book.year;

//         newBooksFragment.appendChild(newClonteTemplate);
//     });

//     _node.appendChild(newBooksFragment);
// }

// getBooks(books, elBooksList);

function getBooks(_books, _node){
    _books.forEach(function(book){
        var newCloneTemplate = elBookTemplate.cloneNode(true);

        newCloneTemplate.querySelector(".js-book__title").textContent = book.title;
        newCloneTemplate.querySelector(".js-book__author").textContent = book.author;
        newCloneTemplate.querySelector(".js-book__year").textContent = book.year;

        newBooksFragment.appendChild(newCloneTemplate);
    })

    _node.appendChild(newBooksFragment);
}

getBooks(books, elBooksList);
