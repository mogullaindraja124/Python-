#elements present only in second list
l1=input("enter numbers in l1:").split(',')
l2=input("enter numbers in l2").split(',')
num1=[int(item) for item in l1]
num2=[int(item) for item in l2]
num3=[]
for i in range(len(num2)):
	count=0
	for j in range(len(num1)):
		if num2[i]==num1[j]:
			count+=1
	if count==0:
		num3.append(num2[i])
for l in range(len(num3)):
	print(num3[l],end=" ")