webpackJsonp([5],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ultimapartida_ultimapartida__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jugador_jugador__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_partida_partida__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_carta_carta__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var PartidaPage = /** @class */ (function () {
    function PartidaPage(navParams, cAlert, navCtrl, ultProvider, jProvider, pProvider, cProvider) {
        this.navParams = navParams;
        this.cAlert = cAlert;
        this.navCtrl = navCtrl;
        this.ultProvider = ultProvider;
        this.jProvider = jProvider;
        this.pProvider = pProvider;
        this.cProvider = cProvider;
        this.Vpartida = [];
        this.ConfirmarChorro = false;
        this.ConfirmarCuatroEsquinas = false;
        this.ConfirmarCentro = false;
        this.CuatroEsquia = true;
        this.Chorro = true;
        this.Centro = true;
        //Puntos
        this.PuntoChorro = 0;
        this.PuntoBuenas = 100;
        this.PuntoCuatroEsquinas = 0;
        this.PuntoCentro = 0;
        //Hover
        this.ocultar1 = true;
        this.ocultarjugadas = false;
        this.OcultarSlider = false;
        this.isenabled = true;
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.Stop = false;
        this.tiempo = 0;
        this.idCarta = 0;
        this.ImageArray = [];
        this.cargarArray = [];
        this.Baraja = [];
        this.cartasJugador = [];
        this.fila1 = [];
        this.fila2 = [];
        this.fila3 = [];
        this.fila4 = [];
        this.chorroArray1 = [];
        this.chorroArray2 = [];
        this.chorroArray3 = [];
        this.chorroArray4 = [];
        this.esq4Array = [];
        this.centroArray = [];
        this.buenaArray = [];
        this.clickCarta = false;
        this.cartasPasadas = [];
        this.partida = navParams.get("partida");
        this.unirsePartida();
        this.jugador = navParams.get("jugador");
        this.cargarArray.push(this.partida.barajas[0]);
        console.log(this.partida.clave);
        this.ultpartida = {
            clavePartida: this.partida.clave,
            jGanador: {
                clavePartida: 0,
                idJugador: 0,
                nombre: "",
                puntos: 0,
                rol: 0,
            },
            tiempo: 0,
            buena: 0,
            centro: 0,
            chorro: 0,
            esq4: 0,
        };
        this.ConfirmarChorro = false;
        this.ConfirmarCuatroEsquinas = false;
        this.ConfirmarCentro = false;
        this.ImageArray = this.partida.barajas;
        for (var i = 0; i < this.ImageArray.length; i++) {
            this.Baraja.push(this.agregarCarta(i));
        }
        this.fila1 = this.mostrarCartas(4);
        this.fila2 = this.mostrarCartas(4);
        this.fila3 = this.mostrarCartas(4);
        this.fila4 = this.mostrarCartas(4);
    }
    PartidaPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = "assets/audios/Botones.mp3";
        this.audio.load();
        this.audio.play();
    };
    PartidaPage.prototype.cargarC = function () {
        var _this = this;
        var cont = 0;
        this.cargaInterval = setInterval(function () {
            console.log(_this.partida.barajas[cont]);
            _this.cargarArray.push(_this.partida.barajas[cont]);
            var carta = {
                idCarta: _this.partida.barajas[cont],
                imgPath: _this.partida.barajas[cont],
                textColor: "red.disabled",
                buena: true,
            };
            _this.cartasPasadas.push(carta);
            _this.cartaSrc = "assets/imgs/" + _this.partida.barajas[cont] + ".png";
            _this.OcultarSlider = true;
            _this.audio = new Audio();
            _this.audio.src =
                "assets/audios/esp/" + _this.partida.barajas[cont] + ".mp3";
            _this.audio.load();
            _this.audio.play();
            console.log(_this.audio.src);
            cont++;
            if (cont == 54) {
                clearInterval(_this.cargaInterval);
            }
        }, 5000);
    };
    // playAudio() {
    //   this.audio = new Audio();
    //   this.audio.src = 'assets/audios/1.mp3';
    //   this.audio.play();
    //   this.audio.loop = true;
    // }
    PartidaPage.prototype.mostrarCartas = function (i) {
        var _this = this;
        var cartas = [];
        var foundIt = false;
        for (var j = 0; j < i; j++) {
            var _loop_1 = function () {
                var pos = Math.floor(Math.random() * (54 - 1) + 1);
                this_1.Baraja.forEach(function (x) {
                    if (x.idCarta == pos) {
                        var index = _this.Baraja.indexOf(x);
                        var cambioCarta = _this.Baraja.splice(index, 1).pop();
                        cartas.push(cambioCarta);
                        _this.cartasJugador.push(cambioCarta);
                        foundIt = true;
                    }
                });
            };
            var this_1 = this;
            while (!foundIt) {
                _loop_1();
            }
            foundIt = false;
        }
        return cartas;
    };
    PartidaPage.prototype.agregarCarta = function (i) {
        var carta = {
            idCarta: i += 1,
            imgPath: i,
            textColor: "red.disabled",
            buena: false,
        };
        this.cProvider.Add(carta);
        return carta;
    };
    PartidaPage.prototype.Confirmar = function () {
        this.partida = {
            clave: this.partida.clave,
            confirm: true,
            jugadores: this.partida.jugadores,
            barajas: this.partida.barajas,
            totalJugadores: this.partida.totalJugadores,
            jugadas: this.partida.jugadas,
        };
        this.pProvider.confirm(this.partida);
    };
    PartidaPage.prototype.unirsePartida = function () {
        var _this = this;
        var int = setInterval(function () {
            _this.pProvider
                .GetAll() //si se ingresaron los campos,
                //se obtiene la informacion de la base de datos
                .snapshotChanges() //para validar la clave de la partida
                .subscribe(function (partidas) {
                //arreglo de partidas sacado de la BD
                partidas.forEach(function (p) {
                    //se recorre el arreglo para encontrar la partida que busca unirse el jugador
                    if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                        _this.partida = p.payload.doc.data();
                        console.log(_this.partida.confirm);
                    }
                });
            });
            if (_this.partida.confirm != false) {
                _this.Comenzar();
                _this.cargarC();
                clearInterval(int);
            }
        }, 1000);
    };
    PartidaPage.prototype.Comenzar = function () {
        var _this = this;
        this.AudioBotones();
        if (this.Stop != false)
            this.tiempo = this.segundos;
        else {
            setInterval(function () {
                _this.tiempo = _this.segundos + 1;
                _this.segundos += 1;
                if (_this.segundos == 60) {
                    _this.segundos = 0;
                    _this.minutos += 1;
                    if (_this.minutos == 60)
                        _this.minutos = 0;
                    _this.hora += 1;
                    if ((_this.hora = 24))
                        _this.hora = 0;
                }
            }, 1000);
        }
        //this.playAudio();
        // console.log(this.partida);
        this.ocultar1 = false;
        this.ocultarjugadas = true;
        this.clickCarta = true;
    };
    PartidaPage.prototype.ClickCarta = function (carta) {
        var _this = this;
        this.AudioBotones();
        this.cartasPasadas.forEach(function (data) {
            if (data.idCarta == carta.idCarta) {
                if (_this.clickCarta)
                    if (carta.textColor == "red.disabled") {
                        _this.buscarJugada(carta);
                        carta.textColor = "red";
                        carta.buena = true;
                        _this.buenaArray.push(carta);
                        if (_this.buenaArray.length == 16) {
                            _this.Stop = true;
                            _this.Ganaste();
                        }
                    }
            }
        });
        // }
    };
    //ubicación de las cartas
    // 0  1  2  3
    // 4  5  6  7
    // 8  9  10 11
    // 12 13 14 15
    PartidaPage.prototype.buscarJugada = function (carta) {
        var pos = this.cartasJugador.indexOf(carta);
        if (!carta.buena) {
            if (pos == 0 || pos == 4 || pos == 8 || pos == 12)
                this.chorroArray1.push(pos);
            else if (pos == 1 || pos == 5 || pos == 9 || pos == 13)
                this.chorroArray2.push(pos);
            else if (pos == 2 || pos == 6 || pos == 10 || pos == 14)
                this.chorroArray3.push(pos);
            else if (pos == 3 || pos == 7 || pos == 11 || pos == 15)
                this.chorroArray4.push(pos);
            if (pos == 5 || pos == 6 || pos == 9 || pos == 10)
                this.centroArray.push(pos);
            if (pos == 0 || pos == 3 || pos == 12 || pos == 15)
                this.esq4Array.push(pos);
            if (this.chorroArray1.length == 4 ||
                this.chorroArray2.length == 4 ||
                this.chorroArray3.length == 4 ||
                this.chorroArray4.length == 4)
                this.Chorro = false;
            this.Centro = !this.verifyArray(this.centroArray);
            this.CuatroEsquia = !this.verifyArray(this.esq4Array);
        }
    };
    PartidaPage.prototype.verifyArray = function (array) {
        if (array.length == 4)
            return true;
        else
            return false;
    };
    //Alertas para jugadas
    PartidaPage.prototype.AlertJugadas = function () {
        var _this = this;
        this.AudioBotones();
        var alert = this.cAlert.create({
            title: "Resultado",
            cssClass: "custom-alertDanger",
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                },
                {
                    text: "Ok",
                    handler: function () {
                        var puntos = 0;
                        if (_this.ConfirmarChorro)
                            puntos += _this.PuntoChorro = 50;
                        if (_this.ConfirmarCuatroEsquinas)
                            puntos += _this.PuntoCuatroEsquinas = 40;
                        if (_this.ConfirmarCentro)
                            puntos += _this.PuntoCentro = 40;
                        _this.jugador.puntos = puntos;
                    },
                },
            ],
            inputs: [
                {
                    type: "checkbox",
                    label: "¡Chorro!",
                    disabled: this.Chorro,
                    checked: this.ConfirmarChorro,
                    handler: function () {
                        console.log("Chorro", _this.ConfirmarChorro);
                        _this.ConfirmarChorro = !_this.Chorro;
                        _this.verificarChorro(0);
                    },
                },
                {
                    type: "checkbox",
                    label: "¡Cuatro esquinas!",
                    disabled: this.CuatroEsquia,
                    checked: this.ConfirmarCuatroEsquinas,
                    handler: function () {
                        console.log("Cuatro Esquinas", _this.ConfirmarCuatroEsquinas);
                        _this.ConfirmarCuatroEsquinas = !_this.CuatroEsquia;
                        _this.verificarCuatroEsquinas(1);
                    },
                },
                {
                    type: "checkbox",
                    label: "¡Centro!",
                    disabled: this.Centro,
                    checked: this.ConfirmarCentro,
                    handler: function () {
                        console.log("Centro", _this.ConfirmarCentro);
                        _this.ConfirmarCentro = !_this.Centro;
                        _this.verificarCentro(2);
                    },
                },
            ],
        });
        alert.present();
    };
    PartidaPage.prototype.verificarChorro = function (jugada) {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.partida = p.payload.doc.data();
                    if (_this.partida.jugadas[0].chorro == 0) {
                        var partidaUP = p.payload.doc.data();
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            jugadas: [
                                {
                                    chorro: _this.jugador.nombre,
                                    cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                                    centro: partidaUP.jugadas[0].centro,
                                    buena: partidaUP.jugadas[0].buena,
                                },
                            ],
                        };
                        _this.pProvider.Add(_this.partida);
                    }
                }
            });
        });
    };
    PartidaPage.prototype.verificarCuatroEsquinas = function (jugada) {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.partida = p.payload.doc.data();
                    if (_this.partida.jugadas[0].cuatroEsquinas == 0) {
                        var partidaUP = p.payload.doc.data();
                        console.log("Jugadas");
                        console.log(partidaUP.jugadas);
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            jugadas: [
                                {
                                    chorro: partidaUP.jugadas[0].chorro,
                                    cuatroEsquinas: _this.jugador.nombre,
                                    centro: partidaUP.jugadas[0].centro,
                                    buena: partidaUP.jugadas[0].buena,
                                },
                            ],
                        };
                        _this.pProvider.Add(_this.partida);
                    }
                }
            });
        });
    };
    PartidaPage.prototype.verificarCentro = function (jugada) {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.partida = p.payload.doc.data();
                    console.log("Jugadas");
                    if (_this.partida.jugadas[0].centro == 0) {
                        var partidaUP = p.payload.doc.data();
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            jugadas: [
                                {
                                    chorro: partidaUP.jugadas[0].chorro,
                                    cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                                    centro: _this.jugador.nombre,
                                    buena: partidaUP.jugadas[0].buena,
                                },
                            ],
                        };
                        _this.pProvider.Add(_this.partida);
                    }
                }
            });
        });
    };
    PartidaPage.prototype.verificarBuena = function (jugada) {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.partida = p.payload.doc.data();
                    console.log("Jugadas");
                    if (_this.partida.jugadas[0].buena == 0) {
                        var partidaUP = p.payload.doc.data();
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            jugadas: [
                                {
                                    chorro: partidaUP.jugadas[0].chorro,
                                    cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                                    centro: partidaUP.jugadas[0].centro,
                                    buena: _this.jugador.nombre,
                                },
                            ],
                        };
                        _this.pProvider.Add(_this.partida);
                    }
                }
            });
        });
    };
    PartidaPage.prototype.Ganaste = function () {
        var _this = this;
        var alert = this.cAlert.create({
            title: "Resultado",
            cssClass: "custom-alertDanger",
            message: "<p> \u00A1Ganaste! </p>",
            buttons: [
                {
                    text: "OK",
                    role: "cancel",
                    handler: function () {
                        _this.verificarBuena(3);
                        _this.Cargar();
                    },
                },
            ],
        });
    };
    PartidaPage.prototype.Cargar = function () {
        var _this = this;
        this.jugador.puntos += this.PuntoBuenas;
        this.ultpartida = {
            clavePartida: this.partida.clave,
            jGanador: this.jugador,
            tiempo: this.tiempo,
            buena: this.PuntoBuenas,
            centro: this.PuntoCentro,
            chorro: this.PuntoChorro,
            esq4: this.PuntoCuatroEsquinas,
        };
        var alert = this.cAlert.create({
            title: "Resultado",
            cssClass: "custom-alertDanger",
            message: "<p>El ganador es " + this.ultpartida.jGanador.nombre + "!</p>",
            buttons: [
                {
                    text: "OK",
                    role: "cancel",
                    handler: function () {
                        _this.Salir();
                    },
                },
            ],
        });
    };
    PartidaPage.prototype.volver = function () {
        var _this = this;
        this.AudioBotones();
        var abandonar = this.cAlert.create({
            title: "¿Está seguro/a de abandonar la partida?",
            buttons: [
                {
                    text: "Sí",
                    role: "accept",
                    handler: function () {
                        _this.Salir();
                        _this.navCtrl.pop();
                    },
                },
                {
                    text: "No",
                    role: "cancel",
                },
            ],
        });
        abandonar.present();
    };
    PartidaPage.prototype.Salir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.AudioBotones();
                        clearInterval(this.cargaInterval);
                        return [4 /*yield*/, this.pProvider
                                .GetAll()
                                .valueChanges()
                                .subscribe(function (partidas) {
                                partidas.forEach(function (p) {
                                    if (p.clave == _this.partida.clave) {
                                        var i = _this.partida.jugadores.indexOf(_this.jugador);
                                        if (i != -1)
                                            if (_this.partida.jugadores[i].idJugador == _this.jugador.idJugador)
                                                _this.pProvider.DeletePlayer(_this.partida, _this.jugador);
                                        location.reload();
                                    }
                                });
                                _this.jProvider.Delete(_this.jugador);
                                if (_this.partida.jugadores.length == 0) {
                                    _this.pProvider.Delete(_this.partida);
                                    // location.reload();
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], PartidaPage.prototype, "slides", void 0);
    PartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\partida\partida.html"*/'<!-- Cronometro -->\n\n<ion-content padding class="fondo">\n\n  <div class="txt" text-center>\n\n    {{hora}}:{{minutos}}:{{segundos}}\n\n  </div>\n\n  <!-- Cronometro -->\n\n  <br>\n\n  <br>\n\n  <!-- Slider de cartas -->\n\n  <img src="https://img.icons8.com/ios/50/000000/box-important.png" title="hola" width="40px"\n\n    style="position: absolute;top:10px" (click)="AlertJugadas()" *ngIf="ocultarjugadas">\n\n  <div class="ContSlider">\n\n    <ion-slides autoplay="0"  class="image-slider" slidesPerView="1">\n\n      <ion-slide *ngFor="let image of cargarArray">\n\n        <img [src]="cartaSrc" class="thumb-img" *ngIf="OcultarSlider">\n\n        <!-- imageViewer -->\n\n        <!-- assets/imgs/{{image}}.png -->\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- Slider de cartas -->\n\n  <br>\n\n  <!-- Tarjetas -->\n\n  <div align="center" style="background-color: #876248;">\n\n    <div class="TarjetaFila" style="width:100%;">\n\n      <img *ngFor="let carta of fila1" src="assets/imgs/{{carta.imgPath}}.png" class="Carta"\n\n      [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila2" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila3" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila4" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n  </div>\n\n\n\n  <!-- Tarjetas -->\n\n  <br>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button col-12 class="btn" ion-button>\n\n          <div class="txt" (click)="volver()">Volver</div>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-8>\n\n        <button col-12 class="btn" ion-button *ngIf="ocultar1 && jugador.rol==1">\n\n          <div class="txt" (click)="Confirmar()">¡COMENZAR!</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\partida\partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ultimapartida_ultimapartida__["a" /* UltimapartidaProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_jugador_jugador__["a" /* JugadorProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_partida_partida__["a" /* PartidaProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_carta_carta__["a" /* CartaProvider */]])
    ], PartidaPage);
    return PartidaPage;
}());

