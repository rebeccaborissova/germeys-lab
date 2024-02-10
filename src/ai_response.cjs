async function respond(prompt, age) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const dotenv = require("dotenv");
  dotenv.config();
  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const request = "Explain " + prompt + " to a " + age + " year old.";

  const result = await model.generateContent(request);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

//respond("cheese making", "10");