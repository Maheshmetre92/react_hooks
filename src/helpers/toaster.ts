import toast from 'react-hot-toast';

export const toaster = {
  success: (message: string, duration?: number) => {
    toast.success(message, {
      position: 'bottom-right',
      duration,
      style: {
        background: '#1976d2',
        color: '#fff',
      },
    });
  },
  error: (message: string, duration?: number) => {
    toast.error(message, { position: 'bottom-right', duration });
  },
  custom: (jsx: JSX.Element) => {
    toast.custom(jsx, { position: 'bottom-right' });
  },
  loading: (message: string) => {
    toast.loading(message, { position: 'bottom-right' });
  },
};
