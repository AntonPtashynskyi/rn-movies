import { useFetchMovieDetailsQuery } from "../../redux/movieApi";
import { MovieDetailsCard } from "./MovieDetailsCard";

export const MovieDetailsScree = ({ route }) => {
  const { itemId } = route.params;
  const data = useFetchMovieDetailsQuery(itemId);
  console.log(itemId);

  return (
    <>{data.currentData && <MovieDetailsCard data={data} key={itemId} />}</>
  );
};
