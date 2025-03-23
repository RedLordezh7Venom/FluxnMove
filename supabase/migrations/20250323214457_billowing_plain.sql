/*
  # Create user settings and trade profiles

  1. New Tables
    - `user_settings`
      - `id` (uuid, primary key, references auth.users)
      - `profit_threshold` (decimal)
      - `slippage_tolerance` (decimal)
      - `selected_dexes` (text array)
      - `selected_strategy` (text)
      - `gas_limit` (integer)
      - `max_hops` (integer)
      - `email_notifications` (boolean)
      - `telegram_notifications` (boolean)
      - `discord_notifications` (boolean)
      - `telegram_bot_token` (text)
      - `discord_webhook` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `user_settings` table
    - Add policies for authenticated users to manage their own settings
*/

CREATE TABLE IF NOT EXISTS user_settings (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  profit_threshold decimal DEFAULT 0.5,
  slippage_tolerance decimal DEFAULT 1.0,
  selected_dexes text[] DEFAULT ARRAY['uniswap', 'sushiswap'],
  selected_strategy text DEFAULT 'basic',
  gas_limit integer DEFAULT 500000,
  max_hops integer DEFAULT 3,
  email_notifications boolean DEFAULT true,
  telegram_notifications boolean DEFAULT false,
  discord_notifications boolean DEFAULT false,
  telegram_bot_token text DEFAULT '',
  discord_webhook text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own settings"
  ON user_settings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own settings"
  ON user_settings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own settings"
  ON user_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);