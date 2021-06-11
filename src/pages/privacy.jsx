import React from 'react';

import '../styles/pages/privacy.scss'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

import Person from '../utils/person.jsx';
import Menu from './components/menu.jsx';

function Body() {
      let person = new Person();

      return (
            <div style={{ backgroundColor: person.getThemeColors().headerColorPrimary.backgroundColor, color: person.getThemeColors().text.color }} id="body">
                  <h1 style={person.getThemeColors().text}>Политика конфиденциальности персональных данных</h1>
                  <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в
		отношении всей информации, которую сайт <b style={person.getThemeColors().text}>MapMemory</b>, (далее – MapMemory) расположенный на
		доменном имени <b style={person.getThemeColors().text}>MapMemory.com</b> (а также его субдоменах), может получить о Пользователе во время использования
		сайта MapMemory.com (а также его субдоменов), его программ и его продуктов.</p>

                  <h2 style={person.getThemeColors().text}>1. Определение терминов</h2>

                  <p>1.1 В настоящей Политике конфиденциальности используются следующие термины:</p>

                  <p>1.1.1. «<b style={person.getThemeColors().text}>Администрация сайта</b>» (далее – Администрация) – уполномоченные сотрудники
		на управление сайтом <b style={person.getThemeColors().text}>MapMemory</b>,
		которые организуют и (или) осуществляют обработку персональных данных, а также определяет цели обработки персональных
		данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</p>

                  <p>1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному, или определяемому
		физическому лицу (субъекту персональных данных).</p>

                  <p>1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых
                  с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись,
                  систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
		(распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>

                  <p>1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ
                  к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или
		наличия иного законного основания.</p>

                  <p>1.1.5. «Сайт <b style={person.getThemeColors().text}> MapMemory</b>» - это совокупность связанных между собой веб-страниц, размещенных в сети Интернет по уникальному
		адресу (URL): <b style={person.getThemeColors().text}>MapMemory.com</b>, а также его субдоменах.</p>

                  <p>1.1.6. «Субдомены»  - это страницы или совокупность страниц, расположенные на доменах третьего уровня,
                  принадлежащие сайту MapMemory, а также другие временные страницы, внизу который указана контактная
		информация Администрации</p>

                  <p>1.1.5. «Пользователь сайта <b style={person.getThemeColors().text}>MapMemory</b>» (далее Пользователь) – лицо, имеющее доступ
		к сайту <b style={person.getThemeColors().text}>MapMemory</b>, посредством сети Интернет
		и использующее информацию, материалы и продукты сайта <b style={person.getThemeColors().text}>MapMemory</b>.</p>

                  <p>1.1.7. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя,
                  который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу
		соответствующего сайта.</p>

                  <p>1.1.8. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, через который Пользователь получает доступ на
		MapMemory.</p>

                  <h2 style={person.getThemeColors().text}>2. Общие положения</h2>
                  <p>2.1. Использование сайта MapMemory Пользователем означает согласие с настоящей Политикой
		конфиденциальности и условиями обработки персональных данных Пользователя.</p>

                  <p>2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование
		сайта MapMemory .</p>

                  <p>2.3. Настоящая Политика конфиденциальности применяется к сайту MapMemory.
                  MapMemory не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь
		может перейти по ссылкам, доступным на сайте MapMemory.</p>

                  <p>2.4. Администрация не проверяет достоверность персональных данных, предоставляемых Пользователем.</p>

                  <h2 style={person.getThemeColors().text}>3. Предмет политики конфиденциальности</h2>

                  <p>3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению и обеспечению
                  режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации при
		регистрации на сайте MapMemory или при подписке на информационную e-mail рассылку.</p>

                  <p>3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения форм на сайте MapMemory и включают в себя следующую информацию:</p>
                  <p>3.2.1. фамилию, имя, отчество Пользователя;</p>
                  <p>3.2.2. контактный телефон Пользователя;</p>
                  <p>3.2.3. адрес электронной почты (e-mail)</p>
                  <p>3.2.4.место жительство Пользователя(при необходимости)</p >
                  <p>3.2.5. фотографию (при необходимости)</p>

                  <p>3.3. MapMemory защищает Данные, которые автоматически передаются при посещении страниц:
                  - IP адрес;
                  - информация из cookies;
                  - информация о браузере
                  - время доступа;
            - реферер (адрес предыдущей страницы).</p>

                  <p>3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта MapMemory, требующим
		авторизации.</p>

                  <p>3.3.2. MapMemory осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация
		используется с целью предотвращения, выявления и решения технических проблем.</p>
                  <p>3.4. Любая иная персональная информация неоговоренная выше (история посещения, используемые браузеры, операционные
                  системы и т.д.) подлежит надежному хранению и нераспространению, за исключением случаев,
		предусмотренных в п.п. 5.2. настоящей Политики конфиденциальности.</p>

                  <h2 style={person.getThemeColors().text}>4. Цели сбора персональной информации пользователя</h2>

                  <p>4.1. Персональные данные Пользователя Администрация может использовать в целях:</p>
                  <p>4.1.1. Идентификации Пользователя, зарегистрированного на сайте MapMemory для его дальнейшей авторизации.</p>
                  <p>4.1.2. Предоставления Пользователю доступа к персонализированным данным сайта MapMemory.</p>
                  <p>4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования
            сайта MapMemory, обработки запросов и заявок от Пользователя.</p>
                  <p>4.1.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.</p>
                  <p>4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.</p>
                  <p>4.1.6. Создания учетной записи для использования частей сайта MapMemory, если Пользователь дал согласие на создание учетной записи.</p>
                  <p>4.1.7. Уведомления Пользователя по электронной почте.</p>
                  <p>4.1.8. Предоставления Пользователю эффективной технической поддержки при возникновении проблем, связанных с использованием сайта MapMemory.</p>
                  <p>4.1.9. Предоставления Пользователю с его согласия специальных предложений, новостной рассылки и иных сведений от имени
		сайта MapMemory.</p>

                  <h2 style={person.getThemeColors().text}>5. Способы и сроки обработки персональной информации</h2>

                  <p>5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в
                  том числе в информационных системах персональных данных с использованием средств автоматизации или без использования
		таких средств.</p>
                  <p>5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской
		Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.</p>
                  <p>5.3. При утрате или разглашении персональных данных Администрация вправе не информировать Пользователя об утрате или
		разглашении персональных данных.</p>
                  <p>5.4. Администрация принимает необходимые организационные и технические меры для защиты персональной информации
                  Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения,
		а также от иных неправомерных действий третьих лиц.</p>
                  <p>5.5. Администрация совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных
		отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.</p>

                  <h2 style={person.getThemeColors().text}>6. Права и обязанности сторон</h2>

                  <p><b style={person.getThemeColors().text}>6.1. Пользователь вправе:</b></p>
                  <p>6.1.1. Принимать свободное решение о предоставлении своих персональных данных, необходимых для использования
		сайта MapMemory, и давать согласие на их обработку.</p>

                  <p>6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.</p>

                  <p>6.1.3. Пользователь имеет право на получение у Администрации информации, касающейся обработки его персональных данных,
                  если такое право не ограничено в соответствии с федеральными законами. Пользователь вправе требовать от Администрации
                  уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными,
                  устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также
		принимать предусмотренные законом меры по защите своих прав. Для этого достаточно уведомить Администрацию по указаному E-mail адресу.</p>

                  <p><b style={person.getThemeColors().text}>6.2. Администрация обязана:</b></p>
                  <p>6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики
		конфиденциальности.</p>

                  <p>6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного
                  разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными
		способами переданных персональных данных Пользователя, за исключением п.п. 5.2. настоящей Политики Конфиденциальности.</p>

                  <p>6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку,
		обычно используемого для защиты такого рода информации в существующем деловом обороте.</p>

                  <p>6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента
                  обращения или запроса Пользователя, или его законного представителя либо уполномоченного органа по защите прав
                  субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или
		неправомерных действий.</p>

                  <h2 style={person.getThemeColors().text}>Ответственность сторон</h2>
                  <p>7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за убытки,
                  понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством
		Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2. и 7.2. настоящей Политики Конфиденциальности.</p>

                  <p>7.2. В случае утраты или разглашения Конфиденциальной информации Администрация не несёт ответственность,
                  если данная конфиденциальная информация:</p>
                  <p>7.2.1. Стала публичным достоянием до её утраты или разглашения.</p>
                  <p>7.2.2. Была получена от третьей стороны до момента её получения Администрацией Ресурса.</p>
                  <p>7.2.3. Была разглашена с согласия Пользователя.</p>

                  <p>7.3. Пользователь несет полную ответственность за соблюдение требований законодательства РФ, в том числе законов о
                  рекламе, о защите авторских и смежных прав, об охране товарных знаков и знаков обслуживания, но не ограничиваясь
		перечисленным, включая полную ответственность за содержание и форму материалов.</p>

                  <p>7.4. Пользователь признает, что ответственность за любую информацию (в том числе, но не ограничиваясь: файлы с данными,
                  тексты и т. д.), к которой он может иметь доступ как к части сайта MapMemory, несет лицо, предоставившее
		такую информацию.</p>

                  <p>7.5. Пользователь соглашается, что информация, предоставленная ему как часть сайта MapMemory, может
                  являться объектом интеллектуальной собственности, права на который защищены и принадлежат другим Пользователям,
                  партнерам или рекламодателям, которые размещают такую информацию на сайте MapMemory.
                  Пользователь не вправе вносить изменения, передавать в аренду, передавать на условиях займа, продавать, распространять
                  или создавать производные работы на основе такого Содержания (полностью или в части), за исключением случаев, когда такие
		действия были письменно прямо разрешены собственниками такого Содержания в соответствии с условиями отдельного соглашения.</p>

                  <p>7.6. В отношение текстовых материалов (статей, публикаций, находящихся в свободном публичном доступе на
                  сайте MapMemory) допускается их распространение при условии, что будет дана ссылка
		на MapMemory.</p>

                  <p>7.7. Администрация не несет ответственности перед Пользователем за любой убыток или ущерб, понесенный Пользователем
                  в результате удаления, сбоя или невозможности сохранения какого-либо Содержания и иных коммуникационных данных,
		содержащихся на сайте MapMemory или передаваемых через него.</p>

                  <p>7.8. Администрация не несет ответственности за любые прямые или косвенные убытки, произошедшие из-за: использования
                  либо невозможности использования сайта, либо отдельных сервисов; несанкционированного доступа к коммуникациям
		Пользователя; заявления или поведение любого третьего лица на сайте.</p>

                  <p>7.9. Администрация не несет ответственность за какую-либо информацию, размещенную пользователем на
                  сайте MapMemory, включая, но не ограничиваясь: информацию, защищенную авторским правом, без прямого
		согласия владельца авторского права.</p>

                  <h2 style={person.getThemeColors().text}>8. Разрешение споров</h2>

                  <p>8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем и Администрацией, обязательным
                  является предъявление претензии (письменного предложения или предложения в электронном виде о добровольном урегулировании
		спора).</p>

                  <p>8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно или в электронном виде
		уведомляет заявителя претензии о результатах рассмотрения претензии.</p>

                  <p>8.3. При не достижении соглашения спор будет передан на рассмотрение Арбитражного суда г. Минск.</p>

                  <p>8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией
		применяется действующее законодательство Российской Федерации.</p>

                  <h2 style={person.getThemeColors().text}>9. Дополнительные условия</h2>
                  <p>9.1. Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.</p>

                  <p>9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на сайте MapMemory, если
		иное не предусмотрено новой редакцией Политики конфиденциальности.</p>

                  <p>9.3. Все предложения или вопросы касательно настоящей Политики конфиденциальности следует сообщать по
		адресу: mapmemory@protonmail.com</p>

                  <p>9.4. Действующая Политика конфиденциальности размещена на странице по адресу <b>https://MapMemory.com/privacy</b></p>

                  <p>Обновлено: 24 Мая 2021 года</p>
                  <p>ул. Радиальная, 36, г. Минск, 220070, Республика Беларусь</p>
            </div >
      );
}

export default () => {
      return (
            <div id="privacy">
                  <Header />
                  <Menu />
                  <div id="blockScroll">
                        <Body />
                        <Footer />
                  </div>
            </div>
      );
};