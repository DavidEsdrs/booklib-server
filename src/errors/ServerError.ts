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
    constructor({ message = "The given body is invalid!", args }: { message: string, args?: any }) {
        super({
            message,
            status: 403,
            args
        });
    }
}

export {
    ServerError,
    InvalidBodyError
}