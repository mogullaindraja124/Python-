#remove duplicate characters
s=input("enter a text:")
i=0
def duplicate(temp):
	dupli=""
	for k in range(len(temp)):
		found=False
		for j in range(len(dupli)):
			if temp[k]==dupli[j]:
				found=True
		if not found:
			dupli+=temp[k]
	print(dupli)
while i<len(s):
	temp=""
	if s[i]!=" ":
		while i<len(s) and s[i]!=" ":
			temp+=s[i]
			i+=1
		duplicate(temp)
	if i<len(s) and s[i]==" ":
		i+=1