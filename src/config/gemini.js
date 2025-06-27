//const apiKey = "AIzaSyAG8Jgg8DIUg88L3NsH1ZZIZvbAbinWND4";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyAG8Jgg8DIUg88L3NsH1ZZIZvbAbinWND4";
  const genAI = new GoogleGenerativeAI("AIzaSyAG8Jgg8DIUg88L3NsH1ZZIZvbAbinWND4");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try{
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log("Result Structure:",result);
    if(result && typeof result.text === "function"){
      return result.text();
  } else if( result && result.response && typeof result.response.text === "function"){
    return result.response.text();
  } else if (result && typeof result === "string") {
    return result;
  } else if (result && result.response && typeof result.response === "string"){
    return result.response;
  } else {
    console.error("Unrecognized response format:",result);
    return "I couldn't process that request properly";
  }
} catch(error){
  console.error("Error in run function:",error);
  return "There was an error processing your request:" + error.message;
}
  }
  

  
  export default run;