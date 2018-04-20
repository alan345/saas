import { User } from '../user/user.model';
// import { Project } from '../project/project.model';

import { Quote } from '../quote/quote.model';
import { UserCalendar } from '../userCalendar/userCalendar.model';


export class Notification {
  _id = '';
  currency = '';
  isRead = false;
  quotes: Quote[] = [];
  userCalendars: UserCalendar[] = [];
  users: User[] = []
  typeObject = '';
  nameNotification = '';
  amount = 0;
}
