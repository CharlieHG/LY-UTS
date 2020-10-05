import { Component, ViewChild } from "@angular/core";
import { NavController, AlertController, Slides } from "ionic-angular";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { Partida } from "../../models/partida";
import { Carta } from "../../models/carta";
import { Jugador } from "../../models/jugador";
import { UltimaPartida } from "../../models/ultpartida";
import { JugadorProvider } from "../../providers/jugador/jugador";
import { PartidaProvider } from "../../providers/partida/partida";
import { DocumentChangeAction } from "@angular/fire/firestore";
import firebase from "firebase";
import $ from "jquery";
import { InicioPage } from "../inicio/inicio";

@Component({
  selector: "page-partida",
  templateUrl: "partida.html",
})
export class PartidaPage {
  public items: Partida[] = [];
  public ref = firebase.database().ref("/name/");
  public partida: Partida;
  public Vpartida: any = [];
  public jugador: Jugador;
  public ultpartida: UltimaPartida;
  public ConfirmarChorro: boolean = false;
  public ConfirmarCuatroEsquinas: boolean = false;
  public ConfirmarCentro: boolean = false;
  @ViewChild(Slides) slides: Slides;
  public CuatroEsquia: boolean = true;
  public Chorro: boolean = true;
  public Centro: boolean = true;
  //Puntos
  public PuntoChorro = 0;
  public PuntoBuenas = 100;
  public PuntoCuatroEsquinas = 0;
  public PuntoCentro = 0;
  //Hover
  public ocultar1: boolean = true;
  public ocultarjugadas: boolean = false;
  public OcultarSlider: boolean = false;
  public isenabled: boolean = true;
  public hora = 0;
  public minutos = 0;
  public segundos = 0;
  public Stop: boolean = false;
  public tiempo = 0;
  public idCarta: number = 0;
  public ImageArray: number[] = [];
  public cargarArray: number[] = [];
  public Baraja: Carta[] = [];
  public cartasJugador: Carta[] = [];
  public fila1: Carta[] = [];
  public fila2: Carta[] = [];
  public fila3: Carta[] = [];
  public fila4: Carta[] = [];
  public chorroArray1: number[] = [];
  public chorroArray2: number[] = [];
  public chorroArray3: number[] = [];
  public chorroArray4: number[] = [];
  public esq4Array: number[] = [];
  public centroArray: number[] = [];
  public buenaArray: Carta[] = [];
  public audio: any;
  public clickCarta: boolean = false;
  public cartaSrc;
  public cartasPasadas: Carta[] = [];
  public cargaInterval;
  public comenzarInt;
  public partidaD:Partida;
  constructor(
    public navParams: NavParams,
    private cAlert: AlertController,
    public navCtrl: NavController,
    private jProvider: JugadorProvider,
    private pProvider: PartidaProvider
  ) {
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
  cargarC() {
    let cont = 0;
    this.cargaInterval = setInterval(() => {
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
      cont++;

      if (cont == 54) {
        clearInterval(this.comenzarInt);
        clearInterval(this.cargaInterval);

      }
    }, 5000);
  }

  //Verifica si alguien ganó
  jugadasBD() {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.partida = p.payload.doc.data();
            
          }
        });
      });
      if (this.partida.jugadas[0].buena != 0) {
        let alert2 = this.cAlert.create({
          title: "¡Ya hay un gandor!",
          cssClass: "custom-alertDanger",
          message:
            `<p> Resultados </p>` +
            "\n" +
            `El jugador <b>` +
            this.partida.jugadas[0].buena +
            `</b> ya ha gando.` +
            `<br><br><b>Jugadas</b><br>`+
            `<br>Chorro: ` +
            this.partida.jugadas[0].chorro +
            `<br>` +
            `Cuatro esquinas: ` +
            this.partida.jugadas[0].cuatroEsquinas +
            `<br>` +
            `Centro: ` +
            this.partida.jugadas[0].centro +
            `<br>` +
            `Buena: ` +
            this.partida.jugadas[0].buena +
            `<br>`,
          buttons: ["Aceptar"],
        });
        alert2.present();
      }
      if (this.partida.jugadas[0].buena == 0) {
        let partidaUP = this.partida;
        clearInterval(this.comenzarInt);
        this.partida = {
          barajas: partidaUP.barajas,
          clave: partidaUP.clave,
          confirm: partidaUP.confirm,
          jugadores: partidaUP.jugadores,
          totalJugadores: partidaUP.totalJugadores,
          confirmStop:true,
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

        let alert = this.cAlert.create({
          title: "¡Ganaste!",
          cssClass: "custom-alertDanger",
          message:
            `<p> <b>Resultados</b> </p>` +
            "\n" +
            `Chorro: ` +
            this.partida.jugadas[0].chorro +
            `<br>` +
            `Cuatro esquinas: ` +
            this.partida.jugadas[0].cuatroEsquinas +
            `<br>` +
            `Centro: ` +
            this.partida.jugadas[0].centro +
            `<br>` +
            `Buena: ` +
            this.partida.jugadas[0].buena +
            `<br>`,
          buttons: ["Aceptar"],
        });
        alert.present();
        }
  }
  
  detenerJugada(){
    let int = setInterval(() => {
      this.pProvider
        .GetAll()
        .snapshotChanges()
        .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
          partidas.forEach((p) => {
            if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
              this.partida = p.payload.doc.data();
            }
          });
        });
      if (this.partida.confirmStop != false) {
        clearInterval(this.comenzarInt);
        clearInterval(this.cargaInterval);
        clearInterval(int);
      }
    }, 500); 
  }
  //Confirma partida para empezarla
  Confirmar() {
    this.partida = {
      clave: this.partida.clave,
      confirm: true,
      jugadores: this.partida.jugadores,
      barajas: this.partida.barajas,
      totalJugadores: this.partida.totalJugadores,
      jugadas: this.partida.jugadas,
      confirmStop:this.partida.confirmStop
    };
    this.pProvider.confirm(this.partida);
  }

  //Verifica si empezó la partida
  unirsePartida() {
    let int = setInterval(() => {
      this.pProvider
        .GetAll()
        .snapshotChanges()
        .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
          partidas.forEach((p) => {
            if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
              this.partida = p.payload.doc.data();
            }
          });
        });
      if (this.partida.confirm != false) {
        this.Comenzar();
        this.cargarC();
        this.detenerJugada();
        clearInterval(int);
      }
    }, 500);
  }

  //Se ejecuta al confirmal que empezó la partida
  Comenzar() {
    if (this.Stop != false) this.tiempo = this.segundos;
    else {
      this.comenzarInt = setInterval(() => {
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

    this.ocultar1 = false;
    this.ocultarjugadas = true;
    this.clickCarta = true;
  }

  //Verifica estado de la carta para su selección
  ClickCarta(carta: Carta) {
    this.cartasPasadas.forEach((data) => {
      if (data.idCarta == carta.idCarta) {
        if (this.clickCarta)
          if (carta.textColor == "red.disabled") {
            carta.textColor = "red";
            this.buscarJugada(carta);
            carta.buena = true;
            this.buenaArray.push(carta);
            if (this.buenaArray.length == 16) {
              this.Stop = true;
              this.jugadasBD();
            }
          }
      }
    });
  }

  buscarJugada(carta: Carta) {
    if (this.jugador.cartaGrande == 1) {
      //Chorro arriba
      if (carta.idCarta == 1 || carta.idCarta == 21 ||carta.idCarta == 28 ||carta.idCarta == 31) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
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
      if (carta.idCarta == 36 || carta.idCarta == 47 ||carta.idCarta == 3 ||carta.idCarta == 32) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
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
      if (carta.idCarta == 1 || carta.idCarta == 31 ||carta.idCarta == 41 ||carta.idCarta == 37) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 2) {
      //Chorro arriba
      if (carta.idCarta == 42 || carta.idCarta == 4 ||carta.idCarta == 35 ||carta.idCarta == 22) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }

      //Centro
      if (carta.idCarta == 33 || carta.idCarta == 2 ||carta.idCarta == 29 ||carta.idCarta == 32) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 42 || carta.idCarta == 22 ||carta.idCarta == 17 ||carta.idCarta == 48) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 3) {
      //Chorro arriba
      if (carta.idCarta == 23 || carta.idCarta == 33 ||carta.idCarta == 48 ||carta.idCarta == 1) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }

      //Centro
      if (carta.idCarta == 34 || carta.idCarta == 28 ||carta.idCarta == 5 ||carta.idCarta == 19) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      
      //Cuatro esquinas
      if (carta.idCarta == 23 || carta.idCarta == 1 ||carta.idCarta == 42 ||carta.idCarta == 49) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 4) {
      //Chorro arriba
      if (carta.idCarta == 45 || carta.idCarta == 24 ||carta.idCarta == 30 ||carta.idCarta == 34) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 8 || carta.idCarta == 44 ||carta.idCarta == 40 ||carta.idCarta == 7) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 45 || carta.idCarta == 34 ||carta.idCarta == 25 ||carta.idCarta == 50) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 5) {
      //Chorro arriba
      if (carta.idCarta == 41 || carta.idCarta == 21 ||carta.idCarta == 35 ||carta.idCarta == 34) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 9 || carta.idCarta == 50 ||carta.idCarta == 27 ||carta.idCarta == 45) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 41 || carta.idCarta == 34 ||carta.idCarta == 23 ||carta.idCarta == 31) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 6) {
      //Chorro arriba
      if (carta.idCarta == 51 || carta.idCarta == 10 ||carta.idCarta == 20 ||carta.idCarta == 41) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 26 || carta.idCarta == 54 ||carta.idCarta == 40 ||carta.idCarta == 12) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 51 || carta.idCarta == 41 ||carta.idCarta == 11 ||carta.idCarta == 16) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 7) {
      //Chorro arriba
      if (carta.idCarta == 52 || carta.idCarta == 53 ||carta.idCarta == 37 ||carta.idCarta == 2) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 27 || carta.idCarta == 18 ||carta.idCarta == 6 ||carta.idCarta == 39) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 52 || carta.idCarta == 2 ||carta.idCarta == 17 ||carta.idCarta == 4) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 8) {
      //Chorro arriba
      if (carta.idCarta == 53 || carta.idCarta == 9 ||carta.idCarta == 51 ||carta.idCarta == 19 ) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 28 || carta.idCarta == 37 ||carta.idCarta == 3 ||carta.idCarta == 15) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 53 || carta.idCarta == 19 ||carta.idCarta == 16 ||carta.idCarta == 12) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 9) {
      //Chorro arriba
      if (carta.idCarta == 4 || carta.idCarta == 11 ||carta.idCarta == 7 ||carta.idCarta == 29 ) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 10 || carta.idCarta == 37 ||carta.idCarta == 22 ||carta.idCarta == 17) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 4 || carta.idCarta == 29 ||carta.idCarta == 18 ||carta.idCarta == 46) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 10) {
      //Chorro arriba
      if (carta.idCarta == 14 || carta.idCarta == 26 ||carta.idCarta == 9 ||carta.idCarta == 6) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 8 || carta.idCarta == 30 ||carta.idCarta == 54 ||carta.idCarta == 19) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 14 || carta.idCarta == 6 ||carta.idCarta == 40 ||carta.idCarta == 20) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 11) {
      //Chorro arriba
      if (carta.idCarta == 33 || carta.idCarta == 28 ||carta.idCarta == 48 ||carta.idCarta == 10) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 16 || carta.idCarta == 11 ||carta.idCarta == 46 ||carta.idCarta == 29) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 33 || carta.idCarta == 10 ||carta.idCarta == 36 ||carta.idCarta == 26) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
    if (this.jugador.cartaGrande == 12) {
      //Chorro arriba
      if (carta.idCarta == 35 || carta.idCarta == 49 ||carta.idCarta == 31 ||carta.idCarta == 12) {
        let cont=0;
        this.chorroArray1.push(cont++);
        if (this.chorroArray1.length == 4) this.Chorro = false;
      }
      //Centro
      if (carta.idCarta == 50 || carta.idCarta == 51 ||carta.idCarta == 27 ||carta.idCarta == 14) {
        let cont=0;
        this.centroArray.push(cont++);
        if (this.centroArray.length == 4) this.Centro = false;
      }
      //Cuatro esquinas
      if (carta.idCarta == 35 || carta.idCarta == 12 ||carta.idCarta == 30 ||carta.idCarta == 32 ) {
        let cont=0;
        this.esq4Array.push(cont++);
        if (this.esq4Array.length == 4) this.CuatroEsquia = false;
      }
    }
  }

  //Alertas para jugadas
  AlertJugadas() {
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
            this.ConfirmarCentro = !this.Centro;
            this.verificarCentro(2);
          },
        },
      ],
    });
    alert.present();
  }

  //Verificar jugadas
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
                confirmStop:partidaUP.confirmStop,
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

              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                confirmStop:partidaUP.confirmStop,
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
            if (this.partida.jugadas[0].centro == 0) {
              let partidaUP = p.payload.doc.data();
              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                confirmStop:partidaUP.confirmStop,
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
            if (this.partida.jugadas[0].buena == 0) {
              let partidaUP = p.payload.doc.data();
              this.partida = {
                barajas: partidaUP.barajas,
                clave: partidaUP.clave,
                confirm: partidaUP.confirm,
                jugadores: partidaUP.jugadores,
                totalJugadores: partidaUP.totalJugadores,
                confirmStop:partidaUP.confirmStop,
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
          },
        },
      ],
    });
    alert.present();
  }

  //Abandona la spartida
  volver() {
    let abandonar = this.cAlert.create({
      title: "¿Está seguro/a de abandonar la partida?",
      buttons: [
        {
          text: "Sí",
          role: "accept",
          handler: () => {
            this.Salir();
            this.navCtrl.setRoot(InicioPage);
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

  //Se ejecuta al confirmar el abandono de la partida
  async Salir() {
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
        }
      });
  }
  //Carga la carta grande
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
