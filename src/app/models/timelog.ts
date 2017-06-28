import { User } from './user';

export class Timelog {
    _id: string;
    _user: User;
    timeIn: string;
    timeOut: string;
    lateHrs: string;
    totalHrs: string;
}