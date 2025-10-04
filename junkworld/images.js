/**
 * Supabase credentials for JunkWorld prototype.
 * WARNING: Do not expose the service role secret in client-side code in production.
 * Keep this file private or move secrets to a secure server-side environment.
 */
export const SUPABASE_URL = "https://zkabbhbgzrkdwzshdbed.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprYWJiaGJnenJrZHd6c2hkYmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NTk3ODcsImV4cCI6MjA3NTAzNTc4N30.HTHtzKVwIWLKh8n4iITmKDdHzkQkvOhU4-OMRgqLuuc";
export const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprYWJiaGJnenJrZHd6c2hkYmVkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQ1OTc4NywiZXhwIjoyMDc1MDM1Nzg3fQ.43Kh4T9DnLUzuJGuFuKcZ5e0Vnt4FLRKvD4s9jF6hic";

/**
 * Optional helper: if you load supabase-js via CDN in index.html
 * <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
 * you can get a client like this:
 */
export function getSupabaseClient() {
  if (typeof window !== "undefined" && window.supabase) {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  console.warn("supabase-js not found on window. Include the CDN script in index.html.");
  return null;
}
