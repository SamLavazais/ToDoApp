# Tables

## Table : Tasks
Entity : a task
Properties :
- taskId (PK)
- Content
- isDone


# Next possible iterations

## Table : Tasks (TO IMPROVE)
- Deadline
- Category
- userId (FK)


## Table : Users (TO CREATE)
Entity : a user
Properties :
- userId (PK)
- userName
- email
- password

## Table : SubTasks (TO CREATE)
Entity : a subtask (dependant upon a parent task from the Tasks table)
Properties :
- subtaskId (PK)
- Content
- isDone
- taskId (FK)