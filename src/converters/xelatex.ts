export const properties = {
  from: {
    text: [],
  },
  to: {
    text: [],
  },
};

export function convert(): Promise<string> {
  return Promise.reject(
    "XeLaTeX conversion is disabled in Midwest24 Core Convert for security.",
  );
}
