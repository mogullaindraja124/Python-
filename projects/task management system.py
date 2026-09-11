import json
from datetime import datetime,timedelta
task=[]
try:
	with open("t.json", "r") as file:
		task = json.load(file)
except FileNotFoundError:
	print("there are no tasks")
def priority():
	print("1.high\n2.medium\n3.low")
	while True:
		try:
			choice=int(input("enter your choice:"))
		except ValueError:
			print("please enter a number!")
			continue
		if choice==1:
			return "high"
		elif choice==2:
			return "medium"
		elif choice==3:
			return "low"
		else:
			print("enter valid choice")
def get_date():
	while True:
		date=input("enter date in dd-mm-yyyy form:")
		try:
			datetime.strptime(date,"%d-%m-%Y")
			return date
		except ValueError:
			print("invalid date!")
			continue		
def add_task():
	t={"name":input("enter task name:"),
	"status":"pending",
	"priority":priority(),
	"due_date":get_date()
	}
	task.append(t)
	with open("t.json", "w") as file:
		json.dump(task,file)
	print("task added successfully")
def delete():
	if len(task)==0:
		print("no task is available")
	else:
		task_name=input("enter task that to be delete:")
		for i in range(len(task)):
			if task[i]["name"]==task_name:
				task.pop(i)
				with open("t.json","w") as file:
					json.dump(task,file)
				print("task deleted successfully")
				break
		else:
			print("task not found")
def display():
	if len(task)==0:
		print("no task available")
	else:
		print("__tasks__")
		print("task\t\tstatus\t\tpriority\t\tdue_date\t\tdeadline\n-----------------")
		for i in range(len(task)):
			print(f"{i+1}.{task[i]['name']}\t\t{task[i]['status']}\t\t{task[i]['priority']}\t\t{task[i]['due_date']}\t\t{deadline_status(task[i]['due_date'])}")
def update():
	if not task:
		print("no task available")
	else:
		task_name=input("enter task name to update:")
		for i in range(len(task)):
			if task[i]["name"]==task_name:
				while True:
					print("1.status\n2.priority\n3.due date\n4.Exit")
					try:
						choice=int(input("enter your choice:"))
					except ValueError:
						print("please enter a valid choice!")
						continue
					if choice==1:
						if task[i]["status"]=="pending":
							task[i]["status"]="completed"
							print("task updated to completed")
						else:
							task[i]["status"]="pending"
							print("task updated to pending")
						break
					elif choice==2:
						task[i]["priority"]=priority()
						print("priority updated successfully")
						break
					elif choice==3:
							task[i]["due_date"]=get_date()
							print("date updated successfully")
							break
					elif choice==4:
						print("nothing updated")
						break
					else:
						print("enter valid choice")
				with open("t.json","w") as file:
					json.dump(task,file)
				break
		else:
			print("task not found")
def deadline_status(due_date):
	due_date=datetime.strptime(due_date,"%d-%m-%Y").date()
	today=datetime.today().date()
	tomorrow=today+timedelta(days=1)
	if due_date==today:
		return "Today"
	elif due_date<today:
		return "Overdue"
	else:
		if due_date==tomorrow:
			return "Tomorrow"
		else:
			return "Upcoming"
def search_task():
	if not task:
		print("there is no task")
		return
	found=False
	task_name=input("enter task name:")
	for i in range(len(task)):
		if task[i]["name"]==task_name:
			print(f"task name:{task[i]['name']}\nstatus:{task[i]['status']}\npriority:{task[i]['priority']}\nduedate:{task[i]['due_date']}\ndeadline:{deadline_status(task[i]['due_date'])}")
			found=True
			break
	if not found:
		print("task not found")	
while True:
	print("__task management___")
	print("1.ADD TASK\n2.DELETE TASK\n3.DISPLAY TASKS\n4.EXIT\n5.UPDATE\n6.Search task")
	try:
		choice=int(input("enter your choice:"))
	except ValueError:
		print("please enter a number")
		continue
	if choice==1:
		add_task()
	elif choice==2:
		delete()
	elif choice==3:
		display()
	elif choice==4:
		print("Thank You")
		break
	elif choice==5:
		update()
	elif choice==6:
		search_task()
	else:
		print("invalid choice")