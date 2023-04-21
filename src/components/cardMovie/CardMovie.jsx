import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'

export const CardMovie = ({ movie }) => {
  const { addFavorite } = useContext(MovieContext)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={movie.img}
        alt={movie.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{movie.name}</Heading>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => addFavorite(movie)}
          >
            Agregar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
