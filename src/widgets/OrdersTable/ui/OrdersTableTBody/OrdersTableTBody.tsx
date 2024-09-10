import { SettingProductPopup } from "@/features/product/setting"
import { ordersData } from "@/shared/constants/ordersData"
import Checkbox from "@/shared/ui/Checkbox/Checkbox"

import * as styles from "./styles.module.css"

const OrdersTableTBody = () => {
  return (
    <tbody>
      {ordersData.map(({id, title, price, date, status, isCompleted}) => {
        return (
          <tr className={styles.row}>
            <td>
              <Checkbox checked={isCompleted} />
            </td>
            <td>#{id}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>${price}</td>
            <td>
              <span className={styles.status}>{status}</span>  
            </td>
            <td>
              <SettingProductPopup isCompleted={isCompleted} />
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default OrdersTableTBody