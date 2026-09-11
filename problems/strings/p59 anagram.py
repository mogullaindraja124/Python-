#check whether two strings are anagrams
text1=input("enter a string1:")
text2=input("enter string2:")
i=0
anagram=0
if len(text1)==len(text2):
	while i<len(text1):
		count1=0
		count2=0
		temp1=text1[i]
		for j in range(len(text1)):
			if text1[j]==temp1:
				count1+=1
			if text2[j]==temp1:
				count2+=1
		if count1==count2:
			anagram+=1
		else:
			print("not an anagram")
			break				
		i+=1
else:
	print("not an anagram")
if anagram==len(text1):
	print("Anagram")
	