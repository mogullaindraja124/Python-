#count the frequency of acharacter in a given string
text=input("enter a string:")
text=text.lower()
for j in range(ord('a'), ord('z') + 1):
  count=0
  temp_text=chr(j)
  for i in range(len(text)):
     if text[i]==temp_text:
       count+=1
  if count>0:
    print(f"{temp_text}:{count}")