/* نظرات في القرآن — INSIGHTS INTO THE QURAN — app.js v2.0 */
/* Based on "Nazarat fi al-Quran" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'نظرات في القرآن',
    splashSub: 'روائع القرآن الكريم للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة فصلت ٤١: ٤٢',
    tabHome: 'الرئيسية', tabTraits: 'النظرات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'نظرات قرآنية',
    traitsDesc: '١٥ نظرة في إعجاز القرآن وروائعه — كل نظرة بآية وشرح وتأمل عملي',
    quizTitle: '🏆 من سيصبح مفسراً؟',
    quizDesc: 'اختبر معلوماتك عن القرآن الكريم — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي القرآنية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة التدبر',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية قرآنية',
    dailyLabel: '✨ نظرة اليوم',
    searchPlaceholder: 'ابحث في النظرات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 تأمل الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ نظرة في إعجاز القرآن الكريم',
      'مسابقة "من سيصبح مفسراً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Insights into the Quran',
    splashSub: 'Wonders of the Holy Quran for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Fussilat 41:42',
    tabHome: 'Home', tabTraits: 'Insights', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Quranic Insights',
    traitsDesc: '15 insights into the miracles and wonders of the Quran — each with a verse, explanation, and reflection',
    quizTitle: '🏆 Who Wants to Be a Mufassir?',
    quizDesc: 'Test your knowledge of the Holy Quran — 4 choices per question',
    progressTitle: 'My Quranic Journey',
    progressDesc: 'Your progress and achievements in the journey of reflection',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Quranic Duas',
    dailyLabel: "✨ Today's Insight",
    searchPlaceholder: 'Search insights...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Reflect Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 insights into the miracles of the Holy Quran',
      '"Who Wants to Be a Mufassir?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Regards sur le Coran',
    splashSub: 'Merveilles du Saint Coran pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Fussilat 41:42',
    tabHome: 'Accueil', tabTraits: 'Regards', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Regards Coraniques',
    traitsDesc: '15 regards sur les miracles et merveilles du Coran — chacun avec un verset, une explication et une reflexion',
    quizTitle: '🏆 Qui Veut Devenir Mufassir ?',
    quizDesc: 'Testez vos connaissances sur le Saint Coran — 4 choix par question',
    progressTitle: 'Mon Parcours Coranique',
    progressDesc: 'Vos progres et realisations dans le parcours de reflexion',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Coraniques',
    dailyLabel: '✨ Regard du Jour',
    searchPlaceholder: 'Rechercher les regards...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Reflechissez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 regards sur les miracles du Saint Coran',
      'Quiz « Qui Veut Devenir Mufassir ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 QURANIC INSIGHTS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'✍️',
    ar:{title:'الإعجاز البياني',desc:'القرآن معجزة لغوية لا يستطيع البشر الإتيان بمثلها. كل كلمة في مكانها الصحيح بدقة متناهية. البلاغة القرآنية أذهلت أمهر شعراء العرب وأدبائهم حتى آمن كثيرون بمجرد سماعه.',verse:'قُلْ لَئِنِ اجْتَمَعَتِ الْإِنْسُ وَالْجِنُّ عَلَى أَنْ يَأْتُوا بِمِثْلِ هَذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'الإسراء ٨٨',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'اقرأ صفحة من القرآن اليوم وتأمل جمال الكلمات وترتيبها',young:'القرآن أجمل كتاب في العالم! كل كلمة فيه مثل الجوهرة الثمينة ✍️'},
    en:{title:'Literary Miracle',desc:'The Quran is a linguistic miracle that humans cannot replicate. Every word is placed with perfect precision. Quranic eloquence amazed the most skilled Arab poets and scholars, and many believed simply upon hearing it.',verse:'Say: If mankind and jinn gathered to produce the like of this Quran, they could not produce the like of it',verseRef:'Al-Isra 88',hadith:'The best among you are those who learn the Quran and teach it — Bukhari',action:'Read a page of the Quran today and reflect on the beauty and arrangement of its words',young:'The Quran is the most beautiful book in the world! Every word in it is like a precious gem ✍️'},
    fr:{title:'Miracle Litteraire',desc:"Le Coran est un miracle linguistique que les humains ne peuvent reproduire. Chaque mot est place avec une precision parfaite. L'eloquence coranique a stupefie les poetes arabes les plus habiles.",verse:'Dis : Si les hommes et les djinns s\'unissaient pour produire quelque chose de semblable, ils ne sauraient le faire',verseRef:'Al-Isra 88',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:"Lisez une page du Coran aujourd'hui et reflechissez a la beaute de ses mots",young:'Le Coran est le plus beau livre du monde ! Chaque mot est comme un joyau precieux ✍️'}
  },
  {
    id:2, emoji:'🔬',
    ar:{title:'الإشارات العلمية',desc:'يحتوي القرآن على إشارات علمية دقيقة اكتشفها العلماء بعد قرون. مثل مراحل تكوين الجنين والحاجز بين البحرين وتوسع الكون. هذه الإشارات دليل على مصدره الإلهي.',verse:'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ',verseRef:'الذاريات ٤٧',hadith:'تفكروا في خلق الله ولا تفكروا في ذات الله — رواه البيهقي',action:'ابحث عن إشارة علمية في القرآن وتأمل كيف اكتشفها العلم الحديث',young:'القرآن ذكر أشياء علمية قبل أن يكتشفها العلماء بمئات السنين! مثل توسع الكون 🔬'},
    en:{title:'Scientific Signs',desc:'The Quran contains precise scientific references that scholars discovered centuries later. Such as the stages of embryo development, the barrier between two seas, and the expansion of the universe. These signs are proof of its divine source.',verse:'And the heaven We built it with might and indeed We are its expanders',verseRef:'Adh-Dhariyat 47',hadith:'Reflect on the creation of Allah but do not reflect on His essence — Bayhaqi',action:'Research a scientific sign in the Quran and reflect on how modern science discovered it',young:'The Quran mentioned scientific facts hundreds of years before scientists discovered them! Like the expanding universe 🔬'},
    fr:{title:'Signes Scientifiques',desc:"Le Coran contient des references scientifiques precises que les savants ont decouvertes des siecles plus tard. Comme les etapes du developpement de l'embryon et l'expansion de l'univers.",verse:'Et le ciel, Nous l\'avons construit avec force et Nous l\'etendons',verseRef:'Adh-Dhariyat 47',hadith:'Reflechissez a la creation d\'Allah mais ne reflechissez pas a Son essence — Bayhaqi',action:'Recherchez un signe scientifique dans le Coran et reflechissez a comment la science l\'a decouvert',young:'Le Coran a mentionne des faits scientifiques des siecles avant que les scientifiques ne les decouvrent ! 🔬'}
  },
  {
    id:3, emoji:'📜',
    ar:{title:'الدقة التاريخية',desc:'القرآن يروي أحداثاً تاريخية بدقة مذهلة لم تتوفر لمحمد ﷺ بأي وسيلة بشرية. قصص الأنبياء والأمم السابقة ذكرها القرآن بتفاصيل أكدها علم الآثار الحديث.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ',verseRef:'يوسف ٣',hadith:'حدثوا عن بني إسرائيل ولا حرج — رواه البخاري',action:'اقرأ قصة نبي في القرآن وتأمل الدروس المستفادة منها',young:'القرآن يحكي قصص الأنبياء بدقة رائعة! كل قصة فيها درس جميل لنا 📜'},
    en:{title:'Historical Accuracy',desc:'The Quran narrates historical events with stunning accuracy that Muhammad (PBUH) had no human means of knowing. Stories of prophets and past nations are told with details confirmed by modern archaeology.',verse:'We relate to you the best of stories',verseRef:'Yusuf 3',hadith:'Narrate about the Children of Israel and there is no harm — Bukhari',action:'Read the story of a prophet in the Quran and reflect on its lessons',young:'The Quran tells the stories of prophets with amazing accuracy! Every story has a beautiful lesson for us 📜'},
    fr:{title:'Precision Historique',desc:"Le Coran relate des evenements historiques avec une precision etonnante que Muhammad (PSL) n'avait aucun moyen humain de connaitre. Les histoires des prophetes sont confirmees par l'archeologie moderne.",verse:'Nous te relatons le meilleur des recits',verseRef:'Yusuf 3',hadith:'Racontez au sujet des Enfants d\'Israel sans gene — Bukhari',action:"Lisez l'histoire d'un prophete dans le Coran et reflechissez a ses lecons",young:'Le Coran raconte les histoires des prophetes avec une precision incroyable ! 📜'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'المنهج الأخلاقي',desc:'القرآن وضع منهجاً أخلاقياً متكاملاً يشمل علاقة الإنسان بربه وبنفسه وبالناس. الأخلاق القرآنية ليست نظرية بل عملية يمكن تطبيقها في كل زمان ومكان.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'إنما بعثت لأتمم مكارم الأخلاق — رواه أحمد',action:'طبق خلقاً قرآنياً اليوم: العدل أو الإحسان أو صلة الرحم',young:'القرآن يعلمنا أجمل الأخلاق! مثل العدل والإحسان واحترام الآخرين ⚖️'},
    en:{title:'Ethical Framework',desc:'The Quran established a comprehensive ethical framework covering human relationships with God, with oneself, and with others. Quranic ethics are not theoretical but practical, applicable in every time and place.',verse:'Indeed, Allah commands justice and excellence',verseRef:'An-Nahl 90',hadith:'I was sent to perfect noble character — Ahmad',action:'Apply a Quranic moral today: justice, kindness, or maintaining family ties',young:'The Quran teaches us the most beautiful morals! Like justice, kindness, and respecting others ⚖️'},
    fr:{title:'Cadre Ethique',desc:"Le Coran a etabli un cadre ethique complet couvrant les relations de l'homme avec Dieu, avec soi-meme et avec les autres. L'ethique coranique est pratique, applicable en tout temps et lieu.",verse:'Allah ordonne la justice et la bienfaisance',verseRef:'An-Nahl 90',hadith:'J\'ai ete envoye pour parfaire les nobles caracteres — Ahmad',action:"Appliquez une morale coranique aujourd'hui : la justice, la bonte ou les liens familiaux",young:'Le Coran nous enseigne les plus belles vertus ! Comme la justice, la bonte et le respect ⚖️'}
  },
  {
    id:5, emoji:'💚',
    ar:{title:'الشفاء الروحي',desc:'القرآن شفاء للقلوب والنفوس. تلاوته تجلب السكينة والطمأنينة وتزيل الهم والحزن. كثير من الناس وجدوا في القرآن علاجاً لأمراض نفسية لم يجدوا لها علاجاً آخر.',verse:'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ',verseRef:'الإسراء ٨٢',hadith:'من قرأ حرفاً من كتاب الله فله به حسنة والحسنة بعشر أمثالها — رواه الترمذي',action:'اقرأ سورة يس أو الرحمن وتأمل كيف يؤثر القرآن في قلبك',young:'القرآن يجعل قلبك سعيداً وهادئاً! اقرأه كل يوم وستشعر بالراحة والسلام 💚'},
    en:{title:'Spiritual Healing',desc:'The Quran is a healing for hearts and souls. Its recitation brings tranquility and peace, and removes worry and sadness. Many people have found in the Quran a cure for psychological ailments that no other treatment could resolve.',verse:'And We send down of the Quran that which is a healing and a mercy for the believers',verseRef:'Al-Isra 82',hadith:'Whoever reads a letter from the Book of Allah will have a reward, and the reward is multiplied by ten — Tirmidhi',action:'Read Surah Yasin or Ar-Rahman and reflect on how the Quran affects your heart',young:'The Quran makes your heart happy and peaceful! Read it every day and you will feel comfort and peace 💚'},
    fr:{title:'Guerison Spirituelle',desc:"Le Coran est une guerison pour les coeurs et les ames. Sa recitation apporte tranquillite et paix, et dissipe l'inquietude et la tristesse.",verse:'Et Nous faisons descendre du Coran ce qui est guerison et misericorde pour les croyants',verseRef:'Al-Isra 82',hadith:'Quiconque lit une lettre du Livre d\'Allah a une recompense multipliee par dix — Tirmidhi',action:'Lisez la sourate Yasin ou Ar-Rahman et reflechissez a comment le Coran affecte votre coeur',young:'Le Coran rend ton coeur heureux et paisible ! Lis-le chaque jour et tu te sentiras en paix 💚'}
  },
  {
    id:6, emoji:'📐',
    ar:{title:'الحكمة التشريعية',desc:'تشريعات القرآن حكيمة متوازنة تراعي مصالح الفرد والمجتمع. كل حكم فيه حكمة ظاهرة أو خفية. التشريع القرآني يحفظ الضروريات الخمس: الدين والنفس والعقل والنسل والمال.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'ما نهيتكم عنه فاجتنبوه وما أمرتكم به فأتوا منه ما استطعتم — متفق عليه',action:'تأمل في حكمة تشريع إسلامي تعرفه — وابحث عن الفائدة من ورائه',young:'كل قانون في القرآن له حكمة رائعة! الله يريد لنا الخير والسعادة 📐'},
    en:{title:'Legislative Wisdom',desc:'The Quran\'s legislation is wise and balanced, considering the interests of individuals and society. Every ruling has a clear or hidden wisdom. Quranic law protects the five essentials: religion, life, mind, lineage, and property.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'What I have forbidden for you, avoid it. What I have commanded you, do as much as you can — Agreed upon',action:'Reflect on the wisdom behind an Islamic ruling you know — and discover the benefit behind it',young:'Every law in the Quran has amazing wisdom! Allah wants goodness and happiness for us 📐'},
    fr:{title:'Sagesse Legislative',desc:"La legislation du Coran est sage et equilibree, tenant compte des interets de l'individu et de la societe. Chaque reglement a une sagesse claire ou cachee.",verse:"Et Nous ne t'avons envoye qu'en misericorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Ce que je vous ai interdit, evitez-le. Ce que je vous ai ordonne, faites-en ce que vous pouvez — Unanimement reconnu',action:"Reflechissez a la sagesse d'une regle islamique que vous connaissez",young:'Chaque loi du Coran a une sagesse formidable ! Allah veut le bien et le bonheur pour nous 📐'}
  },
  {
    id:7, emoji:'🌍',
    ar:{title:'الرسالة العالمية',desc:'القرآن رسالة للبشرية جمعاء وليس لقوم دون آخرين. خاطب القرآن الإنسان بوصفه إنساناً بصرف النظر عن لونه أو جنسه أو لغته. هذه العالمية جعلت الإسلام ينتشر في كل القارات.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِلنَّاسِ',verseRef:'سبأ ٢٨',hadith:'كلكم لآدم وآدم من تراب — رواه الترمذي',action:'شارك آية قرآنية مع صديق من ثقافة مختلفة وتحدث معه عن معناها',young:'القرآن كتاب لكل الناس في العالم! لا فرق بين عربي وأعجمي — الجميع متساوون 🌍'},
    en:{title:'Universal Message',desc:'The Quran is a message for all of humanity, not for one group over another. It addresses humans as humans regardless of color, gender, or language. This universality has enabled Islam to spread across all continents.',verse:'And We have not sent you except universally to all people',verseRef:'Saba 28',hadith:'All of you are from Adam and Adam is from dust — Tirmidhi',action:'Share a Quranic verse with a friend from a different culture and discuss its meaning',young:'The Quran is a book for everyone in the world! No difference between Arab and non-Arab — everyone is equal 🌍'},
    fr:{title:'Message Universel',desc:"Le Coran est un message pour toute l'humanite, pas pour un groupe plus qu'un autre. Il s'adresse aux humains en tant qu'humains, peu importe leur couleur, genre ou langue.",verse:"Et Nous ne t'avons envoye qu'universellement a tous les hommes",verseRef:'Saba 28',hadith:'Vous etes tous d\'Adam et Adam est de poussiere — Tirmidhi',action:"Partagez un verset coranique avec un ami d'une culture differente et discutez de son sens",young:'Le Coran est un livre pour tout le monde ! Pas de difference entre les gens — tout le monde est egal 🌍'}
  },
  {
    id:8, emoji:'🛡️',
    ar:{title:'إعجاز الحفظ',desc:'القرآن هو الكتاب الوحيد المحفوظ بنصه الأصلي منذ أكثر من ١٤٠٠ سنة. ملايين الحفاظ حول العالم يحفظونه عن ظهر قلب. لم يتغير فيه حرف واحد. هذا الحفظ معجزة فريدة.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩',hadith:'إن الله يرفع بهذا الكتاب أقواماً ويضع به آخرين — رواه مسلم',action:'احفظ آية جديدة اليوم وراجع ما حفظته سابقاً',young:'القرآن محفوظ منذ أكثر من ١٤٠٠ سنة! ملايين الناس يحفظونه عن ظهر قلب 🛡️'},
    en:{title:'Preservation Miracle',desc:'The Quran is the only book preserved in its original text for over 1400 years. Millions of people around the world memorize it by heart. Not a single letter has changed. This preservation is a unique miracle.',verse:'Indeed, it is We who sent down the reminder and indeed, We will be its guardian',verseRef:'Al-Hijr 9',hadith:'Allah raises some people by this Book and lowers others by it — Muslim',action:'Memorize a new verse today and review what you have previously memorized',young:'The Quran has been preserved for over 1400 years! Millions of people memorize it by heart 🛡️'},
    fr:{title:'Miracle de Preservation',desc:"Le Coran est le seul livre preserve dans son texte original depuis plus de 1400 ans. Des millions de personnes le memorisent par coeur. Pas une seule lettre n'a change.",verse:"C'est Nous qui avons fait descendre le Rappel et c'est Nous qui en sommes les gardiens",verseRef:'Al-Hijr 9',hadith:'Allah eleve des peuples par ce Livre et en abaisse d\'autres — Muslim',action:"Memorisez un nouveau verset aujourd'hui et revisez ce que vous avez deja memorise",young:'Le Coran est preserve depuis plus de 1400 ans ! Des millions de personnes le connaissent par coeur 🛡️'}
  },
  {
    id:9, emoji:'🧠',
    ar:{title:'الرؤى النفسية',desc:'القرآن يفهم النفس البشرية فهماً عميقاً. يصف مشاعر الخوف والحزن والفرح والغضب بدقة مذهلة. ويقدم علاجات عملية للقلق والاكتئاب والوسوسة من خلال الذكر والتوكل والصبر.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'الرعد ٢٨',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'عندما تشعر بالقلق اليوم، اقرأ آية من القرآن وتأمل معناها',young:'عندما تشعر بالحزن أو الخوف، اقرأ القرآن! سيجعل قلبك هادئاً وقوياً 🧠'},
    en:{title:'Psychological Insights',desc:'The Quran has a profound understanding of the human psyche. It describes feelings of fear, sadness, joy, and anger with stunning accuracy. It offers practical treatments for anxiety and depression through remembrance, trust, and patience.',verse:'Verily, in the remembrance of Allah do hearts find rest',verseRef:'Ar-Ra\'d 28',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'When you feel anxious today, read a verse from the Quran and reflect on its meaning',young:'When you feel sad or afraid, read the Quran! It will make your heart calm and strong 🧠'},
    fr:{title:'Perspectives Psychologiques',desc:"Le Coran a une comprehension profonde de la psyche humaine. Il decrit les sentiments de peur, tristesse, joie et colere avec une precision etonnante. Il offre des traitements pratiques pour l'anxiete.",verse:'N\'est-ce pas par le rappel d\'Allah que les coeurs se tranquillisent ?',verseRef:'Ar-Ra\'d 28',hadith:'Comme l\'affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim',action:"Quand vous vous sentez anxieux, lisez un verset du Coran et reflechissez a son sens",young:'Quand tu te sens triste ou effraye, lis le Coran ! Il rendra ton coeur calme et fort 🧠'}
  },
  {
    id:10, emoji:'🏛️',
    ar:{title:'الإصلاح الاجتماعي',desc:'أحدث القرآن ثورة اجتماعية كبرى. حرر العبيد ورفع مكانة المرأة وحارب العنصرية ونشر العدالة. المجتمع الجاهلي تحول بالقرآن إلى مجتمع متحضر راقٍ في سنوات قليلة.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',action:'عامل كل من تقابله اليوم باحترام بصرف النظر عن مكانته الاجتماعية',young:'القرآن علم الناس المساواة والعدل! كل الناس متساوون ومهمون 🏛️'},
    en:{title:'Social Reform',desc:'The Quran brought about a major social revolution. It freed slaves, elevated the status of women, fought racism, and spread justice. The pre-Islamic society was transformed by the Quran into a civilized community in just a few years.',verse:'O mankind, We have created you from a male and a female and made you into nations and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'There is no superiority of an Arab over a non-Arab except in piety — Ahmad',action:'Treat everyone you meet today with respect regardless of their social status',young:'The Quran taught people equality and justice! All people are equal and important 🏛️'},
    fr:{title:'Reforme Sociale',desc:"Le Coran a provoque une revolution sociale majeure. Il a libere les esclaves, eleve le statut de la femme, combattu le racisme et repandu la justice.",verse:'O humanite, Nous vous avons crees d\'un male et d\'une femelle et fait de vous des peuples pour que vous vous connaissiez',verseRef:'Al-Hujurat 13',hadith:'Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete — Ahmad',action:"Traitez tout le monde avec respect aujourd'hui, quel que soit son statut social",young:'Le Coran a enseigne l\'egalite et la justice ! Tous les gens sont egaux et importants 🏛️'}
  },
  {
    id:11, emoji:'💰',
    ar:{title:'المبادئ الاقتصادية',desc:'وضع القرآن قواعد اقتصادية عادلة تمنع الاستغلال وتحارب الربا وتشجع الزكاة والصدقة. الاقتصاد القرآني يوازن بين حق الفرد في الملكية وحق المجتمع في التكافل.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنْكُمْ',verseRef:'الحشر ٧',hadith:'ما من يوم يصبح العباد فيه إلا ملكان ينزلان فيقول أحدهما: اللهم أعطِ منفقاً خلفاً — متفق عليه',action:'تصدق اليوم بمبلغ صغير أو ساعد محتاجاً بما تستطيع',young:'القرآن يعلمنا المشاركة والعطاء! ساعد المحتاجين وشارك ما عندك مع الآخرين 💰'},
    en:{title:'Economic Principles',desc:'The Quran established fair economic rules that prevent exploitation, fight usury, and encourage zakat and charity. Quranic economics balances the individual\'s right to property with society\'s right to solidarity.',verse:'So that wealth does not only circulate among the rich among you',verseRef:'Al-Hashr 7',hadith:'Every day two angels descend and one says: O Allah, give the one who spends a replacement — Agreed upon',action:'Give charity today with a small amount or help someone in need with what you can',young:'The Quran teaches us sharing and giving! Help those in need and share what you have 💰'},
    fr:{title:'Principes Economiques',desc:"Le Coran a etabli des regles economiques justes qui empechent l'exploitation, combattent l'usure et encouragent la zakat et l'aumone.",verse:'Afin que la richesse ne circule pas seulement entre les riches parmi vous',verseRef:'Al-Hashr 7',hadith:'Chaque jour deux anges descendent et l\'un dit : O Allah, donne a celui qui depense un remplacement — Unanimement reconnu',action:"Donnez une aumone aujourd'hui ou aidez quelqu'un dans le besoin",young:'Le Coran nous apprend le partage et la generosite ! Aide les necessiteux et partage 💰'}
  },
  {
    id:12, emoji:'🎨',
    ar:{title:'الجمال الفني',desc:'القرآن يتميز بجمال فني لا مثيل له في التصوير والسرد والإيقاع. المشاهد القرآنية تجعلك تعيش الحدث كأنك تراه. الجمال الفني في القرآن أبهر المؤمن والكافر على حد سواء.',verse:'اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُتَشَابِهًا مَثَانِيَ',verseRef:'الزمر ٢٣',hadith:'زينوا القرآن بأصواتكم — رواه أبو داود',action:'استمع لتلاوة قرآنية جميلة اليوم وتأمل كيف تؤثر في مشاعرك',young:'القرآن مثل لوحة فنية جميلة! استمع لتلاوته وستشعر بجمال لا مثيل له 🎨'},
    en:{title:'Artistic Beauty',desc:'The Quran has unparalleled artistic beauty in imagery, narration, and rhythm. Quranic scenes make you live the event as if you are watching it. The artistic beauty of the Quran has impressed believers and non-believers alike.',verse:'Allah has sent down the best statement: a consistent book wherein is reiteration',verseRef:'Az-Zumar 23',hadith:'Beautify the Quran with your voices — Abu Dawud',action:'Listen to a beautiful Quran recitation today and reflect on how it affects your feelings',young:'The Quran is like a beautiful painting! Listen to its recitation and you will feel unmatched beauty 🎨'},
    fr:{title:'Beaute Artistique',desc:"Le Coran possede une beaute artistique inegalee dans l'imagerie, la narration et le rythme. Les scenes coraniques vous font vivre l'evenement comme si vous le voyiez.",verse:'Allah a fait descendre le plus beau des recits : un livre coherent et repetitif',verseRef:'Az-Zumar 23',hadith:'Embellissez le Coran avec vos voix — Abu Dawud',action:"Ecoutez une belle recitation du Coran aujourd'hui et reflechissez a comment elle affecte vos emotions",young:'Le Coran est comme une belle peinture ! Ecoute sa recitation et tu ressentiras une beaute inegalee 🎨'}
  },
  {
    id:13, emoji:'🔮',
    ar:{title:'نبوءات تحققت',desc:'تضمن القرآن نبوءات تحققت بدقة مذهلة. مثل انتصار الروم بعد هزيمتهم ودخول المسلمين المسجد الحرام. هذه النبوءات دليل قاطع على أن القرآن من عند الله.',verse:'غُلِبَتِ الرُّومُ فِي أَدْنَى الْأَرْضِ وَهُمْ مِنْ بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ',verseRef:'الروم ٢-٣',hadith:'لتفتحن القسطنطينية — رواه أحمد',action:'ابحث عن نبوءة قرآنية تحققت وتأمل في دقتها',young:'القرآن تنبأ بأشياء حدثت فعلاً! مثل انتصار الروم — وهذا يثبت أنه من عند الله 🔮'},
    en:{title:'Prophecies Fulfilled',desc:'The Quran contained prophecies that were fulfilled with stunning accuracy. Such as the victory of the Romans after their defeat and the Muslims entering the Sacred Mosque. These prophecies are definitive proof that the Quran is from Allah.',verse:'The Romans have been defeated in the nearest land, but after their defeat they will triumph',verseRef:'Ar-Rum 2-3',hadith:'You will conquer Constantinople — Ahmad',action:'Research a Quranic prophecy that was fulfilled and reflect on its precision',young:'The Quran predicted things that actually happened! Like the victory of the Romans — this proves it is from Allah 🔮'},
    fr:{title:'Propheties Realisees',desc:"Le Coran contenait des propheties qui se sont realisees avec une precision etonnante. Comme la victoire des Romains apres leur defaite.",verse:'Les Romains ont ete vaincus dans la terre la plus proche, mais apres leur defaite ils vaincront',verseRef:'Ar-Rum 2-3',hadith:'Vous conquerrez Constantinople — Ahmad',action:"Recherchez une prophetie coranique realisee et reflechissez a sa precision",young:'Le Coran a predit des choses qui sont vraiment arrivees ! Cela prouve qu\'il vient d\'Allah 🔮'}
  },
  {
    id:14, emoji:'🏆',
    ar:{title:'التحدي بالإتيان بمثله',desc:'تحدى القرآن البشرية جمعاء أن يأتوا بسورة واحدة من مثله. مر أكثر من ١٤٠٠ سنة ولم يستطع أحد. هذا التحدي لا يزال قائماً وسيبقى إلى يوم القيامة.',verse:'وَإِنْ كُنْتُمْ فِي رَيْبٍ مِمَّا نَزَّلْنَا عَلَى عَبْدِنَا فَأْتُوا بِسُورَةٍ مِنْ مِثْلِهِ',verseRef:'البقرة ٢٣',hadith:'ما من الأنبياء نبي إلا أعطي ما مثله آمن عليه البشر وإنما كان الذي أوتيته وحياً — متفق عليه',action:'اقرأ سورة قصيرة وتأمل: هل يمكن لبشر أن يكتب مثلها؟',young:'لا أحد يستطيع كتابة كتاب مثل القرآن! حتى لو اجتمع كل الناس — هذا يثبت أنه من الله 🏆'},
    en:{title:'Challenge to Produce Similar',desc:'The Quran challenged all of humanity to produce even a single chapter like it. Over 1400 years have passed and no one has succeeded. This challenge still stands and will remain until the Day of Judgment.',verse:'And if you are in doubt about what We have sent down to Our servant, then produce a chapter the like thereof',verseRef:'Al-Baqarah 23',hadith:'Every prophet was given miracles that made people believe; what I was given is revelation — Agreed upon',action:'Read a short surah and reflect: could any human write something like it?',young:'No one can write a book like the Quran! Even if all people gathered — this proves it is from Allah 🏆'},
    fr:{title:'Defi de Produire un Semblable',desc:"Le Coran a defie toute l'humanite de produire ne serait-ce qu'un seul chapitre semblable. Plus de 1400 ans ont passe et personne n'a reussi.",verse:'Si vous avez un doute sur ce que Nous avons revele a Notre serviteur, produisez une sourate semblable',verseRef:'Al-Baqarah 23',hadith:'Chaque prophete a recu des miracles ; ce que j\'ai recu est la revelation — Unanimement reconnu',action:"Lisez une courte sourate et reflechissez : un humain pourrait-il ecrire quelque chose de semblable ?",young:'Personne ne peut ecrire un livre comme le Coran ! Meme si tout le monde s\'unissait — cela prouve qu\'il vient d\'Allah 🏆'}
  },
  {
    id:15, emoji:'🌐',
    ar:{title:'القرآن والعصر الحديث',desc:'القرآن صالح لكل زمان ومكان. مبادئه تعالج مشكلات العصر الحديث: من الأزمات النفسية إلى المشاكل الاقتصادية والاجتماعية. القرآن ليس كتاب ماضٍ بل هو دليل حياة معاصر.',verse:'لَا يَأْتِيهِ الْبَاطِلُ مِنْ بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ',verseRef:'فصلت ٤٢',hadith:'تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله — رواه مسلم',action:'فكر في مشكلة معاصرة وابحث عن حلها في القرآن',young:'القرآن يحل مشاكل اليوم كما حل مشاكل الأمس! هو دليلنا في كل وقت 🌐'},
    en:{title:'Quran and Modernity',desc:'The Quran is valid for every time and place. Its principles address modern problems: from psychological crises to economic and social issues. The Quran is not a book of the past but a contemporary guide for life.',verse:'Falsehood cannot approach it from before it or behind it',verseRef:'Fussilat 42',hadith:'I have left among you what if you hold onto you will never go astray: the Book of Allah — Muslim',action:'Think of a modern problem and search for its solution in the Quran',young:'The Quran solves today\'s problems just like it solved yesterday\'s! It is our guide at all times 🌐'},
    fr:{title:'Coran et Modernite',desc:"Le Coran est valable pour tout temps et lieu. Ses principes traitent des problemes modernes : des crises psychologiques aux problemes economiques et sociaux.",verse:'Le faux ne l\'atteint ni par devant ni par derriere',verseRef:'Fussilat 42',hadith:'Je vous ai laisse ce qui, si vous vous y accrochez, ne vous egarera jamais : le Livre d\'Allah — Muslim',action:"Pensez a un probleme moderne et cherchez sa solution dans le Coran",young:'Le Coran resout les problemes d\'aujourd\'hui comme ceux d\'hier ! C\'est notre guide en tout temps 🌐'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Mufassir?) ═══════════════
const QUIZ = [
  {
    ar:{q:'في أي سورة ورد التحدي بالإتيان بسورة من مثل القرآن؟',opts:['آل عمران','البقرة','الإسراء','الكهف'],correct:1,hint:'هي أطول سورة في القرآن',quran:'البقرة ٢٣'},
    en:{q:'In which surah is the challenge to produce a chapter like the Quran?',opts:['Al Imran','Al-Baqarah','Al-Isra','Al-Kahf'],correct:1,hint:'It is the longest surah in the Quran',quran:'Al-Baqarah 23'},
    fr:{q:'Dans quelle sourate se trouve le defi de produire un chapitre semblable au Coran ?',opts:['Al Imran','Al-Baqarah','Al-Isra','Al-Kahf'],correct:1,hint:'C\'est la plus longue sourate du Coran',quran:'Al-Baqarah 23'}
  },
  {
    ar:{q:'ما الآية التي تتحدث عن حفظ القرآن من التحريف؟',opts:['إنا نحن نزلنا الذكر وإنا له لحافظون','وننزل من القرآن ما هو شفاء','لا يأتيه الباطل','قل لئن اجتمعت الإنس والجن'],correct:0,hint:'وردت في سورة الحجر',quran:'الحجر ٩'},
    en:{q:'Which verse speaks about the preservation of the Quran from corruption?',opts:['Indeed We sent down the reminder and We will guard it','We send down from the Quran what is healing','Falsehood cannot approach it','Say if mankind and jinn gathered'],correct:0,hint:'It appears in Surah Al-Hijr',quran:'Al-Hijr 9'},
    fr:{q:'Quel verset parle de la preservation du Coran ?',opts:['Nous avons fait descendre le Rappel et Nous en sommes les gardiens','Nous faisons descendre du Coran ce qui est guerison','Le faux ne l\'atteint pas','Dis si les hommes et les djinns s\'unissaient'],correct:0,hint:'Il apparait dans la sourate Al-Hijr',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'أكمل الآية: "ألا بذكر الله ..."',opts:['تسكن النفوس','تهتدي القلوب','تطمئن القلوب','تنشرح الصدور'],correct:2,hint:'الآية عن تأثير ذكر الله على القلوب',quran:'الرعد ٢٨'},
    en:{q:'Complete: "Verily, in the remembrance of Allah do hearts find..."',opts:['Peace','Guidance','Rest','Joy'],correct:2,hint:'The verse is about the effect of remembering Allah on hearts',quran:'Ar-Ra\'d 28'},
    fr:{q:'Completez : « N\'est-ce pas par le rappel d\'Allah que les coeurs se... »',opts:['apaisent','guident','tranquillisent','rejouissent'],correct:2,hint:'Le verset parle de l\'effet du rappel d\'Allah sur les coeurs',quran:'Ar-Ra\'d 28'}
  },
  {
    ar:{q:'في أي سورة ذكرت قصة هزيمة الروم ثم انتصارهم؟',opts:['البقرة','الأنبياء','الروم','محمد'],correct:2,hint:'السورة سميت باسم هذا الشعب',quran:'الروم ٢-٣'},
    en:{q:'In which surah is the story of the Romans\' defeat then victory mentioned?',opts:['Al-Baqarah','Al-Anbiya','Ar-Rum','Muhammad'],correct:2,hint:'The surah is named after this people',quran:'Ar-Rum 2-3'},
    fr:{q:'Dans quelle sourate l\'histoire de la defaite puis la victoire des Romains est-elle mentionnee ?',opts:['Al-Baqarah','Al-Anbiya','Ar-Rum','Muhammad'],correct:2,hint:'La sourate porte le nom de ce peuple',quran:'Ar-Rum 2-3'}
  },
  {
    ar:{q:'ما الآية التي تتحدث عن توسع الكون؟',opts:['والسماء بنيناها بأيد وإنا لموسعون','والسماء ذات البروج','والسماء رفعها','تبارك الذي بيده الملك'],correct:0,hint:'هذه الآية في سورة الذاريات',quran:'الذاريات ٤٧'},
    en:{q:'Which verse speaks about the expansion of the universe?',opts:['And the heaven We built with might and We are its expanders','And the heaven with its constellations','And the heaven He raised','Blessed is He in Whose hand is the dominion'],correct:0,hint:'This verse is in Surah Adh-Dhariyat',quran:'Adh-Dhariyat 47'},
    fr:{q:'Quel verset parle de l\'expansion de l\'univers ?',opts:['Et le ciel Nous l\'avons construit et Nous l\'etendons','Et le ciel aux constellations','Et le ciel Il l\'a eleve','Beni soit Celui qui detient la souverainete'],correct:0,hint:'Ce verset est dans la sourate Adh-Dhariyat',quran:'Adh-Dhariyat 47'}
  },
  {
    ar:{q:'ما الحديث الذي يصف فضل تعلم القرآن؟',opts:['خيركم من تعلم القرآن وعلمه','اقرأ القرآن فإنه يأتي شفيعاً','القرآن حجة لك أو عليك','تركت فيكم كتاب الله'],correct:0,hint:'هذا الحديث يجعل معلم القرآن أفضل الناس',quran:'البقرة ٢٣'},
    en:{q:'Which hadith describes the merit of learning the Quran?',opts:['The best among you are those who learn the Quran and teach it','Read the Quran for it will intercede','The Quran is proof for or against you','I left among you the Book of Allah'],correct:0,hint:'This hadith makes the Quran teacher the best of people',quran:'Al-Baqarah 23'},
    fr:{q:'Quel hadith decrit le merite d\'apprendre le Coran ?',opts:['Les meilleurs sont ceux qui apprennent le Coran et l\'enseignent','Lisez le Coran car il intercede','Le Coran est preuve pour ou contre vous','Je vous ai laisse le Livre d\'Allah'],correct:0,hint:'Ce hadith fait du professeur de Coran le meilleur des gens',quran:'Al-Baqarah 23'}
  },
  {
    ar:{q:'أكمل الآية: "يا أيها الناس إنا خلقناكم من ذكر وأنثى وجعلناكم شعوباً وقبائل ..."',opts:['لتعارفوا','لتتعاونوا','لتتحابوا','لتتنافسوا'],correct:0,hint:'الهدف من التنوع هو التعرف على بعضنا',quran:'الحجرات ١٣'},
    en:{q:'Complete: "We made you into nations and tribes that you may..."',opts:['Know one another','Cooperate','Love each other','Compete'],correct:0,hint:'The purpose of diversity is to get to know each other',quran:'Al-Hujurat 13'},
    fr:{q:'Completez : « Nous vous avons fait des peuples et des tribus pour que vous... »',opts:['vous connaissiez','cooperiez','vous aimiez','rivalisiez'],correct:0,hint:'Le but de la diversite est de se connaitre',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'في أي سورة وردت آية "وننزل من القرآن ما هو شفاء ورحمة للمؤمنين"؟',opts:['البقرة','الإسراء','النحل','يس'],correct:1,hint:'هي سورة الإسراء والمعراج',quran:'الإسراء ٨٢'},
    en:{q:'In which surah does the verse about the Quran being "healing and mercy" appear?',opts:['Al-Baqarah','Al-Isra','An-Nahl','Yasin'],correct:1,hint:'This is the surah of the Night Journey',quran:'Al-Isra 82'},
    fr:{q:'Dans quelle sourate apparait le verset sur le Coran comme "guerison et misericorde" ?',opts:['Al-Baqarah','Al-Isra','An-Nahl','Yasin'],correct:1,hint:'C\'est la sourate du Voyage Nocturne',quran:'Al-Isra 82'}
  },
  {
    ar:{q:'ما السورة التي وصفت القرآن بأنه "أحسن الحديث"؟',opts:['البقرة','الزمر','الرحمن','يس'],correct:1,hint:'هذه السورة فيها آية "الله نزل أحسن الحديث"',quran:'الزمر ٢٣'},
    en:{q:'Which surah describes the Quran as "the best statement"?',opts:['Al-Baqarah','Az-Zumar','Ar-Rahman','Yasin'],correct:1,hint:'This surah contains "Allah has sent down the best statement"',quran:'Az-Zumar 23'},
    fr:{q:'Quelle sourate decrit le Coran comme "le plus beau des recits" ?',opts:['Al-Baqarah','Az-Zumar','Ar-Rahman','Yasin'],correct:1,hint:'Cette sourate contient "Allah a fait descendre le plus beau des recits"',quran:'Az-Zumar 23'}
  },
  {
    ar:{q:'أكمل الآية: "إن الله يأمر بالعدل و..."',opts:['الصبر','الإحسان','الرحمة','التقوى'],correct:1,hint:'هذه الآية جمعت العدل مع مرتبة أعلى منه',quran:'النحل ٩٠'},
    en:{q:'Complete: "Indeed, Allah commands justice and..."',opts:['Patience','Excellence','Mercy','Piety'],correct:1,hint:'This verse combines justice with a higher rank',quran:'An-Nahl 90'},
    fr:{q:'Completez : « Allah ordonne la justice et... »',opts:['La patience','La bienfaisance','La misericorde','La piete'],correct:1,hint:'Ce verset combine la justice avec un rang superieur',quran:'An-Nahl 90'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء فتح القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ',tr:'دعاء عند تلاوة القرآن'},
    en:{label:'Dua for Opening the Quran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ',tr:'O Allah, open for us Your wisdom and spread upon us Your mercy'},
    fr:{label:'Dua pour Ouvrir le Coran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ',tr:'O Allah, ouvre-nous Ta sagesse et repands sur nous Ta misericorde'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الهداية',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us — Al Imran 8'},
    fr:{label:'Dua pour la Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides — Al Imran 8'} },
  { ar:{label:'دعاء الفهم',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'طه ٢٥-٢٦'},
    en:{label:'Dua for Understanding',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand for me my breast and ease for me my task — Taha 25-26'},
    fr:{label:'Dua pour la Comprehension',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache — Taha 25-26'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'رواه مسلم'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place light in my heart, in my sight, and in my hearing — Muslim'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, mets de la lumiere dans mon coeur, dans ma vue et dans mon ouie — Muslim'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'nazarat-quran-xp';
const BADGES_KEY = 'nazarat-quran-badges';
const READ_KEY = 'nazarat-quran-read';
const STREAK_KEY = 'nazarat-quran-streak';
const MODE_KEY = 'nazarat-quran-mode';
const QUIZ_BEST_KEY = 'nazarat-quran-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderTraits(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % TRAITS.length; const trait = TRAITS[dayIdx]; const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${trait.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => { const dd = tr[lang]; return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')"><span class="hc-icon">${tr.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: TRAITS (INSIGHTS) ═══════════════
function renderTraits() {
  const t = T[lang]; const readTraits = getReadTraits(); const container = document.getElementById('traitsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang]; const isRead = readTraits.includes(tr.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}"><div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})"><span class="trait-num">${tr.id}</span><span class="trait-emoji">${tr.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`;
  }).join('');
}

function filterTraits(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareTrait(id) { const trait = TRAITS.find(t => t.id === id); if (!trait) return; const d = trait[lang]; const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }
function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}
function answerQuiz(idx) {
  if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); });
  const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden');
  if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); }
  else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); }
  quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800);
}
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }
function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'مفسر حقيقي!':lang==='fr'?'Un vrai Mufassir !':'A True Mufassir!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readTraits = getReadTraits(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'نظرة مقروءة':lang==='fr'?'Regards lus':'Insights Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري بارز. ألّف أكثر من ٩٤ كتاباً. درس في الأزهر ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«نظرات في القرآن» كتاب يتأمل في إعجاز القرآن الكريم من جوانب متعددة: لغوية وعلمية وتاريخية وتشريعية. يبين الشيخ الغزالي روائع القرآن وعظمته وصلاحيته لكل زمان ومكان.', sourcesTitle:'المصادر', sources:['كتاب "نظرات في القرآن" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','كتب التفسير المعتمدة'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Prominent Egyptian Islamic scholar. Authored over 94 books. Studied at Al-Azhar and taught at Emir Abdelkader University in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Insights into the Quran" reflects on the miracles of the Holy Quran from multiple angles: linguistic, scientific, historical, and legislative. Sheikh al-Ghazali reveals the wonders and greatness of the Quran.', sourcesTitle:'Sources', sources:['"Insights into the Quran" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Authoritative Tafsir books'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Eminent savant islamique egyptien. Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'\"Regards sur le Coran\" reflechit aux miracles du Saint Coran sous plusieurs angles. Le Sheikh al-Ghazali revele les merveilles et la grandeur du Coran.', sourcesTitle:'Sources', sources:['"Regards sur le Coran" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Livres de Tafsir autorises'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر روائع القرآن بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "نظرات في القرآن" للشيخ محمد الغزالي، القرآن الكريم، كتب التفسير.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ نظرة، مسابقة تفاعلية، نظام نقاط وشارات.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share the wonders of the Quran interactively.'},{title:'📚 Sources',body:'"Insights into the Quran" by Sheikh Mohammed al-Ghazali, the Holy Quran, Tafsir books.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 insights, interactive quiz, XP and badges system.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager les merveilles du Coran.'},{title:'📚 Sources',body:'"Regards sur le Coran" par Sheikh Mohammed al-Ghazali, le Saint Coran, livres de Tafsir.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 regards, quiz interactif, systeme XP et badges.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ نظرة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ تلاوة القرآن','⭐ أكمل ١٥ نظرة لتصبح خبيراً'], en:['📖 Read a new insight every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to recite the Quran','⭐ Complete all 15 insights to become an Expert'], fr:['📖 Lisez un nouveau regard chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas de reciter le Coran','⭐ Completez les 15 regards pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-traits'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'traitsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','traits','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
