import { db } from "@/database";
import { Tasks } from "@/models/Task/Tasks";

export class Subtasks {
  static async getAllByParentId(id: number) {
    try {
      const ids = (
        await db.subtasks.where("parentId").equals(id).toArray()
      ).map(({ childId }) => childId);

      return await Tasks.getAllById(ids);
    } catch (error) {
      return [];
    }
  }
}
