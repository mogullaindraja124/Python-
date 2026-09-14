#word with fewest vowels
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
v="aeiou"
for i in range(len(s)):
	count=0
	for j in range(len(v)):
		for k in range(len(s[i])):
			if v[j]==s[i][k]:
				count+=1
	c.append(count)
min=c[0]
index=0
for l in range(len(c)):
	if c[l]<min:
		min=c[l]
		index=l
print("word with fewest vowels:",s[index])
print("no.of vowels:",c[index])