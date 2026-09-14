#word with most unique vowels
text=input("enter a string:")
s=[]
c=[]
dl=[]
i=0
v="aeiou"
while i <len(text):
	temp=""
	dup=""
	if text[i]!=" ":
		while i<len(text) and text[i]!=" ":
			if text[i] not in temp:
				temp+=text[i]
			dup+=text[i]
			i+=1
		s.append(temp)
		dl.append(dup)
	else:
			i+=1
for i in range(len(s)):
	count=0
	for j in range(len(v)):
		for k in range(len(s[i])):
			if v[j]==s[i][k]:
				count+=1
	c.append(count)
max=c[0]
index=0
for l in range(len(c)):
	if c[l]>max:
		max=c[l]
		index=l
print("word with most unique vowels:",dl[index])
print("no.of vowels:",c[index])