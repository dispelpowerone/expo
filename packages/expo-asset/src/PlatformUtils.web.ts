export const IS_MANAGED_ENV = false;

// Compute manifest base URL if available
export const manifestBaseUrl = null;

export async function downloadAsync(uri, hash, type, name): Promise<string> {
  return uri;
}

export function getManifest() {
  return {};
}
