import React from 'react'
import styles from '../Logo/logo.module.css'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className={styles.logo} >
       <Link href='/' ><span className={styles.online} > Online </span> Shop</Link>
    </div>
  )
}

export default Logo