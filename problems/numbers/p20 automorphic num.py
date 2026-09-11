#check whether a number is automorphic number
n=int(input("enter a number:"))
num=n
sqr=n**2
count=0
while n>0:
    re=n%10
    count+=1
    n=n//10
c=0
while num>0 and sqr>0:
    r=num%10
    rem=sqr%10
    if r==rem:
        c+=1
    else:
        break
    num=num//10
    sqr=sqr//10
if count==c:
    print("automorphic")
else:
    print("not automorphic")
    
        
     
    
