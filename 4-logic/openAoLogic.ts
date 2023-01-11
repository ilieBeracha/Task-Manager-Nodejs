import { openai } from "../2-dal/openAi";

export async function chatGpt(query:string) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `give me one task related to ${query}, and add sauce`,
        temperature: 0.6,
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text
}
