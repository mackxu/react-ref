// 用 useImperativeHandle 实现命令式 API
import { useImperativeHandle, useRef } from "react"

interface InputFieldProps {
  inputApi: InputApi,
}

export const InputField = ({ inputApi }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // 其余代码相同

  useImperativeHandle(inputApi, () => ({
    focus() {
      inputRef.current?.focus();
    },
    shake() {
      console.log('shake');
    },
  }));

  // 将prop中的ref传递给内部的输入组
  return <input ref={inputRef} />
}