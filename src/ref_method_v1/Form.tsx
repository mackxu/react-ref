import { useEffect, useRef } from "react";
import { InputField } from "./InputField";

export const Form = () => {
  // 在 Form 组件中创建 Ref
  const inputApi = useRef<InputApi>(null);

  useEffect(() => {
    console.log(inputApi.current);
  }, []);

  const handleClick = () => {
    inputApi.current?.focus();
  };

  return (
    <>
      {/* 将 ref 作为 prop 传递给输入字段组件 */}
      <InputField inputApi={inputApi} />
      <button onClick={handleClick}>click!</button>
    </>
  )
}