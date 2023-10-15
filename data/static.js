import { BsPlayFill, BsQuestionCircle } from 'react-icons/bs'
import { RiSettings4Line } from 'react-icons/ri'

export const categoriesArr = [
  {
    name: { ENG: 'Debates', UKR: 'Дебати' },
    id: 101,
    link: 'mode',
    ico: BsPlayFill,
  },
  {
    name: { ENG: 'How to Play', UKR: 'Як грати' },
    id: 102,
    link: 'howto',
    ico: BsQuestionCircle,
  },
  {
    name: { ENG: 'Settings', UKR: 'Налаштування' },
    id: 103,
    link: 'settings',
    ico: RiSettings4Line,
  },
]

export const modeList = [
  {
    name: { ENG: 'Classic', UKR: 'Класичний' },
    description: {
      ENG: 'Hold a debate on a topic of your choice. The standard limit is 1 minute for each participant to speak',
      UKR: 'Проводь дебати на обрану тему. Стандартний ліміт в 1 хвилину для виступу кожного з учасників',
    },
    myid: 'classic',
  },

  {
    name: { ENG: 'My topics', UKR: 'Свої теми' },
    description: {
      ENG: 'You can add your own topics and each round one of the added topics is randomly selected',
      UKR: 'Ви можете додати свої теми і кожного раунду випадковим чином вибирається одна з доданих тем',
    },
    myid: 'custom',
  },
  {
    name: { ENG: 'Random', UKR: 'Випадковий' },
    description: {
      ENG: 'You get the topic, reasons and parties completely randomly',
      UKR: 'Ви отримуєте тему, причини і сторони абсолютно випадково',
    },
    myid: 'random',
  },
]