//# sourceMappingURL=partida.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UltimapartidaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UltimapartidaProvider = /** @class */ (function () {
    function UltimapartidaProvider(db) {
        this.db = db;
        this.ultimapath = "UltimaPartida";
    }
    UltimapartidaProvider.prototype.Add = function (ultima) {
        return this.db
            .collection(this.ultimapath)
            .doc("Última Partida")
            .set(ultima);
    };
    UltimapartidaProvider.prototype.GetAll = function () {
        return this.db.collection(this.ultimapath);
    };
    UltimapartidaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], UltimapartidaProvider);
    return UltimapartidaProvider;
}());

//# sourceMappingURL=ultimapartida.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CartaProvider = /** @class */ (function () {
    function CartaProvider(db) {
        this.db = db;
        this.path = "Cartas";
        this.ImageArray = [];
    }
    CartaProvider.prototype.Add = function (carta) {
        return this.db
            .collection(this.path)
            .doc(carta.idCarta.toString())
            .set(carta);
    };
    CartaProvider.prototype.SetCardsArray = function () {
        for (var i = 1; i <= 54; i++)
            this.ImageArray.push(i);
        this.ImageArray = this.Shuffle(this.ImageArray);
        return this.ImageArray;
    };
    CartaProvider.prototype.Shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    };
    CartaProvider.prototype.GetCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        array = [];
                        return [4 /*yield*/, this.db
                                .collection(this.path)
                                .valueChanges()
                                .subscribe(function (cartas) {
                                array = cartas;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, array];
                }
            });
        });
    };
    CartaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], CartaProvider);
    return CartaProvider;
}());

