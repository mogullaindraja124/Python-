#check whether the given number is a perfect square or not
n=int(input("enter a number:"))
square=1
found=False
for i in range(1,n):
	square=i*i
	if square>n:
		break
	if square==n:
		found=True
		print("perfect square")
		break
if found==False:
	print("not a perfect square ")