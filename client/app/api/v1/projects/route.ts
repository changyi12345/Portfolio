import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/models/Project';

export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find();
        return NextResponse.json({ success: true, count: projects.length, data: projects });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
