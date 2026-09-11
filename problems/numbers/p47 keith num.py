#
n1=int(input("enter a number:"))
n=n1
origi_n=n
sum=0
count=0
while n1>0:
	count+=1
	n1//=10
if count==2:
	r1=n//10
	n%=10
	r2=n
	sum=r1+r2
	while sum!=origi_n:
		sum=r1+r2
		r1=r2
		r2=sum
		if sum>origi_n:
			print("not a keith number")
			break
else:
	r1=n//100
	n%=100
	r2=n//10
	n%=10
	r3=n
	sum=r1+r2+r3
	while sum!=origi_n:
		sum=r1+r2+r3
		r1=r2
		r2=r3
		r3=sum
		if sum>origi_n:
			print("not a keith number")
			break
if sum==origi_n:
	print("sum:",sum)
	print("keith number")