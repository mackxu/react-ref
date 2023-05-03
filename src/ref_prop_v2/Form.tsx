import { useEffect, useRef } from "react";
import { InputField } from "./InputField";

export const Form = () => {
  // 在 Form 组件中创建 Ref
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 渲染在 InputField 内部的 “input” 元素将出现在此处
    console.log(inputRef.current);
  }, []);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      {/* 将 ref 作为 prop 传递给输入字段组件 */}
      <InputField ref={inputRef} />
      <button onClick={handleClick}>click!</button>
    </>
  )
}