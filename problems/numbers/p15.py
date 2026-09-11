#count the occurances of digit in a number
n=int(input("enter a number:"))
search_digit=int(input("enter a number to search:"))
count=0
while n>0:
    r=n%10
    if r==search_digit:
        count+=1
    n=n//10
print(count)
            

