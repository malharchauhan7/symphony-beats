import { useCallback } from 'react';

const useWhatsAppRedirect = () => {
  const redirectToWhatsApp = useCallback((phoneNumber: string, message: string) => {
    if (!phoneNumber || !message) {
      console.error('Phone number and message are required.');
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, []);

  return redirectToWhatsApp;
};

export default useWhatsAppRedirect;
