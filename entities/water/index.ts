let liquidVolume: number | null = null;

export function getLiquidVolume(){
    return liquidVolume;
}

export function setLiquidVolume(value: number | null){
    liquidVolume = value;
}