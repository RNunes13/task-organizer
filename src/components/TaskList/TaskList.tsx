import type { TaskListProps } from "./TaskList.interfaces";
import * as Styled from "./TaskList.styles";

export const TaskList: React.FC<TaskListProps> = ({
  list,
  title,
  showTotal = true,
  ...rest
}) => {
  const titleContent = [title, showTotal ? list.length : null]
    .filter(Boolean)
    .join(" - ");

  return (
    <Styled.Wrap {...rest}>
      {titleContent && (
        <Styled.Title children={titleContent} styleAs="bodySmallBold" />
      )}

      <Styled.List>
        {list.map((item) => (
          <Styled.Item key={item.id} data={item} />
        ))}
      </Styled.List>
    </Styled.Wrap>
  );
};
