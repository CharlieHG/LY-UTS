webpackJsonp([5],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio__ = __webpack_require__(53);
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
    function PartidaPage(navParams, cAlert, navCtrl, jProvider, pProvider) {
        this.navParams = navParams;
        this.cAlert = cAlert;
        this.navCtrl = navCtrl;
        this.jProvider = jProvider;
        this.pProvider = pProvider;
        this.items = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/name/");
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
        this.cartaGrande();
        this.cargarArray.push(this.partida.barajas[0]);
        this.ultpartida = {
            clavePartida: this.partida.clave,
            jGanador: {
                clavePartida: 0,
                idJugador: 0,
                nombre: "",
                puntos: 0,
                rol: 0,
                cartaGrande: 0,
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
    }
    //Carga y habilita cartas que van a pasar
    PartidaPage.prototype.cargarC = function () {
        var _this = this;
        var cont = 0;
        this.cargaInterval = setInterval(function () {
            _this.cargarArray.push(_this.partida.barajas[cont]);
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#imgID").focus();
            var carta = {
                idCarta: _this.partida.barajas[cont],
                imgPath: _this.partida.barajas[cont],
                textColor: "red.disabled",
                buena: true,
            };
            _this.cartasPasadas.push(carta);
            _this.OcultarSlider = true;
            _this.cartaSrc = "assets/imgs/" + _this.partida.barajas[cont] + ".png";
            _this.audio = new Audio();
            _this.audio.src =
                "assets/audios/esp/" + _this.partida.barajas[cont] + ".mp3";
            _this.audio.load();
            _this.audio.play();
            cont++;
            if (cont == 54) {
                clearInterval(_this.comenzarInt);
                clearInterval(_this.cargaInterval);
            }
        }, 5000);
    };
    //Verifica si alguien ganó
    PartidaPage.prototype.jugadasBD = function () {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.partida = p.payload.doc.data();
                }
            });
        });
        if (this.partida.jugadas[0].buena != 0) {
            var alert2 = this.cAlert.create({
                title: "¡Ya hay un gandor!",
                cssClass: "custom-alertDanger",
                message: "<p> Resultados </p>" +
                    "\n" +
                    "El jugador <b>" +
                    this.partida.jugadas[0].buena +
                    "</b> ya ha gando." +
                    "<br><br><b>Jugadas</b><br>" +
                    "<br>Chorro: " +
                    this.partida.jugadas[0].chorro +
                    "<br>" +
                    "Cuatro esquinas: " +
                    this.partida.jugadas[0].cuatroEsquinas +
                    "<br>" +
                    "Centro: " +
                    this.partida.jugadas[0].centro +
                    "<br>" +
                    "Buena: " +
                    this.partida.jugadas[0].buena +
                    "<br>",
                buttons: ["Aceptar"],
            });
            alert2.present();
        }
        if (this.partida.jugadas[0].buena == 0) {
            var partidaUP = this.partida;
            clearInterval(this.comenzarInt);
            this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                confirmStop: true,
                jugadas: [
                    {
                        chorro: partidaUP.jugadas[0].chorro,
                        cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                        centro: partidaUP.jugadas[0].centro,
                        buena: this.jugador.nombre,
                    },
                ],
            };
            this.pProvider.Add(this.partida);
            var alert_1 = this.cAlert.create({
                title: "¡Ganaste!",
                cssClass: "custom-alertDanger",
                message: "<p> <b>Resultados</b> </p>" +
                    "\n" +
                    "Chorro: " +
                    this.partida.jugadas[0].chorro +
                    "<br>" +
                    "Cuatro esquinas: " +
                    this.partida.jugadas[0].cuatroEsquinas +
                    "<br>" +
                    "Centro: " +
                    this.partida.jugadas[0].centro +
                    "<br>" +
                    "Buena: " +
                    this.partida.jugadas[0].buena +
                    "<br>",
                buttons: ["Aceptar"],
            });
            alert_1.present();
        }
    };
    PartidaPage.prototype.detenerJugada = function () {
        var _this = this;
        var int = setInterval(function () {
            _this.pProvider
                .GetAll()
                .snapshotChanges()
                .subscribe(function (partidas) {
                partidas.forEach(function (p) {
                    if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                        _this.partida = p.payload.doc.data();
                    }
                });
            });
            if (_this.partida.confirmStop != false) {
                clearInterval(_this.comenzarInt);
                clearInterval(_this.cargaInterval);
                clearInterval(int);
            }
        }, 500);
    };
    //Confirma partida para empezarla
    PartidaPage.prototype.Confirmar = function () {
        this.partida = {
            clave: this.partida.clave,
            confirm: true,
            jugadores: this.partida.jugadores,
            barajas: this.partida.barajas,
            totalJugadores: this.partida.totalJugadores,
            jugadas: this.partida.jugadas,
            confirmStop: this.partida.confirmStop
        };
        this.pProvider.confirm(this.partida);
    };
    //Verifica si empezó la partida
    PartidaPage.prototype.unirsePartida = function () {
        var _this = this;
        var int = setInterval(function () {
            _this.pProvider
                .GetAll()
                .snapshotChanges()
                .subscribe(function (partidas) {
                partidas.forEach(function (p) {
                    if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                        _this.partida = p.payload.doc.data();
                    }
                });
            });
            if (_this.partida.confirm != false) {
                _this.Comenzar();
                _this.cargarC();
                _this.detenerJugada();
                clearInterval(int);
            }
        }, 500);
    };
    //Se ejecuta al confirmal que empezó la partida
    PartidaPage.prototype.Comenzar = function () {
        var _this = this;
        if (this.Stop != false)
            this.tiempo = this.segundos;
        else {
            this.comenzarInt = setInterval(function () {
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
        this.ocultar1 = false;
        this.ocultarjugadas = true;
        this.clickCarta = true;
    };
    //Verifica estado de la carta para su selección
    PartidaPage.prototype.ClickCarta = function (carta) {
        var _this = this;
        this.cartasPasadas.forEach(function (data) {
            if (data.idCarta == carta.idCarta) {
                if (_this.clickCarta)
                    if (carta.textColor == "red.disabled") {
                        carta.textColor = "red";
                        _this.buscarJugada(carta);
                        carta.buena = true;
                        _this.buenaArray.push(carta);
                        if (_this.buenaArray.length == 16) {
                            _this.Stop = true;
                            _this.jugadasBD();
                        }
                    }
            }
        });
    };
    PartidaPage.prototype.buscarJugada = function (carta) {
        if (this.jugador.cartaGrande == 1) {
            //Chorro arriba
            if (carta.idCarta == 1 || carta.idCarta == 21 || carta.idCarta == 28 || carta.idCarta == 31) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            // if (carta.idCarta == 21 || carta.textColor == "red") {
            //   this.chorroArray1.push(2);
            //   if (this.chorroArray1.length == 4) this.Chorro = false;
            // }
            // if (carta.idCarta == 28 || carta.textColor == "red") {
            //   this.chorroArray1.push(3);
            //   if (this.chorroArray1.length == 4) this.Chorro = false;
            // }
            // if (carta.idCarta == 31 || carta.textColor == "red") {
            //   this.chorroArray1.push(4);
            //   if (this.chorroArray1.length == 4) this.Chorro = false;
            // }
            //Centro
            if (carta.idCarta == 36 || carta.idCarta == 47 || carta.idCarta == 3 || carta.idCarta == 32) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            // if (carta.idCarta == 47 || carta.textColor == "red") {
            //   this.centroArray.push(2);
            //   if (this.centroArray.length == 4) this.Centro = false;
            // }
            // if (carta.idCarta == 3 || carta.textColor == "red") {
            //   this.centroArray.push(3);
            //   if (this.centroArray.length == 4) this.Centro = false;
            // }
            // if (carta.idCarta == 32 || carta.textColor == "red") {
            //   this.centroArray.push(4);
            //   if (this.centroArray.length == 4) this.Centro = false;
            // }
            //Cuatro esquinas
            if (carta.idCarta == 1 || carta.idCarta == 31 || carta.idCarta == 41 || carta.idCarta == 37) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 2) {
            //Chorro arriba
            if (carta.idCarta == 42 || carta.idCarta == 4 || carta.idCarta == 35 || carta.idCarta == 22) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 33 || carta.idCarta == 2 || carta.idCarta == 29 || carta.idCarta == 32) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 42 || carta.idCarta == 22 || carta.idCarta == 17 || carta.idCarta == 48) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 3) {
            //Chorro arriba
            if (carta.idCarta == 23 || carta.idCarta == 33 || carta.idCarta == 48 || carta.idCarta == 1) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 34 || carta.idCarta == 28 || carta.idCarta == 5 || carta.idCarta == 19) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 23 || carta.idCarta == 1 || carta.idCarta == 42 || carta.idCarta == 49) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 4) {
            //Chorro arriba
            if (carta.idCarta == 45 || carta.idCarta == 24 || carta.idCarta == 30 || carta.idCarta == 34) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 8 || carta.idCarta == 44 || carta.idCarta == 40 || carta.idCarta == 7) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 45 || carta.idCarta == 34 || carta.idCarta == 25 || carta.idCarta == 50) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 5) {
            //Chorro arriba
            if (carta.idCarta == 41 || carta.idCarta == 21 || carta.idCarta == 35 || carta.idCarta == 34) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 9 || carta.idCarta == 50 || carta.idCarta == 27 || carta.idCarta == 45) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 41 || carta.idCarta == 34 || carta.idCarta == 23 || carta.idCarta == 31) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 6) {
            //Chorro arriba
            if (carta.idCarta == 51 || carta.idCarta == 10 || carta.idCarta == 20 || carta.idCarta == 41) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 26 || carta.idCarta == 54 || carta.idCarta == 40 || carta.idCarta == 12) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 51 || carta.idCarta == 41 || carta.idCarta == 11 || carta.idCarta == 16) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 7) {
            //Chorro arriba
            if (carta.idCarta == 52 || carta.idCarta == 53 || carta.idCarta == 37 || carta.idCarta == 2) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 27 || carta.idCarta == 18 || carta.idCarta == 6 || carta.idCarta == 39) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 52 || carta.idCarta == 2 || carta.idCarta == 17 || carta.idCarta == 4) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 8) {
            //Chorro arriba
            if (carta.idCarta == 53 || carta.idCarta == 9 || carta.idCarta == 51 || carta.idCarta == 19) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 28 || carta.idCarta == 37 || carta.idCarta == 3 || carta.idCarta == 15) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 53 || carta.idCarta == 19 || carta.idCarta == 16 || carta.idCarta == 12) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 9) {
            //Chorro arriba
            if (carta.idCarta == 4 || carta.idCarta == 11 || carta.idCarta == 7 || carta.idCarta == 29) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 10 || carta.idCarta == 37 || carta.idCarta == 22 || carta.idCarta == 17) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 4 || carta.idCarta == 29 || carta.idCarta == 18 || carta.idCarta == 46) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 10) {
            //Chorro arriba
            if (carta.idCarta == 14 || carta.idCarta == 26 || carta.idCarta == 9 || carta.idCarta == 6) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 8 || carta.idCarta == 30 || carta.idCarta == 54 || carta.idCarta == 19) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 14 || carta.idCarta == 6 || carta.idCarta == 40 || carta.idCarta == 20) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 11) {
            //Chorro arriba
            if (carta.idCarta == 33 || carta.idCarta == 28 || carta.idCarta == 48 || carta.idCarta == 10) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 16 || carta.idCarta == 11 || carta.idCarta == 46 || carta.idCarta == 29) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 33 || carta.idCarta == 10 || carta.idCarta == 36 || carta.idCarta == 26) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
        if (this.jugador.cartaGrande == 12) {
            //Chorro arriba
            if (carta.idCarta == 35 || carta.idCarta == 49 || carta.idCarta == 31 || carta.idCarta == 12) {
                var cont = 0;
                this.chorroArray1.push(cont++);
                if (this.chorroArray1.length == 4)
                    this.Chorro = false;
            }
            //Centro
            if (carta.idCarta == 50 || carta.idCarta == 51 || carta.idCarta == 27 || carta.idCarta == 14) {
                var cont = 0;
                this.centroArray.push(cont++);
                if (this.centroArray.length == 4)
                    this.Centro = false;
            }
            //Cuatro esquinas
            if (carta.idCarta == 35 || carta.idCarta == 12 || carta.idCarta == 30 || carta.idCarta == 32) {
                var cont = 0;
                this.esq4Array.push(cont++);
                if (this.esq4Array.length == 4)
                    this.CuatroEsquia = false;
            }
        }
    };
    //Alertas para jugadas
    PartidaPage.prototype.AlertJugadas = function () {
        var _this = this;
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
                        _this.ConfirmarCentro = !_this.Centro;
                        _this.verificarCentro(2);
                    },
                },
            ],
        });
        alert.present();
    };
    //Verificar jugadas
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
                            confirmStop: partidaUP.confirmStop,
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
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            confirmStop: partidaUP.confirmStop,
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
                    if (_this.partida.jugadas[0].centro == 0) {
                        var partidaUP = p.payload.doc.data();
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            confirmStop: partidaUP.confirmStop,
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
                    if (_this.partida.jugadas[0].buena == 0) {
                        var partidaUP = p.payload.doc.data();
                        _this.partida = {
                            barajas: partidaUP.barajas,
                            clave: partidaUP.clave,
                            confirm: partidaUP.confirm,
                            jugadores: partidaUP.jugadores,
                            totalJugadores: partidaUP.totalJugadores,
                            confirmStop: partidaUP.confirmStop,
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
                    },
                },
            ],
        });
        alert.present();
    };
    //Abandona la spartida
    PartidaPage.prototype.volver = function () {
        var _this = this;
        var abandonar = this.cAlert.create({
            title: "¿Está seguro/a de abandonar la partida?",
            buttons: [
                {
                    text: "Sí",
                    role: "accept",
                    handler: function () {
                        _this.Salir();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__inicio_inicio__["a" /* InicioPage */]);
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
    //Se ejecuta al confirmar el abandono de la partida
    PartidaPage.prototype.Salir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Carga la carta grande
    PartidaPage.prototype.cartaGrande = function () {
        if (this.jugador.cartaGrande == 1) {
            this.fila1 = [
                {
                    idCarta: 1,
                    buena: false,
                    imgPath: 1,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 21,
                    buena: false,
                    imgPath: 21,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 28,
                    buena: false,
                    imgPath: 28,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 31,
                    buena: false,
                    imgPath: 31,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 42,
                    buena: false,
                    imgPath: 42,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 36,
                    buena: false,
                    imgPath: 36,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 47,
                    buena: false,
                    imgPath: 47,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 16,
                    buena: false,
                    imgPath: 16,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 46,
                    buena: false,
                    imgPath: 46,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 32,
                    buena: false,
                    imgPath: 32,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 3,
                    buena: false,
                    imgPath: 3,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 41,
                    buena: false,
                    imgPath: 41,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 51,
                    buena: false,
                    imgPath: 51,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 15,
                    buena: false,
                    imgPath: 15,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 37,
                    buena: false,
                    imgPath: 37,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 2) {
            this.fila1 = [
                {
                    idCarta: 42,
                    buena: false,
                    imgPath: 42,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 4,
                    buena: false,
                    imgPath: 4,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 35,
                    buena: false,
                    imgPath: 35,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 22,
                    buena: false,
                    imgPath: 22,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 47,
                    buena: false,
                    imgPath: 47,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 33,
                    buena: false,
                    imgPath: 33,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 2,
                    buena: false,
                    imgPath: 2,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 43,
                    buena: false,
                    imgPath: 43,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 38,
                    buena: false,
                    imgPath: 38,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 29,
                    buena: false,
                    imgPath: 29,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 32,
                    buena: false,
                    imgPath: 32,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 28,
                    buena: false,
                    imgPath: 28,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 17,
                    buena: false,
                    imgPath: 17,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 52,
                    buena: false,
                    imgPath: 52,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 18,
                    buena: false,
                    imgPath: 18,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 48,
                    buena: false,
                    imgPath: 48,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 3) {
            this.fila1 = [
                {
                    idCarta: 23,
                    buena: false,
                    imgPath: 23,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 33,
                    buena: false,
                    imgPath: 33,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 48,
                    buena: false,
                    imgPath: 48,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 1,
                    buena: false,
                    imgPath: 1,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 39,
                    buena: false,
                    imgPath: 39,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 34,
                    buena: false,
                    imgPath: 34,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 28,
                    buena: false,
                    imgPath: 28,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 53,
                    buena: false,
                    imgPath: 53,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 29,
                    buena: false,
                    imgPath: 29,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 5,
                    buena: false,
                    imgPath: 5,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 19,
                    buena: false,
                    imgPath: 19,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 44,
                    buena: false,
                    imgPath: 44,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 42,
                    buena: false,
                    imgPath: 42,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 20,
                    buena: false,
                    imgPath: 20,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 43,
                    buena: false,
                    imgPath: 43,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 49,
                    buena: false,
                    imgPath: 49,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 4) {
            this.fila1 = [
                {
                    idCarta: 45,
                    buena: false,
                    imgPath: 45,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 24,
                    buena: false,
                    imgPath: 24,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 30,
                    buena: false,
                    imgPath: 30,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 34,
                    buena: false,
                    imgPath: 34,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 22,
                    buena: false,
                    imgPath: 22,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 8,
                    buena: false,
                    imgPath: 8,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 44,
                    buena: false,
                    imgPath: 44,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 54,
                    buena: false,
                    imgPath: 54,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 40,
                    buena: false,
                    imgPath: 40,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 7,
                    buena: false,
                    imgPath: 7,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 35,
                    buena: false,
                    imgPath: 35,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 25,
                    buena: false,
                    imgPath: 25,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 26,
                    buena: false,
                    imgPath: 26,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 49,
                    buena: false,
                    imgPath: 49,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 50,
                    buena: false,
                    imgPath: 50,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 5) {
            this.fila1 = [
                {
                    idCarta: 41,
                    buena: false,
                    imgPath: 41,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 21,
                    buena: false,
                    imgPath: 21,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 35,
                    buena: false,
                    imgPath: 35,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 34,
                    buena: false,
                    imgPath: 34,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 33,
                    buena: false,
                    imgPath: 33,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 9,
                    buena: false,
                    imgPath: 9,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 50,
                    buena: false,
                    imgPath: 50,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 36,
                    buena: false,
                    imgPath: 36,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 25,
                    buena: false,
                    imgPath: 25,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 45,
                    buena: false,
                    imgPath: 45,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 10,
                    buena: false,
                    imgPath: 10,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 23,
                    buena: false,
                    imgPath: 23,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 24,
                    buena: false,
                    imgPath: 24,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 46,
                    buena: false,
                    imgPath: 46,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 31,
                    buena: false,
                    imgPath: 31,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 6) {
            this.fila1 = [
                {
                    idCarta: 51,
                    buena: false,
                    imgPath: 51,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 10,
                    buena: false,
                    imgPath: 10,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 20,
                    buena: false,
                    imgPath: 20,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 41,
                    buena: false,
                    imgPath: 41,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 36,
                    buena: false,
                    imgPath: 36,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 26,
                    buena: false,
                    imgPath: 26,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 54,
                    buena: false,
                    imgPath: 54,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 3,
                    buena: false,
                    imgPath: 3,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 39,
                    buena: false,
                    imgPath: 39,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 40,
                    buena: false,
                    imgPath: 40,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 12,
                    buena: false,
                    imgPath: 12,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 1,
                    buena: false,
                    imgPath: 1,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 52,
                    buena: false,
                    imgPath: 52,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 5,
                    buena: false,
                    imgPath: 5,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 16,
                    buena: false,
                    imgPath: 16,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 7) {
            this.fila1 = [
                {
                    idCarta: 52,
                    buena: false,
                    imgPath: 52,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 53,
                    buena: false,
                    imgPath: 53,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 37,
                    buena: false,
                    imgPath: 37,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 2,
                    buena: false,
                    imgPath: 2,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 48,
                    buena: false,
                    imgPath: 48,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 18,
                    buena: false,
                    imgPath: 18,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 13,
                    buena: false,
                    imgPath: 13,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 14,
                    buena: false,
                    imgPath: 14,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 6,
                    buena: false,
                    imgPath: 6,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 39,
                    buena: false,
                    imgPath: 39,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 17,
                    buena: false,
                    imgPath: 17,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 15,
                    buena: false,
                    imgPath: 15,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 40,
                    buena: false,
                    imgPath: 40,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 4,
                    buena: false,
                    imgPath: 4,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 8) {
            this.fila1 = [
                {
                    idCarta: 53,
                    buena: false,
                    imgPath: 53,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 9,
                    buena: false,
                    imgPath: 9,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 51,
                    buena: false,
                    imgPath: 51,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 19,
                    buena: false,
                    imgPath: 19,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 21,
                    buena: false,
                    imgPath: 21,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 28,
                    buena: false,
                    imgPath: 28,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 37,
                    buena: false,
                    imgPath: 37,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 47,
                    buena: false,
                    imgPath: 47,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 23,
                    buena: false,
                    imgPath: 23,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 3,
                    buena: false,
                    imgPath: 3,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 15,
                    buena: false,
                    imgPath: 15,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 16,
                    buena: false,
                    imgPath: 16,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 38,
                    buena: false,
                    imgPath: 38,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 5,
                    buena: false,
                    imgPath: 5,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 12,
                    buena: false,
                    imgPath: 12,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 9) {
            this.fila1 = [
                {
                    idCarta: 4,
                    buena: false,
                    imgPath: 4,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 7,
                    buena: false,
                    imgPath: 7,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 29,
                    buena: false,
                    imgPath: 29,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 13,
                    buena: false,
                    imgPath: 13,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 10,
                    buena: false,
                    imgPath: 10,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 37,
                    buena: false,
                    imgPath: 37,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 50,
                    buena: false,
                    imgPath: 50,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 43,
                    buena: false,
                    imgPath: 43,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 22,
                    buena: false,
                    imgPath: 22,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 17,
                    buena: false,
                    imgPath: 17,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 38,
                    buena: false,
                    imgPath: 38,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 18,
                    buena: false,
                    imgPath: 18,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 39,
                    buena: false,
                    imgPath: 39,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 54,
                    buena: false,
                    imgPath: 54,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 46,
                    buena: false,
                    imgPath: 46,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 10) {
            this.fila1 = [
                {
                    idCarta: 14,
                    buena: false,
                    imgPath: 14,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 26,
                    buena: false,
                    imgPath: 26,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 9,
                    buena: false,
                    imgPath: 9,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 6,
                    buena: false,
                    imgPath: 6,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 5,
                    buena: false,
                    imgPath: 5,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 8,
                    buena: false,
                    imgPath: 8,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 30,
                    buena: false,
                    imgPath: 30,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 49,
                    buena: false,
                    imgPath: 49,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 45,
                    buena: false,
                    imgPath: 45,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 54,
                    buena: false,
                    imgPath: 54,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 19,
                    buena: false,
                    imgPath: 19,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 42,
                    buena: false,
                    imgPath: 42,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 40,
                    buena: false,
                    imgPath: 40,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 44,
                    buena: false,
                    imgPath: 44,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 41,
                    buena: false,
                    imgPath: 41,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 20,
                    buena: false,
                    imgPath: 20,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 11) {
            this.fila1 = [
                {
                    idCarta: 33,
                    buena: false,
                    imgPath: 33,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 28,
                    buena: false,
                    imgPath: 28,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 48,
                    buena: false,
                    imgPath: 48,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 10,
                    buena: false,
                    imgPath: 10,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 35,
                    buena: false,
                    imgPath: 35,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 16,
                    buena: false,
                    imgPath: 16,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 47,
                    buena: false,
                    imgPath: 47,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 46,
                    buena: false,
                    imgPath: 46,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 29,
                    buena: false,
                    imgPath: 29,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 15,
                    buena: false,
                    imgPath: 15,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 36,
                    buena: false,
                    imgPath: 36,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 14,
                    buena: false,
                    imgPath: 14,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 12,
                    buena: false,
                    imgPath: 12,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 26,
                    buena: false,
                    imgPath: 26,
                    textColor: "red.disabled",
                },
            ];
        }
        if (this.jugador.cartaGrande == 12) {
            this.fila1 = [
                {
                    idCarta: 35,
                    buena: false,
                    imgPath: 35,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 49,
                    buena: false,
                    imgPath: 49,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 31,
                    buena: false,
                    imgPath: 31,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 12,
                    buena: false,
                    imgPath: 12,
                    textColor: "red.disabled",
                },
            ];
            this.fila2 = [
                {
                    idCarta: 11,
                    buena: false,
                    imgPath: 11,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 50,
                    buena: false,
                    imgPath: 50,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 51,
                    buena: false,
                    imgPath: 51,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 33,
                    buena: false,
                    imgPath: 33,
                    textColor: "red.disabled",
                },
            ];
            this.fila3 = [
                {
                    idCarta: 29,
                    buena: false,
                    imgPath: 29,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 27,
                    buena: false,
                    imgPath: 27,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 14,
                    buena: false,
                    imgPath: 14,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 3,
                    buena: false,
                    imgPath: 3,
                    textColor: "red.disabled",
                },
            ];
            this.fila4 = [
                {
                    idCarta: 30,
                    buena: false,
                    imgPath: 30,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 13,
                    buena: false,
                    imgPath: 13,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 15,
                    buena: false,
                    imgPath: 15,
                    textColor: "red.disabled",
                },
                {
                    idCarta: 32,
                    buena: false,
                    imgPath: 32,
                    textColor: "red.disabled",
                },
            ];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], PartidaPage.prototype, "slides", void 0);
    PartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\partida\partida.html"*/'<!-- Cronometro -->\n\n<ion-content padding class="fondo">\n\n  <div class="txt" text-center>\n\n    {{hora}}:{{minutos}}:{{segundos}}\n\n  </div>\n\n  <!-- Cronometro -->\n\n  <br>\n\n  <br>\n\n  <!-- Slider de cartas -->\n\n  <img src="https://img.icons8.com/ios/50/000000/box-important.png" title="" width="40px"\n\n    style="position: absolute;top:10px" (click)="AlertJugadas()" *ngIf="ocultarjugadas">\n\n  <div class="ContSlider">\n\n    <ion-slides autoplay="0"  class="image-slider" slidesPerView="1">\n\n      <ion-slide *ngFor="let image of cargarArray">\n\n        <img [src]="cartaSrc" class="thumb-img" *ngIf="OcultarSlider">\n\n        <!-- imageViewer -->\n\n        <!-- assets/imgs/{{image}}.png -->\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- Slider de cartas -->\n\n  <br>\n\n  <!-- Tarjetas -->\n\n  <div align="center" style="background-color: #876248;">\n\n    <div class="TarjetaFila" style="width:100%;">\n\n      <img *ngFor="let carta of fila1" src="assets/imgs/{{carta.imgPath}}.png" class="Carta"\n\n      [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila2" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila3" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n\n\n    <div class="TarjetaFila"style="width:100%;">\n\n      <img *ngFor="let carta of fila4" src="assets/imgs/{{carta.imgPath}}.png" class="Carta" \n\n        [ngClass]="carta.textColor" (click)="ClickCarta(carta)" >\n\n    </div>\n\n  </div>\n\n\n\n  <!-- Tarjetas -->\n\n  <br>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button col-12 class="btn" ion-button>\n\n          <div class="txt" (click)="volver()">Volver</div>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-8>\n\n        <button col-12 class="btn" ion-button *ngIf="ocultar1 && jugador.rol==1">\n\n          <div class="txt" (click)="Confirmar()">¡COMENZAR!</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\partida\partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__["a" /* JugadorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__["a" /* PartidaProvider */]])
    ], PartidaPage);
    return PartidaPage;
}());

//# sourceMappingURL=partida.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partida_partida__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_carta_carta__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_inicio__ = __webpack_require__(53);
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
        this.cartaGrande = navParams.get("cartaGrande");
        this.barajas = cProvider.SetCardsArray();
        this.partida = {
            clave: this.generarId(),
            jugadores: new Array(),
            confirm: false,
            totalJugadores: 1,
            barajas: this.barajas,
            confirmStop: false,
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
            cartaGrande: this.cartaGrande,
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__inicio_inicio__["a" /* InicioPage */]);
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
            _this.alertCtrl
                .create({
                title: "¡Partida creada con éxito!",
                message: "Clave de partida: " + _this.partida.clave,
                buttons: ["Aceptar"],
            })
                .present();
            return true;
        })
            .catch(function (x) {
            return false;
        });
    };
    CrearPartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-crear-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\crear-partida\crear-partida.html"*/'<ion-header> </ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br />\n\n  <br />\n\n\n\n  <div class="titulo">Crear partida</div>\n\n\n\n  <br />\n\n  <br />\n\n\n\n  <ion-list align="center">\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Nombre:</ion-label>\n\n      <ion-input [(ngModel)]="jugador.nombre" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.alert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <br />\n\n    <br />\n\n\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Clave:</ion-label>\n\n      <ion-input\n\n        disabled\n\n        type="text"\n\n        value="{{this.partida.clave}}"\n\n      ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-card class="card aviso">\n\n      <ion-card-content>\n\n        <label class="txt">\n\n          ¡Comparte ésta clave para jugar con otras personas!\n\n        </label>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <br />\n\n  <br />\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="crearPartida()">\n\n        Crear partida\n\n      </div>\n\n    </button>\n\n  </div>\n\n\n\n  <br />\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="volver()">\n\n        Volver\n\n      </div>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\crear-partida\crear-partida.html"*/,
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnirsePartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partida_partida__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cartas_selec_cartas_selec__ = __webpack_require__(95);
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
        this.arrayCC = [];
        this.cartaGrande = navParams.get("cartaGrande");
        this.partida = {
            clave: 0,
            jugadores: new Array(),
            confirm: false,
            totalJugadores: 0,
            confirmStop: false,
            barajas: new Array(),
            jugadas: new Array(),
        };
        this.jugador = {
            clavePartida: null,
            idJugador: this.generarId(),
            nombre: "",
            puntos: 0,
            rol: 0,
            cartaGrande: this.cartaGrande,
        };
        // this.confirmarCarta();
    }
    UnirsePartidaPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cartas_selec_cartas_selec__["a" /* CartasSelecPage */]);
    };
    UnirsePartidaPage.prototype.confirmarCarta = function () {
        var _this = this;
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    var pt = p.payload.doc.data();
                    console.log(pt);
                }
            });
        });
    };
    UnirsePartidaPage.prototype.unirsePartida = function () {
        var _this = this;
        var ins = setInterval(function () {
            if (_this.arrayCC.length == 0) {
                _this.agregarJugador();
                clearInterval(ins);
            }
            else {
                alert("¡La carta que seleccionaste ya está en uso, cámbiala!");
                clearInterval(ins);
            }
        }, 1000);
        this.pProvider
            .GetAll()
            .snapshotChanges()
            .subscribe(function (partidas) {
            partidas.forEach(function (p) {
                if (p.payload.doc.id == _this.jugador.clavePartida.toString()) {
                    _this.pt = p.payload.doc.data();
                    for (var _i = 0, _a = _this.pt.jugadores; _i < _a.length; _i++) {
                        var index = _a[_i];
                        if (index.cartaGrande == _this.jugador.cartaGrande) {
                            _this.arrayCC.push(index.cartaGrande);
                            console.log(_this.arrayCC);
                        }
                    }
                }
            });
        });
    };
    UnirsePartidaPage.prototype.agregarJugador = function () {
        var _this = this;
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
                                jugadas: p2.jugadas,
                                confirmStop: p2.confirmStop,
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
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__partida_partida__["a" /* PartidaPage */], {
                                            //se manda un objeto con los atributos de la partida que se creó y el jugador que se unió
                                            partida: _this.partida,
                                            jugador: _this.jugador,
                                        });
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
    UnirsePartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-unirse-partida",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\unirse-partida\unirse-partida.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br>\n\n  <br>\n\n\n\n  <div class="titulo">Unirse a una partida</div>\n\n\n\n  <br>\n\n\n\n  \n\n\n\n  \n\n  <br>\n\n\n\n  <ion-list align="center">\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Nombre:</ion-label>\n\n      <ion-input [(ngModel)]="jugador.nombre" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.nombreAlert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <br>\n\n    <br>\n\n\n\n    <ion-item class="fondotxt txt">\n\n      <ion-label>Clave:</ion-label>\n\n      <ion-input type="number" [(ngModel)]="jugador.clavePartida"></ion-input>\n\n    </ion-item>\n\n\n\n    <label class="txt" *ngIf="this.claveAlert">\n\n      Éste campo es obligatorio\n\n    </label>\n\n\n\n    <ion-card class="card aviso">\n\n      <ion-card-content>\n\n        <div align="center" class="txt">\n\n          ¡Pídele a otra persona su clave para unirte a la partida!\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n  <br>\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="unirsePartida(jugador.clavePartida)">\n\n        Unirse a la partida\n\n      </div>\n\n    </button>\n\n  </div>\n\n\n\n  <br>\n\n\n\n  <div align="center">\n\n    <button class="btn" ion-button>\n\n      <div class="txt" (click)="volver()">Volver</div>\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\unirse-partida\unirse-partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_jugador_jugador__["a" /* JugadorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_partida_partida__["a" /* PartidaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UnirsePartidaPage);
    return UnirsePartidaPage;
}());

//# sourceMappingURL=unirse-partida.js.map

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cartas-selec/cartas-selec.module": [
		495,
		4
	],
	"../pages/config/config.module": [
		496,
		3
	],
	"../pages/crear-partida/crear-partida.module": [
		497,
		2
	],
	"../pages/inicio/inicio.module": [
		498,
		1
	],
	"../pages/unirse-partida/unirse-partida.module": [
		499,
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
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UltimapartidaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(69);
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

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(69);
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(423);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_crear_partida_crear_partida__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_config_config__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_unirse_partida_unirse_partida__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_jugador_jugador__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_firebase__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_flash_card_flash_card__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_partida_partida__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_partida_partida__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_ultimapartida_ultimapartida__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_audio__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_audio_ngx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_carta_carta__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cartas_selec_cartas_selec__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_18_ionic_audio__["a" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_18_ionic_audio__["c" /* WebAudioProvider */]();
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
                __WEBPACK_IMPORTED_MODULE_14__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_partida_partida__["a" /* PartidaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cartas_selec_cartas_selec__["a" /* CartasSelecPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cartas-selec/cartas-selec.module#CartasSelecPageModule', name: 'CartasSelecPage', segment: 'cartas-selec', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-partida/crear-partida.module#CrearPartidaPageModule', name: 'CrearPartidaPage', segment: 'crear-partida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unirse-partida/unirse-partida.module#UnirsePartidaPageModule', name: 'UnirsePartidaPage', segment: 'unirse-partida', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__config_firebase__["a" /* firebaseConfigs */]),
                __WEBPACK_IMPORTED_MODULE_18_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18_ionic_audio__["d" /* defaultAudioProviderFactory */]),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__["b" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_crear_partida_crear_partida__["a" /* CrearPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_unirse_partida_unirse_partida__["a" /* UnirsePartidaPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_partida_partida__["a" /* PartidaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cartas_selec_cartas_selec__["a" /* CartasSelecPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_jugador_jugador__["a" /* JugadorProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_partida_partida__["a" /* PartidaProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_ultimapartida_ultimapartida__["a" /* UltimapartidaProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_audio_ngx__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_20__providers_carta_carta__["a" /* CartaProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(53);
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfigs; });
/* unused harmony export snapshotToArray */
var firebaseConfigs = {
    apiKey: "AIzaSyB6A3Z7x0701Wse2WT59iQW1rQJ_6M0TLE",
    authDomain: "loteria-yaqui.firebaseapp.com",
    databaseURL: "https://loteria-yaqui.firebaseio.com",
    projectId: "loteria-yaqui",
    storageBucket: "loteria-yaqui.appspot.com",
    messagingSenderId: "171014062929",
};
var snapshotToArray = function (snapshot) {
    var returnArray = [];
    snapshot.forEach(function (element) {
        var item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });
    return returnArray;
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 492:
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ultimapartida_ultimapartida__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cartas_selec_cartas_selec__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function InicioPage(navCtrl, navParams, alertCtrl, ultProvider, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ultProvider = ultProvider;
        this.platform = platform;
        this.items = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/name/");
        this.silencio = false;
        this.inputText = "";
        this.ayuda = 
        //<     LIMITE DE UNA ALERTA     >
        "________CREAR PARTIDA_______ " +
            "Ingresas tu nombre y darás la " +
            "clave a un amigo para jugar. " +
            "____UNIRSE A UNA PARTIDA____ " +
            "Ingresas tu nombre y la clave " +
            " de un amigo para jugar.";
        this.awakaato = "¡Has descubierto un secreto!  " +
            "Has volteado a la imagen más de" +
            " 20 veces";
        this.partida = 232;
        this.punto = 0;
    }
    InicioPage.prototype.addItem = function (item) {
        if (item != undefined && item != null) {
            this.newItem = this.ref.push();
            this.newItem.set(item);
            this.inputText = '';
        }
    };
    InicioPage.prototype.prueba = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var clave = _a[_i];
            console.log(this.items[clave]);
        }
    };
    InicioPage.prototype.GetPrueba = function () {
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a
            .database()
            .ref("/loteria-yaqui/")
            .once("value")
            .then(function (data) {
            console.log(JSON.stringify(data.val()));
        });
    };
    InicioPage.prototype.cambiarImg = function () {
        this.audio2 = new Audio();
        this.audio2.src = "assets/audios/Inicio.wav";
        this.audio2.load();
        this.audio2.play();
    };
    InicioPage.prototype.btnConfig = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigPage */]);
    };
    InicioPage.prototype.btnCrearPartida = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cartas_selec_cartas_selec__["a" /* CartasSelecPage */], { pantalla: "crear" });
    };
    InicioPage.prototype.btnUnirsePartida = function () {
        //Pushear la pagina de Unirse a partida
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cartas_selec_cartas_selec__["a" /* CartasSelecPage */], { pantalla: "unirse" });
    };
    InicioPage.prototype.btnAyuda = function () {
        //Llamar alerta de ayuda
        var alert = this.alertCtrl.create({
            title: "Ayuda",
            subTitle: this.ayuda,
            buttons: ["Entendido"],
        });
        alert.present();
    };
    InicioPage.prototype.easterEgg = function () {
        //Llamar easter egg
        this.punto++;
        if (this.punto >= 20) {
            var alert_1 = this.alertCtrl.create({
                title: "¡Enhorabuena!",
                subTitle: this.awakaato,
                buttons: ["Aceptar"],
            });
            alert_1.present();
            this.punto = 0;
        }
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-inicio",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\inicio\inicio.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <div align="right">\n\n    <!-- <button class="btnIcon" ion-button clear (click)="btnPuntuacion()" style="\n\n    background-image:url(\'assets/imgs/puntuacion.png\'); \n\n    background-size:cover;">\n\n    </button> -->\n\n\n\n    <button class="btnIcon" ion-button clear (click)="btnAyuda()" style="\n\n  background-image:url(\'assets/imgs/ayuda.png\'); \n\n  background-size:cover;">\n\n    </button>\n\n  </div>\n\n\n\n  <ion-card class="card">\n\n    <ion-card-content>\n\n      <!-- <div class="titulo">Lotería Yoem Noki</div> -->\n\n      <div class="titulo">Lotería Yaqui</div>\n\n      <flash-card (click)="cambiarImg()">\n\n        <div class="fc-front txt" align="center" (click)="easterEgg()" >\n\n          <img src="assets/imgs/DY.png">Danzante Yaqui\n\n        </div>\n\n        <div class="fc-back txt" align="center" (click)="easterEgg()">\n\n          <img src="assets/imgs/DY.png">Danzante Yaqui\n\n        </div>\n\n      </flash-card>\n\n      <br>\n\n      \n\n      <div align="center">\n\n        <button class="btn" ion-button (click)="btnCrearPartida()">\n\n          <div class="txt">Crear una partida</div>\n\n        </button>\n\n      </div>\n\n      <br>\n\n\n\n      <div align="center">\n\n        <button class="btn" ion-button (click)="btnUnirsePartida()">\n\n          <div class="txt">Unirse a una partida</div>\n\n        </button>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ultimapartida_ultimapartida__["a" /* UltimapartidaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(69);
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
    JugadorProvider.prototype.GetAll = function () {
        return this.db.collection(this.path);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(69);
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
    PartidaProvider.prototype.getPrueba = function () {
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

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartasSelecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_partida_crear_partida__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unirse_partida_unirse_partida__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CartasSelecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartasSelecPage = /** @class */ (function () {
    function CartasSelecPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.claseCarta = false;
        this.cartaMarcada = false;
        this.cartas = [];
        this.pantalla = navParams.get("pantalla");
        this.cartas.push({ idCarta: 1, imgPath: "https://i.ibb.co/L1KJnG1/1.png", textColor: "red.disabled" }, { idCarta: 2, imgPath: "https://i.ibb.co/zm25JWx/2.png", textColor: "red.disabled" }, { idCarta: 3, imgPath: "https://i.ibb.co/Hgghrkw/3.png", textColor: "red.disabled" }, { idCarta: 4, imgPath: "https://i.ibb.co/Sr9g8Fm/4.png", textColor: "red.disabled" }, { idCarta: 5, imgPath: "https://i.ibb.co/MZhnCkq/5.png", textColor: "red.disabled" }, { idCarta: 6, imgPath: "https://i.ibb.co/PNJfRhG/6.png", textColor: "red.disabled" }, { idCarta: 7, imgPath: "https://i.ibb.co/9phxckb/7.png", textColor: "red.disabled" }, { idCarta: 8, imgPath: "https://i.ibb.co/L9rvW0T/8.png", textColor: "red.disabled" }, { idCarta: 9, imgPath: "https://i.ibb.co/tmPVqXL/9.png", textColor: "red.disabled" }, { idCarta: 10, imgPath: "https://i.ibb.co/x20vsFX/10.png", textColor: "red.disabled" }, { idCarta: 11, imgPath: "https://i.ibb.co/K0dkrQD/11.png", textColor: "red.disabled" }, { idCarta: 12, imgPath: "https://i.ibb.co/jTV3JYF/12.png", textColor: "red.disabled" });
    }
    CartasSelecPage.prototype.ionViewDidLoad = function () { };
    CartasSelecPage.prototype.confirm = function () {
        if (this.pantalla == "crear") {
            var carta = this.carta;
            if (carta != undefined) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__crear_partida_crear_partida__["a" /* CrearPartidaPage */], { cartaGrande: carta.idCarta });
                console.log(carta);
            }
            else {
                this.alertCtrl
                    .create({
                    title: "¡Aun no seleccionas una carta!",
                    buttons: ["Aceptar"],
                })
                    .present();
            }
        }
        else {
            var carta = this.carta;
            if (carta != undefined) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__unirse_partida_unirse_partida__["a" /* UnirsePartidaPage */], { cartaGrande: carta.idCarta });
                console.log(carta);
            }
            else {
                this.alertCtrl
                    .create({
                    title: "¡Aun no seleccionas una carta!",
                    buttons: ["Aceptar"],
                })
                    .present();
            }
        }
    };
    CartasSelecPage.prototype.cartaSelec = function (carta) {
        for (var _i = 0, _a = this.cartas; _i < _a.length; _i++) {
            var lastCarta = _a[_i];
            if (lastCarta.textColor == "red") {
                this.cartaMarcada = true;
                console.log(lastCarta);
                lastCarta.textColor = "red.disabled";
            }
        }
        this.claseCarta = !this.claseCarta;
        if (this.claseCarta == true) {
            carta.textColor = "red";
            this.carta = carta;
            this.cartaMarcada = true;
        }
        if (this.claseCarta == false) {
            carta.textColor = "red.disabled";
            this.cartaMarcada = false;
            this.carta = null;
        }
    };
    CartasSelecPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], CartasSelecPage.prototype, "slides", void 0);
    CartasSelecPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-cartas-selec",template:/*ion-inline-start:"C:\Repositorios\LY-UTS\src\pages\cartas-selec\cartas-selec.html"*/'<ion-header> </ion-header>\n\n\n\n<ion-content padding class="fondo">\n\n  <br />\n\n  <br />\n\n\n\n  <div class="titulo" >¡Selecciona tu carta!</div>\n\n  <br />\n\n  <br />\n\n  <!-- Slider de cartas -->\n\n  <img src="https://img.icons8.com/ios/50/000000/box-important.png" title="" width="40px"\n\n    style="position: absolute;top:10px" (click)="AlertJugadas()" *ngIf="ocultarjugadas">\n\n  <div class="ContSlider" >\n\n    <ion-slides autoplay="0"  class="image-slider" slidesPerView="1">\n\n      <ion-slide *ngFor="let carta of cartas">\n\n        <img src="{{carta.imgPath}}" (click)="cartaSelec(carta)" [ngClass]="carta.textColor" >\n\n        <!-- imageViewer -->\n\n        <!-- assets/imgs/{{image}}.png -->\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- Slider de cartas -->\n\n  <br />\n\n  <br />\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button col-12 class="btn" ion-button>\n\n          <div class="txt" (click)="volver()">Volver</div>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-8>\n\n        <button col-12 class="btn" ion-button>\n\n          <div class="txt" (click)="confirm()">Confirmar</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repositorios\LY-UTS\src\pages\cartas-selec\cartas-selec.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CartasSelecPage);
    return CartasSelecPage;
}());

//# sourceMappingURL=cartas-selec.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map