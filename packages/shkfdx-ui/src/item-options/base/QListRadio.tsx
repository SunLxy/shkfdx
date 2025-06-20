import { useStyles } from "./styles/QListRadio"
import { letterEnum } from "../../utils"
/**
 *  只用于选项渲染
 * 1. 可以整行渲染
 * 2. 可以竖向渲染
*/

export interface QListRadioOptionItem {
  label: string
  /**判断是否正确*/
  isTrue?: boolean
}

export interface QListRadioProps {
  options: QListRadioOptionItem[]
  layout?: 'horizontal' | 'vertical'
  onChange?: (label: string) => void
  value?: string | string[]
  /**多选*/
  isMulti?: boolean
  /**只显示答案*/
  isOnlyAnswer?: boolean
}

export const QListRadio = (props: QListRadioProps) => {
  const { layout = 'horizontal', options = [], value, onChange, isMulti = false, isOnlyAnswer = false } = props
  const { styles, cx } = useStyles()

  return <div
    className={cx('q_list_radio', styles.container, {
      [`q_list_radio_${layout}`]: !!layout
    })}
  >
    {options.map((item, index) => {
      const styl = {}
      const style: React.CSSProperties = {}
      const styleB: React.CSSProperties = {}
      if (value) {
        if (isMulti) {
          if (value.includes(item.label)) {
            styl[item.isTrue ? "success" : "error"] = true
          }
        } else {
          if (item.isTrue) {
            styl['success'] = true
          }
          if (item.label === value && value) {
            styl[item.isTrue ? "success" : "error"] = true
          }
        }
      }
      if (isOnlyAnswer) {
        if (item.isTrue) {
          styl['success'] = true
          styleB.display = 'none'
        } else {
          style.display = 'none'
        }
      }
      console.log(style)
      return <div
        className={cx(styles.item, styl)}
        key={`${item.label}_${index}`}
        onClick={() => onChange(item.label)}
        style={style}
      >
        <b style={styleB} >{letterEnum[index]}.</b>
        <span>{item.label}</span>
      </div>
    })}
  </div>
}