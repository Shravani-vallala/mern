import { chatService } from "../services/chatService.js";

export const ChatController = async (req, res) => {
  console.log("ChatController triggered ✅");
  try {
    console.log("ChatController reached ✅");  // test
    console.log("Request body:", req.body);   // log input

    const { message } = req.body;
    if (!message) {
      console.log("❌ No message found");
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await chatService(message);
    console.log("AI Reply:", reply); // should print

    res.json({ reply });
  } catch (error) {
    console.error("ChatController Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
