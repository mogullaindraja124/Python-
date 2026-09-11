s=input("enter a string:")
temp=""
i=0
while i<len(s)-1:
    if s[i]==s[i+1]:
        i+=1
    else:
        temp+=s[i]
        i+=1
temp+=s[-1]
print(temp)
