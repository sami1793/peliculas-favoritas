import { useState } from 'react'
import { MovieContext } from './MovieContext'

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  console.log(movies)
  const addFavorite = (movie) => {
    setMovies([...movies, movie])
  }
  return (
    <MovieContext.Provider value={{ movies, addFavorite }}>
      {children}
    </MovieContext.Provider>
  )
}
