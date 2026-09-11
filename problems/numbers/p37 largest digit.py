#find the largest digit in a given number
n=int(input("enter a number:"))
largest=0
while n>0:
	r=n%10
	if r>largest:
		largest=r
	n=n//10
print("largest digit:",largest)