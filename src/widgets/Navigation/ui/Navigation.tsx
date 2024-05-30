import { Link} from 'react-router-dom';

import NavigationUserInfo from './NavigationUserInfo/NavigationUserInfo';
import NavigationList from './NavigationList/NavigationList';
import Icon from '@/shared/ui/Icon/Icon';
import Text from '@/shared/ui/Text/Text';

import * as styles from './styles.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavigationUserInfo/>

      <NavigationList/>

      <Link to="/logout" className={styles.logout}>
        <Icon icon='Logout' color='#595666'/>
        <Text tagName='span' type='d-3' weight='medium'>Logout</Text>
      </Link>
    </div>
  )
}

export default Navigation;