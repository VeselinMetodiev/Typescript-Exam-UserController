import { AppStateEnum } from "./enums.js";
import { User } from "./user.js";
import { ValidationConfig, Validators } from "./validate.js";

export interface AppState {
    postFormErrors: string[];
    postFormValidationConfig: ValidationConfig<User>,
    appState: AppStateEnum
}

export const AppStateStore : AppState = {
    appState: AppStateEnum.SIGNIN,
    postFormValidationConfig: { //Field name from User + validation method from validate.js
        username: [Validators.required(), Validators.len(5, 15)],
        firstName: [Validators.required(), Validators.len(2, 15)],
        lastName: [Validators.required(), Validators.len(2, 15)],
        description: [Validators.required(), Validators.len(0, 512)],
        password: [Validators.pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/)],
        userPicture: [Validators.pattern(/https:\/\/(www)?(.\w+.|\/|)+(png|jpg|jpeg)/)],
        gender:[Validators.pattern(/Male | Female/)]
    },
    postFormErrors: []
}