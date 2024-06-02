import Checkbox from "@/shared/ui/Checkbox/Checkbox"

import * as styles from "./styles.module.css"

const OrdersTableTHead = () => {
  return (
    <thead>
      <tr className={styles.row}>
        <td>
          <Checkbox/>
        </td>
        <th>
          Order ID
        </th>
        <th>
          Item
        </th>
        <th>
          Delivery Date
        </th>
        <th>
          Pricing
        </th>
        <th>
          Delivery Status
        </th>
      </tr>
    </thead>
  )
}

export default OrdersTableTHead