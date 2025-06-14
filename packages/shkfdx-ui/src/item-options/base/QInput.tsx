import { Input } from "antd"
import { useStyles } from "./styles/QInput"
import { useState, useEffect } from "react"

export interface QInputProps {
  /**是否填写正确*/
  isTrue?: boolean
  value?: string
  onChange: (value: string) => void
  isTextArea?: boolean
}

export const QInput = (props: QInputProps) => {
  const { isTrue, value, isTextArea } = props
  const { styles, cx } = useStyles()
  const [_value, setValue] = useState('')

  const onInput: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    if (value) {
      return
    }
    setValue(event.target.value)
  }

  useEffect(() => {
    setValue(value || '')
  }, [value])

  if (isTextArea) {
    return <Input.TextArea
      rows={5}
      value={_value}
      onChange={onInput}
      className={cx(styles.input, { error: value && isTrue === false })}
      onBlur={(event) => props.onChange(event.target.value)}
    />
  }
  return <Input
    value={_value}
    onChange={onInput}
    className={cx(styles.input, { error: value && isTrue === false })}
    onBlur={(event) => props.onChange(event.target.value)}
  />
}