import { useAppContext } from "@/app/App.provider";
import { Text } from "@/components/Typography/Text/Text";

function Home() {
  const { searchTerm } = useAppContext();
  return (
    <>
      <Text styleAs="h0" align="center">Taks Organizer</Text>
      {!!searchTerm && <Text>Search: {searchTerm}</Text>}
    </>
  );
}

export default Home;
