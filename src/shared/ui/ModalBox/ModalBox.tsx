import React from 'react'
import styles from './styles.module.css'
import { Dialog, DialogPanel } from '@headlessui/react'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'

export interface ModalBoxProps {
    isOpen: boolean
    contentComponent: React.ReactElement
    modalTitle: string
    actionButtonLabel: string
    onClose: () => void
    onAction: () => void
}

export default function ModalBox(props: ModalBoxProps) {
    const { isOpen, contentComponent, modalTitle, onClose, actionButtonLabel, onAction } = props
    return (
        <Dialog open={isOpen} onClose={onClose} className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <DialogPanel className={styles.modalContentWrapper}>
                    <div className={styles.modalHeader}>
                        <div className={styles.titleWrapper}>
                            <Icon icon="Box" />
                            <h1>Add {modalTitle}</h1>
                        </div>
                        <button onClick={onClose} className={styles.closeButton}><Icon icon='Close' /></button>
                    </div>
                    <div className={styles.modalContent}>
                        {React.cloneElement(contentComponent, { onAction: onAction })}
                    </div>
                    <div className={styles.modalFooter}>
                        <Button onClick={onAction} label={actionButtonLabel} className={styles.actionButton} iconRight={<Icon icon='Checkmark' />} />
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
