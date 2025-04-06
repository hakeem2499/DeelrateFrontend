export type FormResponse<T = any> = {
    status: 'success' | 'error';
    message: string;
    errors?: Array<{
        path: string;
        message: string;
    }>;
    data?: T;
};