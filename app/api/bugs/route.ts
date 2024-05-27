import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createBugSchema } from '@/app/validationSchemas';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createBugSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newBug = await prisma.bug.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newBug, { status: 201 });
}
