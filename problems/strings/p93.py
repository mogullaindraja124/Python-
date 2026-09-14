#first repeated word
text1=input("enter text1:")
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
found=False
for m in range(len(l1[1])):
	if l1[1][m]!=1:
		print("first repeating word:",l1[0][m])
		found=True
		break
if not found:
	print("there is no  repeating  word")