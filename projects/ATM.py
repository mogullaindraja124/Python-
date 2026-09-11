class User:
    def __init__(self,name,pin,balance):
        self.name=name
        self.pin=pin
        self.balance=balance
class Atm:
    def __init__(self,user):
        self.user=user
    def login(self):
        PIN=int(input("enter 4 digit pin:"))
        n=1
        while n<=3:
            if self.user.pin==PIN:
                print("login successful")
                break
            else:
                print("invalid pin")
                n+=1
        if n>3:
            print("your account blocked due to multiple attempts")
    def check_balance(self):
        print("your current balance:",self.user.balance)
    def deposit(self):
        a=int(input("enter money to deposit:"))
        if a>0:
            self.user.balance=self.user.balance+a
            check_balance(self)
            print("balance deposited successfully")
        else:
            print("invalid amount")
    def with_draw(self):
        a=int(input("enter amount to withdraw:"))
        if a>0:
            if a>=self.user.balance:
                print("insufficient money")
            else:
                self.user.balance-=a
                check_balance(self)
                print("money withdrawn successfully")
        else:
            print("invalid amount")
    def change_pin(self):
        n=1
        while n<=3:
            PIN=int(input("enter your old pin:"))
            if PIN==self.user.PIN:
                newpin=int(input("enter new pin:"))
                confpin=int(input("confirm new pin:"))
                if newpin==confpin:
                    self.user.PIN=newpin
                    print("pin changed successfully")
                    check_balance(self)
                    break
                else:
                    print("pin not match")
                    n+=1
            else:
                print("invalid pin")
                n+=1
        if n>3:
            print("your account blocked due to multiple attempts")
user=User("Indraja",2207,5000)
atm=Atm(user)
while True:
    print("1.login")
    print("2.check balance")
    print("3.deposit money")
    print("4.with draw money")
    print("5.change pin")
    print("6.exit")
    choice=int(input("enter your choice"))
    if choice==1:
        atm.login()
    elif choice==2:
        atm.check_balance()
    elif choice==3:
        atm.deposit()
    elif choice==4:
        atm.with_draw(self)
    elif choice==5:
        atm.change_pin(self)
    elif choice==6:
        print("thank you")
        break
    else:
        print("valid choice")
    











    
