#Reverse each word of string
s=input("enter text:")
def rev_temp(temp):
	new_temp=""
	for j in range(len(temp)):
		new_temp+=temp[len(temp)-j-1]
	print(new_temp)
def word(s):
		i=0
		while i<len(s):
			temp=""
			if s[i]!=" ":
				while i<len(s) and s[i]!=" ":
					temp+=s[i]
					i+=1
			print(temp)
			if i <len(s) and s[i]==" ":
				i+=1
			rev_temp(temp)
word(s)
			