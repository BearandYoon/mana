import { IEntity } from './entity';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  entity: IEntity;
  navigation: any;
}
