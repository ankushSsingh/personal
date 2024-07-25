import { NextRequest, NextResponse } from 'next/server';
import { deletethought, readthoughts } from '@/app/actions/actions'; // Adjust the import path as necessary

export async function GET(req: NextRequest) {
  try {
    const thoughts = await readthoughts();
    return NextResponse.json(thoughts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch thoughts' }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await deletethought(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete thought:', error);
    return NextResponse.json({ error: 'Failed to delete thought' }, { status: 500 });
  }
}


