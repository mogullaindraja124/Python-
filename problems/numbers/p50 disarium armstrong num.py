#
n=int(input("enter a number:"))
origi_n=n
temp=n
temp1=n
count=0
armstrong=0
disarium=0
while n>0:
	count+=1
	n//=10
while origi_n>0:
	digit=origi_n%10
	armstrong+=digit**(count)
	print(armstrong)
	origi_n//=10
for i  in range(1,count+1):
	d_digit=temp//(10**(count-i))
	disarium+=d_digit**i
	print("disarium",disarium)
	temp%=10**(count-i)
print("armstrong",armstrong)
print("disarium:",disarium)
if armstrong==temp1 and disarium==temp1:
	print("Disarium-Armstrong number")
else:
	print("not a Disarium-Armstrong number")