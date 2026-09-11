#
n=int(input("enter a number:"))
origi_n=n
double_n=2*n
ori_double_n=double_n
three_n=3*n
ori_three_n=three_n
double_count=0
three_count=0
while double_n>0:
	double_count+=1
	double_n//=10
while three_n>0:
	three_count+=1
	three_n//=10
result=n*(10**double_count)+ori_double_n
result=result*(10**three_count)+ori_three_n
print(result)
ori_result=result
c1=0
c2=0
c3=0
c4=0
c5=0
c6=0
c7=0
c8=0
c9=0
while result>0:
	r_digit=result%10
	for i in range(1,10):
		if r_digit==i:
			if i==1:
				c1+=1
			elif i==2:
				c2+=1
			elif i==3:
				c3+=1
			elif i==4:
				c4+=1
			elif i==5:
				c5+=1
			elif i==6:
				c6+=1
			elif i==7:
				c7+=1
			elif i==8:
				c8+=1
			elif i==9:
				c9+=1	
	result//=10
if c1==1 and c2==1 and c3==1 and c4==1 and c5==1 and c6==1 and c7==1 and c8==1 and c9==1:
		print("fascinating number")
else:
		print("not a fascinating number")
		