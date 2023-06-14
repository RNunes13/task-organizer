import styled from "styled-components";
import { Text } from "@/components/Typography/Text/Text";
import { TaskItem } from "@/components/TaskItem/TaskItem";

export const Wrap = styled.div``;

export const Title = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spaces.xs};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.xxxs};
`;

export const Item = styled(TaskItem)``;
