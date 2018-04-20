import { Form } from '../picture/form/form.model';
import { User } from '../user/user.model';
// import { Project } from '../project/project.model';

import { Quote } from '../quote/quote.model';
import { UserCalendar } from '../userCalendar/userCalendar.model';


export class Notification {
  _id: string = '';
  isRead: boolean = false;
  quotes: Quote[] = []
  userCalendars: UserCalendar[] = []
  users: User[] = []
  typeObject: string = '';
  nameNotification: string = '';
}
