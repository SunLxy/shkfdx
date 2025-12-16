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
  isTextArea?: boolean
  /**答案*/
  answer?: string

  // TODO: 直接选项
  /**是否直接选择项*/
  isOptions?: boolean

  layout?: 'horizontal' | 'vertical'

  /**显示答案的背题模式*/
  isRead?: boolean
  /**翻译*/
  translate?: string[]
  /**多选*/
  isMulti?: boolean
  /**是否显示翻译*/
  isShowTranslate?: boolean
  /**题目下面显示内容*/
  children?: React.ReactNode
  /**只显示答案*/
  isOnlyAnswer?: boolean,
  /**是否是HTML字符串*/
  isHTML?: boolean,
  /**分析*/
  analysis?: React.ReactNode
}

export const QItem = (props: QItemProps) => {
  const {
    isOnlyAnswer = false,
    sort,
    isOptions = false,
    isBool,
    isInput,
    isTextArea,
    answer,
    options,
    layout = 'horizontal',
    topic,
    isHTML = false,
    isRead,
    translate,
    isMulti,
    isShowTranslate,
    children,
    analysis
  } = props
  const { styles, cx } = useStyles()

  const getValue = () => {
    if (isRead) {
      if (isMulti) {
        return { value: options?.filter(item => item.isTrue)?.map(item => item.label), isTrue: undefined, isAllSelect: undefined }
      }
      if (Array.isArray(options)) {
        const value = options.find(item => item.isTrue)?.label
        return { value, isTrue: undefined }
      }
      return { value: answer, isTrue: undefined }
    }
    if (isMulti) {
      return { value: [], isTrue: undefined, isAllSelect: undefined }
    }
    return { value: '', isTrue: undefined }
  }

  const [state, setState] = useState<{
    value: string | string[],
    isTrue?: boolean,
    isAllSelect?: boolean
  }>(() => {
    return getValue()
  })

  useEffect(() => {
    setState(() => getValue());
  }, [isRead, isOnlyAnswer])

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
    if (isMulti) {
      // 如果已经存在不可点击
      if (state.value.includes(value)) {
        return
      }
      // 判断是否存在选择错误的
      let isT = undefined
      if (state.isTrue !== false) {
        const finx = options?.find(item => item.label === value)
        isT = !!finx.isTrue
      }
      let _newList = []
      if (Array.isArray(state.value)) {
        const newValues = Array.from(new Set([...state.value, value]))
        _newList = [...newValues]
      } else {
        _newList = [...value]
      }
      let isAllSelect = true;
      for (let index = 0; index < options.length; index++) {
        const item = options[index];
        if (item.isTrue) {
          const fix = _newList.find((it) => it === item.label);
          if (!fix) {
            isAllSelect = false
            break;
          }
        }
      }
      setState({ value: [..._newList], isTrue: isT, isAllSelect })
    } else {
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
  }

  return <div className={cx(styles.base, { is_options: isOptions, is_bool: isBool, is_input: isInput, is_translate: translate && isRead })}>
    {isOptions ? <b>{sort}.</b> : <QTopic isHTML={isHTML} content={topic} sort={sort} />}
    {children}
    {isBool ? <QListRadio isMulti={isMulti} isOnlyAnswer={isOnlyAnswer} layout={layout} value={state.value} options={BooleanOptions} onChange={onChange} /> : null}
    {options ? <QListRadio isMulti={isMulti} isOnlyAnswer={isOnlyAnswer} layout={layout} value={state.value} options={options} onChange={onChange} /> : null}
    {(isInput || isTextArea) ? <QInput isTextArea={isTextArea} value={state.value.toString()} isTrue={state.isTrue} onChange={onChange} /> : null}
    {Array.isArray(translate) && translate.length && (isRead || isShowTranslate) ? <div className={cx(styles.translate)}>
      {translate.map((it, key) => <div key={key}>{it}</div>)}
    </div> : null}
    {state.isTrue === false ? <div className={cx(styles.error)}>{(isInput || isTextArea) ? "填写错误" : "选择错误"}</div> : null}
    {state.isAllSelect === false && isMulti ? <div className={cx(styles.warn)}>未选择所有数据</div> : null}
    {state.isTrue === false && analysis ? <div className={cx(styles.analysis)}>{analysis}</div> : null}
  </div>
}
export interface QItemTranslateProps {
  /**翻译*/
  translate?: string[]
  /**显示答案的背题模式*/
  isRead?: boolean
  /**多选*/
  isMulti?: boolean
  /**是否显示翻译*/
  isShowTranslate?: boolean

}

export const QItemTranslate = (props: QItemTranslateProps) => {
  const { translate, isRead, isShowTranslate } = props
  const { styles, cx } = useStyles()
  return Array.isArray(translate) && translate.length && (isRead || isShowTranslate) ? <div className={cx(styles.translate)}>
    {translate.map((it, key) => <div key={key}>{it}</div>)}
  </div> : null
}