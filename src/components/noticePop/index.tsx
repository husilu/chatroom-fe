import styles from './index.module.scss';
interface IPorps {
    children: React.ReactNode;
}
export default function index(props: IPorps) {
  const { children } = props;
  return (
    <div className={styles.pop}>{children}</div>
  )
}
