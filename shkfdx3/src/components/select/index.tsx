import { randomArray, QItemProps } from "shkfdx-ui"
import { ref, useProxyStore } from "@carefrees/valtio"
import { useLocation } from "react-router"
import { Fragment, useMemo } from "react"
import { Select, Button } from "antd"


export interface SelectPracticeProps {
  sumList: any[]
  dispatch: (payload: any) => void
}

const useSelectPractice = (props: SelectPracticeProps) => {
  const { sumList, dispatch } = props

  const location = useLocation()
  const { state, proxyInstance } = useProxyStore({
    options: JSON.parse(localStorage.getItem(`${location.pathname}_options`) || '[]'),
    isStart: false,
    count: Number(localStorage.getItem(`${location.pathname}_count`) || '0'),
  })

  const count = state.count
  const isStart = state.isStart

  const items = useMemo(() => {
    const list = []
    for (let index = 0; index < count; index++) {
      list.push({ label: `第${index + 1}轮 - 失败数据`, value: `${index + 1}_errorList` })
      list.push({ label: `第${index + 1}轮 - 成功数据`, value: `${index + 1}_successList` })
    }
    return list
  }, [isStart])

  const onError = (item: QItemProps & { id: string }) => {
    let count = Number(localStorage.getItem(`${location.pathname}_count`) || '0')
    if (proxyInstance.store.isStart === false) {
      count = count + 1
      localStorage.setItem(`${location.pathname}_count`, `${count}`)
      proxyInstance.store.count = count
    }
    proxyInstance.store.isStart = true
    const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${count}_errorList`) || '[]') as string[]
    localStorage.setItem(`${location.pathname}_${count}_errorList`, JSON.stringify([...oldIds, item.id]))
  }

  const onSuccess = (item: QItemProps & { id: string }) => {
    let count = Number(localStorage.getItem(`${location.pathname}_count`) || '0')
    if (proxyInstance.store.isStart === false) {
      count = count + 1
      localStorage.setItem(`${location.pathname}_count`, `${count}`)
      proxyInstance.store.count = count
    }
    proxyInstance.store.isStart = true
    const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${count}_successList`) || '[]') as string[]
    localStorage.setItem(`${location.pathname}_${count}_successList`, JSON.stringify([...oldIds, item.id]))
  }

  const render = useMemo(() => {
    return <Fragment>
      <span>{`第${count}轮`}</span>
      <Select
        style={{ width: 200 }}
        placeholder="请选择"
        options={items}
        allowClear={true}
        onChange={value => {
          if (value) {
            if (proxyInstance.store.isStart) {
              proxyInstance.store.isStart = false
            }
            const oldIds = JSON.parse(localStorage.getItem(`${location.pathname}_${value}`) || '[]') as string[]
            const list = sumList.filter((item: QItemProps & { id: string }) => oldIds.includes(item.id))
            // 调用 onUpdated 方法更新数据
            // @ts-ignore
            dispatch({ dataList: ref(randomArray(list)), isRead: true, isOnlyAnswer: false })
          } else {
            // @ts-ignore
            dispatch({ dataList: ref(randomArray(sumList)), isRead: true, isOnlyAnswer: false })
          }
        }}
      />
      <Button
        type="link"
        onClick={() => {
          localStorage.clear();
          localStorage.setItem(`${location.pathname}_count`, '0')
          proxyInstance.store.count = 0
          proxyInstance.store.isStart = false
        }}
      >
        清理
      </Button>
    </Fragment>
  }, [count, items])

  return {
    render,
    onError,
    onSuccess
  }
}

export default useSelectPractice