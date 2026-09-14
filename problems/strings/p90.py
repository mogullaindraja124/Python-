#find the shortest word
text=input()
i=0
def word(text):
	i=0
	l=[]
	c=[]
	while i<len(text):
		temp=""
		while i<len(text) and text[i]!=" ":
			temp+=text[i]
			i+=1
		if temp not in l:
			l.append(temp)
			c.append(len(temp))
		i+=1
	min=c[0]
	index=0
	for m in range(len(l)):
		if c[m]<min:
			min=c[m]
			index=m
	print("smallest word is:",l[index])
	print("length:",c[index])
word(text)