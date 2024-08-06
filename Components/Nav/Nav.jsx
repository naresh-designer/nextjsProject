import React from 'react'
import Link from 'next/link'
import styles from '../Nav/nav.module.css'

import { CiSearch,CiUser,CiShoppingCart } from 'react-icons/ci';

const navData = [
    {
        name:'Home',
        path:'/',
    },
    {
        name:'About',
        path:'/about',
    },
    {
        name:'Products',
        path:'/products',
    },
    {
        name:'Contact',
        path:'/contact',
    },
]

const Nav = () => {
  return (
    <nav className={styles.navBody} >
        <ul>

            {
                navData.map((curElm) =>{
                    const {id,path,name}=curElm
                    return(
                    <li key={id} > 
                        <Link href={path} >{name}</Link>
                    </li>
                    )
                } )
            }
            <li>
                <Link href='' ><CiSearch/></Link>
            </li>
            <li>
                <Link href='' ><CiUser/></Link>
            </li>
            <li>
                <Link href='' ><CiShoppingCart/></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav