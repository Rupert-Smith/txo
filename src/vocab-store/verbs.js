export const VERBS = [
  {
    kanji: "寝る",
    hirigana: "ねる",
    english: "to sleep",
    englishConjugation: {
      presentContinuous: "sleeping",
      simpleFuture: "will sleep",
    },
    level: "easy",
    permitsObject: false, // I drive the car
    requiresObject: false, // I take the pencil
    permitObjectAsInaninate: false, // I am washing the clothes
    permitSubjectAsInaninate: false, // the man is sleeping
  },
  {
    kanji: "泳ぐ",
    hirigana: "およぐ",
    english: "to swim",
    englishConjugation: {
      presentContinuous: "swimming",
      simpleFuture: "will swim",
    },
    level: "easy",
    permitsObject: false,
    requiresObject: false,
    permitObjectAsInaninate: false,
    permitSubjectAsInaninate: false,
  },
  {
    kanji: "歩く",
    hirigana: "あるく",
    english: "to walk",
    englishConjugation: {
      presentContinuous: "walking",
      simpleFuture: "will walk",
    },
    level: "easy",
    requiresObject: false,
    permitsObject: true,
    permitObjectAsInaninate: false,
    permitSubjectAsInaninate: false,
  },
  {
    kanji: "洗う",
    hirigana: "あらう",
    english: "to wash",
    englishConjugation: {
      presentContinuous: "washing",
      simpleFuture: "will wash",
    },
    level: "easy",
    requiresObject: true,
    permitsObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: false,
  },
  {
    kanji: "取る",
    hirigana: "とる",
    english: "to take",
    englishConjugation: {
      presentContinuous: "taking",
      simpleFuture: "will take",
    },
    level: "medium",
    requiresObject: true,
    permitsObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: false,
  },
  {
    kanji: "飛ぶ",
    hirigana: "とぶ",
    english: "to fly",
    englishConjugation: {
      presentContinuous: "flying",
      simpleFuture: "will fly",
    },
    level: "easy",
    requiresObject: false,
    permitsObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: true,
  },
  {
    kanji: "受け取る",
    hirigana: "うけとる",
    english: "to recieve",
    englishConjugation: {
      presentContinuous: "receiving",
      simpleFuture: "will recieve",
    },
    level: "hard",
    requiresObject: true,
    permitsObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: true,
  },
  {
    kanji: "受け取る",
    hirigana: "あたためる",
    english: "to warm up",
    englishConjugation: {
      presentContinuous: "warming up",
      simpleFuture: "will warm up",
    },
    level: "hard",
    requiresObject: false,
    permitsObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: true,
  },

  {
    kanji: "出す",
    hirigana: "だす",
    english: "to take out",
    englishConjugation: {
      presentContinuous: "taking out",
      simpleFuture: "will take out",
    },
    level: "hard",
    permitsObject: true,
    requiresObject: true,
    permitObjectAsInaninate: true,
    permitSubjectAsInaninate: false,
  },
];