export const staticMenu = [
  {
    name: { ENG: 'Social issues', UKR: 'Соціальні питання' },
    link: 'social',
    desc: {
      ENG: 'You can discuss topics related to human rights, social justice, equality, etc.',
      UKR: "Можна обговорювати теми, пов'язані з правами людини, соціальною справедливістю, рівністю тощо",
    },
    questions: {
      UKR: [
        'Людей за 60 потрібно відправляти на окремий острів',
        'Коштів не існує, це лише кольорові папірці',
        'Розпочати кожен день зі співу гімну',
        'Заборонити всі шкарпетки, окрім білих',
        "Обов'язкове використанні емодзі в діловій переписці",
        'Заборонити публікувати фото з відпочинку в соціальних мережах',
        'Загальнодоступний парк гігантських інтерактивних тренажерів для дорослих',
        'Заборонити оцінки в навчальних закладах',
        'Тільки посмішки на фото в документах',
        'Окремі рахунки в закладах на побаченні',
        'Знайомитись з новими людьми тільки в караоке',
        'Заборонити фільтри в соціальних мережах',
        'Готувати прецентацію про себе на перше побачення',
        'Заборонити погані новини в медіа',
        'Ввести в школах уроки підготовки до життя без батьків',
        'Офіційно виділити один день на рік для мрій і фантазій',
        'Відмовитись від електронної пошти і перейти на голубів',
        'Створити програму вищої освіти з фокусуванням на чаклунстві',
      ],
      ENG: [
        'People over 60 should be sent to a separate island',
        'Funds do not exist, they are just coloured papers',
        'Start every day with singing the national anthem',
        'Ban all socks except white',
        'Mandatory use of emojis in business correspondence',
        'Ban the publication of photos from holidays on social media',
        'A public park of giant interactive simulators for adults',
        'Ban grades in educational institutions',
        'Only smiles on photos in documents',
        'Separate bills in restaurants on a date',
        'Meet new people only in karaoke',
        'Ban filters on social media',
        'Prepare a presentation about yourself for the first date',
        'Ban bad news in the media',
        'Introduce lessons in schools to prepare for life without parents',
        'Officially set aside one day a year for dreams and fantasies',
        'Give up email and switch to pigeons',
        'Create a higher education programme with a focus on witchcraft',
      ],
    },
  },
  {
    name: { ENG: 'Science and technology', UKR: 'Наука та технології' },
    link: 'science',
    desc: {
      ENG: 'This can include topics about scientific discoveries, the role of technology in society, future prospects, etc',
      UKR: 'Тут можуть бути теми про наукові відкриття, роль технологій у суспільстві, перспективи майбутнього тощо',
    },
    questions: {
      UKR: [
        'Розробити зарядну станцію для зарядки людей енергією',
        'Вигадати машину часу, яка тільки переносить у минуле на 5 хвилин',
        'Вивчити мову дельфінів та заснувати мовний обмін з ними',
        'Створити пристрій для прогнозування майбутнього на основі снів',
        'Запустити школу для навчання собак людської мови',
        'Створити пристрій для вимірювання рівня настрою',
        'Розробити додаток голосування за вибір погоди',
        'Космос впливає на розум користувача смартфона',
        'Експерименти зі створенням гіперінтелектуальних мурах',
        'Штучний інтелект захопить людство',
      ],
      ENG: [
        'Develop a charging station to charge people with energy',
        'To invent a time machine that only takes you back in time for 5 minutes',
        'Learn the language of dolphins and establish a language exchange with them',
        'Create a device for predicting the future based on dreams',
        'Launch a school to teach dogs human language',
        'Create a device for measuring mood levels',
        'Develop a weather voting application',
        'Space influences the mind of a smartphone user',
        'Experiments with the creation of hyperintelligent ants',
        'Artificial intelligence will take over humanity',
      ],
    },
  },
  // {
  //   name: 'Спорт',
  //   link: 'sport',
  //   desc: 'Обговорювати теми про популярні види спорту, роль спорту у здоровому способі життя, спортивні досягнення тощо',
  //   questions: [
  //     'Здоровий спосіб життя це лише модний тренд',
  //     "Футбол це лише спорт з  переслідування м'яча",
  //     '',
  //   ],
  // },
  // {
  //   name: 'Мистецтво та культура',
  //   link: 'art',
  //   desc: 'Теми про вплив мистецтва на суспільство, роль культурних традицій тощо',
  // },
  // {
  //   name: 'Середовище',
  //   link: 'env',
  //   desc: 'Теми про охорону природи, збереження ресурсів, екологічні проблеми тощо',
  // },
  // {
  //   name: 'Глобальні питання',
  //   link: 'global',
  //   desc: 'Обговорення міжнародних стосунків, геополітичних конфліктів, міжнародного співробітництва тощо',
  // },
  // {
  //   name: 'Технології майбутнього',
  //   link: 'tech',
  //   desc: 'Про обіцянки та виклики штучного інтелекту, кібербезпеку, автономні автомобілі тощо',
  // },
  // {
  //   name: 'Етика і мораль',
  //   link: 'moral',
  //   desc: 'Обговорення етичних ділем, важливість дотримання моральних принципів у різних сферах життя тощо',
  //   questions: ['Заборонити співати в душі сумні пісні', ''],
  // },
  // {
  //   name: 'Історія та культура',
  //   link: 'history',
  //   desc: 'Теми про ключові історичні події, роль культурних спадщин у сучасному світі тощо',
  // },
  // {
  //   name: 'Освіта та майбутнє суспільства',
  //   link: 'edu',
  //   desc: 'Теми про роль освіти в розвитку суспільства, сучасні методи навчання, навчальні реформи тощо',
  // },
]

export const randomNames = {
  UKR: [
    'Джедай',
    'Логік',
    'Діалог',
    'Грант',
    'Ідея',
    'Тезис',
    'Супер',
    'Гість',
    'Конф',
    'Битва',
    'Гордість',
    'Думка',
    'Вояка',
    'Зірка',
    'Згода',
    'Сила',
    'Сміх',
    'Раціо',
    'Талан',
    'Хтось',
    'Факт',
    'Геній',
    'Кінь',
    'Борець',
    'Міф',
    'Тест',
    'Лідер',
    'Шанс',
  ],
  ENG: [
    'Jedi',
    'Logic',
    'Dialogue',
    'Grant',
    'Idea',
    'Thesis',
    'Super',
    'Guest',
    'Conf',
    'Battle',
    'Pride',
    'Thought',
    'Soldier',
    'Star',
    'Concord',
    'Strength',
    'Laughter',
    'Ration',
    'Talent',
    'Someone',
    'Fact',
    'Genius',
    'Horse',
    'Fighter',
    'Myth',
    'Test',
    'Leader',
    'Chance',
  ],
}

