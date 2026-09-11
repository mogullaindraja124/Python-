#lcm of two numbers
n1,n2=map(int,input("enter two numbers:").split(','))
on1=n1 #original n1
on2=n2
while n2!=0:
	n1,n2=n2,n1%n2
lcm=(on1*on2)//n1
print("lcm:",lcm)