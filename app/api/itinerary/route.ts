import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { location, days } = await req.json();
  console.log('[API] Gemini Prompt:', { location, days });

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

    const prompt = `
You are a helpful and creative travel assistant.

The user is visiting the country of ${location} (this is a country, not a U.S. state).
Do not ask follow-up questions. Just directly output the response.

Create a detailed, personalized ${days}-day travel itinerary.

Each day should include:
- Morning activity
- Afternoon activity
- Evening activity

Be fun, realistic, and unique to ${location}.
Format it like:

Day 1:
- Morning:
- Afternoon:
- Evening:
...
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const itinerary = response.text();

    return NextResponse.json({ itinerary });
  } catch (err: any) {
    console.error('[API] Gemini ERROR:', err.message || err);
    return NextResponse.json({ error: 'Failed to generate itinerary' }, { status: 500 });
  }
}