//# sourceMappingURL=carta.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saturation = 0;
        this.sausage = false;
    }
    ConfigPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = 'assets/audios/Botones.mp3';
        this.audio.load();
        this.audio.play();
    };
    ConfigPage.prototype.toggle = function () {
        this.sausage = !this.sausage;
        console.log(this.sausage);
    };
    ConfigPage.prototype.volver = function () {
        this.AudioBotones();
        this.navCtrl.pop();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\config\config.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br>\n\n  <br>\n\n  <div class="titulo">Configuración</div>\n\n  <br>\n\n  <br>\n\n    <ion-item class="fondo" (click)="toggle()">\n\n      <ion-label class="txt sub">\n\n        Habilitar/Deshabilitar audio\n\n      </ion-label>\n\n      <ion-checkbox color="dark" (click)="toggle()"></ion-checkbox>\n\n    </ion-item>\n\n  <div text-center>\n\n    <button class="btn" ion-button (click)="volver()">\n\n      <div class="txt">Volver</div>\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partida_partida__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_carta_carta__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrearPartidaPage = /** @class */ (function () {
    function CrearPartidaPage(navCtrl, navParams, jProvider, //Provider del jugador
    pProvider, //Provider de la partida
    alertCtrl, cProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jProvider = jProvider;
        this.pProvider = pProvider;
        this.alertCtrl = alertCtrl;
        this.cProvider = cProvider;
        this.alert = false; //Determina si se activará o no una alerta al usuario
        this.foundIt = true; //Determina si encuentra al jugador en el arreglo
        this.btnConfirm = false;
        this.barajas = cProvider.SetCardsArray();
        this.partida = {
            clave: this.generarId(),
            jugadores: new Array(),
            confirm: false,
            totalJugadores: 1,
            barajas: this.barajas,
            jugadas: [{
                    buena: 0,
                    centro: 0,
                    chorro: 0,
                    cuatroEsquinas: 0
                }]
        };
        this.jugador = {
            clavePartida: this.partida.clave,
            idJugador: this.generarId(),
            nombre: "",
            puntos: 0,
            rol: 1,
        };
    }
    CrearPartidaPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = "assets/audios/Botones.mp3";
        this.audio.load();
        this.audio.play();
    };
    CrearPartidaPage.prototype.volver = function () {
        this.AudioBotones();
        this.navCtrl.pop();
    };
    CrearPartidaPage.prototype.crearPartida = function () {
        var _this = this;
        this.AudioBotones();
        if (this.jugador.nombre != "") {
            this.guardar();
            this.partida.jugadores.forEach(function (x) {
                //Recorre el arreglo de jugadores para agregar al que no se repita
                if (x.idJugador != _this.jugador.idJugador) {
                    return (_this.foundIt = true);
                }
                else {
                    return (_this.foundIt = false);
                }
            });
            if (this.foundIt) {
                //Si no encuentra al jugador repetido lo agrega al arreglo
                this.partida.jugadores.push(this.jugador);
            }
            this.pProvider.Add(this.partida);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__partida_partida__["a" /* PartidaPage */], {
                partida: this.partida,
                jugador: this.jugador,
            });
        }
        else {
            this.alert = true;
        }
    };
    CrearPartidaPage.prototype.generarId = function () {
        //Genera una id numerica aleatoria de corto rango: 1-1000
        return Math.floor(Math.random() * 1000 + 1);
    };
    CrearPartidaPage.prototype.guardar = function () {
        var _this = this;
        //Guarda al jugador
        this.jProvider
            .Add(this.jugador)
            .then(function (x) {
            console.log("Jugador guardado");
            _this.alertCtrl
                .create({
                title: "¡Partida creada con éxito!",
                buttons: ["Aceptar"],
            })
                .present();
            return true;
        })
            .catch(function (x) {
            console.log("Error: ", x);
            return false;
        });
    };
    CrearPartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-crear-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\crear-partida\crear-partida.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br>\n\n  <br>\n\n\n\n  <div class="titulo">Crear partida</div>\n\n\n\n  <br>\n\n  <br>\n\n\n\n  <ion-list align="center">\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Nombre:</ion-label>\n\n      <ion-input [(ngModel)]="jugador.nombre" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.alert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <br>\n\n    <br>\n\n\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Clave:</ion-label>\n\n      <ion-input disabled type="text" value="{{this.partida.clave}}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-card class="card aviso">\n\n      <ion-card-content>\n\n        <label class="txt">\n\n          ¡Comparte ésta clave para jugar con otras personas!\n\n        </label>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div align="center">\n\n      <button class="btn" ion-button>\n\n        <div class="txt" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">\n\n          ¡Seleciona tu carta!\n\n        </div>\n\n      </button>\n\n    </div>\n\n\n\n    \n\n\n\n  </ion-list>\n\n\n\n  <br>\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="crearPartida()">\n\n        Crear partida\n\n      </div>\n\n    </button>\n\n  </div>\n\n\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="volver()">\n\n        Volver\n\n      </div>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n\n\n<!-- Modal -->\n\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n\n  <div class="modal-dialog" role="document">\n\n    <div class="modal-content">\n\n      <div class="modal-header">\n\n        <h5 class="modal-title" id="exampleModalLabel">New message</h5>\n\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n\n          <span aria-hidden="true">&times;</span>\n\n        </button>\n\n      </div>\n\n      <div class="modal-body">\n\n        <form>\n\n          <div class="form-group">\n\n            <label for="recipient-name" class="col-form-label">Recipient:</label>\n\n            <input type="text" class="form-control" id="recipient-name">\n\n          </div>\n\n          <div class="form-group">\n\n            <label for="message-text" class="col-form-label">Message:</label>\n\n            <textarea class="form-control" id="message-text"></textarea>\n\n          </div>\n\n        </form>\n\n      </div>\n\n      <div class="modal-footer">\n\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n\n        <button type="button" class="btn btn-primary">Send message</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\crear-partida\crear-partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__["a" /* JugadorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__["a" /* PartidaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_carta_carta__["a" /* CartaProvider */]])
    ], CrearPartidaPage);
    return CrearPartidaPage;
}());

