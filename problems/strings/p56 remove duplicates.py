#remove the duplicates fron the string
text=input("enter a string:")
new_text=""
for j in range(len(text)):
	temp=text[j]
	if temp not in new_text:
		new_text+=text[j]	
print(new_text)