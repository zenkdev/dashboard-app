import { useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number): T {
  const ref = useRef<any>();
  return ((...args: any[]): void => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }) as T;
}
