import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { Jugador } from "../../models/jugador";
import { PartidaPage } from "../partida/partida";
import { JugadorProvider } from "../../providers/jugador/jugador";
import { PartidaProvider } from "../../providers/partida/partida";
import { Partida } from "../../models/partida";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { Jugadas } from "../../models/jugadas";
import { CartasSelecPage } from "../cartas-selec/cartas-selec";

@IonicPage()
@Component({
  selector: "page-unirse-partida",
  templateUrl: "unirse-partida.html",
})
export class UnirsePartidaPage {
  jugador: Jugador;
  audio: any;
  partida: Partida;
  nombreAlert: boolean = false; //Activa la alerta si el nombre no ha sido ingresado
  claveAlert: boolean = false; //Activa la alerta si la clave no ha sido ingresada
  nuevoJugador: boolean = true; //Determina si se puede ingresar un nuevo jugador
  public cartaGrande;
  public pt: Partida;
  public arrayCC: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jProvider: JugadorProvider,
    private pProvider: PartidaProvider,
    private alert: AlertController
  ) {
    this.cartaGrande = navParams.get("cartaGrande");
    this.partida = {
      clave: 0,
      jugadores: new Array<Jugador>(),
      confirm: false,
      totalJugadores: 0,
      confirmStop:false,
      barajas: new Array<number>(),
      jugadas: new Array<Jugadas>(),
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

  volver() {
    this.navCtrl.setRoot(CartasSelecPage);
  }
  confirmarCarta() {
    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            let pt = p.payload.doc.data();
            console.log(pt);
          }
        });
      });
  }
  unirsePartida() {
    let ins = setInterval(() => {
      if (this.arrayCC.length == 0) {
        this.agregarJugador();
        clearInterval(ins);
      } else {
        alert("¡La carta que seleccionaste ya está en uso, cámbiala!");
        clearInterval(ins);
      }
    }, 1000);

    this.pProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
        partidas.forEach((p) => {
          if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
            this.pt = p.payload.doc.data();
            for (let index of this.pt.jugadores) {
              if (index.cartaGrande == this.jugador.cartaGrande) {
                this.arrayCC.push(index.cartaGrande);
                console.log(this.arrayCC);
              }
            }
          }
        });
      });
  }
  agregarJugador() {
    if (this.jugador.nombre == "")
      //si no se ingresó el nombre se activa una advertencia
      this.nombreAlert = true;
    //si se ingresó, se esconde
    else this.nombreAlert = false;

    if (this.jugador.clavePartida == null)
      //si la clave no se ingresó se activa una advertencia
      this.claveAlert = true;
    // si se ingresó, se esconde
    else this.claveAlert = false;

    if (this.claveAlert == false && this.nombreAlert == false) {
      this.pProvider
        .GetAll() //si se ingresaron los campos,
        //se obtiene la informacion de la base de datos
        .snapshotChanges() //para validar la clave de la partida
        .subscribe((partidas: DocumentChangeAction<Partida>[]) => {
          //arreglo de partidas sacado de la BD
          if (this.nuevoJugador) {
            let isAdd = false; //variable que comprueba si el jugador ya se añadió a la partida

            partidas.forEach((p) => {
              //se recorre el arreglo para encontrar la partida que busca unirse el jugador
              if (p.payload.doc.id == this.jugador.clavePartida.toString()) {
                isAdd = true;

                let p2 = p.payload.doc.data();
                this.partida = {
                  barajas: p2.barajas,
                  clave: p2.clave,
                  confirm: p2.confirm,
                  jugadores: p2.jugadores,
                  totalJugadores: p2.totalJugadores + 1,
                  jugadas: p2.jugadas,
                  confirmStop: p2.confirmStop,
                };

                if (p2.confirm == true) {
                  this.alert
                    .create({
                      title: "La partida ya empezó",
                      buttons: ["Aceptar"],
                    })
                    .present();
                } else {
                  if (p2.totalJugadores == 12) {
                    this.alert
                      .create({
                        title: "Partida llena",
                        buttons: ["Aceptar"],
                      })
                      .present();
                  } else {
                    if (this.validarJugador(this.jugador))
                      this.partida.jugadores.push(this.jugador);
                    this.guardarJugador();
                    if (isAdd) {
                      //si ya se añadió el jugador a la partida se crea una alerta y se muestra la sig interfaz
                      this.navCtrl.setRoot(PartidaPage, {
                        //se manda un objeto con los atributos de la partida que se creó y el jugador que se unió
                        partida: this.partida,
                        jugador: this.jugador,
                      });
                      this.alert
                        .create({
                          title: "¡Te has unido a la partida!",
                          buttons: ["Aceptar"],
                        })
                        .present();
                      this.nuevoJugador = false;
                      this.guardarPartida();
                    } else {
                      //si no, la clave fue incorrecta y se crea una alerta
                      this.alert
                        .create({
                          title: "Clave de la partida incorrecta",
                          subTitle:
                            "Asegúrese de que la clave que " +
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
  }
  validarJugador(jugador: Jugador) {
    let isAdd = true;
    this.partida.jugadores.forEach((j) => {
      if (j.nombre == jugador.nombre) {
        let i = this.partida.jugadores.indexOf(j);
        this.partida.jugadores[i] = jugador;
        isAdd = false;
      }
    });
    return isAdd;
  }
  generarId() {
    //metodo que genera un id numerico aleatorio de 1-1000
    return Math.floor(Math.random() * 1000 + 1);
  }
  guardarJugador() {
    //Guarda al jugador en BD
    this.jProvider.Add(this.jugador);
  }
  guardarPartida() {
    //Guarda la partida en BD
    this.pProvider.Add(this.partida);
  }
}
