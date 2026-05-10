import styles from './page.module.css'
import { Reviews } from './Reviews';
import { FAQ } from './FAQ';

export default function Home() {
  return (
    <>
      <div className={styles.FirstBlock}>
        <div className={styles.Container}>
          <div className={styles.UpperTextFirst}>
            Живи своїм життям
          </div>

          <div className={styles.UpperTextSecond}>
            Справжнім. По-жіночому. В кайф
          </div>

          <div className={styles.MainText}>
            ALIVE
          </div>

          <div className={styles.SubText}>
            4-тижневий курс для жінок, які хочуть нарешті відчути своє життя зсередини. Не «стати кращою версією себе», а просто згадати, яка ти є насправді
          </div>

          <button className={styles.CTAButton}>
            Хочу на курс →
          </button>
        </div>
      </div>

      <div className={styles.SecondBlock}>
        <div className={styles.Container}>
          <div className={styles.StartBlock}>
            <h2 className={styles.MainBlockSec}>Є таке відчуття…</h2>
            <div className={styles.TezaList}>
              <p className={styles.Teza}>Ніби живеш, але не відчуваєш цього. День за днем, все як треба, але всередині якось порожньо</p>
              <p className={styles.Teza}>Ти думаєш, аналізуєш, плануєш, а смаку в цьому всьому так і немає</p>
              <p className={styles.Teza}>Ти вже пробувала: курси, терапія, марафони. Або стає легше на тиждень — або не стає взагалі</p>
              <p className={styles.Teza}>Ти не знаєш, чого хочеш. Або знаєш — але одразу тисяча причин, чому не можна</p>
              <p className={styles.Teza}>І десь глибоко: «я не живу своє життя. Я живу якесь інше»</p>
              <p className={styles.TezaAccent}>Якщо хоч щось із цього — про тебе, тобі точно сюди</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.PhotoRow}>
        <div className={styles.PhotoItem}>
          <img src="/IMG_2992.JPEG" alt="" />
        </div>
        <div className={styles.PhotoItem}>
          <img src="/IMG_2994.JPEG" alt="" />
        </div>
        <div className={`${styles.PhotoItem} ${styles.PhotoItemHide}`}>
          <img src="/IMG_2995.JPEG" alt="" />
        </div>
      </div>

      <div className={styles.ThirdBlock}>
        <div className={styles.Container}>
          <div className={styles.ThirdContent}>
            <h2 className={styles.ThirdTitle}>
              Це не ще один курс про те, як <br />
              <span>«стати кращою»</span>
            </h2>
            <div className={styles.ThirdTitleRow}>
              <p className={styles.ThirdText}>
                ALIVE — це про повернення. До себе. До свого тіла, своїх бажань, своєї природи. До того відчуття, коли ти живеш — і це відчувається
              </p>
              <p className={styles.ThirdText}>
                Я не буду вчити тебе бути правильною чи більш продуктивною. Ми підемо в інший бік — туди, де ти вже все знаєш. Просто десь по дорозі загубила
              </p>
            </div>

            <div className={styles.CardsRow}>
              <div className={styles.Card}>
                <p className={styles.CardText}>До 30 хвилин на день — без перегрузу і відчуття «ще одне завдання»</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Ми йдемо через голову, тіло і душу — не лише через розуміння</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Особистий дзвінок щотижня — розбір твоєї ситуації, не абстрактних тем</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Зміни не відкочуються назад — бо ти проживаєш їх, а не просто чуєш</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.FourthBlock}>
        <div className={styles.Container2}>
          <h2 className={styles.FourthTitle}>4 тижні — 4 кроки до себе</h2>
          <div className={styles.WeekList}>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>01</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>БАЧУ — Де я живу не своїм життям?</h3>
                <p className={styles.WeekText}>Чесно подивитись на себе — де ти підлаштовуєшся, терпиш, вибираєш не себе. Розбираємо чужі сценарії, голоси і програми. Звідки вони взялись — і чому повторюються</p>
              </div>
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>02</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ВІДЧУВАЮ — Повернення в тіло і свою природу</h3>
                <p className={styles.WeekText}>Коли ти перестаєш жити тільки в голові — починаєш відчувати, що тобі підходить. Працюємо з тілом, енергією, циклом. З'являється смак до життя — не як думка, а як справжнє відчуття</p>
              </div>
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>03</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ЦІНУЮ — Своє місце. Свої бажання. Себе.</h3>
                <p className={styles.WeekText}>Ти перестаєш дивитись на себе крізь призму «недостатньо». Розбираємо порівняння, знецінення, страх бути собою. З'являється внутрішня опора — і відчуття «я маю право»</p>
              </div>
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>04</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ЖИВУ — Це вже не про розуміння. Це про стан.</h3>
                <p className={styles.WeekText}>Збираємо всі зміни в одну систему і закріплюємо нову точку. Ти — в центрі свого життя. Легко. По-жіночому. В кайф</p>
              </div>
            </div>
          </div>
          <p className={styles.WeekFooter}>Щотижня: 2 записаних уроки · 1 практика · особистий або груповий дзвінок</p>
        </div>
      </div>

      <div className={styles.FifthBlock}>
        <div className={styles.Container2}>
          <div className={styles.FifthContent}>
            <h2 className={styles.FifthTitle}>Через 4 тижні ти помітиш різницю</h2>
            <p className={styles.FifthSub}>Не «стала продуктивнішою» і не «нарешті зрозуміла себе». Щось інше — тихіше і глибше:</p>
            <div className={styles.ResultList}>
              <p className={styles.ResultItem}>— Ти бачиш, де жила на автопілоті і більше не хочеш так</p>
              <p className={styles.ResultItem}>— Ти відчуваєш своє тіло і довіряєш йому</p>
              <p className={styles.ResultItem}>— Ти знаєш, чого хочеш і більше не соромишся цього</p>
              <p className={styles.ResultItem}>— Ти перестаєш себе контролювати і починаєш собі довіряти</p>
              <p className={styles.ResultItem}>— Ти живеш із внутрішньої опори, а не зі страху чи «так треба»</p>
              <p className={styles.ResultItem}>— Життя перестає бути схожим на боротьбу</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SixthBlock}>
        <div className={styles.Container}>
          <h2 className={styles.SixthTitle}>Обери свій формат участі</h2>
          <div className={styles.TariffGrid}>

            <div className={styles.TariffCard}>
              <div className={styles.TariffTop}>
                <span className={styles.TariffIcon}>🤍</span>
                <span className={styles.TariffName}>Light</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$99</span>
                <span className={styles.OldPrice}>$119</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче пройти у своєму темпі</p>
              <p className={styles.TariffFeatures}>Записані уроки + практики</p>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

            <div className={`${styles.TariffCard} ${styles.TariffFeatured}`}>
              <div className={styles.TariffBadge}>Найпопулярніший</div>
              <div className={styles.TariffTop}>
                <span className={styles.TariffIcon}>🩵</span>
                <span className={styles.TariffName}>Flow</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$199</span>
                <span className={styles.OldPrice}>$219</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче глибини і підтримки</p>
              <p className={styles.TariffFeatures}>Уроки + практики + щотижневий груповий дзвінок + чат + бонусні подкасти</p>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

            <div className={styles.TariffCard}>
              <div className={styles.TariffTop}>
                <span className={styles.TariffIcon}>💙</span>
                <span className={styles.TariffName}>Soul</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$799</span>
                <span className={styles.OldPrice}>$849</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче максимальної трансформації</p>
              <p className={styles.TariffFeatures}>Все з Flow + особисті дзвінки 1×1 + нумерологічна карта + підтримка в чаті зі мною</p>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

          </div>
          <p className={styles.TariffFooter}>Розстрочка 0% на 3 платежі — Монобанк, АБанк · Early bird: тільки перші 20 учасниць</p>
        </div>
      </div>

      <div className={styles.AuthorBlock}>
        <div className={styles.Container}>
          <div className={styles.AuthorCollage}>

            <div className={styles.AuthorPhoto1} style={{backgroundImage: "url('/IMG_9074.PNG')"}}></div>
            <div className={styles.AuthorPhoto2} style={{backgroundImage: "url('/IMG_9027.PNG')"}}></div>
            <div className={styles.AuthorPhoto3} style={{backgroundImage: "url('/IMG_2998.JPEG')"}}></div>
            <div className={styles.AuthorPhoto4} style={{backgroundImage: "url('/IMG_2997.JPEG')"}}></div>

            <div className={styles.AuthorTextBox1}>
              <h2 className={styles.AuthorName}>Привіт,<br/>я Маша</h2>
              <p className={styles.AuthorDesc}>Я знаю, як це — коли зовні все є, а зсередини порожньо. Коли живеш «правильно», але десь глибоко відчуваєш: це не моє життя</p>
            </div>

            <div className={styles.AuthorTextBox2}>
              <p className={styles.AuthorDesc}>Я пройшла свій шлях — через стосунки, де вибирала не себе, через переїзди і перезавантаження. Жіночість — це не те, що треба здобути. Це те, що треба просто перестати в собі душити</p>
              <p className={styles.AuthorRole}>нумеролог · ментор · людина, яка дивиться на життя легко</p>
            </div>

          </div>
        </div>
      </div>

      <Reviews />

      <FAQ />

      <div className={styles.ClosingBlock}>
        <div className={styles.ClosingContainer}>
          <p className={styles.ClosingText}>
            Якщо всередині є відчуття<br />
            <em>«так, це про мене»</em> —<br />
            довірся йому
          </p>
          <p className={styles.ClosingSubText}>
            Це і є той момент, коли ти вибираєш себе.<br />
            Не «потім, коли буде час». Прямо зараз
          </p>
          <button className={styles.ClosingBtn}>Хочу на курс →</button>
        </div>
      </div> 
    </>
  );
}
