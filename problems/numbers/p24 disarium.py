#Disarium number
n=int(input("enter a number:"))
original_n=n
num=n
dis_sum=0
digit_count=0
while n>0:
	r=n%10
	digit_count+=1
	n//=10
while original_n>0 and digit_count>0:
	rem=original_n%10
	dis_sum+=rem**digit_count
	digit_count-=1
	original_n//=10
if dis_sum==num:
	print("Disarium number")
else:
	print("Not a Disarium number")
