interface Item {
  name?: string;
  time?: string;
  content?: string;
}

export interface ItemMessageProps {
  item?: Item | any;

  index: number;

  indexScroll: number;

  setIndexScroll: (value: number) => void;

  onDelete: (roomId: number) => void;
}
