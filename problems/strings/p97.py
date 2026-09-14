#word with most consonants
text=input("enter a string:")
s=[]
c=[]
i=0
while i <len(text):
	temp=""
	if text[i]!=" ":
		while i<len(text) and text[i]!=" ":
			temp+=text[i]
			i+=1
		s.append(temp)
	else:
			i+=1
consonants="bcdfghjklmnpqrstvwxyz"
for i in range(len(s)):
	count=0
	for j in range(len(consonants)):
		for k in range(len(s[i])):
			if consonants[j]==s[i][k]:
				count+=1
	c.append(count)
max=c[0]
index=0
for l in range(len(c)):
	if c[l]>max:
		max=c[l]
		index=l
print("word with most consonants:",s[index])
print("no.of consonants:",c[index])