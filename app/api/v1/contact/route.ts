import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma-client";

export async function POST(request: Request) {
  const body = await request.json();

  let email = body.email;

  if (!email) {
    return NextResponse.json(
      {
        error: "Email is required",
      },
      { status: 403 }
    );
  }

  let contact = await prismaClient.contact.create({
    data: {
      email,
    },
  });

  return NextResponse.json(
    { message: "Thanks for registering! I'll reach out shortly" },
    { status: 200 }
  );
}
