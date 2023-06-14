import styled from "styled-components";
import { TaskList } from "@/components/TaskList/TaskList";
import { AddTaskInput } from "@/components/AddTaskInput/AddTaskInput";

export const AddTask = styled(AddTaskInput)`
  margin-bottom: ${({ theme }) => theme.spaces.md};
`;

export const Tasks = styled(TaskList)`
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;

export const CompletedTasks = styled(TaskList)``;
