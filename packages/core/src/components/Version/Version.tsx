import React, { HTMLAttributes } from 'react'
import cn from 'classnames'
import './Version.scss'

export const Version = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className, 'version')} {...rest}>
    prev 1.3.0
  </div>
)
