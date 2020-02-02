"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BuscadorComponent = /** @class */ (function () {
    function BuscadorComponent(activatedRoute, _heroesService, router) {
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.router = router;
        this.heroes = [];
    }
    BuscadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.termino = params['termino'];
            _this.heroes = _this._heroesService.buscarHeroes(params['termino']);
            console.log(_this.heroes);
        });
    };
    BuscadorComponent.prototype.verHeroe = function (idx) {
        this.router.navigate(['/heroe', idx]);
    };
    BuscadorComponent = __decorate([
        core_1.Component({
            selector: 'app-buscador',
            templateUrl: './buscador.component.html'
        })
    ], BuscadorComponent);
    return BuscadorComponent;
}());
exports.BuscadorComponent = BuscadorComponent;