//# sourceMappingURL=crear-partida.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_partida_crear_partida__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unirse_partida_unirse_partida__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__puntuacion_puntuacion__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ultimapartida_ultimapartida__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams, alertCtrl, ultProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ultProvider = ultProvider;
        this.silencio = false;
        this.ayuda = 
        //<     LIMITE DE UNA ALERTA     >
        "________CREAR PARTIDA_______ " +
            "Ingresas tu nombre y darás la " +
            "clave a un amigo para jugar. " +
            "____UNIRSE A UNA PARTIDA____ " +
            "Ingresas tu nombre y la clave " +
            " de un amigo para jugar.";
        this.awakaato = "¡Has descubierto un secreto!  " +
            "Has volteado a Awakaato más de" +
            " 20 veces";
        this.punto = 0;
        // this.AudioFondo();
    }
    // ngOnInit() {
    //   this.audio = new Audio();
    //   this.audio.src = 'assets/audios/1.mp3';
    //   this.audio.load();
    //   this.audio.play();
    // }
    // AudioFondo() {
    //   this.audio = new Audio();
    //   this.audio.src = 'assets/audios/FondoSog.mp3';
    //   this.audio.load();
    //   this.audio.play();
    // }
    InicioPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = 'assets/audios/Botones.mp3';
        this.audio.load();
        this.audio.play();
    };
    InicioPage.prototype.cambiarImg = function () {
        this.audio2 = new Audio();
        this.audio2.src = 'assets/audios/Inicio.wav';
        this.audio2.load();
        this.audio2.play();
    };
    InicioPage.prototype.btnConfig = function () {
        this.AudioBotones();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigPage */]);
    };
    InicioPage.prototype.btnCrearPartida = function () {
        this.AudioBotones();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crear_partida_crear_partida__["a" /* CrearPartidaPage */]);
    };
    InicioPage.prototype.btnUnirsePartida = function () {
        this.AudioBotones();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__unirse_partida_unirse_partida__["a" /* UnirsePartidaPage */]);
    };
    InicioPage.prototype.btnPuntuacion = function () {
        var _this = this;
        this.AudioBotones();
        this.ultProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (ultima) {
                _this.ultima = ultima.payload.doc.data();
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__puntuacion_puntuacion__["a" /* PuntuacionPage */], _this.ultima);
        });
    };
    InicioPage.prototype.silenciar = function () {
        this.audio.src = 'assets/audios/Botones.mp3';
        this.audio.load();
        this.audio.play();
    };
    InicioPage.prototype.btnAyuda = function () {
        this.AudioBotones();
        var alert = this.alertCtrl.create({
            title: 'Ayuda',
            subTitle: this.ayuda,
            buttons: ['Entendido'],
        });
        alert.present();
    };
    InicioPage.prototype.easterEgg = function () {
        this.punto++;
        if (this.punto >= 20) {
            var alert_1 = this.alertCtrl.create({
                title: '¡Enhorabuena!',
                subTitle: this.awakaato,
                buttons: ['Aceptar'],
            });
            alert_1.present();
            this.punto = 0;
        }
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\inicio\inicio.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <div align="right">\n\n    <!-- <button class="btnIcon" ion-button clear (click)="btnPuntuacion()" style="\n\n    background-image:url(\'assets/imgs/puntuacion.png\'); \n\n    background-size:cover;">\n\n    </button> -->\n\n\n\n    <button class="btnIcon" ion-button clear (click)="btnAyuda()" style="\n\n  background-image:url(\'assets/imgs/ayuda.png\'); \n\n  background-size:cover;">\n\n    </button>\n\n  </div>\n\n\n\n  <ion-card class="card">\n\n    <ion-card-content>\n\n      <!-- <div class="titulo">Lotería Yoem Noki</div> -->\n\n      <div class="titulo">Lotería Yaqui</div>\n\n      <flash-card (click)="cambiarImg()">\n\n        <div class="fc-front txt" align="center" (click)="easterEgg()" >\n\n          <img src="assets/imgs/DY.png">Danzante Yaqui\n\n        </div>\n\n        <div class="fc-back txt" align="center" (click)="easterEgg()">\n\n          <img src="assets/imgs/DY.png">Danzante Yaqui\n\n        </div>\n\n      </flash-card>\n\n      <br>\n\n      <div align="center">\n\n        <button class="btn" ion-button (click)="btnCrearPartida()">\n\n          <div class="txt">Crear una partida</div>\n\n        </button>\n\n      </div>\n\n      <br>\n\n\n\n      <div align="center">\n\n        <button class="btn" ion-button (click)="btnUnirsePartida()">\n\n          <div class="txt">Unirse a una partida</div>\n\n        </button>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ultimapartida_ultimapartida__["a" /* UltimapartidaProvider */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnirsePartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partida_partida__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnirsePartidaPage = /** @class */ (function () {
    function UnirsePartidaPage(navCtrl, navParams, jProvider, pProvider, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jProvider = jProvider;
        this.pProvider = pProvider;
        this.alert = alert;
        this.nombreAlert = false; //Activa la alerta si el nombre no ha sido ingresado
        this.claveAlert = false; //Activa la alerta si la clave no ha sido ingresada
        this.nuevoJugador = true; //Determina si se puede ingresar un nuevo jugador
        this.partida = {
            clave: 0,
            jugadores: new Array(),
            confirm: false,
            totalJugadores: 0,
            barajas: new Array(),
            jugadas: new Array()
        };
        this.jugador = {
            clavePartida: null,
            idJugador: this.generarId(),
            nombre: "",
            puntos: 0,
            rol: 0,
        };
    }
    UnirsePartidaPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = "assets/audios/Botones.mp3";
        this.audio.load();
        this.audio.play();
    };
    UnirsePartidaPage.prototype.volver = function () {
        this.AudioBotones();
        this.navCtrl.pop();
    };
    // playAudio() {
    //   this.audio = new Audio();
    //   this.audio.src = 'assets/audios/1.mp3';
    //   this.audio.play();
    //   this.audio.loop = true;
    // }
    UnirsePartidaPage.prototype.unirsePartida = function () {
        var _this = this;
        this.AudioBotones();
        if (this.jugador.nombre == "")
            //si no se ingresó el nombre se activa una advertencia
            this.nombreAlert = true;
        //si se ingresó, se esconde
        else
            this.nombreAlert = false;
        if (this.jugador.clavePartida == null)
            //si la clave no se ingresó se activa una advertencia
            this.claveAlert = true;
        // si se ingresó, se esconde
        else
            this.claveAlert = false;
        if (this.claveAlert == false && this.nombreAlert == false) {
            this.pProvider
                .GetAll() //si se ingresaron los campos,
                //se obtiene la informacion de la base de datos
                .snapshotChanges() //para validar la clave de la partida
                .subscribe(function (partidas) {
                //arreglo de partidas sacado de la BD
                if (_this.nuevoJugador) {
                    var isAdd_1 = false; //variable que comprueba si el jugador ya se añadió a la partida
                    partidas.forEach(function (p) {
                        //se recorre el arreglo para encontrar la partida que busca unirse el jugador
                        if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                            isAdd_1 = true;
                            var p2 = p.payload.doc.data();
                            _this.partida = {
                                barajas: p2.barajas,
                                clave: p2.clave,
                                confirm: p2.confirm,
                                jugadores: p2.jugadores,
                                totalJugadores: p2.totalJugadores + 1,
                                jugadas: p2.jugadas
                            };
                            if (p2.confirm == true) {
                                _this.alert
                                    .create({
                                    title: "La partida ya empezó",
                                    buttons: ["Aceptar"],
                                })
                                    .present();
                            }
                            else {
                                if (p2.totalJugadores == 12) {
                                    _this.alert
                                        .create({
                                        title: "Partida llena",
                                        buttons: ["Aceptar"],
                                    })
                                        .present();
                                }
                                else {
                                    if (_this.validarJugador(_this.jugador))
                                        _this.partida.jugadores.push(_this.jugador);
                                    _this.guardarJugador();
                                    if (isAdd_1) {
                                        //si ya se añadió el jugador a la partida se crea una alerta y se muestra la sig interfaz
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__partida_partida__["a" /* PartidaPage */], {
                                            //se manda un objeto con los atributos de la partida que se creó y el jugador que se unió
                                            partida: _this.partida,
                                            jugador: _this.jugador,
                                        });
                                        //this.playAudio();
                                        _this.alert
                                            .create({
                                            title: "¡Te has unido a la partida!",
                                            buttons: ["Aceptar"],
                                        })
                                            .present();
                                        _this.nuevoJugador = false;
                                        _this.guardarPartida();
                                    }
                                    else {
                                        //si no, la clave fue incorrecta y se crea una alerta
                                        _this.alert
                                            .create({
                                            title: "Clave de la partida incorrecta",
                                            subTitle: "Asegúrese de que la clave que " +
                                                "ingresó sea la correcta",
                                            buttons: ["Aceptar"],
                                        })
                                            .present();
                                    }
                                }
                            }
                        }
                    });
                }
            });
            this.nuevoJugador = true;
        }
    };
    UnirsePartidaPage.prototype.validarJugador = function (jugador) {
        var _this = this;
        var isAdd = true;
        this.partida.jugadores.forEach(function (j) {
            if (j.nombre == jugador.nombre) {
                var i = _this.partida.jugadores.indexOf(j);
                _this.partida.jugadores[i] = jugador;
                isAdd = false;
            }
        });
        return isAdd;
    };
    UnirsePartidaPage.prototype.generarId = function () {
        //metodo que genera un id numerico aleatorio de 1-1000
        return Math.floor(Math.random() * 1000 + 1);
    };
    UnirsePartidaPage.prototype.guardarJugador = function () {
        //Guarda al jugador en BD
        this.jProvider.Add(this.jugador);
    };
    UnirsePartidaPage.prototype.guardarPartida = function () {
        //Guarda la partida en BD
        this.pProvider.Add(this.partida);
    };
    var _a, _b, _c, _d, _e;
    UnirsePartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-unirse-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\unirse-partida\unirse-partida.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br>\n\n  <br>\n\n\n\n  <div class="titulo">Unirse a una partida</div>\n\n\n\n  <br>\n\n\n\n  \n\n\n\n  \n\n  <br>\n\n\n\n  <ion-list align="center">\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Nombre:</ion-label>\n\n      <ion-input [(ngModel)]="jugador.nombre" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.nombreAlert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <br>\n\n    <br>\n\n\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Clave:</ion-label>\n\n      <ion-input type="number" [(ngModel)]="jugador.clavePartida"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.claveAlert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <ion-card class="card aviso">\n\n      <ion-card-content>\n\n        <div align="center" class="txt">\n\n          ¡Pídele a otra persona su clave para unirte a la partida!\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n  <br>\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="unirsePartida()">\n\n        Unirse a la partida\n\n      </div>\n\n    </button>\n\n  </div>\n\n\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="volver()">Volver</div>\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\unirse-partida\unirse-partida.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__["a" /* JugadorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__["a" /* JugadorProvider */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__["a" /* PartidaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__["a" /* PartidaProvider */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _e : Object])
    ], UnirsePartidaPage);
    return UnirsePartidaPage;
}());

