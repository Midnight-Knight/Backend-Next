import Default from "@/types/default";

export type typeWaterTurbidity = boolean | Default;

let waterEnough: typeWaterTurbidity = "unknown";

export function getWaterTurbidity(): typeWaterTurbidity {
    return waterEnough;
}

export function setWaterTurbidity(state: typeWaterTurbidity){
    waterEnough = state;
}