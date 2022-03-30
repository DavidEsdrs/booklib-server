class ServerError extends Error {
    status: number;
    args: any;

    constructor({ message, status, args }: { message: string, status: number, args?: any }) {
        super(message);
        this.status = status;
        this.args = args;
    }
}

class InvalidBodyError extends ServerError {
    constructor({ message = "The given body is invalid!", args }: { message?: string, args?: any }) {
        super({
            message,
            status: 403,
            args
        });
    }
}

class InvalidFileTypeError extends ServerError {
    constructor({ message = "The given file type isn't suported!", args }: { message?: string, args?: any }) {
        super({
            message,
            status: 403,
            args
        });
    }
}

class UserAlreadyExistsError extends ServerError {
    constructor(message: string = "The given user already exists!") {
        super({
            message,
            status: 409,
        });
    }
}

class UnauthorizedRequestError extends ServerError {
    constructor(message: string = "The request is unnauthorized!") {
        super({
            message,
            status: 401
        });
    }
}

export {
    ServerError,
    InvalidBodyError,
    InvalidFileTypeError,
    UserAlreadyExistsError,
    UnauthorizedRequestError
}