#peterson number
n=int(input("enter a number:"))
original=n
fact=1
fact_sum=0
while n>0:
    r=n%10
    for i in range(1,r+1):
        fact=fact*i
    fact_sum+=fact
    n=n//10
if fact_sum==original:
    print("Peterson number")
else:
    print("not a peterson number")

    
