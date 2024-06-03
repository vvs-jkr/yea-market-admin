import { ordersData } from "@/shared/constants/ordersData"
import Checkbox from "@/shared/ui/Checkbox/Checkbox"
import Icon from "@/shared/ui/Icon/Icon"

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
              <Icon icon="DottedMenu" color={isCompleted ? '#7F8DA0' : '#DDDFE3'}/>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default OrdersTableTBody