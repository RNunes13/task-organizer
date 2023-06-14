import { Task } from "@/models/Task/Task";

export interface TaskListProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "list"> {
  list: Task[];
  title?: string;
  showTotal?: boolean;
}
