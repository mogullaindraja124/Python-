#to find the smallest and largest digits in a number
n=int(input("enter a number:"))
original=n
ln=0
while n>0:
    r=n%10
    if r>ln:
        ln=r
    n=n//10
sn=ln
while original>0:
    r=original%10
    if r<sn:
        sn=r
    original//=10
print("largest digit:",ln)
print("smallest digit:",sn)

