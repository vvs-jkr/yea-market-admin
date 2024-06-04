import { DropdownForm } from '@/features/dropdownForm';
import classNames from '@/shared/lib/utils/classNames';
import Icon from '@/shared/ui/Icon/Icon';

import * as styles from './styles.module.css';

const OrdersTableHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.item, styles.searchContainer)}>
        <input type="search" placeholder="Search for Order ID, Item" className={styles.search} />
        <Icon icon='Search' color='#828D9E' />        
      </div>  

      <DropdownForm initialValue='Filters' />

      <a className={classNames(styles.item, styles.download)} href="#" download>
        <Icon icon="Download"/>
        Download
      </a>
    </div>
  )
}

export default OrdersTableHeader