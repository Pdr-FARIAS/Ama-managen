export class UserError extends Error {
    constructor(menssage, statusCode) {
        super(menssage);
        this.name = "UserError";
        this.statusCode = statusCode;
    }
}
export class RegisterError extends Error {
    constructor(menssage, statusCode) {
        super(menssage);
        this.name = "RegisterError";
        this.statusCode = statusCode;
    }
}
export class ExtratoError extends Error {
    constructor(menssage, statusCode) {
        super(menssage);
        this.name = "ExtratoError";
        this.statusCode = statusCode;
    }
}
export class EnderecoError extends Error {
    constructor(menssage, statusCode) {
        super(menssage);
        this.name = "EnderecoError";
        this.statusCode = statusCode;
    }
}
export class EventoError extends Error {
    constructor(menssage, statusCode) {
        super(menssage);
        this.name = "EventoError";
        this.statusCode = statusCode;
    }
}