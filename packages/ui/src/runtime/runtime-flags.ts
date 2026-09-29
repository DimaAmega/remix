// TODO(bench): remove before merge.
//
// Opt-in flags set on `globalThis` by the benchmark harness before the runtime
// boots, so A/B variants can be toggled per page load without rebuilding.

/**
 * Reads a boolean runtime flag off `globalThis`.
 *
 * @param name Global property name, e.g. `__REMIX_LEGACY_ANCESTOR_LOOKUP__`.
 * @returns `true` only when the global is explicitly set to `true`.
 */
export function isRuntimeFlagEnabled(name: string): boolean {
  return (globalThis as any)[name] === true
}
