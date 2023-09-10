import React from "react"

export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return <button
    className={`
    bg-primary rounded-md px-6 py-2 text-white text-sm
    ${className || ''}
    `}
    {...rest}
  >{children}</button>
}

export default Button