//# sourceMappingURL=unirse-partida.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntuacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PuntuacionPage = /** @class */ (function () {
    function PuntuacionPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.noPuntuacion = "¡Qué lástima! No hay partidas " +
            "suficientes para mostrar";
        try {
        }
        catch (error) {
        }
        try {
            this.ultpartida = navParams.data;
            this.Total = this.ultpartida.jGanador.puntos;
            this.clavePartida = this.ultpartida.clavePartida;
            this.jGanador = this.ultpartida.jGanador.nombre;
            this.Tiempo = this.ultpartida.tiempo;
            this.Chorro = this.ultpartida.chorro;
            this.Centro = this.ultpartida.centro;
            this.Esquinas4 = this.ultpartida.esq4;
            this.Buena = this.ultpartida.buena;
        }
        catch (_a) {
            var alert_1 = this.alertCtrl.create({
                title: 'No existen datos de la última partida',
                subTitle: this.noPuntuacion,
                buttons: ['Entendido']
            });
            alert_1.present();
            this.jGanador = "Nadie";
            this.Total = 0;
            this.Tiempo = 0;
            this.clavePartida = 0;
            this.Chorro = 0;
            this.Centro = 0;
            this.Esquinas4 = 0;
            this.Buena = 0;
        }
    }
    PuntuacionPage.prototype.AudioBotones = function () {
        this.audio = new Audio();
        this.audio.src = 'assets/audios/Botones.mp3';
        this.audio.load();
        this.audio.play();
    };
    PuntuacionPage.prototype.volver = function () {
        this.AudioBotones();
        this.navCtrl.pop();
    };
    PuntuacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-puntuacion',template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\puntuacion\puntuacion.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content class="fondo">\n\n  <br><br>\n\n  <div class="titulo">Puntuación</div>\n\n  <br><br>\n\n\n\n  <table class="pts">\n\n    <tr>\n\n      <th col-8>Nombre</th>\n\n      <td>{{jGanador}}</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>Clave de la partida</th>\n\n      <td>{{clavePartida}}</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>Tiempo en el juego</th>\n\n      <td>{{Tiempo}} segs</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>¡Chorro!</th>\n\n      <td>{{Chorro}} pts</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>¡Centro!</th>\n\n      <td>{{Centro}} pts</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>¡Cuatro esquinas!</th>\n\n      <td>{{Esquinas4}} pts</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>¡Buena!</th>\n\n      <td>{{Buena}} pts</td>\n\n    </tr>\n\n\n\n    <tr>\n\n      <th>Total puntos</th>\n\n      <td>{{Total}} pts</td>\n\n    </tr>\n\n  </table>\n\n\n\n  <br><br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button (click)="volver()">\n\n      <div class="txt">Volver</div>\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\puntuacion\puntuacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PuntuacionPage);
    return PuntuacionPage;
}());

