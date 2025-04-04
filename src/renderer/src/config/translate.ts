import i18n from '@renderer/i18n'

export const TranslateLanguageOptions = [
  {
    value: 'vietnamese',
    label: i18n.t('languages.vietnamese'),
    emoji: '🇻🇳'
  },
  {
    value: 'english',
    label: i18n.t('languages.english'),
    emoji: '🇬🇧'
  },
  {
    value: 'chinese',
    label: i18n.t('languages.chinese'),
    emoji: '🇨🇳'
  },
  {
    value: 'chinese-traditional',
    label: i18n.t('languages.chinese-traditional'),
    emoji: '🇭🇰'
  },
  {
    value: 'japanese',
    label: i18n.t('languages.japanese'),
    emoji: '🇯🇵'
  },
  {
    value: 'korean',
    label: i18n.t('languages.korean'),
    emoji: '🇰🇷'
  },
  {
    value: 'russian',
    label: i18n.t('languages.russian'),
    emoji: '🇷🇺'
  },
  {
    value: 'spanish',
    label: i18n.t('languages.spanish'),
    emoji: '🇪🇸'
  },
  {
    value: 'french',
    label: i18n.t('languages.french'),
    emoji: '🇫🇷'
  },
  {
    value: 'italian',
    label: i18n.t('languages.italian'),
    emoji: '🇮🇹'
  },
  {
    value: 'portuguese',
    label: i18n.t('languages.portuguese'),
    emoji: '🇵🇹'
  },
  {
    value: 'arabic',
    label: i18n.t('languages.arabic'),
    emoji: '🇸🇦'
  },
  {
    value: 'german',
    label: i18n.t('languages.german'),
    emoji: '🇩🇪'
  }
]

export const translateLanguageOptions = (): typeof TranslateLanguageOptions => {
  return TranslateLanguageOptions.map((option) => {
    return {
      value: option.value,
      label: i18n.t(`languages.${option.value}`),
      emoji: option.emoji
    }
  })
}
