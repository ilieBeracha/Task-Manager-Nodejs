import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-OXB7yWKT4ka2oRXy4xVihn0w",
    apiKey: '',
});

export const openai = new OpenAIApi(configuration);
