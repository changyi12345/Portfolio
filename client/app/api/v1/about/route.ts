import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import About from '@/models/About';

export async function GET() {
    try {
        await connectDB();
        const about = await About.findOne();
        return NextResponse.json({ success: true, data: about });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
