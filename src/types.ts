/** Common */
export type FormValues = Record<string, any>;

/** Utilities */
export type Modify<T extends object, U extends object> = Omit<T, keyof U> & U;
