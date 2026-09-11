#ATM
atm=[]
def sign_up():
    user={
        "name":input("enter name:"),
        "phn_no":int(input("enter phn no:")),
        "PIN":int(input("enter four digit pin:")),
        "balance":int(input("enter money to deposit:"))
          }
    atm.append(user)
    print("signed up successfully")
def login():
    n=1
    if len(atm)==0:
        print("there is no users:")
    else:
        while n<=3:
            pin=int(input("enter your pin:"))
            found=False
            for p in atm:
                if p["PIN"]==pin:
                    print("login successful")
                    found=True
                    break
            if found:
                break
            else:
                print("invalid pin")
                n+=1
    if n>3:
        print("your account blocked due to multiple attempts")
def check_balance():
    pin=int(input("enter your pin:"))
    found=0
    for p in atm:
        if p["PIN"]==pin:
            print(p["balance"])
            found=1
            break
    if found==0:
        print("invalid pin")

while True:
    print("1.sign up")
    print("2.login")
    choice=int(input("enter your choice:"))
    if choice==1:
        sign_up()
    elif choice==2:
        login()
    elif choice==3:
        check_balance()
    elif choice==4:
        break
    else:
        print("invalid choice")
    
            
