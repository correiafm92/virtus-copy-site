// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vkwtygroaqnshmsuaswt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrd3R5Z3JvYXFuc2htc3Vhc3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0ODkxMDEsImV4cCI6MjA1NjA2NTEwMX0.A0W419KZQEHlIztBdrNZJBS115HHxmm7QgS2t5rFXTY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);