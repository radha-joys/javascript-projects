// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, isbn, noOfPages, noOftimesBookCheckedOut, isBookDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.noOfPages = noOfPages;
        this.noOftimesBookCheckedOut = noOftimesBookCheckedOut;
        this.isBookDiscarded = isBookDiscarded;
    }

    checkedOut(noOfTimesChecked = 1) {
        this.timesCheckedOut += noOfTimesChecked;
        this.disposeOldBooks();
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, isbn, noOfPages, noOftimesBookCheckedOut, isBookDiscarded){
        super(title, author, copyrightDate, isbn, noOfPages, noOftimesBookCheckedOut, isBookDiscarded = 'No');
    }
    disposeOldBooks(){
        const currentYear = new Date().getFullYear();
        if(currentYear - this.copyrightDate > 5){
            this.isBookDiscarded = 'Yes';
        }
        return this.isBookDiscarded;
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, isbn, noOfPages, noOftimesBookCheckedOut, isBookDiscarded){
        super(title, author, copyrightDate, isbn, noOfPages, noOftimesBookCheckedOut, isBookDiscarded = 'No');
    }
    disposeOldBooks(){
        if(this.noOftimesBookCheckedOut > 100){
            this.isBookDiscarded = 'Yes'
        }
        return this.isBookDiscarded;
    }
}

// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
// Code exercises 4 & 5 here:
manual1.disposeOldBooks();
console.log(manual1);

novel1.checkedOut(5);
console.log(novel1);