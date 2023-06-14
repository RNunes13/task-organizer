import { Subtasks } from "../Subtask/Subtasks";
import { db } from "@/database";
import type { ITask } from "./Task.interfaces";

export class Task implements ITask {
  id?: number;
  description!: string;
  deadline?: string;
  completed!: boolean;
  createdAt!: string;
  updatedAt!: string;
  completedAt?: string;

  constructor(args: ITask) {
    Object.assign(this, args);
  }

  async subtasks() {
    if (!this.id) return [];

    try {
      return await Subtasks.getAllByParentId(this.id);
    } catch (e) {
      return [];
    }
  }

  complete = () => {
    const { id, completed } = this;

    if (!id) return null;

    return db.tasks.update(id, {
      completed: !completed,
      completedAt: completed ? new Date().toISOString() : null,
    });
  };
}
