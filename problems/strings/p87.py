#remove duplicate words
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
	for m in range(len(l)):  
		print(l[m],end=" ")  
	  
word(text)  
