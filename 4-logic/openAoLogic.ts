import { execute } from "../2-dal/dalSql";
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

export async function dallE(query:string,type:string){
    const response = await openai.createImage({
        prompt: `${query},${type}`,
        n: 1,
        size: "256x256",
    });
    const image_url = response.data.data[0].url;
    return image_url
}


export async function saveImgToDB(id:number,body:string){
    const query = `UPDATE tasks SET imageUrl = '${body}' WHERE id = ${id}`
    const [results] = await execute(query);
    return results
}

export async function deleteImageFromDB(id:number){
    const query = `UPDATE tasks SET imageUrl = NULL WHERE id = ${id};`
    const [results] = await execute(query);
    return results;
}