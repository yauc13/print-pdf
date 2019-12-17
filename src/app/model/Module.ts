import { Question } from './Question';

export class Module {
    idModule?: number;
    descripModule?: string;
    nameModule?: string;
    obsModule?: string;
    flagModule?: string;
    tableNameModule?: string;
    typeModule?: string;
    resQuestionModule?: string;

    listQuestion?: Array<Question>;
}