import { useStyles } from "./styles/QTopic"

/**
 * 题目渲染
 * */

export interface QTopicProps {
  /**题目*/
  content?: React.ReactNode[]
  /**排序*/
  sort: number
}

export const QTopic = (props: QTopicProps) => {
  const { content, sort } = props
  const { styles, cx } = useStyles()
  return <div className={cx('q_topic', styles.container)} >
    {content.map((item, index) => {
      if (index === 0) {
        return <div key={index} className={cx(styles.item)}><b>{sort}.</b>{item}</div>
      }
      return <div key={index} className={cx(styles.item)}>{item}</div>
    })}
  </div>
}