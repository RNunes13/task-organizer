import { useState } from "react";
import { useAppContext } from "@/app/App.provider";
import * as Styled from "./Header.styles";

export const Header: React.FC = () => {
  const [searching, setSearching] = useState<boolean>(false);

  const { searchTerm, dispatch } = useAppContext();

  const toggleSearch = () => setSearching(!searching);

  const onChangeSearch = (evt: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "search", payload: evt.target.value ?? "" });

  const onClearSearch = () => dispatch({ type: "search", payload: null });

  return (
    <Styled.Header data-testid="header">
      <Styled.Wrapper>
        <Styled.Actions>
          <Styled.AddButton gradient startIcon="system:add" />

          <Styled.Search>
            <Styled.SearchButton
              variant="shallow"
              startIcon={searching ? "system:close" : "system:search"}
              onClick={toggleSearch}
            />

            <Styled.SearchInput
              $searching={searching}
              value={searchTerm ?? ""}
              onChange={onChangeSearch}
              onEndIconClick={onClearSearch}
              endIcon={searchTerm ? "system:clear" : " "}
              placeholder="Pesquise por tarefas ou coleções"
            />
          </Styled.Search>
        </Styled.Actions>
      </Styled.Wrapper>
    </Styled.Header>
  );
};
