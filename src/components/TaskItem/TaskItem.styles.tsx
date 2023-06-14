import styled from "styled-components";
import { Checkbox } from "@/components/Form/Checkbox/Checkbox";
import { Text } from "@/components/Typography/Text/Text";

export const Item = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spaces.nano};
  padding: ${({ theme }) => theme.spaces.xxs};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.base_90};
  flex: 1;
`;

export const Info = styled.div``;

export const Description = styled(Text)``;

export const Input = styled(Checkbox)`
`;
