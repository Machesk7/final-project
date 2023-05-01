import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://gfraeduaqdnaqtjvjrsz.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcmFlZHVhcWRuYXF0anZqcnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MDczMzEsImV4cCI6MTk5ODQ4MzMzMX0.juk6SesWBQ_ie_CaUeg0bZ2lVuN8AMAOReQ3BF3qa34'
export const supabase = createClient(supabaseUrl, supabaseKey)

