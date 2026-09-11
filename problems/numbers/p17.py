#check whether two numbers are amicable numbers
n1=int(input("enter first number:"))
n2=int(input("enter second number:"))
s1=0
s2=0
for i in range(1,n1):
    if n1%i==0:
        s1=s1+i
for i in range(1,n2):
    if n2%i==0:
        s2=s2+i
if s1==n2 and s2==n1:
    print("amicable numbers")
else:
    print("not amicable numbers")


       
