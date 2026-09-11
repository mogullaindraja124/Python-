#check whether the given number is belong to fibonacci series
n=int(input("enter a number:"))
f1=0
f2=1
f3=f1+f2
found=False

while f3<=n:
    f3=f1+f2
    if f3==n:
        found=True
        break
    f1=f2
    f2=f3

if f1==n or f2==n:
    found=True

if found==True:
    print("fibonacci number")
else:
    print("not a fibonacci number")