#find second largest number without max
l=input().split(',')
n=[int(item) for item in l]
h=len(n)
for i in range(1,h):
	for j in range(h-i):
		if n[j]>n[j+1]:
			temp=n[j]
			n[j]=n[j+1]
			n[j+1]=temp
print(n[-2])

			
		
