export interface Phrase1 {
  id: number
  message: string
}

export interface PhraseSchema {
  identifier: string;
  message: string;
  footer?: string;
  image?: string;
  badgeIdentifier?: string;
}