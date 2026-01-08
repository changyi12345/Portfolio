import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import About from '@/models/About';
import Skill from '@/models/Skill';
import Project from '@/models/Project';
import Experience from '@/models/Experience';

export async function POST(req: Request) {
  const token = req.headers.get('x-seed-token') || '';
  const guard = process.env.ADMIN_SEED_TOKEN || '';
  if (!guard || token !== guard) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await connectDB();

    const results: Record<string, unknown> = {};

    // About
    const aboutCount = await About.countDocuments();
    if (aboutCount === 0) {
      const about = await About.create({
        name: 'Your Name',
        role: 'Full Stack Developer',
        bio: 'I specialize in building exceptional digital experiences with Next.js and Node.js.',
        profileImage: '/favicon.ico',
      });
      results.about = { created: true, id: about._id };
    } else {
      results.about = { skipped: true };
    }

    // Skills
    const skillsCount = await Skill.countDocuments();
    if (skillsCount === 0) {
      await Skill.insertMany([
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
      ]);
      results.skills = { created: true };
    } else {
      results.skills = { skipped: true };
    }

    // Projects
    const projectsCount = await Project.countDocuments();
    if (projectsCount === 0) {
      await Project.insertMany([
        {
          title: 'Portfolio',
          description: 'Personal portfolio built with Next.js',
          techStack: ['Next.js', 'TypeScript', 'Tailwind'],
          githubLink: 'https://github.com/your/portfolio',
          liveDemo: 'https://your-portfolio.vercel.app',
          image: '/vercel.svg',
        },
        {
          title: 'API Starter',
          description: 'REST API boilerplate with Node.js',
          techStack: ['Node.js', 'Express', 'MongoDB'],
          githubLink: 'https://github.com/your/api-starter',
          liveDemo: '',
          image: '/next.svg',
        },
      ]);
      results.projects = { created: true };
    } else {
      results.projects = { skipped: true };
    }

    // Experience
    const expCount = await Experience.countDocuments();
    if (expCount === 0) {
      await Experience.insertMany([
        {
          company: 'Example Corp',
          role: 'Software Engineer',
          startDate: new Date('2023-01-01'),
          endDate: null,
          description: 'Building web apps with Next.js and Node.js',
        },
      ]);
      results.experience = { created: true };
    } else {
      results.experience = { skipped: true };
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
