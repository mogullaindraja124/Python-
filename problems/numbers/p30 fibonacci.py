#fibonacci series of first n numbers
n=int(input("enter a number:"))
f1=0
f2=1
f3=f1+f2
print(f1 ,f2,f3,end=" ")
count=3
while count!=n:
	f1=f2
	f2=f3
	f3=f1+f2
	count+=1
	print(f3,end=" ")