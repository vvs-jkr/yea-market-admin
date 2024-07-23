import React from 'react'
import styles from './styles.module.css'
import { Dialog, DialogPanel } from '@headlessui/react'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'

interface ModalBoxProps {
    isOpen: boolean
    children: React.ReactElement
    modalTitle: string
    actionButtonLabel: string
    onClose: () => void
    onAction: () => void
}

export function ModalBox(props: ModalBoxProps) {
    const { isOpen, children, modalTitle, onClose, actionButtonLabel, onAction } = props

    return (
        <Dialog open={isOpen} onClose={onClose} className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <DialogPanel className={styles.modalContentWrapper}>
                    <div className={styles.modalHeader}>
                        <div className={styles.titleWrapper}>
                            <Icon icon="Box" />
                            <h3>Add {modalTitle}</h3>
                        </div>
                        <button onClick={onClose} className={styles.closeButton}><Icon icon='Close' /></button>
                    </div>
                    <div className={styles.modalContent}>
                        {React.cloneElement(children, { onAction: onAction })}
                    </div>
                    <div className={styles.modalFooter}>
                        <Button onClick={onAction} label={actionButtonLabel} className={styles.actionButton} iconRight={<Icon icon='Checkmark' />} />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
