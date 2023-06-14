import { Task } from "@/models/Task/Task";

export interface TaskItemProps
  extends Omit<React.HTMLProps<HTMLLIElement>, "data"> {
  data: Task;
}