//# sourceMappingURL=puntuacion.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		482,
		4
	],
	"../pages/crear-partida/crear-partida.module": [
		483,
		3
	],
	"../pages/inicio/inicio.module": [
		484,
		2
	],
	"../pages/puntuacion/puntuacion.module": [
		485,
		1
	],
	"../pages/unirse-partida/unirse-partida.module": [
		486,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(419);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_crear_partida_crear_partida__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_config_config__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_unirse_partida_unirse_partida__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_puntuacion_puntuacion__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_jugador_jugador__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_firebase__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_flash_card_flash_card__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_partida_partida__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_partida_partida__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_ultimapartida_ultimapartida__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_audio__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio_ngx__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_carta_carta__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_19_ionic_audio__["a" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_19_ionic_audio__["c" /* WebAudioProvider */]();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_crear_partida_crear_partida__["a" /* CrearPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_unirse_partida_unirse_partida__["a" /* UnirsePartidaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_puntuacion_puntuacion__["a" /* PuntuacionPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_partida_partida__["a" /* PartidaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-partida/crear-partida.module#CrearPartidaPageModule', name: 'CrearPartidaPage', segment: 'crear-partida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/puntuacion/puntuacion.module#PuntuacionPageModule', name: 'PuntuacionPage', segment: 'puntuacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unirse-partida/unirse-partida.module#UnirsePartidaPageModule', name: 'UnirsePartidaPage', segment: 'unirse-partida', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__config_firebase__["a" /* firebaseConfigs */]),
                __WEBPACK_IMPORTED_MODULE_19_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19_ionic_audio__["d" /* defaultAudioProviderFactory */]),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__["b" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_crear_partida_crear_partida__["a" /* CrearPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_unirse_partida_unirse_partida__["a" /* UnirsePartidaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_puntuacion_puntuacion__["a" /* PuntuacionPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_partida_partida__["a" /* PartidaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_jugador_jugador__["a" /* JugadorProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_partida_partida__["a" /* PartidaProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_ultimapartida_ultimapartida__["a" /* UltimapartidaProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio_ngx__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_21__providers_carta_carta__["a" /* CartaProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfigs; });
var firebaseConfigs = {
    apiKey: "AIzaSyB6A3Z7x0701Wse2WT59iQW1rQJ_6M0TLE",
    authDomain: "loteria-yaqui.firebaseapp.com",
    databaseURL: "https://loteria-yaqui.firebaseio.com",
    projectId: "loteria-yaqui",
    storageBucket: "loteria-yaqui.appspot.com",
    messagingSenderId: "171014062929"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = /** @class */ (function () {
    function FlashCardComponent() {
        this.toggled = false;
    }
    FlashCardComponent.prototype.ngAfterViewChecked = function () {
        //equalizing the height of child divs with the largest div
        var frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
        var backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
        var h = ((frontH > backH) ? frontH : backH) + 'px';
        this.fcContainer.nativeElement.style.height = h;
        this.fcBack.nativeElement.style.height = h;
        this.fcFront.nativeElement.style.height = h;
    };
    FlashCardComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fcContainer'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('front'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcFront", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('back'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcBack", void 0);
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flash-card',template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\components\flash-card\flash-card.html"*/'<!-- Generated template for the FlashCardComponent component -->\n\n<ion-card class="fc-container" (click)="toggle()" [class.fc-back]="toggled" #fcContainer>\n\n    <div class="front" #front>\n\n        <ng-content class="" select=".fc-front"></ng-content>\n\n    </div>\n\n    <div class="back" #back>\n\n        <ng-content select=".fc-back"></ng-content>\n\n    </div>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\components\flash-card\flash-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadorProvider = /** @class */ (function () {
    function JugadorProvider(db) {
        this.db = db;
        this.path = "Jugadores";
    }
    JugadorProvider.prototype.Add = function (jugador) {
        return this.db
            .collection(this.path)
            .doc(jugador.nombre)
            .set(jugador);
    };
    JugadorProvider.prototype.Delete = function (jugador) {
        this.db
            .collection(this.path)
            .doc(jugador.nombre)
            .delete();
    };
    JugadorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], JugadorProvider);
    return JugadorProvider;
}());

