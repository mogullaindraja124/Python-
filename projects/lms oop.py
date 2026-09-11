#Library with oop1
class Library:
	def __init__(self,name,book_id,author,status):
		self.name=name
		self.book_id=book_id
		self.author=author
		self.status=status
	def display(self):
		print("Book Name:",self.name)
		print("Book Id:",self.book_id)
		print("Author:",self.author)
		print("Status:",self.status)
	def issue_book(self):
		if(self.status=="Available"):
			self.status="Issued"
			print("book issued successfully!")
		else:
			print("book is already issued")
	def return_book(self):
		if(self.status=="Issued"):
			self.status="Available"
			print("book returned successfully!")
		else:
			print("book is already returned")
	def change(self):
		while True:
			print("1.book name")
			print("2.book id")
			print("3.Author name")
			print("4.exit")
			choice=int(input("enter your choice:"))
			if(choice==1):
				new_name=input("enter new book name:")
				self.name=new_name
				print("book name changed")
			elif(choice==2):
				new_id=input("enter new id:")
				self.book_id=new_id
				print("book id changed successfully")
			elif(choice==3):
				new_author=input("enter new author:")
				self.author=new_author
				print("author name update")
			elif(choice==4):
			   	print("thank you")
				break
			else:
		        print("enter valid choice:")		    
book1=Library("Python",123,"Guido","Available")
book2=Library("Mathematics",124,"Ramanujan","Issued")
books=[]
books.append(book1)
books.append(book2)
def add():
	name=input("enter book name:")
	book_id=input("enter book id:")
	author=input("enter author name:")
	status=input("enter status:")
	book=Library(name,book_id,author,status)
	books.append(book)
def display():
	if len(books)==0:
		print("there are no books")
	else:
		for book in books:
			book.display()
def search():
		found=0
		if len(books)==0:
			print("there are no books")
		else:
			bok_id=int(input("enter book id to search:"))
			for book in books:
				if book.book_id==bok_id:
					book.display()
					found=1
		if(found==0):
			print("book is not there")
def delete():
		found=0
		if len(books)==0:
			print("there are no bokks to delete")
		else:
			new=int(input("book id:"))
			for book in books:
				if book.book_id==new:
				    found=1
				    books.remove(book)
				    print("book is succesfully deleted")
				    break
		if found==0:
			print("book is not there")
def issue_book():
			found=0
			bok_id=int(input("enter book id:"))
			for book in books:
				if book.book_id==bok_id:
				    found=1
				    book.issue_book()
				    break
			if found==0:
				print("book is not there")
def return_book():
			found=0
			bok_id=int(input("enter book id:"))
			for book in books:
				if book.book_id==bok_id:
					found=1
					book.return_book()
					break
			if found==0:
				print("book is not there")
while True:
    print("1.add book")
    print("2.diaplay")
    print("3.search")
    print("4.delete")
    print("5.issue book")
    print("6.return book")
    print("7.exit")
    choice=int(input("enter your choice:"))
    if choice==1:
        add()
    elif(choice==2):
        display()
    elif(choice==3):
    	search()
    elif(choice==4):
    	delete()
    elif(choice==5):
    	issue_book()
    elif(choice==6):
    	return_book()
    elif(choice==7):
    	print("thank you")
    	break
    else:
    	print("enter valid choice")

		