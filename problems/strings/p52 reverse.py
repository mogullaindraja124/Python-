#reverse a string
str=input("enter a string:")
n=len(str)
reverse=""
for i in range(n):
	reverse+=str[n-i-1]
print(reverse)