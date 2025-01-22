function isValid(s: string): boolean {
  const stack = [];
  const bracketMap: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
    if (bracketMap[char]) {
      const topElement = stack.length > 0 ? stack.pop() : '#';

      if (bracketMap[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};