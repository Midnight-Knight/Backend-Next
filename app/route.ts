import {NextResponse} from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({"message": "Welcome to the API!"}, {status: 200});
}