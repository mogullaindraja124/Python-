#reverse of a list without using slicing or reverse()
l=input().split(',')
n=[int(item) for item in l]
rev=[]
len=len(n)
for i in range(len):
	r=n[len-i-1]
	rev.append(r)
print(rev)
