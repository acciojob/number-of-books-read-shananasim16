// Define the function to count the number of books that have been read.
function numberOfBooksRead(library) {
    let count = 0;
    
    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus === true) {
            count++;
        }
    }
    
    return count;
}

// Sample library object
const library = [
    {
        author: 'Author 1',
        title: 'Book 1',
        readingStatus: true,
    },
    {
        author: 'Author 2',
        title: 'Book 2',
        readingStatus: false,
    },
    {
        author: 'Author 3',
        title: 'Book 3',
        readingStatus: true,
    },
];

// Call the function and display the result on the HTML page.
const resultDiv = document.getElementById('result');
const booksRead = numberOfBooksRead(library);
resultDiv.textContent = `Number of books read: ${booksRead}`;

