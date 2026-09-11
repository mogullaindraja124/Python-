#longest word in given string
text=input("enter a sentence:")
c=0
i=0
temp=0
while i<len(text):
    if text[i]!=" ":
        c+=1
        ch_c=0
        temp_ch=""
        while i<len(text) and text[i]!=" ":
            ch_c+=1
            temp_ch+=text[i]
            i+=1
        if ch_c>temp:
            temp=ch_c
            max_ch=temp_ch

    if i<len(text) and text[i]==" ":
        i+=1

print("no of words:",c)
print("max no.of letters containing word",temp)
print("max character:",max_ch)