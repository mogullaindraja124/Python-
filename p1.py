n=input().split(',')
num=[int(item) for item in n]
count_even=0
count_odd=0
for i in range(len(num)):
	if num[i]%2==0:
		count_even+=1
	else:
		count_odd+=1
print("even numbers:",count_even)
print("odd numbers:",count_odd)
	