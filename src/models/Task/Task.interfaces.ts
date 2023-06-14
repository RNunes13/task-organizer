export interface ITask {
  id?: number;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  deadline?: string;
  completedAt?: string;
}
