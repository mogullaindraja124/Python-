#
n=int(input("enter a number:"))
square=n*n
origi_n=n
count=0
while n>0:
	count+=1
	n//=10
auto_num=square%(10**(count))
if auto_num==origi_n:
	print("automorphic number")
else:
	print("not automorphic number")