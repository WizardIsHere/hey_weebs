import React from 'react'

import styles from './TrendCard.module.css';
import {TrendData} from '../../Data/TrendData'

const TrendCard = () => {
    return (
        <div className={styles.TrendCard}>
            <h3>Trends for you!</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className={styles.trend}>
                        <span><b>#{trend.name}</b></span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard
