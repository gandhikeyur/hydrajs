import {
    ICase_Comment__c,
    ICase_Comment__c_fields,
    IApiComment
} from './models/comment';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
        export function upsertComment(apiComment: IApiComment): Promise<IApiComment>;
    }
}

export default hydrajs;
