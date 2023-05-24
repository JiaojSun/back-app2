/**
 * Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:
 *
 * ```
 * export const EnumLikeObject = {
 *     Pending: 'pending',
 *     InProgress: 'inProgress',
 *     Completed: 'completed'
 * } as const
 * ```
 *
 * Use the `@enum` tag to make TypeDoc document this object as an enum.
 *
 * @enum
 */
export const EnumLikeObject = {
  Pending: 'pending',

  /** Indicates that a courier is en route delivering this order. */
  InProgress: 'inProgress',

  Completed: 'completed'
} as const;