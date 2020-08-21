import { DragonType } from '../enums/dragon-type.enum';

export class Dragon {
    id: number;
    createdAt: Date;
    name: string;
    history: string;
    type: DragonType;
    histories: any[];
}
