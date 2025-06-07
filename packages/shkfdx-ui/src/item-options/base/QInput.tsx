import { Input } from "antd"
import { useStyles } from "./styles/QInput"
import { useState, useEffect } from "react"

export interface QInputProps {
  /**是否填写正确*/
  isTrue?: boolean
  value?: string
  onChange: (value: string) => void
}

export const QInput = (props: QInputProps) => {
  const { isTrue, value } = props
  const { styles, cx } = useStyles()
  const [_value, setValue] = useState('')

  const onInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (value) {
      return
    }
    setValue(event.target.value)
  }

  useEffect(() => {
    setValue(value || '')
  }, [value])

  return <Input
    value={_value}
    onChange={onInput}
    className={cx(styles.input, { error: value && isTrue === false })}
    onBlur={(event) => props.onChange(event.target.value)}
  />
}