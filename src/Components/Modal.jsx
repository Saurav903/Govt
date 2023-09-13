import { Button, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text,useDisclosure} from "@chakra-ui/react"

export default function ModalReuse() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the content behind the modal
              </Text>
              dfdsgdsgdsgddsgdssgdsgd
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }