#reverse the order of words
text=input()
i=0
def word(text):
	i=0
	l=[]
	while i<len(text):
		temp=""
		while i<len(text) and text[i]!=" ":
			temp+=text[i]
			i+=1
		if temp not in l:
			l.append(temp)
		i+=1
	m=len(l)-1
	while m>=0 and m<len(l):
		print(l[m],end=" ")
		m-=1	
word(text)