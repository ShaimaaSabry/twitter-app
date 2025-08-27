// Reusable HTTP client utilities

export const DEFAULT_USER_ID = '1c9f8b2e-3d4e-4f5a-8b6c-7d8e9f0a1b2c'
export const API_ROOT = 'http://localhost:8080'

function safeParse(text: string) {
  try { return JSON.parse(text) } catch { return null }
}

/**
 * Perform a JSON request returning typed data.
 * Automatically attaches Accept / Content-Type headers and X-User-Id (unless provided explicitly).
 */
export async function jsonRequest<T>(url: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-User-Id': DEFAULT_USER_ID
  })

  if (init.headers) {
    const incoming = new Headers(init.headers as HeadersInit)
    incoming.forEach((value, key) => headers.set(key, value))
  }

  const res = await fetch(url, { ...init, headers })

  if (!res.ok) {
    const body = await safeParse(await res.text())
    const message = (body && (body.error || body.message)) || res.statusText
    throw new Error(`Request failed (${res.status}): ${message}`)
  }

  return res.json() as Promise<T>
}
