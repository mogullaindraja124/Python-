#shortest word in string
s=input("enter a text:")
i=0
c=0
min=len(s)
min_ch=""
while i<len(s):
	if s[i]!=" ":
		c+=1
		ch_c=0
		temp_ch=""
		while i<len(s) and s[i]!=" ":
			ch_c+=1
			temp_ch+=s[i]
			i+=1
		if ch_c<min:
			min=ch_c
			min_ch=temp_ch
	if i<len(s) and s[i]==" ":
		i+=1
print("no.of words:",c)
print("smallest word:",min_ch)
print("no.of characters in smallest word:",min)
		
			