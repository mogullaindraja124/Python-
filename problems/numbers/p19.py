#check whether the number is a harshad number
n=int(input("enter a number:"))
original=n
sum=0
while n>0:
    r=n%10
    sum=sum+r
    n=n//10
if original%sum==0:
    print("harshad number")
else:
    print("not a harshand number")
    
