/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function funSqrt(x: number): number {
  return Math.sqrt(x);
}

/**
 * A function that takes in an options object and makes an HTTP call.
 *
 * The options type is written directly in the function definition.
 */
export function funMakeHttpCallB(options: {
  url: string;

  /** e.g. GET, POST, PUT, DELETE */
  method: string;

  /** e.g. `{ 'Authorization': 'Bearer <access token>' }` */
  headers: Record<string, string>;

  body: string | Blob | FormData;
  mode: 'cors' | 'no-cors' | 'same-origin';
}): Promise<Response> {
  const { url, method, headers, body, mode } = options;

  return fetch(url, { method, headers, body, mode });
}
