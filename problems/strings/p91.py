#check two sentences are anagrams
text1=input("enter text1:")
text2=input("enter text2:")
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
			c.append(1)
		else:
			for j in range(len(c)):
				if temp==l[j]:
					c[j]+=1
		i+=1
	return l,c
l1=word(text1)
l2=word(text2)
print(l1)
count=0
for k in range(len(l1[0])):
		for m in range(len(l2[0])):
			if l1[0][k]==l2[0][m] and l1[1][k]==l2[1][m]:
				count+=1
if len(l1[0])==count:
	print("they are anagrams")
else:
	print("they are not anagram")
	