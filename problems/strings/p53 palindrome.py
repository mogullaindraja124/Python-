#check whether the given string is palindrome or not
text=input("enter a string:")
n=len(text)
reverse=""
for i in range(n):
	reverse+=text[n-i-1]
if reverse==text:
	print("palindrome")
else:
	print("not a palindrome")