import React from 'react'
import Nav from '../Nav/Nav'
import styles from '../Header/header.module.css'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <main className= {styles.header_sec} >
    <header className="main_wrapper">
        <div className={styles.inner_header} >
            <Logo/>
            <Nav/>
        </div>
    </header>
    </main>
  )
}

export default Header