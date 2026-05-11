'use client'
import { useState, useEffect } from 'react'
import styles from './reviews.module.css'

const reviews = [
  { photo: '/review1.jpeg' },
  { photo: '/review2.jpeg' },
  { photo: '/review3.jpeg' },
  { photo: '/review4.jpeg' },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  // preload всіх фото одразу
  useEffect(() => {
    reviews.forEach((r) => {
      const img = new Image()
      img.src = r.photo
    })
  }, [])

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))

  return (
    <div className={styles.ReviewBlock}>
      <div className={styles.ReviewSlider}>
        <div
          className={styles.ReviewPhoto}
          style={{ backgroundImage: `url('/IMG_2997.JPEG')` }}
        ></div>
        <div className={styles.ReviewContent}>
          <div className={styles.ReviewTop}>
            <span className={styles.ReviewTag}>відгуки</span>
            <h2 className={styles.ReviewTitle}>Вони вже пройшли цей шлях</h2>
          </div>
          <div className={styles.ReviewScreen}>
            <img
              key={current}
              src={reviews[current].photo}
              alt="відгук"
            />
          </div>
          <div className={styles.ReviewNav}>
            <button className={styles.NavBtn} onClick={prev}>←</button>
            <span className={styles.NavCount}>{current + 1} / {reviews.length}</span>
            <button className={styles.NavBtn} onClick={next}>→</button>
          </div>
        </div>
      </div>
    </div>
  )
}