'use client'
import { useState } from 'react'
import styles from './reviews.module.css'

const reviews = [
    {
      photo: '/IMG_2992.JPEG',
      name: 'ІМЯ',
      role: 'ПОСАДА',
      text: 'Я написала 7 сторінок... і до кінця листа я відчула своє тіло. Відчула те, за чим прийшла. Це неможливо описати словами.',
    },
    {
      photo: '/IMG_2994.JPEG',
      name: 'ІМЯ',
      role: 'ПОСАДА',
      text: 'Маша, дякую за інтенсив — це найкраща інвестиція в себе. Стільки інсайтів, що не передати. Впевнена, що трансформації тільки починаються.',
    },
    {
      photo: '/IMG_2995.JPEG',
      name: 'ІМЯ',
      role: 'ПОСАДА',
      text: 'До курсу мене мучало питання зі звільненням. Прослухала — і зрозуміла, що піти це правильний вибір. Дякую величезне, вас дуже приємно слухати.',
    },
    {
      photo: '/IMG_2997.JPEG',
      name: 'ІМЯ',
      role: 'ПОСАДА',
      text: 'Це відчувалось як велике обіймання. Ніби ти провела мене з темного лабіринту. Деяка інформація була зовсім новою — і просто вогонь.',
    },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))

  const review = reviews[current]

  return (
    <div className={styles.ReviewBlock}>
      <div className={styles.ReviewSlider}>
        <div
          className={styles.ReviewPhoto}
          style={{ backgroundImage: `url('${review.photo}')` }}
        ></div>
        <div className={styles.ReviewContent}>
          <div className={styles.ReviewTop}>
            <span className={styles.ReviewTag}>відгуки</span>
            <h2 className={styles.ReviewTitle}>Вони вже пройшли цей шлях</h2>
          </div>
          <div className={styles.ReviewBody}>
            <p className={styles.ReviewText}>«{review.text}»</p>
            <div className={styles.ReviewMeta}>
              <span className={styles.ReviewName}>{review.name}</span>
              <span className={styles.ReviewRole}>{review.role}</span>
            </div>
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