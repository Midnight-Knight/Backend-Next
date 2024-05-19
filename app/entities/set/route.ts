import {NextResponse} from "next/server";
import {setDoor, typeDoor} from "@/entities/door";
import {setKg, typeFood} from "@/entities/food";
import {setWaterLevel, typeWaterLevel} from "@/entities/waterLevel";
import {setWaterTurbidity, typeWaterTurbidity} from "@/entities/waterTurbidity";

export async function POST(request: Request)
{
    const buffer: {
        door: typeDoor,
        kg: typeFood,
        waterLevel: typeWaterLevel,
        waterTurbidity: typeWaterTurbidity
    } = {
        door: "error",
        kg: "error",
        waterLevel: "error",
        waterTurbidity: "error",
    }
    try {
        const {message} = await request.json();
        if (message.door === "error" || message.door === "unknown" || typeof(message.door) === "boolean") {
            buffer.door = message.door;
        }
        else
        {
            buffer.door = "unknown";
        }

        if (message.kg === "error" || message.kg === "unknown" || typeof(message.kg) === "number" ) {
            buffer.kg = message.kg;
        }
        else
        {
            buffer.kg = "unknown";
        }

        if (message.waterLevel === "error" || message.waterLevel === "unknown" || typeof(message.waterLevel) === "boolean" ) {
            buffer.waterLevel = message.waterLevel;
        }
        else
        {
            buffer.waterLevel = "unknown";
        }

        if (message.waterTurbidity === "error" || message.waterTurbidity === "unknown" || typeof(message.waterTurbidity) === "boolean" ) {
            buffer.waterTurbidity = message.waterTurbidity;
        }
        else
        {
            buffer.waterTurbidity = "unknown";
        }

        setDoor(buffer.door);
        setKg(buffer.kg);
        setWaterLevel(buffer.waterLevel);
        setWaterTurbidity(buffer.waterTurbidity);

        return NextResponse.json({message: message}, {status: 200});
    }
    catch(err) {
        setDoor(buffer.door);
        setKg(buffer.kg);
        setWaterLevel(buffer.waterLevel);
        setWaterTurbidity(buffer.waterTurbidity);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}