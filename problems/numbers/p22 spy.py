#Spy number
n=int(input("enter a number:"))
total=0
product=1
while n>0:
	r=n%10
	total+=r
	product*=r
	n//=10
if total==product:
	print("Spy Number")
else:
	print("Not a Spy Number")