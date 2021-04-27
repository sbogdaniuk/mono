import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'
import cn from 'classnames'
import './Button.scss'

export const Button = forwardRef<HTMLButtonElement, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>(({ className, ...rest }, ref) => (
  <button type="button" ref={ref} className={cn('btn', className)} {...rest} />
))
