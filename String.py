s=input("enter a string:")
i=0
found=0
while i<len(s):
	if s[i]!=" ":
		for j in range(i+1,len(s)):
			if s[i]==s[j]:
				found+=1
				print("the first repeated element is :",s[i])
				break
	if found:
		break
	i+=1
if not found:
	print("no letter is repeated")
