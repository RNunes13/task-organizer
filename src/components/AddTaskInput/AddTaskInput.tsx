import { useRef, useState } from "react";
import { Tasks } from "@/models/Task/Tasks";
import type { AddTaskInputProps } from "./AddTaskInput.interfaces";

import * as Styled from "./AddTaskInput.styles";

export const AddTaskInput: React.FC<AddTaskInputProps> = ({
  className,
  ...rest
}) => {
  const [value, setValue] = useState<string>("");
  const [focused, setFocus] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleFocus = () => setFocus(!focused);

  const onAddTask = () => {
    const formattedValue = value.trim();

    if (!formattedValue) {
      setValue("");
      inputRef.current?.blur();
      return;
    }

    Tasks.add({ description: value });

    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLocaleLowerCase() === "enter") onAddTask();
  };

  return (
    <Styled.Wrap $focused={focused} className={className}>
      <Styled.AddButton startIcon="system:add" onClick={onAddTask} />
      <Styled.Input
        {...rest}
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Add a task"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
      />
    </Styled.Wrap>
  );
};
