function PaletteModel (mR, MR, mG, MG, mB, MB) {

    mR = typeof mR !== 'undefined' ? mR : 0;
    MR = typeof MR !== 'undefined' ? MR : 255;
    mG = typeof mG !== 'undefined' ? mG : 0;
    MG = typeof MG !== 'undefined' ? MG : 255;
    mB = typeof mB !== 'undefined' ? mB : 0;
    MB = typeof MB !== 'undefined' ? MB : 255;

    this.MinRed = mR;
    this.MaxRed = MR;

    this.MinGreen = mG;
    this.MaxGreen = MG;

    this.MinBlue = mB;
    this.MaxBlue = MB;
};

//CREATES A 256*256 SQUARE FOR COLOR CHOSING
function PixelsPaletteModel(mR, MR, mG, MG, mB, MB) {

    mR = typeof mR !== 'undefined' ? mR : 0;
    MR = typeof MR !== 'undefined' ? MR : 255;
    mG = typeof mG !== 'undefined' ? mG : 0;
    MG = typeof MG !== 'undefined' ? MG : 255;
    mB = typeof mB !== 'undefined' ? mB : 0;
    MB = typeof MB !== 'undefined' ? MB : 255;

    this.MinRed = mR;
    this.MaxRed = MR;

    this.MinGreen = mG;
    this.MaxGreen = MG;

    this.MinBlue = mB;
    this.MaxBlue = MB;
};