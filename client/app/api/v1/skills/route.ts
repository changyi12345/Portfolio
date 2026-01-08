import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Skill from '@/models/Skill';

export async function GET() {
    try {
        await connectDB();
        const skills = await Skill.find();
        return NextResponse.json({ success: true, count: skills.length, data: skills });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
