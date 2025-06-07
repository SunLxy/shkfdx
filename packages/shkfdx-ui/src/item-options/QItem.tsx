import { useEffect, useMemo, useState } from "react"
import { QListRadioOptionItem } from "./base/QListRadio"
import { useStyles } from "./styles/item"
import { QTopic } from "./base/QTopic"
import { QInput } from "./base/QInput"
import { QListRadio } from "./base/QListRadio"

export interface QItemProps {
  /**题目*/
  topic?: (React.ReactNode | string)[]

  // TODO: 单选
  /**选项*/
  options?: QListRadioOptionItem[]
  /**排序*/
  sort: number

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

  /**显示答案的背题模式*/
  isRead?: boolean
  /**翻译*/
  translate?: string

}

export const QItem = (props: QItemProps) => {
  const { sort, isOptions = false, isBool, isInput, answer, options, layout = 'horizontal', topic, isRead, translate } = props
  const { styles, cx } = useStyles()
  const getValue = () => {
    if (isRead) {
      if (Array.isArray(options)) {
        const value = options.find(item => item.isTrue)?.label
        return { value, isTrue: undefined }
      }
      return { value: answer, isTrue: undefined }
    }
    return { value: '', isTrue: undefined }
  }

  const [state, setState] = useState(() => {
    return getValue()
  })

  useEffect(() => {
    setState(getValue());
  }, [isRead])

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

  return <div className={cx(styles.base, { is_options: isOptions, is_bool: isBool, is_input: isInput })}>
    {isOptions ? <b>{sort}.</b> : <QTopic content={topic} sort={sort} />}
    {isBool ? <QListRadio layout={layout} value={state.value} options={BooleanOptions} onChange={onChange} /> : null}
    {options ? <QListRadio layout={layout} value={state.value} options={options} onChange={onChange} /> : null}
    {isInput ? <QInput value={state.value} isTrue={state.isTrue} onChange={onChange} /> : null}
    {state.isTrue === false && isInput ? <div className={cx(styles.error)}>填写错误</div> : null}
    {translate && isRead ? <div className={cx(styles.translate)}>{translate}</div> : null}
  </div>
}