//# sourceMappingURL=jugador.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartidaProvider = /** @class */ (function () {
    function PartidaProvider(db) {
        this.db = db;
        this.path = "Partidas";
    }
    PartidaProvider.prototype.Add = function (partida) {
        return this.db
            .collection(this.path)
            .doc(partida.clave.toString())
            .set(partida);
    };
    // AddJugada(partida: Partida) {
    //   return this.db
    //     .collection(this.path)
    //     .doc(partida.clave.toString())
    //     .set(partida);
    // }
    PartidaProvider.prototype.confirm = function (partida) {
        return this.db
            .collection(this.path)
            .doc(partida.clave.toString())
            .set(partida);
    };
    PartidaProvider.prototype.getID = function (partida) {
        this.prueba = this.db.collection(this.path);
        var obj = this.prueba.pipe();
    };
    PartidaProvider.prototype.GetAll = function () {
        return this.db.collection(this.path);
    };
    PartidaProvider.prototype.Delete = function (partida) {
        this.db.collection(this.path).doc(partida.clave.toString()).delete();
    };
    PartidaProvider.prototype.DeletePlayer = function (partida, jugador) {
        var i = partida.jugadores.indexOf(jugador);
        partida.jugadores.splice(i, 1).pop();
        return this.db
            .collection(this.path)
            .doc(partida.clave.toString())
            .set(partida);
    };
    PartidaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], PartidaProvider);
    return PartidaProvider;
}());

//# sourceMappingURL=partida.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map