#
n=int(input("enter a number:"))
n_cube=n*n*n
origi_n=n
count=0
while n>0:
	count+=1
	n//=10
cube_rem=n_cube%(10**(count))
if cube_rem==origi_n:
	print("trimorphic number")
else:
	print("not a trimorphic number")