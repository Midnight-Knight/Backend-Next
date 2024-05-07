import {getDoorOpen} from "@/entities/food";
import {NextResponse} from "next/server";


export async function GET(request: Request)
{
    return NextResponse.json({status: getDoorOpen()}, {status: 200});
}