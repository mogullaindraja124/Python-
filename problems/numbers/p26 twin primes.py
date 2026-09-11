#check whether two given numbers are twim primes or not
n1=int(input("enter num1:"))
n2=int(input("enter num2:"))
c1=0
c2=0
prime1=False
prime2=False
for i in range(1,n1+1):
	if n1%i==0:
		c1+=1
if c1==2:
	prime1=True
for i in range(1,n2+1):
	if n2%i==0:
		c2+=1
if c2==2:
	prime2=True
if prime1==True and prime2==True:
	if n2-n1==2 or n1-n2==2:
		print("Twin primes")
	else:
		print("not Twin primes")
else:
	print("not Twin primes")
	