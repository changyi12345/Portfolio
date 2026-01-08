import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Experience from '@/models/Experience';

export async function GET() {
    try {
        await connectDB();
        const experiences = await Experience.find().sort({ startDate: -1 });
        return NextResponse.json({ success: true, count: experiences.length, data: experiences });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
