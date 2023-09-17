import classNames from 'classnames'
import React from 'react'

export type BoxProps = {
  children: React.ReactNode;
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error'
} & React.HtmlHTMLAttributes<HTMLDivElement>


const boxClassMap = {
  primary: 'bg-primary',
  secondary: 'bg-tertiary',
  dark: 'bg-dark',
  alert: 'bg-yellow-100',
  success: 'bg-green-100',
  error: 'bg-error',
}

const Box = ({ 
  children, 
  rounded=false, 
  border=false, 
  filledBackground=false, 
  type='primary',
  className,
  ...rest
}: BoxProps) => {
  const classes = classNames({
    "rounded-md": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type
  })
  return <div {...rest} className={`${classes} ${className}`}>{children}</div>
}

export default Box