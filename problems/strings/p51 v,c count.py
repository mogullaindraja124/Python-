#count no.of vowels and consonants in a given string
character=input("enter a number:")
vowel_count=0
cons_count=0
character=character.lower()
for ch in character:
	if ch=='a' or ch=='e' or ch=='i' or ch=='o' or ch=='u':
		vowel_count+=1
	elif ch.isalpha():
		cons_count+=1
print("vowel count:",vowel_count)
print("consonant count:",cons_count)