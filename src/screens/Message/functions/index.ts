import {allMessages} from '../../../res';

export const arrFilter = (text: string) => {
  return allMessages.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase()),
  );
};
