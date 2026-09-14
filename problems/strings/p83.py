#count no.of vowels
s=input("enter a string:")
v="aeiou"
def vowel(v):
	i=0
	count=0
	while i<len(v):
		for j in range(len(s)):
			if v[i]==s[j]:
				count+=1
		i+=1
	return count
vo=v.upper()
v_count=vowel(v)+vowel(vo)
print("no.of vowels:",v_count)

