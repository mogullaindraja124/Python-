#check whether given two numbers are consecutive or not
n1,n2=map(int,input("enter two numbers:").split(','))
if abs(n1-n2)==1:
	print("consecutive numbers")
else:
	print("Not consecutive numbers")