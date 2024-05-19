import {NextResponse} from "next/server";
import {getDoor} from "@/entities/door";
import {getKg} from "@/entities/food";
import {getWaterLevel} from "@/entities/waterLevel";
import {getWaterTurbidity} from "@/entities/waterTurbidity";


export async function GET(request: Request)
{
    return NextResponse.json({message: {door: getDoor(), kg: getKg(), waterLevel: getWaterLevel(), waterTurbidity: getWaterTurbidity()}}, {status: 200});
}