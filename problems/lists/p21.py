#rotate a list left by k positions
l=input("enter numbers:").split(',')
numbers=[int(item) for item in l]
n=len(numbers)
k=int(input("no.of turns:"))
i=1
while i<=k:
	num=numbers[0]
	numbers.remove(numbers[0])
	numbers.append(num)
	i+=1
print(numbers)