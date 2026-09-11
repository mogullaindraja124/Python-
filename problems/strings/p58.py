#most frequent character
text=input("enter text:")
i=0
count=0
count1=0
highest=""
while i<len(text):
	count=0
	new=text[i]
	for j in range(len(text)):
		if text[j]==new:
			count+=1
	if count>count1:
		count1=count
		highest=text[i]
	i+=1
print("count",count1)
print("most repeated element:",highest)