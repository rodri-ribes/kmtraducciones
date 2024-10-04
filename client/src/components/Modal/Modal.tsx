import { Modal as ModalMui } from "@mui/material"

interface Props {
    children( ars: {
      handleModal: () => void
    }): JSX.Element,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
    styleModal: CSSModuleClasses,
}

export const Modal = ({children, setOpen, open, styleModal} : Props) => {
    
    const handleModal = () => {
      setOpen(!open)
    }
    
  return (
    <ModalMui
    open={open}
    onClose={handleModal}
  >
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }} className={styleModal.modal}>
      {children({
        handleModal
      })}
    </div>
  </ModalMui>
  )
}
