import { useStyles } from "./styles/QReadingContent"
/**
 * 英语阅读理解
 * 
 * 1. 加粗字体
 * 2. 居中
*/

interface IContent {
  isBold?: boolean
  isCenter?: boolean
  color?: string
  content: React.ReactNode
}

export interface QReadingContentProps {
  /**内容*/
  content?: IContent[]
}

export const QReadingContent = (props: QReadingContentProps) => {
  const { content, } = props
  const { styles, cx } = useStyles()
  return <div className={cx('q_reading_content', styles.container)} >
    {content.map((item, index) => {
      return <div key={index} style={item.color ? { color: item.color } : {}} className={cx(styles.item, { bold: item.isBold, center: item.isCenter })}>{item.content}</div>
    })}
  </div>
}