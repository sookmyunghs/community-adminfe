export interface LoggerOptions {
    id: string;
    enabled: boolean;
}
export declare class Logger {
    static instances: {
        [key: string]: Logger;
    };
    private readonly id;
    private readonly enabled;
    private readonly start;
    constructor({ id, enabled }: LoggerOptions);
    debug(...args: unknown[]): void;
    getTime(): number;
    static create(options: LoggerOptions): void;
    static destroy(id: string): void;
    static getInstance(id: string): Logger;
    info(...args: unknown[]): void;
    error(...args: unknown[]): void;
}
