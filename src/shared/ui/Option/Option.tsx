import classNames from '../../lib/utils/classNames'

import { OptionProps } from './option.model'

import './option.styles.css'

export default function Option({ value = 'Option', isActive, selectItem }: OptionProps) {
  return (
    <li onClick={() => selectItem(value)} className={classNames({ 'option-selected': isActive }, 'option')}>
      {value}
    </li>
  )
}
