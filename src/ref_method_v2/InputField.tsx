// 将 ref 作为 prop 从父组件传递到子组件
import { useRef } from "react"

interface IInputField {
  inputApi: InputApi,
}

export const InputField = ({ inputApi }: IInputField) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // 其余代码相同
  inputApi.current = {
    focus() {
      inputRef.current?.focus();
    },
  }
  // 将prop中的ref传递给内部的输入组
  return <input ref={inputRef} />
}