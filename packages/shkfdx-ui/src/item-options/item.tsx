import { useMemo, useState } from "react"
import { QListRadioOptionItem } from "./base/QListRadio"
import { useStyles } from "./styles/item"
import { QTopic } from "./base/QTopic"
import { QInput } from "./base/QInput"
import { QListRadio } from "./base/QListRadio"

export interface QItemProps {
  /**题目*/
  topic?: React.ReactNode[]

  // TODO: 单选
  /**选项*/
  options?: QListRadioOptionItem[]
  /**排序*/
  sort?: number

  // TODO: 判断题
  /**是否是判断题*/
  isBool?: boolean

  // TODO: 填空
  /**是否是填空*/
  isInput?: boolean
  /**答案*/
  answer?: string

  // TODO: 直接选项
  /**是否直接选择项*/
  isOptions?: boolean

  layout?: 'horizontal' | 'vertical'
}

export const QItem = (props: QItemProps) => {
  const { sort, isOptions = false, isBool, isInput, answer, options, layout = 'horizontal', topic } = props
  const { styles, cx } = useStyles()
  const [state, setState] = useState({ value: '', isTrue: undefined })

  const BooleanOptions: QListRadioOptionItem[] = useMemo(() => {
    if (isBool) {
      if (answer === '正确') {
        return [{ label: "正确", isTrue: true }, { label: "错误", }]
      } else if (answer === '错误') {
        return [{ label: "正确" }, { label: "错误", isTrue: true }]
      }
    }
    return []
  }, [answer])

  const onChange = (value: string) => {
    if (state.value) {
      // 如果value不为空，则不可进行重新赋值
      return;
    }
    let isT = false
    if (isBool || isInput) {
      isT = value === answer
    } else {
      isT = options?.find(item => item.label === value)?.isTrue
    }
    setState({ value, isTrue: !!isT })
  }

  return <div className={cx(styles.base, {
    is_options: isOptions,
    is_bool: isBool,
    is_input: isInput
  })}>
    {isOptions ? <b>{sort}.</b> : <QTopic content={topic} sort={sort} />}
    {isBool ? <QListRadio layout={layout} value={state.value} options={BooleanOptions} onChange={onChange} /> : null}
    {options ? <QListRadio layout={layout} value={state.value} options={options} onChange={onChange} /> : null}
    {isInput ? <QInput value={state.value} isTrue={state.isTrue} onChange={onChange} /> : null}
    {state.isTrue === false && isInput ? <div className={cx(styles.error)}></div> : null}
  </div>


}