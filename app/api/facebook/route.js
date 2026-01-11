import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const body = await req.json();
    await prisma.facebook.create({ data: body });

    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const data = await prisma.facebook.findMany({
      orderBy: [{ date: "desc" }],
    });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
