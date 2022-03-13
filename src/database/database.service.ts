export interface DBConfigInterface {
    host: string;
    port: number;
    user: string;
    pass: string;
    name: string;
}

import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()

export class DatabaseService {

    constructor() {}
}
