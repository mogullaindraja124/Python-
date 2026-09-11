#check whether a number is palindrome after squaring
n=int(input("enter a number:"))
square=n*n
square_num=square
num=0
while square>0:
	digit=square%10
	num=num*10+digit
	square//=10
if num==square_num:
	print("palindrome")
else:
	print("not a palindrome")