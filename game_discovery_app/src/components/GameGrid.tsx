import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingGrid from "./GameCardSkeleton";

interface Props {
  genre?: string;
}

const GameGrid = ({ genre }: Props) => {
  const { games, isLoading, error } = useGames(genre);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="15px">
        {isLoading &&
          skeletons.map((skeleton) => <LoadingGrid key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
