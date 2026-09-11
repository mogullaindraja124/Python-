#Student management system 
student_details=[]
def add_student():
    student={
        "Name":input("enter a name:"),
        "Roll_no":input("enter roll no:"),
        "Branch":input("enter branch:")
    }
    student_details.append(student)
    print("student added successfully!")
def search_student():
    found=0
    roll_no=input("enter roll no:")
    for i in range(len(student_details)):
        if(student_details[i]["Roll_no"]==roll_no):
            found=1
            print(student_details[i])
            break
    if(found==0):
        print("student not found ")
def  update_student():
    roll_no=input("enter roll no:")
    found=0
    for i in range(len(student_details)):
        if(student_details[i]["Roll_no"]==roll_no):
            found=1
            name=input("enter new name:")
            branch=input("enter new branch:")
            student_details[i]["Name"]=name 
            student_details[i]["Branch"]=branch
            print("updated successfully!")
            break
    if(found==0):
        print("student not found ")

def delete_student():
    found=0
    if(len(student_details)!=0):
        roll_no=input("enter roll no:")
        for i in range(len(student_details)):
            if(student_details[i]["Roll_no"]==roll_no):
                student_details.pop(i)
                found=1
                print("student deleted successfully!")
                break
        if(found==0):
            print("student not found")
    else:
        print("students are not there")
def display():
    if(len(student_details)!=0):
        for i in range(len(student_details)):
            print(f"name:{student_details[i]['Name']}")
            print(f"Roll no:{student_details[i]['Roll_no']}")
            print(f"Branch:{student_details[i]['Branch']}")
    else:
        print("students not found ")
def menu():
    print("1.add student ")
    print("2.update student")
    print("3. search student ")
    print("4.delete student ")
    print("5.display students")
    print("6.Exit")
while True:
    print("====================")
    print("student details")
    menu()
    print("=====================")
    choice=int(input("enter your choice:"))
    if(choice==1):
        add_student()
    elif(choice==2):
        update_student()
    elif(choice==3):
        search_student()
    elif(choice==4):
        delete_student()
    elif(choice==5):
        display()
    elif(choice==6):
        print("thank you!")
        break 
    else:
        print("enter a valid choice")
