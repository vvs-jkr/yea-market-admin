import NavigationItem from "../NavigationItem/NavigationItem"

import * as styles from './styles.module.css'

const NavigationList = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavigationItem icon='Trending' label='Order' link='/order' isActive/>
        <NavigationItem icon='Box' label='Products' link='/products'/>
        <NavigationItem icon='Contacts' label='Clients' link='/clients'/>
        <NavigationItem icon='Settings' label='Settings' link='/settings'/>
      </ul>
    </nav>
  )
}

export default NavigationList