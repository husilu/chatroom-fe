import styles from './Modal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
interface IProps {
  children?: string | React.ReactNode,
  close: () => void,
  visible: boolean,
  style?: Object
}
export default function Modal(props: IProps) {
  function closeHandler() {
    props.close();
  }
  return (props.visible ? <div className={styles.wrap} style={props.style}>
    <div className={styles.header}>
      <AiOutlineClose onClick={closeHandler}></AiOutlineClose>
    </div>
    <div className={styles.container}>
        {props.children}
    </div>
</div> : <></>)
}
