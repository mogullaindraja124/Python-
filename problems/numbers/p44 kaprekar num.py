#
n=int(input("enter a number:"))
square_origi=n*n
square=square_origi
origi_n=n
count=0
digi_count=0
while square_origi>0:
	count+=1
	square_origi//=10
while n>0:
	digi_count+=1
	n//=10
print("count",count)
right_part=square%10**digi_count
left_part=square//10**digi_count
print("left_part",left_part)	
square_sum=right_part+left_part
print("square sum:",square_sum)
if square_sum==origi_n:
	print("kaprekar number")
else:
	print(" not kaprekar number")