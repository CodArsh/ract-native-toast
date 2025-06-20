// toast/toastService.ts
let showToast: (options: ToastOptions) => void = () => { };

export const setToastRef = (fn: typeof showToast) => {
    showToast = fn;
};

export interface ToastOptions {
    message1: string;
    message2?: string;
    type?: 'success' | 'error' | 'info' | 'warning' | 'announcement';
    duration?: number;
    position?: 'top' | 'bottom';
    borderColor?: string;
    textColor?: string;
    variant?: 'hard' | 'normal'
}

export const Toast = {
    show: (options: ToastOptions) => {
        showToast(options);
    }
};
