import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/database";
import { Task } from "@/models/Task/Task";
import { Tasks } from "@/models/Task/Tasks";
import * as Styled from "./Home.styles";

function Home() {
  const tasks =
    useLiveQuery(async () => {
      const list = await db.tasks.toArray();
      const { tasks } = new Tasks(list);
      return tasks;
    }) || [];

  const [pending, completed] = tasks.reduce(
    (acc, cur) => {
      const index = cur.completed ? 1 : 0;
      acc[index].push(cur);
      return acc;
    },
    [[] as Task[], [] as Task[]]
  );

  return (
    <>
      <Styled.AddTask />
      <Styled.Tasks title="Tasks" list={pending} />
      <Styled.CompletedTasks title="Completed" list={completed} />
    </>
  );
}

export default Home;
