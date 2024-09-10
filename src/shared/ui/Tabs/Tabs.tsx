import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import styles from './tabs.module.css'
import { TabItem } from './tabs.model'

export interface TabsProps {
    tabsList: TabItem[]
}

export default function Tabs({ tabsList }: TabsProps) {
    return (
        <TabGroup>
            <TabList className={styles.tabList}>
                {tabsList.map((tab, index) => <Tab className={styles.tab} data-selected key={index}>{tab.name}</Tab>)}
            </TabList>
            <TabPanels>
                {tabsList.map((tab, index) => (
                    <TabPanel key={index}>{tab.content}</TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}
