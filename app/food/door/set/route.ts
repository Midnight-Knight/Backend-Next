import {NextResponse} from "next/server";
import {getDoorOpen, setDoorOpen} from "@/entities/food";

export async function GET(request: Request)
{
    const buffer: boolean = getDoorOpen();
    try {
        setDoorOpen(!getDoorOpen());
        return NextResponse.json({status: getDoorOpen()}, {status: 200});
    }
    catch(err) {
        setDoorOpen(buffer);
        return NextResponse.json({status: "error"}, {status: 500});
    }
}