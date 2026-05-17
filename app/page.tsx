import styles from './page.module.css'
import { Reviews } from './Reviews';
import { FAQ } from './FAQ';

export default function Home() {
  return (
    <>
      <div className={styles.FirstBlock}>
        <div className={styles.Container}>
          <div className={styles.UpperTextFirst}>
            Настав час повернутись до себе
          </div>

          <div className={styles.MainText}>
            ALIVE
          </div>

          <div className={styles.SubText}>
            4-тижневий простір для жінок, які хочуть вийти з постійного контролю, тривоги та життя «на автоматі», і повернути контакт із собою, тілом, бажаннями та жіночністю
          </div>

          <button className={styles.CTAButton}>
            Хочу на курс →
          </button>
        </div>
      </div>

      <div className={styles.SecondBlock}>
        <div className={styles.Container}>
          <div className={styles.StartBlock}>
            <h2 className={styles.MainBlockSec}>ALIVE для тебе, якщо…</h2>
            <div className={styles.TezaList}>
              <p className={styles.Teza}>Ти втомилась жити «на автоматі» і хочеш знову відчути смак до життя</p>
              <p className={styles.Teza}>Ти багато думаєш, аналізуєш, контролюєш, але всередині все одно є відчуття порожнечі</p>
              <p className={styles.Teza}>Ти знаєш, чого хочеш, але страхи, сумніви й внутрішні програми постійно зупиняють тебе</p>
              <p className={styles.Teza}>Тобі важко розслаблятись, проявлятись, довіряти собі, своєму тілу та своїм бажанням</p>
              <p className={styles.Teza}>Ти хочеш повернути контакт зі своїм тілом, зрозуміти його сигнали, цикл, енергію</p>
              <p className={styles.Teza}>Ти втомилась бути «зручною», сильною для всіх і постійно все тримати під контролем</p>
              <p className={styles.Teza}>Ти відчуваєш, ніби постійно гальмуєш сама себе, зливаєш енергію або живеш не своєю дорогою</p>
              <p className={styles.Teza}>Ти хочеш вийти з стану, де гроші даються через виснаження, тривогу, контроль і постійне «треба»</p>
              <p className={styles.TezaAccent}>Якщо тобі відгукуються навіть декілька пунктів – ALIVE створений саме для тебе 🌙</p>
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
          <img src="/IMG_3763.jpg" alt="" />
        </div>
      </div>

      <div className={styles.ThirdBlock}>
        <div className={styles.Container}>
          <div className={styles.ThirdContent}>
            <h2 className={styles.ThirdTitle}>
              Це не ще один курс про те, як  <br />
              <span>бути «кращою»</span>
            </h2>
            <div className={styles.ThirdTitleRow}>
              <p className={styles.ThirdText}>
                ALIVE – це про повернення себе. Час відчути справжню живість та енергію життя, замість безкінечних трансформацій
              </p>
              <p className={styles.ThirdText}>
                Тут не буде гонки за «ідеальною версією себе», бо проблема ніколи не була в тому, що ти недостатня
              </p>
            </div>

            <div className={styles.CardsRow}>
              <div className={styles.Card}>
                <p className={styles.CardText}>Дві лекції на тиждень (до 30 хвилин), подкасти та практики – без перевантаження для тебе</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Комплексний підхід через тіло, душу та розум – практичні знання, які ти одразу впроваджуєш в життя</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Чат та онлайн зустрічі щотижня на 2 тарифі – для підтримки, розборів і глибшої трансформації</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>4 тижні роботи із собою, своїм тілом, станом і бажаннями без відкату, бо тепер ти не тільки знаєш себе, а й відчуваєш</p>
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
                <h3 className={styles.WeekName}>БАЧУ — контакт із собою починається з чесності</h3>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                  Ти починаєш чітко бачити, що саме забирало твою енергію, чому повторювались одні й ті самі ситуації та де ти жила не з контакту із собою, а зі страху й автоматичних програм
                </p>
              </div>
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>02</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ВІДЧУВАЮ – повернення в тіло, жіночність та чуттєвість</h3>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                Повертається контакт із тілом, чуттєвість, внутрішній ресурс і відчуття життя зсередини. Відновлюється твоя природня енергія, сила та жіночність. Зʼявляється розуміння жіночого організму та вплив циклу
                </p>
              </div>
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>03</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ЦІНУЮ – самоцінність, бажання та право жити своє життя</h3>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                  Ти перестаєш дивитись на себе через призму «недостатньо». З’являється внутрішня опора, ясність у бажаннях і відчуття, що ти можеш будувати життя навколо себе, а не навколо дефіцитів
                </p>
              </div> 
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>04</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ЖИВУ – нове внутрішнє життя, яке відчувається твоїм, інтеграція змін</h3>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                  Ти виходиш із курсу з відчуттям внутрішньої ясності, контакту із собою та розумінням, як будувати життя, у якому є ти. Перехід на іншу гілку ймовірності та укріплений звʼязок з Богом, Всесвітом. Життя відчувається легко, спокійно та по-справжньому твоїм
                </p>
              </div>
            </div>
          </div>
          <p className={styles.WeekFooter}>Щотижня: • 2 записаних уроки • 1 практика • 1 подкаст • 1 груповий або особистий дзвінок з розборами • додаткові матеріали</p>
        </div>
      </div>

      <div className={styles.FifthBlock}>
        <div className={styles.Container2}>
          <div className={styles.FifthContent}>
            <h2 className={styles.FifthTitle}>Через 4 тижні ти помітиш зміни</h2>
            <p className={styles.FifthSub}>Не тому, що ти стала «ідеальнішою», а тому що зʼєдналась з собою</p>
            <div className={styles.ResultList}>
              <p className={styles.ResultItem}>— Ти перестаєш прокидатись із постійною тривогою та напругою</p>
              <p className={styles.ResultItem}>— Ти починаєш краще чути себе і більше не губишся в чужих думках</p>
              <p className={styles.ResultItem}>— Ти розумієш, чого насправді хочеш: у стосунках, реалізації, грошах і житті</p>
              <p className={styles.ResultItem}>— Ти перестаєш постійно жити через контроль, перенапругу та внутрішню боротьбу</p>
              <p className={styles.ResultItem}>— Ти перестаєш погоджуватись на те, що давно не робить тебе щасливою</p>
              <p className={styles.ResultItem}>— Ти починаєш проявлятись, говорити про себе, свої бажання та кордони</p>
              <p className={styles.ResultItem}>— З’являється відчуття, що ти повертаєш свою справжню жіночу силу</p>
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
                <span className={styles.TariffName}>SELF</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$88</span>
                <span className={styles.OldPrice}>$139</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче пройти цей шлях у своєму темпі</p>
              <div className={styles.TariffFeatures}>
                <div className={styles.TariffFeature}>4 модулі курсу</div>
                <div className={styles.TariffFeature}>8 записаних уроків</div>
                <div className={styles.TariffFeature}>Практики до кожного модуля</div>
                <div className={styles.TariffFeature}>PDF-гайди та чек-листи</div>
                <div className={styles.TariffFeature}>Доступ до матеріалів — 2 місяці</div>
              </div>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

            <div className={`${styles.TariffCard} ${styles.TariffFeatured}`}>
              <div className={styles.TariffBadge}>Найпопулярніший</div>
              <div className={styles.TariffTop}>
                <span className={styles.TariffIcon}>🩵</span>
                <span className={styles.TariffName}>ALIVE</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$187</span>
                <span className={styles.OldPrice}>$249</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче прожити глибоку внутрішню трансформацію з підтримкою</p>
              <div className={styles.TariffFeatures}>
                <div className={styles.TariffFeature}>Усе з SELF</div>
                <div className={styles.TariffFeature}>Аудіо-подкасти на додаткові теми</div>
                <div className={styles.TariffFeature}>4 групові онлайн-зустрічі раз на тиждень</div>
                <div className={styles.TariffFeature}>Закритий чат учасниць із моєю підтримкою</div>
                <div className={styles.TariffFeature}>Розбори ваших ситуацій</div>
                <div className={styles.TariffFeature}>Доступ до матеріалів – 4 місяці</div>
              </div>
              <p className={styles.TariffBonus}>Перші 10 учасниць додатково отримують доступ до 7-денного інтенсиву</p>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

            <div className={styles.TariffCard}>
              <div className={styles.TariffTop}>
                <span className={styles.TariffIcon}>💙</span>
                <span className={styles.TariffName}>Soul</span>
              </div>
              <div className={styles.TariffPrice}>
                <span className={styles.Price}>$799</span>
                <span className={styles.OldPrice}>$1299</span>
              </div>
              <p className={styles.TariffDesc}>Для тих, хто хоче максимально глибоку, персональну роботу зі мною та індивідуальний супровід</p>
              <div className={styles.TariffFeatures}>
                <div className={styles.TariffFeature}>Усе з ALIVE</div>
                <div className={styles.TariffFeature}>4 особисті онлайн-сесії</div>
                <div className={styles.TariffFeature}>Персональний розбір матриці долі</div>
                <div className={styles.TariffFeature}>Особистий супровід</div>
                <div className={styles.TariffFeature}>Інтенсив «7 кодів жіночої сили»</div>
                <div className={styles.TariffFeature}>Інтенсив «Шлях до себе»</div>
                <div className={styles.TariffFeature}>Інтенсив «Код тілесної свободи»</div>
                <div className={styles.TariffFeature}>Доступ до матеріалів — назавжди</div>
              </div>
              <button className={styles.TariffBtn}>Хочу на курс →</button>
            </div>

          </div>
          <p className={styles.TariffFooter}>Розстрочка 0% на 3 платежі — Монобанк, АБанк · Early bird: тільки перші 20 учасниць</p>
        </div>
      </div>

      <div className={styles.AuthorBlock}>
        <div className={styles.Container}>
          <div className={styles.AuthorCollage}>

            <div className={styles.AuthorPhoto1} style={{backgroundImage: "url('/IMG_9074.jpg')"}}></div>
            <div className={styles.AuthorPhoto2} style={{backgroundImage: "url('/IMG_9027.jpg')"}}></div>
            <div className={styles.AuthorPhoto3} style={{backgroundImage: "url('/IMG_2998.JPEG')"}}></div>
            <div className={styles.AuthorPhoto4} style={{backgroundImage: "url('/IMG_2997.JPEG')"}}></div>

            <div className={styles.AuthorTextBox1}>
              <h2 className={styles.AuthorName}>Привіт,<br/>я Маша</h2>
              <p className={styles.AuthorDesc}>Нумеролог, ментор та жінка, яка пройшла шлях від страхів, знецінення та втрати себе – до глибокого контакту із собою, своїми бажаннями, жіночністю та життям, яке справді хочеться жити</p>
            </div>

            <div className={styles.AuthorTextBox2}>
              <p className={styles.AuthorDesc}>Вже понад 4 роки я працюю з жінками через стан, самоцінність, тіло, мислення та внутрішню трансформацію. За цей час 500+ жінок пройшли через мої консультації, продукти та трансформаційні програми.</p>
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
