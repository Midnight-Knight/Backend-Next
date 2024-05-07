import {NextResponse} from "next/server";
import {getKg, setKg} from "@/entities/food";

export async function POST(request: Request)
{
    const buffer: number | null = getKg();
    try {
        const data = await request.json();
        if (data.kg && typeof(data.kg) === "number") {
            setKg(data.kg);
            return NextResponse.json({status: getKg()}, {status: 200});
        }
        else
        {
            return NextResponse.json({status: "The kg key is missing or the key format is incorrect (it must be a number)"}, {status: 400});
        }
    }
    catch(err) {
        setKg(buffer);
        return NextResponse.json({status: "Error"}, {status: 500});
    }
}