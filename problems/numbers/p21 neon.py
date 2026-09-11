#neon number
n=int(input("enter a number:"))
sqr=n**2
sum=0
while sqr>0:
	r=sqr%10
	sum=sum+r
	sqr=sqr//10
if sum==n:
	print("neon number")
else:
	print("not a neon number")