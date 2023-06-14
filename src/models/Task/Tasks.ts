import { db } from "@/database";
import { Task } from "./Task";
import type { ITask } from "./Task.interfaces";

export class Tasks {
  tasks: Task[];

  constructor(tasks: ITask[]) {
    this.tasks = this.buildTasks(tasks);
  }

  private buildTasks(tasks: ITask[]) {
    return tasks.map((task) => new Task(task));
  }

  static async getAllById(ids: number[]) {
    return await db.tasks.where("id").anyOf(ids).toArray();
  }

  static add(data: { description: string }) {
    return db.tasks.add({
      ...data,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
}
