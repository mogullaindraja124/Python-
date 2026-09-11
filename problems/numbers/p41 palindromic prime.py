#check whether the number is palindrome and prime number
n=int(input("enter a number:"))
original=n
count=0
reverse=0
for i in range(1,n+1):
	if n%i==0:
		count+=1
while n>0:
	digit=n%10
	reverse=reverse*10+digit
	n//=10
if count==2 and reverse==original:
	print("prime palindrome")
else:
	print("not a prime palindrome")