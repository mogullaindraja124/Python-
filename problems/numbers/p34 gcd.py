#gcd of two numbers
n1,n2=map(int,input("enter two numbers:").split(','))
while n2!=0 and n1!=n2:
	n1,n2=n2,n1%n2
print("gcd:",n1)