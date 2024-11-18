
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wxovmviuyjtoimbjsgdw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4b3Ztdml1eWp0b2ltYmpzZ2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTM5NDksImV4cCI6MjA0MjY4OTk0OX0.AR1eY4vwG2ggnCQOs-Qo-21zSedWfOoJ1EpkKcY3lrw'
export const supabase = createClient(supabaseUrl, supabaseKey)