#check whether one string is rotation of another string
text=input("enter a string:")
text2=input("enter string rotation:")
i=0
found=False
rotemp=""
if len(text)==len(text2):
		while i<len(text)-1:
			rotemp+=text[i]
			j=i+1
			actemp=""
			while j<len(text):
				actemp+=text[j]
				j+=1
			rotation=actemp+rotemp
			i+=1
			if rotation==text2:
				found=True
				break
		if found:
				print(" rotation of another string")
		else:
			print("not a rotation")
else:
	print("not a  rotation")
