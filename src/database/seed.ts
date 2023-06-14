import { Transaction } from "dexie";

export const seed = async (transaction: Transaction) => {
  await transaction.table("tasks").bulkAdd([
    {
      id: 1,
      description: "Finish the essay collaboration",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deadline: new Date().toISOString(),
    },
    {
      id: 2,
      description: "Send collaboration files to Jerusha",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      description: "Finish the essay collaboration",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deadline: new Date().toISOString(),
    },
    {
      id: 4,
      description: "Read next chapter of the book in Danish",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 5,
      description: "Do the math foe next monday",
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deadline: new Date().toISOString(),
    },
    {
      id: 6,
      description: "Send the finished assignment",
      completed: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    },
    {
      id: 7,
      description: "Read english book chapter 5",
      completed: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deadline: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    },
  ]);

  await transaction.table("subtasks").bulkAdd([
    {
      parentId: 1,
      childId: 2,
    },
    {
      parentId: 3,
      childId: 4,
    },
    {
      parentId: 3,
      childId: 5,
    },
  ]);
};
