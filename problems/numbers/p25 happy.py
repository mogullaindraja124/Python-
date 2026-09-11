#happy number
n=int(input("enter a number:"))
happy=0
while n!=1 and n!=4:
    happy=0
    while n>0:
        rem=n%10
        happy+=rem**2
        n//=10
    n=happy
if n==1:
    print("happy number")
else:
    print("not a happy number")
