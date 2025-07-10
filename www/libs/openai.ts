import { PATH } from "constant/path"
import dotenv from "dotenv"
import { OpenAI } from "openai"

dotenv.config({ path: PATH.ENV })

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
})
