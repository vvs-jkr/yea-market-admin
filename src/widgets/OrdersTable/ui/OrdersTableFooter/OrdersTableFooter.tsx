import { DropdownForm } from '@/features/dropdownForm'
import Text from '@/shared/ui/Text/Text'

import * as styles from './styles.module.css'

const OrdersTableFooter = () => {
  return (
    <div className={styles.footer}>
      <Text tagName='span' type='d-3' color='#828D9E'>1-6 of 8 Pages</Text>
      <div className={styles.pagination}>
        <DropdownForm data={['1', '2', '3', '4', '5', '6']} initialValue='1' className={styles.dropdown}/>
        <Text tagName='span' type='d-3' color='#828D9E'>The Page You’re On</Text>
      </div>
    </div>
  )
}

export default OrdersTableFooter
