// import { Form } from '../../../picture/form/form.model';
import { User } from '../../../user/user.model';

export class DrawingSignature {
  // isSigned = false;
  namePicture = '';
  base64 = '';
  base64Temp = '';
  dateDrawing: Date = new Date()
  users: User[] = [];
  isSigned = false;
  isSignedWihtoutSignature = false;
  comment = '';
  // backgroundForms: Form[] = []
}
