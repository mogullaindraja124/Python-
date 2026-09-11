#remove all spaces from string
s=input("enter a string:")
i=0
while i<len(s):
	if s[i]==" ":
		s=s[:i]+s[i+1:]
	else:
		i+=1
print(s)