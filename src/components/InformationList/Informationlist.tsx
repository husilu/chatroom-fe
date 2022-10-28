import { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
interface InformationType {
  avatar: string,
  name: string,
  content: string,
  isAc: boolean
}

interface IProps {
  onChoose: Function
}
export default function Informationlist(props: IProps) {
  let {onChoose} = props;
  const [List, setList] = useState<InformationType[]>([
    {avatar: "https://cdnimg.vivaia.com/VA/image/Banner/20220913_4714/best-1.jpg?qwe",name: "chat1",content: "chat1con", isAc: false },
    {avatar: "https://cdnimg.vivaia.com/VA/image/Banner/20220913_4714/best-1.jpg?qwe",name: "chat2",content: "chat1con", isAc: false },
    {avatar: "https://cdnimg.vivaia.com/VA/image/Banner/20220913_4714/best-1.jpg?qwe",name: "chat3",content: "chat1con", isAc: false },
    {avatar: "https://cdnimg.vivaia.com/VA/image/Banner/20220913_4714/best-1.jpg?qwe",name: "chat4",content: "chat1con", isAc: false }
  ]);
  const ChooseHandler = (index:number) => {
    let temp = List.map(item => {
      return {...item, isAc: false}
    });
    temp[index]['isAc'] = true
    setList(temp)
    onChoose(temp[index]);
  }
  return (
    <div className={styles.information}>
        {List.map((item, index) => {
          return <div key={index} className={classNames(["cursor-pointer flex py-4 px-3 items-center", item["isAc"]? styles.active:""])} onClick={() => ChooseHandler(index)}>
            <div className={classNames(styles.left)}>
              <img src={item.avatar} alt=""/>
            </div>
            <div className={classNames([styles.right, styles.inforItem])}>
              <div className={classNames(styles.name)}>{item.name}</div>
              <div className={classNames(styles.content)}>{item.content}</div>
            </div>
          </div>
        })}
    </div>
  )
}

