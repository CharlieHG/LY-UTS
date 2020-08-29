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
import firebase from "firebase";
import { snapshotToArray } from "../../config/firebase";
import $ from "jquery";

@Component({
  selector: "page-partida",
  templateUrl: "partida.html",
})
export class PartidaPage {
  public items: Partida[] = [];
  ref = firebase.database().ref("/name/");
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
  public newItem;
  public prueba;
  public key;

  constructor(
    public navParams: NavParams,
    private cAlert: AlertController,
    public navCtrl: NavController,
    private ultProvider: UltimapartidaProvider,
    private jProvider: JugadorProvider,
    private pProvider: PartidaProvider,
    private cProvider: CartaProvider
  ) {
    // this.cartaGrande();
    this.partida = navParams.get("partida");
    this.unirsePartida();
    this.jugador = navParams.get("jugador");
    this.cartaGrande();
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

    // this.ref.on("value", (resp) => {
    //   this.items = snapshotToArray(resp);
    //   for (let clave of this.items) {
    //     if (clave.clave == this.partida.clave) {
    //       this.prueba = clave.confirm;
    //       console.log(clave);
    //     } else {
    //       console.log("No encontrada");
    //     }
    //   }
    //   this.verificar();
    // });
  }

  verificar() {
    console.log("Aqui");
    if (this.prueba == true) {
      // this.Comenzar();
      this.cargarC();
    }
  }
  addItem() {
    let item = this.partida;
    this.newItem = this.ref.push();
    this.newItem.set(item);
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
      $("#imgID").focus();
      let carta = {
        idCarta: this.partida.barajas[cont],
        imgPath: this.partida.barajas[cont],
        textColor: "red.disabled",
        buena: true,
      };
      this.cartasPasadas.push(carta);
      this.OcultarSlider = true;
      this.cartaSrc = "assets/imgs/" + this.partida.barajas[cont] + ".png";

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
  jugadasBD() {
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
              alert("Ganaste! " );
              alert(
                "Resultados! " + "\n"+
                  "Cuatro esquinas: " + 
                  this.partida.jugadas[0].cuatroEsquinas + "\n"+
                  "Chorro: " +
                  this.partida.jugadas[0].chorro + "\n"+
                  "Centro: " +
                  this.partida.jugadas[0].centro + "\n"+
                  "Buena: " +
                  this.partida.jugadas[0].buena
              );
            } else {
              alert(
                "El jugador " + this.partida.jugadas[0].buena + " ya ha gando"
              );
              alert(
                "Resultados! \n" +
                  "Cuatro esquinas: " +
                  this.partida.jugadas[0].cuatroEsquinas + "\n"+

                  "Chorro: " +
                  this.partida.jugadas[0].chorro + "\n"+

                  "Centro: " +
                  this.partida.jugadas[0].centro + "\n"+

                  "Buena: " +
                  this.partida.jugadas[0].buena
              );
            }
          }
        });
      });
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
    // this.partida = {
    //   clave: this.partida.clave,
    //   confirm: true,
    //   jugadores: this.partida.jugadores,
    //   barajas: this.partida.barajas,
    //   totalJugadores: this.partida.totalJugadores,
    //   jugadas: this.partida.jugadas,
    // };
    // let item = this.partida;
    // this.newItem = this.ref.push();
    // this.newItem.set(item);

    // firebase.database().ref('name'+ this.prueba).update({
    //   clave: this.partida.clave,
    //   confirm: true,
    //   jugadores: this.partida.jugadores,
    //   barajas: this.partida.barajas,
    //   totalJugadores: this.partida.totalJugadores,
    //   jugadas: this.partida.jugadas
    // });
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
    console.log(carta);

    this.cartasPasadas.forEach((data) => {
      if (data.idCarta == carta.idCarta) {
        if (this.clickCarta)
          if (carta.textColor == "red.disabled") {
            carta.textColor = "red";
            this.buscarJugada(carta);
            carta.buena = true;
            this.buenaArray.push(carta);
            console.log(this.buenaArray);

            if (this.buenaArray.length == 16) {
              console.log("Entra");
              this.Stop = true;
              this.jugadasBD();
              console.log("Sale");
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
    if (this.jugador.cartaGrande == 1) {
      //Chorro arriba
      if (carta.idCarta == 1 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 21 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 28 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 31 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 36 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 47 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 3 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 32 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 1 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 31 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 41 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 37 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 2) {
      //Chorro arriba
      if (carta.idCarta == 42 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 4 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 35 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 22 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 33 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 2 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 29 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 32 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 42 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 22 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 17 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 48 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 3) {
      //Chorro arriba
      if (carta.idCarta == 23 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 33 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 48 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 1 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 34 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 28 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 5 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 19 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 23 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 1 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 42 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 49 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 4) {
      //Chorro arriba
      if (carta.idCarta == 45 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 24 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 30 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 34 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 8 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 44 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 40 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 7 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 45 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 34 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 25 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 50 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 5) {
      //Chorro arriba
      if (carta.idCarta == 41 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 21 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 35 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 34 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 9 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 50 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 27 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 45 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 41 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 34 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 23 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 31 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 6) {
      //Chorro arriba
      if (carta.idCarta == 51 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 10 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 20 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 41 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 26 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 54 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 40 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 12 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 51 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 41 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 11 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 16 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 7) {
      //Chorro arriba
      if (carta.idCarta == 52 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 53 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 37 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 2 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 27 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 18 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 6 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 39 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 52 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 2 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 17 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 4 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 8) {
      //Chorro arriba
      if (carta.idCarta == 53 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 9 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 51 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 19 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 28 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 37 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 3 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 15 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 53 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 19 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 16 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 12 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 9) {
      //Chorro arriba
      if (carta.idCarta == 4 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 11 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 7 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 29 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 10 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 37 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 22 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 17 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 4 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 29 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 18 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 46 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 10) {
      //Chorro arriba
      if (carta.idCarta == 14 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 26 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 9 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 6 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 8 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 30 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 54 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 19 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 14 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 6 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 40 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 20 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 11) {
      //Chorro arriba
      if (carta.idCarta == 33 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 28 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 48 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 10 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 16 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 11 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 46 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 29 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 33 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 10 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 36 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 26 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 12) {
      //Chorro arriba
      if (carta.idCarta == 35 || carta.textColor == "red") {
        this.chorroArray1.push(1);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 49 || carta.textColor == "red") {
        this.chorroArray1.push(2);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 31 || carta.textColor == "red") {
        this.chorroArray1.push(3);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      if (carta.idCarta == 12 || carta.textColor == "red") {
        this.chorroArray1.push(4);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 50 || carta.textColor == "red") {
        this.centroArray.push(1);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 51 || carta.textColor == "red") {
        this.centroArray.push(2);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 27 || carta.textColor == "red") {
        this.centroArray.push(3);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      if (carta.idCarta == 14 || carta.textColor == "red") {
        this.centroArray.push(4);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 35 || carta.textColor == "red") {
        this.esq4Array.push(1);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 12 || carta.textColor == "red") {
        this.esq4Array.push(2);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 30 || carta.textColor == "red") {
        this.esq4Array.push(3);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
      if (carta.idCarta == 32 || carta.textColor == "red") {
        this.esq4Array.push(4);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
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
            // this.Cargar();
          },
        },
      ],
    });
    alert.present();
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
  cartaGrande() {
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
  }
}
