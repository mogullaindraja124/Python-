#Toggle(capital to small or small to capital) every case of character
s=input()
def swap_case(s):
	i=0
	while i<len(s):
		count=0
		for j in range(ord('A'),ord('Z')+1):
			if ord(s[i])==j:
				count+=1
				s1=s[i].lower()
				s=s[:i]+s1+s[i+1:]
		if count==0:
			for l in range(ord('a'),ord('z')+1):
				if ord(s[i])==l:
					s2=s[i].upper()
					s=s[:i]+s2+s[i+1:]
		i+=1
	return s
result=swap_case(s)
print(result)
		