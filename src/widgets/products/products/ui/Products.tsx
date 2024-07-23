import React from 'react'
import Button from '@/shared/ui/Button/Button'
import styles from './styles.module.css'
import { ModalBox } from '@/shared/ui/ModalBox/ModalBox'
import { useToggle } from '@/shared/lib/hooks/useToggle'
import Icon from '@/shared/ui/Icon/Icon'

export default function Products() {
    const [state, onToggle] = useToggle(false)

    return (
        <div className={styles.container}>
            <Button onClick={onToggle} variant='outline' label='Add Product' iconLeft={<Icon icon='Box' />} />
            <ModalBox onAction={() => null} isOpen={state} actionButtonLabel='Save' modalTitle='Product' onClose={onToggle}>
                <div>Children</div>
            </ModalBox>
        </div>
    )
}
