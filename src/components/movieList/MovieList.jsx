import { SimpleGrid } from '@chakra-ui/react'
import { movies } from '../../data/movies'
import { CardMovie } from '../cardMovie/CardMovie'

export const MovieList = () => {
  return (
    <SimpleGrid spacing={4} columns={3}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  )
}
