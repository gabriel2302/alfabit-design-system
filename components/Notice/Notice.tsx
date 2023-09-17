import {
  XMarkIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid"
import Box from "../Box/Box"
import Typography from "../Typography/Typography"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"


export type NoticeProps = VariantProps<typeof noticeVariants> & {
  type: 'alert' | 'success' | 'error'
  children?: React.ReactNode
  message: string
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const noticeVariants = cva("", {
  variants: {
    type: {
      success: "text-green-900",
      error: "text-red-900",
      alert: "text-yellow-900",
    },
    defaultVariants: {
      type: "alert",
    },
  },
});

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckIcon className="w-4 h-4" />;
    case "alert":
      return <InformationCircleIcon className="w-4 h-4" />;
    case "error":
      return <ExclamationTriangleIcon className="w-4 h-4" />;
  }
};

const Notice = ({
  type,
  message,
  onClose,
  children,
  className,
  ...rest
}: NoticeProps) => {
  return (
    <Box
      className={`flex p-4 justify-between items-center ${className}`}
      filledBackground
      rounded
      type={type}
      {...rest}
    >
      <div className="flex gap-2">
        {getIcon(type)}
        <Typography className={`${noticeVariants({ type })} ${className}`}>
          {message}
        </Typography>
      </div>
      {children}
      {onClose && (
        <XMarkIcon className="w-4 h-4 cursor-pointer" onClick={onClose} />
      )}
    </Box>
  )
}

export default Notice