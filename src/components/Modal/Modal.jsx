import { DivModal, DivModalBody, DivModalContent, ModalTitle } from "./modalStyled"

export const ModalCapture = (props) => {
    const {onClose, show} = props

    if (!show) {
        return null
    }
    
    return (
        <DivModal onClick={onClose}>
            <DivModalContent>
                    <ModalTitle>Gotcha!</ModalTitle>
                <DivModalBody>
                    O Pokémon foi adicionado a sua Pokédex
                </DivModalBody>
            </DivModalContent>
        </DivModal>
    )
}

export const ModalDelete = (props) => {
    const {onClose, show} = props

    if (!show) {
        return null
    }

    return (
        <DivModal onClick={onClose}>
            <DivModalContent>
                    <ModalTitle>Oh, no!</ModalTitle>
                <DivModalBody>
                    O Pokémon foi removido da sua Pokédex
                </DivModalBody>
            </DivModalContent>
        </DivModal>
    )
}