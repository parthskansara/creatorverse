import { createClient } from '@supabase/supabase-js';

const URL = "https://gzegxawveboczqsxxyud.supabase.co";
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6ZWd4YXd2ZWJvY3pxc3h4eXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2OTkyMjgsImV4cCI6MjAzNzI3NTIyOH0.ljySImRevgg_-zygG43v57AmLIket3r9Fs7vbWxDRw4';

export const supabase = createClient(URL, API_KEY);