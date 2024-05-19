import Default from "@/types/default";

export type typeFood = number | Default;

let kg: typeFood = "unknown";
const fullCm: number = 10;

export function getKg(): typeFood {
    return kg;
}

export function setKg(cm: typeFood){
    kg = cm;
}
