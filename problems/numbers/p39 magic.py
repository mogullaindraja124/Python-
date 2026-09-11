#magic number
n=int(input("enter a number:"))
def digit(n):
	digit_sum=0
	while n>0 :
		digit=n%10
		digit_sum+=digit
		n//=10
	return digit_sum
digi_sum=digit(n)
while digi_sum>=10:
	digi_sum=digit(digi_sum)
if digi_sum==1:
	print("magic number")
else:
	print("not magic number")