#check whether the number is a perfect number
#A Perfect Number is a number that is equal to the sum of its proper divisors (excluding the number itself).
n=int(input("enter a number:"))
sum=0
for i in range(1,n):
    if n%i==0:
        sum+=i
if sum==n:
    print("perfect number")
else:
    print("not a perfect number")

    
