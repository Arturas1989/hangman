export type Message = {
  messageClassName: 'show-box win' | 'show-box lose' | 'not-visible';
  message: string;
};

export type Messages = {[key: string]: Message};
