import fetch from "node-fetch";   // Node < 18 only

//const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_KEY='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';

export const chatService = async (message) => {
  try {
    console.log("Request message:", message);
    console.log("Env:", OPENROUTER_API_KEY);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000", // ✅ must be valid
        "X-Title": "My Chat App",                // ✅ required
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant. Always format answers in Markdown. " +
                  "Write explanations in plain text and wrap code inside triple backticks ```language ... ```."
        },
        { role: "user", content: message }
      ],
    }),

    });

    const data = await response.json();
    console.log("OpenRouter response:", data);

    if (data?.choices?.length > 0) {
      return data.choices[0].message.content;
    } else {
      return "No response from AI.";
    }
  } catch (error) {
    console.error("ChatService Error:", error);
    return "Error: Unable to fetch response.";
  }
};
