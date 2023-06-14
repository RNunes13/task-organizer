import { db } from "@/database";
import { Task } from "../Task/Task";
import { ISubtask } from "./Subtask.interfaces";

export class Subtask implements ISubtask {
  parentId: number;
  childId: number;

  constructor(parentId: number, childId: number) {
    this.parentId = parentId;
    this.childId = childId;
  }

  private async getTaskById(id: number): Promise<Task> {
    const task = await db.tasks.get(id);
    return task as Task;
  }

  async parent(): Promise<Task> {
    return this.getTaskById(this.parentId);
  }

  async child(): Promise<Task> {
    return this.getTaskById(this.childId);
  }
}
