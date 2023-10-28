import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

export const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
})
