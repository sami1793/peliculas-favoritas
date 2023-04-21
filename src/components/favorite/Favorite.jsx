import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'

export const Favorite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} m={4}>
        Ver Favoritos
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Titulo</DrawerHeader>
          <DrawerBody>
            <p>aca el map</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
