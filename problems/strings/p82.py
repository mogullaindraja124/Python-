s=input("enter a string:")
ch=input("enter character to remove:")
for i in range (len(s)):
    if ch==s[i]:
        temp=s[:i]+s[i+1:]
        break
    else:
        temp=s[:]
print(temp) 
        
