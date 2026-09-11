#strong palindrome
n=int(input("enter a number:"))
original=n
reverse=0
fact_sum=0
while n>0:
	fact=1
	digit=n%10
	for i in range(1,digit+1):
		fact=fact*i
	fact_sum+=fact
	reverse=reverse*10+digit
	n//=10
if reverse==original and fact_sum==original:
	print("strong palindrome")
else:
	print("not a strong palindrome")
