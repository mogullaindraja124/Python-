#count vowels,numbers,spaces,consonants 
t=input("enter astring:")
v="aeiou"
n="0123456789"
s=" "
c="zxcvbnmlkjhgfdsqwrtyp"
def text(temp):
	i=0
	count=0
	while i<len(temp):
		for j in range(len(t)):
			if temp[i]==t[j]:
				count+=1
				break
		i+=1
	return count
vo=v.upper()
v_count=text(v)+text(vo)
n_count=text(n)
s_count=text(s)
co=c.upper()
c_count=text(c)+text(co)
print("vowels",v_count)
print("numbers",n_count)
print("spaces:",s_count)
print("consonants:",c_count)
	