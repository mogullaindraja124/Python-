#find the longest word
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
	max=c[0]
	index=0
	for m in range(len(l)):
		if c[m]>max:
			max=c[m]
			index=m
	print("longest word is:",l[index])
	print("length:",c[index])
word(text)