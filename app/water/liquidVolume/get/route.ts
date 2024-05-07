import {NextResponse} from "next/server";
import {getLiquidVolume} from "@/entities/water";


export async function GET(request: Request)
{
    return NextResponse.json({status: getLiquidVolume()}, {status: 200});
}