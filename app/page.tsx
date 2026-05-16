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
            4-тижневий простір для жінок, які хочуть вийти з постійного контролю, тривоги та життя «на автоматі», і повернути контакт із собою, тілом, бажаннями, жіночністю та своєю внутрішньою живістю
          </div>

          <button className={styles.CTAButton}>
            Хочу на курс →
          </button>
        </div>
      </div>

      <div className={styles.SecondBlock}>
        <div className={styles.Container}>
          <div className={styles.StartBlock}>
            <h2 className={styles.MainBlockSec}>ALIVE створений для тебе, якщо…</h2>
            <div className={styles.TezaList}>
              <p className={styles.Teza}>Ти втомилась жити «на автоматі» і хочеш знову відчути смак до життя, а не просто закривати задачі день за днем</p>
              <p className={styles.Teza}>Ти багато думаєш, аналізуєш, контролюєш, але всередині все одно є відчуття порожнечі й відключеності від себе</p>
              <p className={styles.Teza}>Ти ніби знаєш, чого хочеш, але страхи, сумніви й внутрішні програми постійно зупиняють тебе</p>
              <p className={styles.Teza}>Ти хочеш навчитись чути себе, а не жити лише через «треба», чужі очікування й виживання</p>
              <p className={styles.Teza}>Тобі важко розслаблятись, проявлятись, довіряти собі, своєму тілу, своїм бажанням і своїй жіночій природі</p>
              <p className={styles.Teza}>Ти хочеш повернути контакт зі своїм тілом, зрозуміти його сигнали, цикл, енергію та перестати воювати із собою</p>
              <p className={styles.Teza}>Ти втомилась бути «зручною», сильною для всіх і постійно все тримати під контролем</p>
              <p className={styles.Teza}>Ти відчуваєш, що не можеш повністю реалізуватись, ніби постійно гальмуєш сама себе, зливаєш енергію або живеш не своєю дорогою</p>
              <p className={styles.Teza}>Ти хочеш вийти з стану, де гроші даються через виснаження, тривогу, контроль і постійне «треба», а не через внутрішню опору та контакт із собою</p>
              <p className={styles.Teza}>Ти відчуваєш, що твій стан, самоцінність і контакт із собою напряму впливають на гроші, реалізацію, проявленість і те, скільки ти дозволяєш собі мати</p>
              <p className={styles.Teza}>Ти хочеш перестати обирати чоловіків із болю, страху самотності чи потреби заслужити любов</p>
              <p className={styles.Teza}>Ти хочеш повернути собі чуттєвість, живість, внутрішній вогонь і стан, коли тобі знову цікаво жити</p>
              <p className={styles.Teza}>Ти відчуваєш, що десь глибоко є справжня ти: жива, вільна, справжня, але ніби втратила з нею контакт і хочеш його повернути. </p>
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
          <img src="/IMG_2995.JPEG" alt="" />
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
                ALIVE – це про повернення, життя, енергію, бажання, проявлення, впевненість, щастя, любов, реалізацію через контакт з собою та своєю істинною жіночою суттю
              </p>
              <p className={styles.ThirdText}>
                Тут не буде гонки за «ідеальною версією себе». Ми підемо в інший бік – до себе. Щоб створити міцний фундамент на все життя.
              </p>
            </div>

            <div className={styles.CardsRow}>
              <div className={styles.Card}>
                <p className={styles.CardText}>Дві лекції на тиждень (до 30 хвилин), подкасти та практики – без перевантаження та сухих знань; слухай в своєму темпі</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Комплексний підхід через тіло, душу та розум – не просто інформація, а практичні знання, які ти одразу впроваджуєш в життя та спостерігаєш зміни</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>Чат та живі Zoom-зустрічі щотижня на 2 тарифі – для підтримки, розборів і глибшої трансформації</p>
              </div>
              <div className={styles.Card}>
                <p className={styles.CardText}>4 тижні глибокої роботи із собою, своїм тілом, станом, бажаннями та життям без відкату, бо тепер ти не просто знаєш себе, а й відчуваєш  </p>
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
                <p className={styles.WeekText}>На першому тижні будемо розбирати:</p>
                <ul className={styles.WeekList}>
                  <li>внутрішні конфлікти та сценарії</li>
                  <li>страх бути собою</li>
                  <li>чужі установки, ролі та програми: як вийти з цих обмежень</li>
                  <li>як повернути контакт із собою справжньою</li>
                </ul>
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
                <p className={styles.WeekText}>На другому тижні ми будемо говорити про:</p>
                <ul className={styles.WeekList}>
                  <li>жіночий цикл і стан жінки</li>
                  <li>зв’язок тіла та емоцій</li>
                  <li>куди зливається твоя енергія та ресурс</li>
                  <li>чому зникає бажання жити, хотіти й відчувати</li>
                  <li>жіночу магнетичність, чуттєвість, внутрішній ресурс</li>
                  <li>тіньові сторони та вампирізм </li>
                </ul>
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
                <p className={styles.WeekText}>На першому тижні будемо розбирати:</p>
                <ul className={styles.WeekList}>
                  <li>чому ти знецінюєш себе</li>
                  <li>порівняння та конкуренція з жінками: як з цього вийти</li>
                  <li>самоцінність та внутрішня опора, впевненість в собі</li>
                  <li>відчуття «достатку»</li>
                  <li>бажання, які ти собі не дозволяєш</li>
                  <li>стосунки з чоловіками, кордони та вибір себе</li>
                </ul>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                  Ти перестаєш дивитись на себе через призму «недостатньо». З’являється внутрішня опора, ясність у бажаннях і відчуття, що ти можеш будувати життя навколо себе, а не навколо дефіцитів
                </p>
              </div> 
            </div>
            <div className={styles.WeekItem}>
              <span className={styles.WeekNum}>04</span>
              <div className={styles.WeekContent}>
                <h3 className={styles.WeekName}>ЖИВУ – нова внутрішня точка та життя, яке відчувається твоїм, інтеграція змін</h3>
                <p className={styles.WeekText}>Ми будемо працювати над:</p>
                <ul className={styles.WeekList}>
                  <li>довірою до себе та своїх рішень</li>
                  <li>звʼязок з Богом: ти не одна</li>
                  <li>переходом на іншу гілку ймовірності</li>
                  <li>станом, у якому ти більше не виживаєш, а живеш</li>
                  <li>створенням своєї нової внутрішньої реальності</li>
                  <li>маніфестація та бажання по-жіночому</li>
                </ul>
                <p className={styles.WeekResult}>Результат тижня</p>
                <p className={styles.WeekText}>
                  Ти виходиш із курсу з відчуттям внутрішньої ясності, контакту із собою та розумінням, як будувати життя, у якому є ти, твої бажання, твій стан і твоя опора. Життя відчувається легко, спокійно та по-справжньому твоїм
                </p>
              </div>
            </div>
          </div>
          <p className={styles.WeekFooter}>Щотижня: 2 записаних уроки · 1 практика • 1 подкаст •додаткові матеріали · особистий або груповий дзвінок</p>
        </div>
      </div>

      <div className={styles.FifthBlock}>
        <div className={styles.Container2}>
          <div className={styles.FifthContent}>
            <h2 className={styles.FifthTitle}>Через 4 тижні ти помітиш зміни</h2>
            <p className={styles.FifthSub}>Не тому, що ти стала «ідеальнішою», а тому що зʼєдналась з собою</p>
            <div className={styles.ResultList}>
              <p className={styles.ResultItem}>— Ти перестаєш прокидатись із постійною тривогою, напругою та відчуттям, що життя проходить повз тебе</p>
              <p className={styles.ResultItem}>— Ти починаєш краще чути себе і більше не губишся в чужих думках, порадах та очікуваннях</p>
              <p className={styles.ResultItem}>— Ти розумієш, чого насправді хочеш: у стосунках, реалізації, грошах і своєму житті</p>
              <p className={styles.ResultItem}>— У тебе з’являється більше енергії, бо ти перестаєш постійно жити через контроль, перенапругу та внутрішню боротьбу</p>
              <p className={styles.ResultItem}>— Ти перестаєш погоджуватись на те, що давно не робить тебе щасливою</p>
              <p className={styles.ResultItem}>— Ти більше не живеш у стані «зі мною щось не так». З’являється внутрішня опора, спокій і відчуття: «я можу довіряти собі»</p>
              <p className={styles.ResultItem}>— Ти починаєш проявлятись, говорити про себе, свої бажання та кордони без страху осуду</p>
              <p className={styles.ResultItem}>— Тіло перестає бути ворогом, який треба контролювати. Ти починаєш його чути, відчувати і жити в контакті з ним</p>
              <p className={styles.ResultItem}>— З’являється відчуття, що ти повертаєш свою справжню жіночу силу </p>
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
              <p className={styles.TariffDesc}>Для тих, хто хоче пройти цей шлях у своєму темпі, але глибоко та ефективно</p>
              <p className={styles.TariffFeatures}>4 модулі курсу (БАЧУ • ВІДЧУВАЮ • ЦІНУЮ • ЖИВУ) + 8 записаних уроків під тему модулю + практики до кожного модуля для інтеграції змін у життя + PDF-гайди та чек-листи + доступ до матеріалів – 2 місяці</p>
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
              <p className={styles.TariffDesc}>Для тих, хто хоче не просто пройти навчання, а прожити глибоку внутрішню трансформацію з підтримкою та простором жінок поруч</p>
              <p className={styles.TariffFeatures}>Усе з SELF + аудіо-подкасти на додаткові теми для глибшого проживання та стану (рід та звʼязок з мамою, 4 жіночі Архетипи, аудіо-практика «повернення чуттєвості», та інші) + 4 групові Zoom-зустрічі зі мною раз на тиждень з розборами ваших ситуацій + закритий чат учасниць із підтримкою та атмосферою простору + бонусні подкасти та додаткові матеріали + відповіді на запитання під час курсу + першим 20 учасницям подарунок – інтенсив «7 кодів жіночої сили» або «код тілесної свободи» на вибір + доступ до матеріалів – 4 місяці</p>
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
              <p className={styles.TariffFeatures}>Усе з ALIVE + 4 особисті Zoom-сесії 1:1 зі мною + індивідуальний розбір твого запиту, сценаріїв та життєвої ситуації + персональний розбір матриці долі за вашою датою народження + особистий супровід і підтримка в чаті + персональні рекомендації та практики саме під тебе + доступ до всіх матеріалів курсу – назавжди + інтенсив «7 кодів жіночої сили» + інтенсив «Шлях до себе» + інтенсив «Код тілесної свободи» + майбутні оновлення курсу безкоштовно</p>
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
