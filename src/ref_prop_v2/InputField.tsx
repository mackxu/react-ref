import { ForwardRefRenderFunction, forwardRef } from "react"

// 使用 forwardRef 将 ref 从父组件传递给子组件
// export const InputField = forwardRef<HTMLInputElement>((props, inputRef) => {
//   // 其余代码相同
//   console.log(props);
  
//   // 将prop中的ref传递给内部的输入组
//   return <input ref={inputRef} />
// });

const InputFieldWithRef: ForwardRefRenderFunction<HTMLInputElement> = (props, inputRef) => {
  // 其余代码相同
  console.log(props);
  
  // 将prop中的ref传递给内部的输入组
  return <input ref={inputRef} />
};

export const InputField = forwardRef(InputFieldWithRef);
