import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wnkflyhijxygezvcyhuj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indua2ZseWhpanh5Z2V6dmN5aHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NjQxNDgsImV4cCI6MjA1NDU0MDE0OH0.Qx_R_zoMl9dFJPPtUJ90cw6lbbP5KCOflHCkOiUhsPY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
