import { Pieces } from "../types/Pieces";

export const livesBelowShowPieces: Pieces = {
  'head' : 6,
  'body' : 5,
  'left-arm' : 4,
  'right-arm' : 3,
  'left-leg' : 2,
  'right-leg' : 1,
}

export const show = (piece: keyof Pieces, lives: number) => {
  return lives < livesBelowShowPieces[piece] ? '' : 'hidden';
}