import React, { FC, ReactNode } from 'react';
import styles from './page.module.scss'


type IApp = {
  children: ReactNode
}

const App: FC<IApp> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default App
