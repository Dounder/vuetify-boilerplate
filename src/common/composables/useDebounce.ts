export default function useDebounce() {
  let timeout: NodeJS.Timeout;

  const debounce = (func: Function, delay = 300) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
  };

  return {
    debounce,
  };
}
