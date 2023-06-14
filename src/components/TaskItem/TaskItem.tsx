import type { TaskItemProps } from "./TaskItem.interfaces";
import * as Styled from "./TaskItem.styles";

export const TaskItem: React.FC<TaskItemProps> = ({ data, ...rest }) => {
  const { description, completed, complete } = data;

  const onComplete = () => {
    complete();
  }

  return (
    <Styled.Item {...rest}>
      <Styled.Input checked={completed} onChange={onComplete} />
      <Styled.Info>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Info>
    </Styled.Item>
  );
};
