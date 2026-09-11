#check whether the number is perfect cube
n=int(input("enter a number:"))
found=False
for i in range(1,n):
	cube=i*i*i
	if cube==n:
		found=True
		break
	if cube>n:
		break
if found==True:
	print(" a perfect cube")
else:
	print("not a perfect cube")
		