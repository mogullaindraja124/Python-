#check whether the number is a stron number
n=int(input("enter a number:"))
original=n
add=0
while n>0:
    r=n%10
    fact=1
    for i in range(1,r+1):
        fact=fact*i
    add=add+fact
    n=n//10
if original==add:
    print("strong number")
else:
    print("not a strong number")
    
