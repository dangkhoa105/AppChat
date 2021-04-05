export interface ListMessageProps {
  title: string;

  data?: readonly any[] | null | undefined;

  deleteRoomAction: (roomId: number) => void;
}
