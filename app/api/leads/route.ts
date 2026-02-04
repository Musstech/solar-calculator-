import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const N8N_LEADS_WEBHOOK_URL = process.env.N8N_LEADS_WEBHOOK_URL;

        if (!N8N_LEADS_WEBHOOK_URL) {
            console.error('N8N_LEADS_WEBHOOK_URL is not defined');
            return NextResponse.json({ success: true, mock: true });
        }

        const response = await fetch(N8N_LEADS_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...body,
                timestamp: new Date().toISOString(),
                source: 'web_calculator'
            }),
        });

        if (!response.ok) throw new Error(`n8n responded with ${response.status}`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead Capture Error:', error);
        return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }
}
