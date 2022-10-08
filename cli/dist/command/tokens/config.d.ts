export declare type Config = {
    key: string;
    maxScanDepth?: number;
    filter?: (value: string) => boolean;
    flatMap?: (value: string) => string | string[];
};
export declare const config: Config[];
