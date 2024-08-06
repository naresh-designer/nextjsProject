import React from 'react'
import Image from 'next/image'
import styles from '../ProductCard/card.module.css'
import Button from '../Button/Button'
import Link from 'next/link'

const ProductCard = ({curElm}) => {
  const{id,category,image,title,price} = curElm
  return (
    <main>
        <div className={styles.card} >
            <Image src={image} alt={category} width={200} height={200} />
            <h3>{category}</h3>
            <p>{title.slice(0,20)}</p>
            <p>$ {price}</p>
            <Button>
                <Link href={`Categories/${id}`} >Read More</Link>
            </Button>
        </div>
    </main>
  )
}

export default ProductCard