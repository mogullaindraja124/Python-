#find no.of words in a given string
text=input("enter a sentence:")
c=0
ch_c=0
i=0
while i<len(text):
	if text[i]!=" ":
		c+=1
		while i<len(text) and text[i]!=" " :
			i+=1			
	if i<len(text) and text[i]==" " :
		i+=1

print("no of words:",c)
