let doorOpen: boolean = true;
let kg: number | null = null;

export function getDoorOpen(){
    return doorOpen;
}

export function setDoorOpen(status: boolean){
    doorOpen = status;
}

export function getKg(): number | null {
    return kg;
}

export function setKg(value: number | null){
    kg = value;
}
