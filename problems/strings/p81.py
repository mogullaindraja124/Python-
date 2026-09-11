s=input("enter a string:")
i=0
found=0
while i<len(s)-1:
    if s[i]==s[i+1]:
        found=1
        temp=s[i]
        break
    else:
        i+=1
if found:
    print("first consecutive repeated letter is:",temp)
else:
    print("there is no consecutive repeated letter")
    
