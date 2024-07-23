import React from 'react'
import styles from './styles.module.css'
import Tabs from '@/shared/ui/Tabs/Tabs'
import { Products } from '@/widgets/products/products'


export default function ProductsPage() {
  const productsInfoTabs = [
    {
      name: 'Products',
      content: <Products />
    },
    {
      name: 'Categories',
      content: <div>Categories</div>
    },
    {
      name: 'Similar Products',
      content: <div>Similar Products</div>
    },
    {
      name: 'Archive',
      content: <div>Archive</div>
    }
  ]


  return (
    <div className={styles.pageWrapper}>
      <Tabs tabsList={productsInfoTabs} />
    </div>
  )
}
