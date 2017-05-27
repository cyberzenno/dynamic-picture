function HeartModel(x, y, w, h, c, sb, sc, l, cr) {

    this.X = x || 0;
    this.Y = y || 0;
    this.Width = w || 0;
    this.Height = h || 0;
    this.Color = c || new ColorModel(255, 255, 255);
    this.ShadowBlur = sb || 0;
    this.ShadowColor = sc || new ColorModel(0, 0, 0);
    this.Layer = l || 0;

}