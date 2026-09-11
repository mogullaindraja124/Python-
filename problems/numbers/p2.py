#find the minimum and maximum number in given numbers
n=input("enter numbers sepersted by',':").split(',')
num=[int(item) for item in n]
max=num[0]
min=num[0]
for i in range(1,len(num)):
	if num[i]>max:
		max=num[i]
	if num[i]<min:
		min=num[i]
print("minimum:",min)
print("maxmum:",max)
