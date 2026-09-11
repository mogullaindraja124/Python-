#Library management system 
import ast
library=[]
def add_book():
    book={
        "Name":input("enter book name:"),
        "Book_id":input("enter book id:"),
        "Author":input("enter author name:"),
        "Status":"Available"
        
    }
    library.append(book)
    save_book(book)
    print("book is added successfully!")
def display():
    if(len(library)==0):
        print("books are not there")
    else:
        for book in library:
            print("=================")
            print(f"Book Name:{book['Name']}")
            print(f"Id:{book['Book_id']}")
            print(f"Author:{book['Author']}")
            print(f"Status:{book['Status']}")
            print("=================")
def search():
    if(len(library)==0):
        print("books are not there.")
    else:
        found=0
        book_id=input("enter book id:")
        for book in library:
            if(book["Book_id"]==book_id):
                print("=================")
                print(f"Book Name:{book['Name']}")
                print(f"Id:{book['Book_id']}")
                print(f"Author:{book['Author']}")
                print(f"Status:{book['Status']}")
                print("=================")
                found=1
                break 
        if(found==0):
            print("book is not there")
def delete():
    if(len(library)==0):
        print("there are no books to delete")
    else:
        found=0
        book_id=input("enter a book id:")
        for book in library:
            if(book["Book_id"]==book_id):
                library.remove(book)
                rewrite_book(library)
                print("book is deleted successfully!")
                found=1
                break
        if(found==0):
            print("there is no such book in library ")
    
def update():
    found=0
    book_id=input("enter book id:")
    for book in library:
        if(book["Book_id"]==book_id):
            found=1
            print("1.update book name")
            print("2.update book id")
            print("3.Author name")
            print("4.update status")
            choice=int(input("enter your choice:"))
            if(choice==1):
                new=input("enter new book name:")
                book["Name"]=new
                print("book name updated successfully ")
                rewrite_book(library)
                break
            elif(choice==2):
                new=input("enter new id:")
                book["Book_id"]=new
                rewrite_book(library)
                print("book id updated successfully ")
                break
            elif(choice==3):
                new=input("enter new author name")
                book["Author"]=new
                rewrite_book(library)
                print("Author name updated successfully ")
                break
            elif(choice==4):
                if(book["Status"]=="Available"):
                    book["Status"]="Issued"
                    rewrite_book(library)
                    print("status updated successfully ")
                    break
                else:
                    book["Status"]="Available"
                    rewrite_book(library)
                    print("status updated successfully ")
                    break
            else:
                print("retry with valid choice")
                break
    if(found==0):
        print("book is not found")
def issue_book():
    found=0
    book_id=input("enter book id:")
    for book in library:
        if(book["Book_id"]==book_id):
            found=1
            if(book["Status"]=="Available"):
                book["Status"]="Issued"
                rewrite_book(library)
                print("book issued successfully!")
                break 
            else:
                print("book is already issued ")
                break 
    if(found==0):
        print("book not found ")
def return_book():
    found=0
    book_id=input("enter book id:")
    for book in library:
        if(book["Book_id"]==book_id):
            found=1
            if(book["Status"]=="Issued"):
                book["Status"]="Available"
                rewrite_book(library)
                print("book received successfully!")
                break
            else:
                print("book is already available")
                break
    if(found==0):
        print("book is not found ")
def available():
    count=0
    for book in library:
        if(book["Status"]=="Available"):
            count+=1
    print(f"Available books:{count}")
def issued():
    count=0
    for book in library:
        if(book["Status"]=="Issued"):
            count+=1
    print(f"Issued books:{count}")
def rewrite_book(library):
    file = open("library.txt", "w")
    for book in library:
        file.write(str(book) + "\n")
    file.close()
def load_books():
    library = []
    try:
        file = open("library.txt", "r")
        lines = file.readlines()
        for line in lines:
            book = ast.literal_eval(line)
            library.append(book)
        file.close()
    except FileNotFoundError:
        pass
    return library
def save_book(book):
    file = open("library.txt", "a")
    file.write(str(book) + "\n")
    file.close()
library=load_books()       
def menu():
    print("======================")
    print("library management system ")
    print("1.Add book")
    print("2.display books")
    print("3.search book")
    print("4.Delete book")
    print("5.update book ")
    print("6.Issue book")
    print("7.Return book")
    print("8.Available books")
    print("9.Issued books")
    print("10.Exit")
    print("=======================")
                
while True:
    menu()
    choice=int(input("enter your choice:"))
    if(choice==1):
        add_book()
    elif(choice==2):
        display()
    elif(choice==3):
        search()
    elif(choice==4):
        delete()
    elif(choice==5):
        update()
    elif(choice==6):
        issue_book()
    elif(choice==7):
        return_book()
    elif(choice==8):
        available()
    elif(choice==9):
        issued()
    elif(choice==10):
        print("thank you!")
        break
    else:
        print("enter a valid choice")