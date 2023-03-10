import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'

interface Props {
  clearCart: () => void
  disabled: boolean
}

const ClearCart: React.FC<Props> = ({ clearCart, disabled }): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => {
    clearCart()
    setIsOpen(false)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cancelRef = React.useRef<any>()

  return (
    <>
      <Button
        colorScheme="facebook"
        onClick={() => setIsOpen(true)}
        disabled={!disabled}
        size="md"
      >
        Clear cart
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cart Clear
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This action is irreversible
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Clear cart
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ClearCart
