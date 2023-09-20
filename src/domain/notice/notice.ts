export class Notice {
  id?: string;
  title: string;
  content: string;
  type: string;
  userId: string;
}

export const NoticeType = {
  ALL: 'ALL',
  BASKETBALL: 'BASKETBALL',
  SOCCER: 'SOCCER',
  BADMINTON: 'BADMINTON',
  VOLLEYBALL: 'VOLLEYBALL',
};
