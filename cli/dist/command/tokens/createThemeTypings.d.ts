declare type Component = {
    sizes: string[];
    variants: string[];
};
export declare const printComponent: (components: Record<string, Component>) => string;
export declare const print: (unions: Record<string, string[]>) => string;
export declare const extractComponents: ({ components, }: {
    components: any;
}) => Record<string, Component>;
export declare const extractPaths: (target: any, maxDepth?: number) => string[];
export declare const extractKeys: (theme: any, key: string) => string[];
export declare const createThemeTypings: (theme: any) => Promise<string>;
export {};
