import { Messages } from "../types/Message";
import { Pieces } from "../types/Pieces";

export const messages: Messages = {
  'win': {messageClassName: 'show-box win', message: 'You have won the game. Press any letter key to continue'},
  'lose': {messageClassName: 'show-box lose', message: 'You have lost the game. Press any letter key to continue'},
  'default': {messageClassName: 'not-visible', message: ''}
}

export const livesBelowShowPieces: Pieces = {
  'head' : 6,
  'body' : 5,
  'left-arm' : 4,
  'right-arm' : 3,
  'left-leg' : 2,
  'right-leg' : 1,
}