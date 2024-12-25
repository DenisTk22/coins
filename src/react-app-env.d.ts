declare module '*.scss' {
    const classNames: Record<string, string>;
    export default classNames;
}

declare module 'react-native-filesystem';