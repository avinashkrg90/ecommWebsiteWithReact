import React from 'react'
import styles from './ProductDisplay.module.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className={styles.productDisplay}>
            <div className={styles.productDisplayLeft}>
                <div className={styles.productDisplayImageList}>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className={styles.productDisplayImage}>
                    <img className={styles.productDisplayMainImage} src={product.image} alt="iamge" />
                </div>
            </div>
            <div className={styles.productDisplayRight}>
                <h1>{product.name}</h1>
                <div className={styles.productDisplayRightStars}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className={styles.productDisplayRightPrices}>
                    <div className={styles.productDisplayRightPriceOld}>${product.old_price}</div>
                    <div className={styles.productDisplayRightPriceNew}>${product.new_price}</div>
                </div>
                <div className={styles.productDisplayRightDescription}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </div>
                <div className={styles.productDisplayRightSize}>
                    <h1>Select size</h1>
                    <div className={styles.productDisplayRightSizes}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className={styles.productDisplayRightCategory}><span>Category :</span>Women, T-shirt, Crop top</p>
                <p className={styles.productDisplayRightCategory}><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay