import { Component, ViewChild } from "@angular/core";
import { NavController, AlertController, Slides } from "ionic-angular";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { PuntuacionPage } from "../puntuacion/puntuacion";
import { Partida } from "../../models/partida";
import { Carta } from "../../models/carta";
import { Jugador } from "../../models/jugador";
import { UltimaPartida } from "../../models/ultpartida";
import { UltimapartidaProvider } from "../../providers/ultimapartida/ultimapartida";
import { JugadorProvider } from "../../providers/jugador/jugador";
import { PartidaProvider } from "../../providers/partida/partida";
import { CartaProvider } from "../../providers/carta/carta";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { empty } from "rxjs";

@Component({
  selector: "page-partida",
  templateUrl: "partida.html",
})
export class PartidaPage {
  partida: Partida;
  public Vpartida: any = [];
  jugador: Jugador;
  ultpartida: UltimaPartida;
  ConfirmarChorro: boolean = false;
  ConfirmarCuatroEsquinas: boolean = false;
  ConfirmarCentro: boolean = false;
  @ViewChild(Slides) slides: Slides;
  CuatroEsquia: boolean = true;
  Chorro: boolean = true;
  Centro: boolean = true;
  //Puntos
  PuntoChorro = 0;
  PuntoBuenas = 100;
  PuntoCuatroEsquinas = 0;
  PuntoCentro = 0;
  //Hover
  ocultar1: boolean = true;
  ocultarjugadas: boolean = false;
  OcultarSlider: boolean = false;
  isenabled: boolean = true;
  public hora = 0;
  public minutos = 0;
  public segundos = 0;
  Stop: boolean = false;
  tiempo = 0;
  idCarta: number = 0;
  ImageArray: number[] = [];
  cargarArray: number[] = [];
  Baraja: Carta[] = [];
  cartasJugador: Carta[] = [];
  fila1: Carta[] = [];
  fila2: Carta[] = [];
  fila3: Carta[] = [];
  fila4: Carta[] = [];
  chorroArray1: number[] = [];
  chorroArray2: number[] = [];
  chorroArray3: number[] = [];
  chorroArray4: number[] = [];
  esq4Array: number[] = [];
  centroArray: number[] = [];
  buenaArray: Carta[] = [];
  audio: any;
  clickCarta: boolean = false;
  private alert: AlertController;
  cartaSrc;
  cartasPasadas: Carta[] = [];
  cargaInterval;
  constructor(
    public navParams: NavParams,
    private cAlert: AlertController,
    public navCtrl: NavController,
    private ultProvider: UltimapartidaProvider,
    private jProvider: JugadorProvider,
    private pProvider: PartidaProvider,
    private cProvider: CartaProvider
  ) {
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
    for (let i = 0; i < this.ImageArray.length; i++) {
      this.Baraja.push(this.agregarCarta(i));
    }
    this.fila1 = this.mostrarCartas(4);
    this.fila2 = this.mostrarCartas(4);
    this.fila3 = this.mostrarCartas(4);
    this.fila4 = this.mostrarCartas(4);
  }

  AudioBotones() {
    this.audio = new Audio();
    this.audio.src = "assets/audios/Botones.mp3";
    this.audio.load();
    this.audio.play();
  }
  cargarC() {
    let cont = 0;
    this.cargaInterval = setInterval(() => {
      console.log(this.partida.barajas[cont]);
      this.cargarArray.push(this.partida.barajas[cont]);
      let carta = {
        idCarta: this.partida.barajas[cont],
        imgPath: this.partida.barajas[cont],
        textColor: "red.disabled",
        buena: true,
      };
      this.cartasPasadas.push(carta);

      this.cartaSrc = "assets/imgs/" + this.partida.barajas[cont] + ".png";
      this.OcultarSlider = true;

      this.audio = new Audio();
      this.audio.src =
        "assets/audios/esp/" + this.partida.barajas[cont] + ".mp3";
      this.audio.load();
      this.audio.play();
      console.log(this.audio.src);
      cont++;

      if (cont == 54) {
        clearInterval(this.cargaInterval);
      }
    }, 5000);
  }
  // playAudio() {
  //   this.audio = new Audio();
  //   this.audio.src = 'assets/audios/1.mp3';
  //   this.audio.play();
  //   this.audio.loop = true;
  // }
  mostrarCartas(i: number) {
    let cartas: Carta[] = [];
    let foundIt = false;
    for (let j = 0; j < i; j++) {
      while (!foundIt) {
        let pos: number = Math.floor(Math.random() * (54 - 1) + 1);
        this.Baraja.forEach((x) => {
          if (x.idCarta == pos) {
            let index = this.Baraja.indexOf(x);
            let cambioCarta = this.Baraja.splice(index, 1).pop();
            cartas.push(cambioCarta);
            this.cartasJugador.push(cambioCarta);
            foundIt = true;
          }
        });
      }
      foundIt = false;
    }
    return cartas;
  }
  agregarCarta(i: number) {
    let carta = {
      idCarta: i += 1,
      imgPath: i,
      textColor: "red.disabled",
      buena: false,
    };
    this.cProvider.Add(carta);
    return carta;
  }
  Confirmar() {
    this.partida = {
      clave: this.partida.clave,
      confirm: true,
      jugadores: this.partida.jugadores,
      barajas: this.partida.barajas,
      totalJugadores: this.partida.totalJugadores,
      jugadas: this.partida.jugadas,
    };
    this.pProvider.confirm(this.partida);
  }

  unirsePartida() {
    let int = setInterval(() => {
      this.pProvider
        .GetAll() //si se ingresaron los campos,
        //se obtiene la informacion de la base de datos
        .snapshotChanges() //para validar la clave de la partida
        .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
          //arreglo de partidas sacado de la BD
          partidas.forEach((p) => {
            //se recorre el arreglo para encontrar la partida que busca unirse el jugador
            if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
              this.partida = p.payload.doc.data();
              console.log(this.partida.confirm);
            }
          });
        });
      if (this.partida.confirm != false) {
        this.Comenzar();
        this.cargarC();
        clearInterval(int);
      }
    }, 1000);
  }
  Comenzar() {
    this.AudioBotones();
    if (this.Stop != false) this.tiempo = this.segundos;
    else {
      setInterval(() => {
        this.tiempo = this.segundos + 1;
        this.segundos += 1;
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos == 60) this.minutos = 0;
          this.hora += 1;
          if ((this.hora = 24)) this.hora = 0;
        }
      }, 1000);
    }
    //this.playAudio();
    // console.log(this.partida);

    this.ocultar1 = false;
    this.ocultarjugadas = true;
    this.clickCarta = true;
  }
  ClickCarta(carta: Carta) {
    this.AudioBotones();
    this.cartasPasadas.forEach((data) => {
      if (data.idCarta == carta.idCarta) {
        if (this.clickCarta)
          if (carta.textColor == "red.disabled") {
            this.buscarJugada(carta);
            carta.textColor = "red";
            carta.buena = true;
            this.buenaArray.push(carta);
            if (this.buenaArray.length == 16) {
              this.Stop = true;
              this.Ganaste();
            }
          }
      }
    });

    // }
  }
  //ubicación de las cartas
  // 0  1  2  3
  // 4  5  6  7
  // 8  9  10 11
  // 12 13 14 15
  buscarJugada(carta: Carta) {
    let pos = this.cartasJugador.indexOf(carta);
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

      if (
        this.chorroArray1.length == 4 ||
        this.chorroArray2.length == 4 ||
        this.chorroArray3.length == 4 ||
        this.chorroArray4.length == 4
      )
        this.Chorro = false;

      this.Centro = !this.verifyArray(this.centroArray);
      this.CuatroEsquia = !this.verifyArray(this.esq4Array);
    }
  }
  verifyArray(array: number[]) {
    if (array.length == 4) return true;
    else return false;
  }
  //Alertas para jugadas
  AlertJugadas() {
    this.AudioBotones();
    let alert = this.cAlert.create({
      title: "Resultado",
      cssClass: "custom-alertDanger",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: () => {
            let puntos = 0;
            if (this.ConfirmarChorro) puntos += this.PuntoChorro = 50;
            if (this.ConfirmarCuatroEsquinas)
              puntos += this.PuntoCuatroEsquinas = 40;
            if (this.ConfirmarCentro) puntos += this.PuntoCentro = 40;
            this.jugador.puntos = puntos;
          },
        },
      ],
      inputs: [
        {
          type: "checkbox",
          label: "¡Chorro!",
          disabled: this.Chorro,
          checked: this.ConfirmarChorro,
          handler: () => {
            console.log("Chorro", this.ConfirmarChorro);
            this.ConfirmarChorro = !this.Chorro;
            this.verificarChorro(0);
          },
        },
        {
          type: "checkbox",
          label: "¡Cuatro esquinas!",
          disabled: this.CuatroEsquia,
          checked: this.ConfirmarCuatroEsquinas,
          handler: () => {
            console.log("Cuatro Esquinas", this.ConfirmarCuatroEsquinas);
            this.ConfirmarCuatroEsquinas = !this.CuatroEsquia;
            this.verificarCuatroEsquinas(1);
          },
        },
        {
          type: "checkbox",
          label: "¡Centro!",
          disabled: this.Centro,
          checked: this.ConfirmarCentro,
          handler: () => {
            console.log("Centro", this.ConfirmarCentro);
            this.ConfirmarCentro = !this.Centro;
            this.verificarCentro(2);
          },
        },
      ],
    });
    alert.present();
  }
  verificarChorro(jugada: number) {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.partida = p.payload.doc.data();
            if (this.partida.jugadas[0].chorro == 0) {
              let partidaUP = p.payload.doc.data();
              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                jugadas: [
                  {
                    chorro: this.jugador.nombre,
                    cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                    centro: partidaUP.jugadas[0].centro,
                    buena: partidaUP.jugadas[0].buena,
                  },
                ],
              };
              this.pProvider.Add(this.partida);
            } 
          }
        });
      });
  }
  verificarCuatroEsquinas(jugada: number) {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.partida = p.payload.doc.data();
            if (this.partida.jugadas[0].cuatroEsquinas == 0) {
              let partidaUP = p.payload.doc.data();
              console.log("Jugadas");
              console.log(partidaUP.jugadas);

              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                jugadas: [
                  {
                    chorro: partidaUP.jugadas[0].chorro,
                    cuatroEsquinas: this.jugador.nombre,
                    centro: partidaUP.jugadas[0].centro,
                    buena: partidaUP.jugadas[0].buena,
                  },
                ],
              };
              this.pProvider.Add(this.partida);
            }
          }
        });
      });
  }
  verificarCentro(jugada: number) {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.partida = p.payload.doc.data();
            console.log("Jugadas");
            if (this.partida.jugadas[0].centro == 0) {
              let partidaUP = p.payload.doc.data();
              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                jugadas: [
                  {
                    chorro: partidaUP.jugadas[0].chorro,
                    cuatroEsquinas: partidaUP.jugadas[0].cuatroEsquinas,
                    centro: this.jugador.nombre,
                    buena: partidaUP.jugadas[0].buena,
                  },
                ],
              };
              this.pProvider.Add(this.partida);
            }
          }
        });
      });
  }
  verificarBuena(jugada: number) {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.partida = p.payload.doc.data();
            console.log("Jugadas");
            if (this.partida.jugadas[0].buena == 0) {
              let partidaUP = p.payload.doc.data();
              this.partida = {
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
                    buena: this.jugador.nombre,
                  },
                ],
              };
              this.pProvider.Add(this.partida);
            }
          }
        });
      });
  }

  Ganaste() {
    let alert = this.cAlert.create({
      title: "Resultado",
      cssClass: "custom-alertDanger",
      message: `<p> ¡Ganaste! </p>`,
      buttons: [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            this.verificarBuena(3);
            this.Cargar();
          },
        },
      ],
    });
  }

  Cargar() {
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
    let alert = this.cAlert.create({
      title: "Resultado",
      cssClass: "custom-alertDanger",
      message: `<p>El ganador es ` + this.ultpartida.jGanador.nombre + `!</p>`,
      buttons: [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            this.Salir();
          },
        },
      ],
    });
  }
  volver() {
    this.AudioBotones();
    let abandonar = this.cAlert.create({
      title: "¿Está seguro/a de abandonar la partida?",
      buttons: [
        {
          text: "Sí",
          role: "accept",
          handler: () => {
            this.Salir();
            this.navCtrl.pop();
          },
        },
        {
          text: "No",
          role: "cancel",
        },
      ],
    });
    abandonar.present();
  }
  async Salir() {
    this.AudioBotones();
    clearInterval(this.cargaInterval);
    await this.pProvider
      .GetAll()
      .valueChanges()
      .subscribe((partidas) => {
        partidas.forEach((p) => {
          if (p.clave == this.partida.clave) {
            let i = this.partida.jugadores.indexOf(this.jugador);
            if (i != -1)
              if (this.partida.jugadores[i].idJugador == this.jugador.idJugador)
                this.pProvider.DeletePlayer(this.partida, this.jugador);
            location.reload();
          }
        });
        this.jProvider.Delete(this.jugador);
        if (this.partida.jugadores.length == 0) {
          this.pProvider.Delete(this.partida);
          // location.reload();
        }
      });
  }
}
