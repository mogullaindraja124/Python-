#First non repeating character
text=input("enter a string:")
i=0
while i<len(text):
	count=1
	temp=text[i]
	for j in range(len(text)):
		if temp==text[j]:
			count+=1
	if count==2:
		print("the first non repeating character is:",text[i])
		break
	else:
		i+=1