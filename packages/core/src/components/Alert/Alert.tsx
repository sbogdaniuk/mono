import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import cn from 'classnames'
import './Alert.scss'

export const Alert = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className, 'alert')} {...rest} />
)
