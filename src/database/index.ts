import Dexie from "dexie";
import { seed } from "./seed";
import type { ITask } from "@/models/Task/Task.interfaces";
import type { ISubtask } from "@/models/Subtask/Subtask.interfaces";

const DB_NAME = import.meta.env.VITE_DB_NAME || "task_org_development";

export class Database extends Dexie {
  tasks!: Dexie.Table<ITask, number>;
  subtasks!: Dexie.Table<ISubtask, number>;

  constructor() {
    super(DB_NAME);

    this.version(1).stores({
      tasks: "++id, deadline",
      subtasks: "[parentId+childId]",
    });
  }
}

export const db = new Database();

db.on("populate", seed);
