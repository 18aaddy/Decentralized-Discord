import { stringify } from "querystring";

class Huddle01CreateRoomError extends Error {
  status;
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export async function GET() {
  const API_KEY = process.env.HUDDLE_API_KEY;

  if (!API_KEY) {
    const jsonResponse = new Response(
      JSON.stringify({ msg: "Missing API KEY" }),
      {
        status: 404,
        statusText: "API Key not found",
      }
    );

    return jsonResponse;
  }
  try {
    let title=toString(Math.random());
    const response = await fetch(
      "https://api.huddle01.com/api/v1/create-iframe-room",
      {
        method: "POST",
        body: JSON.stringify({
          title:title,
        }),
        headers: {
          "Content-type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Huddle01CreateRoomError(
        `Failed to create iframe room: ${response.statusText}`,
        response.status
      );
    }

    const roomId = (await response.json()).data.roomId;
    const jsonResponse = new Response(JSON.stringify({ roomId: roomId }));
    // Set the revalidate and Cache-Control headers on the response
    return jsonResponse;
  } catch (error) {
    console.log(error);
    if (error instanceof Huddle01CreateRoomError) {
      // Handle the Huddle01CreateRoomError error here
      const jsonResponse = new Response(
        JSON.stringify({ error: error.message }),
        {
          status: error.status,
        }
      );

      return jsonResponse;
    } else {
      // Handle the generic error here
      const jsonResponse = new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );

      return jsonResponse;
    }
  }
}
