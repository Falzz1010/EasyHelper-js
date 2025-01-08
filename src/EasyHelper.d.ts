declare module 'easy-helper-js' {
  export interface EasyHelper {
    select(selector: string): HTMLElement | null;
    setText(selector: string, text: string): void;
    formatNumber(num: number): string;
    isEmpty(value: any): boolean;
    formatTime(ms: number): string;
    on(selector: string, event: string, callback: Function): void;
    average(numbers: number[]): number;
    isValidEmail(email: string): boolean;
    shuffle<T>(array: T[]): T[];
    unique<T>(array: T[]): T[];
    delay(ms: number): Promise<void>;
    getStorageItem(key: string): any;
    setStorageItem(key: string, value: any, expiryHours?: number): void;
    deepClone<T>(obj: T): T;
    formatCurrency(amount: number, currency?: string): string;
    getUrlParam(param: string): string | null;
    formatDate(date: Date | string): string;
    isStrongPassword(password: string): boolean;
    generateRandomString(length?: number, type?: 'alphanumeric' | 'numeric' | 'alpha'): string;
    formatFileSize(bytes: number): string;
    timeAgo(date: Date | string): string;
    truncateText(text: string, length?: number): string;
    toQueryString(params: Record<string, any>): string;
    debounce(func: Function, wait?: number): Function;
    getCookie(name: string): string | null;
    setCookie(name: string, value: string, days?: number): void;
  }

  const EasyHelper: EasyHelper;
  export default EasyHelper;
} 