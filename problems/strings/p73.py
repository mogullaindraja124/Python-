#check two strings are equal without '=='
s=input("enter a string:")
i=0
temp=""
while i<len(s):
	if s[i]!=" ":
		temp+=s[i]
		i+=1
	else:
		i+=1
rev_temp=""
for j in range(len(temp)):
		rev_temp+=temp[len(temp)-j-1]
if temp==rev_temp:
		print("palindrome")
else:
		print("not a palindrome")
		