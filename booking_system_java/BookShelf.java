package book;
import java.util.ArrayList;
import java.util.Scanner;

public class BookShelf {
    int shelfSize = 0;
    ArrayList<Book> books = new ArrayList<Book>(); //book array
    Scanner myObj = new Scanner(System.in);
    
    public BookShelf(int a){
        shelfSize = a;
    }

    public void makeChoice(){
        System.out.println("What would you like to do?'");
        System.out.println("To add a new book, enter 'add' \n to remove a book, enter 'del' \n to see the books on the shelf, enter 'books'");
        String input = myObj.nextLine();  // Read user input
        if(input=="add"){
            addToShelf();
        }
        else if(input=="del"){
            removeFromShelf();
        }
        else if(input=="books"){
            displayBooksOnShelf();
        }
        else if(input=="exit"){
            System.exit(shelfSize);
        }
        else{
            System.out.println("The input '" + input + "' is invalid. Try again: ");
            makeChoice();
        }
    }

    public void manageShelf(){
        if(shelfSize>0){
            if(books.size()==0){ //there is no books on shelf
                System.out.println("There is currently no books on the shelf, and there is space for " + shelfSize + " books.");
                makeChoice();
            }
            else if(books.size()>0 && books.size()<shelfSize){ //there is space on shelf
                System.out.println("There is currently "+ books.size() + " books on the shelf, and there is space for " + (shelfSize - books.size()) + " more on the shelf.");
                makeChoice();
            }
        }
        else{ //shelf is invalid (0 or less space)
            System.out.println("the shelf size is invalid.");

        }
        
        

            
            //give the user the option to add a book
        }
        


    public void addToShelf() { 
        //     - a method to add books to a shelve. take into account if there is no space to add the book
        // Book book = new Book(bookTitle, productionYear);
          // Create a Scanner object
        System.out.println("addToShelf() method was invoked. Books.size() is: " + books.size() + " and shelfSpace is: " + shelfSize);

        
        while (books.size() <= shelfSize){ //[LOtR]
            System.out.println("Enter next book's title");
            String title = myObj.nextLine();  // Read user input

            Book book = new Book(title); //Create new book object from user input
            books.add(book);

            System.out.println("The book was added to the shelf and it's contents are: " + book.title);
            //System.out.println("This is the array: " + Book.toString(books));
        }

    }


    public void removeFromShelf() {
        //take input
        //loop through array
            //if input matches book.title
                //delete from array 
      }


    public void displayBooksOnShelf(){
        //displays books on the shelf
    }      
}
