import { DragonType } from '../enums/dragon-type.enum';
import { BaseModel } from './base/base.model';

export class Dragon extends BaseModel {
    name: string;
    history: string;
    type: DragonType;
    histories: any[];
}
