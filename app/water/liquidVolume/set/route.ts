import {NextResponse} from "next/server";
import {getLiquidVolume, setLiquidVolume} from "@/entities/water";

export async function POST(request: Request)
{
    const buffer: number | null = getLiquidVolume();
    try {
        const data = await request.json();
        if (data.liquidVolume && typeof(data.liquidVolume) === "number") {
            setLiquidVolume(data.liquidVolume);
            return NextResponse.json({status: getLiquidVolume()}, {status: 200});
        }
        else
        {
            return NextResponse.json({status: "The liquidVolume key is missing or the key format is incorrect (it must be a number)"}, {status: 400});
        }
    }
    catch(err) {
        setLiquidVolume(buffer);
        return NextResponse.json({status: "Error"}, {status: 500});
    }
}