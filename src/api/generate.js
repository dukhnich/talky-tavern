import OpenAI from "openai";
import ChatGPTFormatSerializer from "../services/serializer/ChatGPTFormatSerializer";
import Character from "../model/Character";

let openai;
let npc;
const serializer = new  ChatGPTFormatSerializer();
export function createOpenAiClient(apiKey) {
  if (!apiKey) {
    return;
  }
  openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
}

export function generateNPC(character) {
  npc = character;
}
function generatePrompt(character, messages, settings) {
  if (!(character && character instanceof Character)) {
    throw new Error(`Invalid argument exception: Instance of Character expected, ${typeof character} given`);
  }
  const characterInfo = character.serialize(serializer);
  return [
    {
      role: "system",
      content: `You are a character from fantasy world. Something about you: ${characterInfo}.
      ${settings?.language ? `Answer in ${settings.language}` : ''}`,
    },
    ...messages,
  ];
}

export async function generate(character, messages, settings) {
  if (!(Array.isArray(messages) && messages.length)) {
    throw new Error("Please add a message");
  }
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: generatePrompt(character, messages, settings),
      temperature: 0.6,
    });
    console.log(completion);
    return { result: completion};
  } catch (error) {
    console.log(error)
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      throw error;
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw new Error("An error occurred during your request.");
    }
  }
}
