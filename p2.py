l=input().split(',')
n=[int(item) for item in l]
c0=0
c1=0
c2=0
for i in range(len(n)):
	if n[i]==0:
		c0+=1
	elif n[i]>0:
		c1+=1
	elif n[i]<0:
		c2+=1
print("number of zeros:",c0)
print("no.of positive numbers:",c1)
print("no.of negayive numbers:",c2)