var Rombo = /** @class */ (function () {
    function Rombo(DiaV, DiaH) {
        this.DiagonalV = DiaV;
        this.DiagonalH = DiaH;
    }
    Rombo.prototype.CalculoArea = function () {
        this.Area = this.DiagonalV * this.DiagonalH;
        return this.Area;
    };
    return Rombo;
}());
var rombo = new Rombo(4, 3.5);
rombo.CalculoArea();
