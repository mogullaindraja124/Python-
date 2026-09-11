#frequency of every character
s=input("enter a string:")
l=input("enter a letter:")
temp=""
for i in range(len(s)):
	if s[i]!=l:
		temp+=s[i]
print(temp)