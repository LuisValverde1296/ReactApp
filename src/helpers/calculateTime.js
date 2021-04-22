
export const calculateTime = async(counter) => {
    const seconds = counter%60;
    const minutes = parseInt(counter/60)%60;
    const hours = parseInt(minutes/60);

    return {seconds, minutes, hours};
}