'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '«Я вже пробувала — і не спрацювало»',
    a: 'Тут не буде ще однієї теорії. Ми йдемо через стан, тіло і реальні зміни в рішеннях — і ти не залишаєшся сама з цим процесом. Щотижня є живий розбір твоєї ситуації.',
  },
  {
    q: '«Немає часу»',
    a: 'До 30 хвилин на день. Курс спеціально побудований так, щоб не стати ще одним пунктом у списку справ — а вбудуватись у твоє звичне життя.',
  },
  {
    q: '«Я сама розберусь»',
    a: 'Звісно. Але якщо ти вже давно «розбираєшся» — і відчуття свого життя все одно немає, можливо, тут потрібен інший підхід.',
  },
  {
    q: '«Я вже багато знаю. Чи дасть це щось нове?»',
    a: 'ALIVE — не про нові знання. Це про стан. Можна знати все — і все одно не жити. Тут ми йдемо туди, де знання нарешті стають відчуттям.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={styles.FAQBlock}>
      <div className={styles.Container}>
        <h2 className={styles.FAQTitle}>Питання?</h2>
        <div className={styles.FAQList}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.FAQItem} ${open === i ? styles.FAQItemOpen : ''}`}
            >
              <button
                className={styles.FAQQuestion}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={styles.FAQIcon}>{open === i ? '−' : '+'}</span>
              </button>
              <div className={styles.FAQAnswer}>
                <div className={styles.FAQAnswerInner}> 
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}