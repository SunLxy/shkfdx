import { Fragment } from "react/jsx-runtime"
import { useStyles } from "./styles/QReadingContent"
/**
 * 英语阅读理解
 * 
 * 1. 加粗字体
 * 2. 居中
*/

export interface QReadingContentItem {
  isBold?: boolean
  isCenter?: boolean
  color?: string
  prefix?: string
  content: (React.ReactNode | string)
}

export interface QReadingContentProps {
  /**内容*/
  contents?: QReadingContentItem[]
  sort?: number
  form?: string
}

export const QReadingContent = (props: QReadingContentProps) => {
  const { contents = [], sort, form } = props
  const { styles, cx } = useStyles()
  return <div className={cx('q_reading_content', styles.container)} >
    {(sort || form) ? <div className={styles.title}>
      <b>{sort}.</b>
      <span>{form}</span>
    </div> : <Fragment />}
    {contents.map((item, index) => {
      return <p key={index} style={item.color ? { color: item.color } : {}} className={cx(styles.item, { bold: item.isBold, center: item.isCenter })}>
        {item.prefix ? <b>{item.prefix}</b> : <Fragment />}
        {item.content}
      </p>
    })}
  </div>
}