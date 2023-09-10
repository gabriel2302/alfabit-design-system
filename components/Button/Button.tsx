import React from "react"

export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return <button
    className={`
    bg-primary rounded-[8px] px-[32px] py-[12px] text-white 
    ${className}
    `}
    {...rest}
  >{children}</button>
}

export default Button