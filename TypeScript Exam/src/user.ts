import { UserRole, UserStatus } from "./enums.js";

export class User {
    constructor(
        public firstName : string,
        public lastName : string,
        public username : string,
        public password : string,
        public gender : string,
        public userRole: UserRole,
        public userPicture : string,
        public description : string,
        public status : UserStatus,
        public registrationTimestamp : Date,
        public lastModificationTimestamp : Date,
        public userId? : bigint,
    ) {}
}