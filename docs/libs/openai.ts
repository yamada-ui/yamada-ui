import { PATH } from "constant/path"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config({ path: PATH.ENV })

export const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
})
