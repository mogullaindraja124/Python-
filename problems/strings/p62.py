#count digits,characters and special characters
text=input("enter a text:")
countd=0
countl=0
counts=0
i=0
while i<len(text):
	found=False
	for j in range(ord('A'),ord('Z')+1):
		if ord(text[i])==j:
			countl+=1
			found=True
			break
	for l in range(ord('a'),ord('z')+1):
		if ord(text[i])==l:
			countl+=1
			found=True
			break
	for k in range(ord('0'),ord('9')+1):
		if ord(text[i])==k:
			countd+=1
			found=True
			break
	if not found:
		counts+=1
	i+=1
print(f"no.of letters:{countl}\nno.of digits:{countd}\nno.of special characters:{counts}")