import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { bugSchema } from '@/app/validationSchemas';

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const body = await request.json();
  const validation = bugSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) {
    return NextResponse.json({ error: 'Invalid bug' }, { status: 404 });
  }

  const updatedBug = await prisma.bug.update({
    where: { id: bug.id },
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(updatedBug, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) {
    return NextResponse.json({ error: 'Invalid bug' }, { status: 404 });
  }

  await prisma.bug.delete({ where: { id: bug.id } });

  return NextResponse.json({});
}
