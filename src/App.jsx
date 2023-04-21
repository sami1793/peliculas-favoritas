import { Heading } from '@chakra-ui/react'
import { MovieList } from './components/movieList/MovieList'
import { Favorite } from './components/favorite/Favorite'

function App() {
  return (
    <div>
      <Heading>Peliculas</Heading>
      <MovieList></MovieList>
      <Favorite></Favorite>
    </div>
  )
}

export default App
