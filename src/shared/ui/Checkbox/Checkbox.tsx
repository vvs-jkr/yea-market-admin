import { CheckboxProps } from './checkbox.model';

import './checkbox.styles.css';

export default function Checkbox({
  description = null,
  ...props
}: CheckboxProps) {
  return (
    <>
      <label className="check">
        <input type="checkbox" className="check-input" {...props} />
        <span className="check-box"></span>
        {description && <span className="description">{description}</span>}
      </label>
    </>
  )
}
