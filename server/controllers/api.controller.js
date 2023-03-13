import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  organization: "org-4HMfnkdYsKVSJiqSkOd7st4c",
  apiKey: process.env.OPENAI_API_KEY,
});

export const postRouteHandler = async (req, res) => {
  try {
    const { question } = req.body;

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${question}`,
      max_tokens: 10,
      temperature: 0,
    });

    res.status(200).json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