export const myReasons = {
  UKR: [
    'Кошмари',
    'Магія',
    'Ретельне дослідження',
    'Інтернет меми',
    'Джедаї',
    'Винахідливість',
    'Інтуїція',
    'Часові петлі',
    'Спроба допомогти',
    'Вплив друзів',
    'Змова котів',
    'Караоке ночі',
    'Гіпноз',
    'Фантастичні книги',
    'Контакт з природою',
    'Телепортація',
    "Користь для здоров'я",
    'Традиції',
    'Телепатія',
    'Філософські думки',
    'Жадоба до пригод',
    'Театральна постановка',
    'Експериментальні мурахи',
    'Заклинання',
    'Суспільна підтримка',
    'Вплив медіа',
    'Любов до казок',
    'Міміка',
    'Вчені з майбутнього',
    'Мінімалізм',
  ],
  ENG: [
    'Nightmares',
    'Magic',
    'Thorough research',
    'Internet memes',
    'Jedi',
    'Ingenuity',
    'Intuition',
    'Time loops',
    'Trying to help',
    'The influence of friends',
    'Cat conspiracy',
    'Karaoke nights',
    'Hypnosis',
    'Fantastic books',
    'Contact with nature',
    'Teleportation',
    'Health benefits',
    'Traditions',
    'Telepathy',
    'Philosophical thoughts',
    'Thirst for adventure',
    'Theatre production',
    'Experimental ants',
    'Spells',
    'Public support',
    'Media influence',
    'Love of fairy tales',
    'Facial expressions',
    'Scientists from the future',
    'Minimalism',
  ],
}

export const allTopics = [
  'Розробити зарядну станцію для зарядки людей енергією',
  'Вигадати машину часу, яка тільки переносить у минуле на 5 хвилин',
  'Вивчити мову дельфінів та заснувати мовний обмін з ними',
  'Створити пристрій для прогнозування майбутнього на основі снів',
  'Запустити школу для навчання собак людської мови',
  'Створити пристрій для вимірювання рівня настрою',
  'Розробити додаток голосування за вибір погоди',
  'Космос впливає на розум користувача смартфона',
  'Експерименти зі створенням гіперінтелектуальних мурах',
  'Штучний інтелект захопить людство',
  'Людей за 60 потрібно відправляти на окремий острів',
  'Коштів не існує, це лише кольорові папірці',
  'Розпочати кожен день зі співу гімну',
  'Заборонити всі шкарпетки, окрім білих',
  "Обов'язкове використанні емодзі в діловій переписці",
  'Заборонити публікувати фото з відпочинку в соціальних мережах',
  'Загальнодоступний парк гігантських інтерактивних тренажерів для дорослих',
  'Заборонити оцінки в навчальних закладах',
  'Тільки посмішки на фото в документах',
  'Окремі рахунки в закладах на побаченні',
  'Знайомитись з новими людьми тільки в караоке',
  'Заборонити фільтри в соціальних мережах',
  'Готувати прецентацію про себе на перше побачення',
  'Заборонити погані новини в медіа',
  'Ввести в школах уроки підготовки до життя без батьків',
  'Офіційно виділити один день на рік для мрій і фантазій',
  'Відмовитись від електронної пошти і перейти на голубів',
  'Створити програму вищої освіти з фокусуванням на чаклунстві',
]

