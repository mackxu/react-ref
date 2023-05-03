1. 将 ref 作为 prop 从父组件传递到子组件
2. 使用 forwardRef 将 ref 从父组件传递给子组件
   1. ForwardRefRenderFunction<HTMLInputElement>
3. 用 useImperativeHandle 实现命令式 API
   1. const inputRef = useRef<HTMLInputElement | null>(null);
4. 不使用 useImperativeHandle 实现命令式 API

https://mp.weixin.qq.com/s/8RfYtrJMGgabcgdJg4nETg

