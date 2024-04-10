import { useEffect, useState } from 'react';

const useDetectMobileKeyboard = (
  minKeyboardHeight: number = 300,
  defaultValue?: boolean
) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(defaultValue);

  const isBrowser = () => typeof window !== 'undefined';

  useEffect(() => {
    if (isBrowser()) {
      const visualViewPort = window.visualViewport;
      const visualViewPortHeight = window.visualViewport?.height || 0;

      if (visualViewPortHeight > 0) {
        const listener = () => {
          const newState =
            window.screen.height - minKeyboardHeight > visualViewPortHeight;
          if (isKeyboardOpen != newState) {
            setIsKeyboardOpen(newState);
          }
        };
        if (
          typeof visualViewport !== 'undefined' &&
          typeof visualViewPort !== null
        ) {
          window.visualViewport?.addEventListener('resize', listener);
        }
        return () => {
          if (
            typeof visualViewport !== 'undefined' &&
            typeof visualViewPort !== null
          ) {
            window.visualViewport?.removeEventListener('resize', listener);
          }
        };
      }
    }
  }, []);

  return { isKeyboardOpen };
};

export default useDetectMobileKeyboard;