export const howToPage = {
  name: { ENG: 'How to Play', UKR: 'Як грати' },
  desc: {
    ENG: [
      'Prove It -  is a two-player game that allows you to improve your debate, improvisation and creative thinking skills. Players choose a topic and a position (FOR or AGAINST) and compete in arguing their case',
      'The purpose of the game: A fun and educational experience that allows players to develop debate, argumentation and improvisation skills',
      'Choose a topic: Start by selecting a debate topic. Players can choose from pre-prepared topics or add their own',
      'Choose a position: Each player chooses a position - FOR or AGAINST - on the chosen topic',
      'Prepare your speech: Each player has a limited time to prepare their speech. Consider the arguments and evidence you want to include in your speech. ',
      'Speaking for: The first player starts speaking FOR the chosen position. Your goal is to convince your opponent and the audience that your point of view is correct. ',
      'Speech Against: After the first speech is over, the second player has the opportunity to speak AGAINST the chosen position. You can use counter-arguments, statistics, and creative ideas. ',
      'Evaluation: Players and the audience can evaluate the speeches in terms of persuasiveness, creativity, and quality of argumentation. ',
      'Judging: If the game is played offline with an audience, judges can be brought in to evaluate the speeches and determine the winner',
      'Announcement of the Winner: After both speeches, or after a time limit, announce the winner of the debate based on scores, quality of argumentation, and creativity',
      'Exchange of Views: At the end of the game, players can discuss their thoughts, share their impressions, and even improve their arguments. ',
    ],
    UKR: [
      'Prove It - це гра для двох гравців, яка дозволяє вдосконалити навички дебатів, імпровізації та креативного мислення. Гравці обирають тему та позицію (ЗА або ПРОТИ) і змагаються в аргументації своєї думки.',
      'Мета гри: Забавний та освітній досвід, який дозволяє гравцям розвивати навички дебатів, аргументації та імпровізації.',
      'Оберіть тему: Почніть, обравши тему для дебатів. Гравці можуть вибирати з попередньо підготовлених тем або додати свою власну.',
      'Оберіть позицію: Кожен гравець обирає позицію - ЗА або ПРОТИ - щодо обраної теми.',
      'Підготовка промови: Кожен гравець має обмежений час для підготовки своєї промови. Розгляньте аргументи та докази, які ви хочете включити в свою промову. ',
      'Виступ ЗА: Перший гравець починає виступати ЗА обрану позицію. Ваша мета - переконати опонента та аудиторію в тому, що ваша точка зору є правильною. ',
      'Виступ Проти: Після закінчення першого виступу, другий гравець має можливість виступити ПРОТИ обраної позиції. Ви можете використовувати контраргументи, статистику та креативні ідеї. ',
      'Оцінювання: Гравці та аудиторія можуть оцінити виступи з точки зору переконливості, креативності та якості аргументації. ',
      'Розгляд Суддівства: Якщо гра відбувається в офлайн режимі з аудиторією, можна залучити суддів для оцінювання виступів та визначення переможця.',
      'Оголошення Переможця: Після обох виступів або після встановлення обмеження часу, оголосіть переможця дебатів на основі оцінок, якості аргументації та креативності.',
      'Обмін Думками: По завершенні гри, гравці можуть обговорити свої думки, ділитися враженнями та навіть вдосконалювати свої аргументи. ',
    ],
  },
}
export const settingPage = {
  name: { ENG: 'Settings', UKR: 'Налаштування' },
  player: { ENG: 'Player', UKR: 'Гравець' },
  theme: { ENG: 'Theme', UKR: 'Тема' },
  lang: { ENG: 'Language', UKR: 'Мова' },
  clear: { ENG: 'Clear cache', UKR: 'Очистити кеш' },
}

export const footerLang = {
  dev: { ENG: 'Developed by', UKR: 'Розробив' },
  by: { ENG: 'Tom Hestamp', UKR: 'Том Хестамп' },
}

export const gameLang = {
  choose: {
    ENG: 'Choose a topic and start the debate',
    UKR: 'Оберіть тему і почніть дебати',
  },
  over: { ENG: 'Topics are over', UKR: 'Теми закінчились' },
  reason: { ENG: 'Reason', UKR: 'Причина' },
  pick: { ENG: 'Pick', UKR: 'Взяти' },
  round: { ENG: 'Round', UKR: 'Раунд' },
  for: { ENG: 'FOR', UKR: 'ЗА' },
  against: { ENG: 'AGAINST', UKR: 'ПРОТИ' },
  sec: { ENG: 's', UKR: 'c' },
  end: { ENG: 'End turn', UKR: 'Завершити' },
  start: { ENG: 'Start round', UKR: 'Почати раунд' },
  next: { ENG: 'Next', UKR: 'Наступна' },
  again: { ENG: 'Repeat', UKR: 'Повторити' },
  random: { ENG: 'Random topic', UKR: 'Випадкова' },
}
export const customLang = {
  header: { ENG: 'Think of an interesting topic', UKR: 'Придумай цікаву тему' },
  inputplace: { ENG: 'place for imagination', UKR: 'місце для фантазії' },
  list: { ENG: 'Topic list', UKR: 'Список тем' },
  tostart: { ENG: 'To start debate', UKR: 'Для початку гри' },
  addsome: { ENG: 'add at least', UKR: 'додайте ще хоч' },
  start: { ENG: 'Start', UKR: 'Почати' },
}
