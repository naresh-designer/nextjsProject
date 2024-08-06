import React from 'react'
import styles from '../Hero/hero.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <main>
        <div className={styles.heroBg}>
            <div className="main_wrapper grid grid_two  ">
                <div className={styles.hero_content} >
                    <h1>Mens New Arrivals</h1>
                    <p>New colors, now also available in mens sizing</p>
                    <Button className={styles.hero_button} >
                        <Link href='/' >View Collection</Link>
                    </Button>
                </div>
                <div>
                    <Image src='/hero.png' width={554} height={500} alt='hero' />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero