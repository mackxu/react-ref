// 将 ref 作为 prop 从父组件传递到子组件

import { RefObject } from "react"

export const InputField = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  // 其余代码相同

  // 将prop中的ref传递给内部的输入组
  return <input ref={inputRef} />
}