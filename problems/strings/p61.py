#check whether string contain only digits
text=input("enter a string:")
i=0
if len(text)==0:
	print("enpty string")
else:
	while i<len(text):
		found=False
		temp=text[i]
		for j in range(ord('0'),ord('9')+1):
			if ord(temp)==j:
				found=True
				break
		if found==False:
			print("not only digits")
			break
		i+=1
	if found:
		print("only digits")