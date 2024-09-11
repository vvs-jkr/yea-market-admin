import OrdersTableHeader from "./OrdersTableHeader/OrdersTableHeader"
import OrdersTableBody from "./OrdersTableBody/OrdersTableBody"
import OrdersTableFooter from "./OrdersTableFooter/OrdersTableFooter"

import * as styles from './styles.module.css';

const OrdersTable = () => {
  return (
    <div className={styles.container}>
      <OrdersTableHeader/>
      <OrdersTableBody/>
      <OrdersTableFooter/>
    </div>
  )
}

export default OrdersTable