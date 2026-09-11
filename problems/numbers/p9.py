#check whether a number is an Armstrong number.
#Armstrong number is a number that is equal to the sum of the cubes of its digits
n=int(input("enter a number :"))
original=n
num=0
while n>0:
    r=n%10
    num=num+r**3
    n=n//10
if num==original:
    print("Armstrog number")
else:
    print("not an Armstrong")
