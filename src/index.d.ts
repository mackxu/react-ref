import { MutableRefObject } from "react";

declare interface InputFieldProps {
  inputApi: MutableRefObject<{
    focus: () => void
  }>,
}