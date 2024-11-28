const getTheTitles = function(books) {

    titles = [];
  
    for (const book of books) {
        console.log(book.title);
        titles.push(book.title);
     }

    return titles;
  
};

// Do not edit below this line
module.exports = getTheTitles;
