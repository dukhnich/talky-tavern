import OpenAI from "openai";

let openai;
let npc;
export function createOpenAiClient(apiKey) {
  if (!apiKey) {
    return;
  }
  openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
}

export function generateNPC(character) {
  npc = character;
}
function generatePrompt(character, message) {
  const characterInfo = Object.entries(character || {}).reduce(
    (str, [key, value]) => `${str}, your ${key} is ${value} `,
    "",
  );
  return [
    {
      role: "system",
      content: `You are a character from fantasy world. Something about you: ${characterInfo}. Answer in Czech`,
    },
    {
      role: "user",
      content: message,
    },
  ];
}

export async function generate(character, message) {
  if (message.trim().length === 0) {
    throw new Error("Please enter a message");
  }
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: generatePrompt(character, message),
      temperature: 0.6,
    });
    console.log(completion);
    return { result: completion.choices[0].message.content };
  } catch (error) {
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
