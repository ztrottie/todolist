import Task from "./tasks";

class Projects {
	tasksArray = [];
	constructor(name) {
		this.name = name
	}

	addTask(name, description, dueDate, priority) {
		this.tasks.push(new Task(name, description, dueDate, priority));
	}

	getTask(index) {
	return this.tasksArray[index];
	}

}

export default Projects