const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: "Hello!",
    },
  ],

  input_data: {
    input_string: [
      {
        role: "user",
        content: "I am going to Paris, what should I see?",
      },
      {
        role: "assistant",
        content:
          "Paris, the capital of France, is known for its stunning architecture, art museums, historical landmarks, and romantic atmosphere. Here are some of the top attractions to see in Paris:\n\n1. The Eiffel Tower: The iconic Eiffel Tower is one of the most recognizable landmarks in the world and offers breathtaking views of the city.\n2. The Louvre Museum: The Louvre is one of the world's largest and most famous museums, housing an impressive collection of art and artifacts, including the Mona Lisa.\n3. Notre-Dame Cathedral: This beautiful cathedral is one of the most famous landmarks in Paris and is known for its Gothic architecture and stunning stained glass windows.\n\nThese are just a few of the many attractions that Paris has to offer. With so much to see and do, it's no wonder that Paris is one of the most popular tourist destinations in the world.",
      },
      {
        role: "user",
        content: "What is so great about #1?",
      },
    ],

    parameters: {
      temperature: 0.9,
      top_p: 1,
      do_sample: true,
      max_new_tokens: 500,
    },
  },
};

module.exports = requestBody;
