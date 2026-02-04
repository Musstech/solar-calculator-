import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const N8N_FETCH_LEADS_URL = process.env.N8N_FETCH_LEADS_URL;

        if (!N8N_FETCH_LEADS_URL) {
            return NextResponse.json([
                { id: "1", date: "2026-02-03", name: "Alice Johnson", bill: 45000, systemSize: "12 kW", status: "New" },
                { id: "2", date: "2026-02-02", name: "Bob Smith", bill: 120000, systemSize: "32 kW", status: "Contacted" },
                { id: "3", date: "2026-02-01", name: "Charlie Davis", bill: 30000, systemSize: "8 kW", status: "In Progress" },
                { id: "4", date: "2026-01-31", name: "David Wilson", bill: 65000, systemSize: "18 kW", status: "Closed" },
            ]);
        }

        const response = await fetch(N8N_FETCH_LEADS_URL);
        if (!response.ok) throw new Error('Failed to fetch from n8n');

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Leads Fetch Error:', error);
        return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
    }
}
