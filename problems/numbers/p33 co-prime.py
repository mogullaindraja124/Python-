#check whether the two numbers are co-primes or not
n1,n2=(map(int,input("enter two numbers:").split(',')))
while n1!=n2:
	if n1<n2:
		n2=n2-n1
	else:
		n1=n1-n2
if n1==1:
	print("co primes")
else:
	print("not coprimes")