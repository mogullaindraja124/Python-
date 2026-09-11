#
n=int(input("enter a number:"))
original=n
origi=n
digi_count=0
count_prime=0
while n>0:
	r=n%10
	digi_count+=1
	n//=10
def circular(num):
	count=digi_count
	digi_sum=0
	digit=num%10
	circle_digit=digit*(10**(count-1))
	digi_sum=digi_sum+circle_digit
	num=num//10
	digi_sum+=num
	return digi_sum
while original>0:
	n1=circular(original)
	print(n1)
	for i in range(2,n1):
		if n1%i==0:
			count_prime+=1
	if n1==origi:
		break
	original=n1
if count_prime==0:
	print("circular prime")
else:
	print("not circular prime")