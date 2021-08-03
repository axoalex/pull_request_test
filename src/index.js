// Test: RegExp is colored wrong? 

const scale = getSpecifiedScale(); 

const getScale = ( dataValues: number, fontSize: number) => {
    const output = (dataValues * 0.9) / fontSize; // 0.9 = 90%

    return output > 1 ? 1 : output;
}
