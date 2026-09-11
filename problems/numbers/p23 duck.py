#duck number
n=int(input("enter a number:"))
original_n=n
count_zero=0
while original_n>0:
	r=original_n%10
	if r==0:
		count_zero+=1
		print("Duck number")
		break
	original_n//=10
if count_zero==0:
	print("not a Duck number")
		