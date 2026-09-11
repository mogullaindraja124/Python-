#
n=int(input("enter a number:"))
origi_n=n
reverse_n=0
while n>0:
	digit=n%10
	reverse_n=reverse_n*10+digit
	n//=10
print("reverse num:",reverse_n)
reverse_square=reverse_n**2
print("reverse num square:",reverse_square)
num_reverse=0
while reverse_square>0:
	digit_r=reverse_square%10
	num_reverse=num_reverse*10+digit_r
	reverse_square//=10
print("reverse of reverse num square :",num_reverse)
if num_reverse==origi_n**2:
	print("Adam number")
else:
	print("not Adam number")