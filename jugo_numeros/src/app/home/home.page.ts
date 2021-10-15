import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado : number;
  espectativa : number;
  num1: number;
  num2: number;
  listaop: Array <string>=["+","-","*","/"];
  op: string;
  respuesta: string;


  constructor(public alertController: AlertController) {
    this.num1=Math.round(Math.random() * (100 - 1) + 1);
    this.num2=Math.round(Math.random() * (100 - 1) + 1);
    this.resultado=0;
    this.espectativa=100;
    this.op=this.listaop[Math.round(Math.random() * (3 - 0) + 0)];
  }
  aleatorio(){
    this.num1=Math.round(Math.random() * (100 - 1) + 1);
    this.num2=Math.round(Math.random() * (100 - 1) + 1);
    this.op=this.listaop[Math.round(Math.random() * (3 - 0) + 0)];
  }
  verificarR(){
    if(this.op=="+"){
      this.espectativa=this.num1+this.num2;
    }
    if(this.op=="-"){
      this.espectativa=this.num1-this.num2;
    }
    if(this.op=="*"){
      this.espectativa=this.num1*this.num2;
    }
    if(this.op=="/"){
      this.espectativa=this.num1/this.num2;
    }
    
  }
  async presentAlert() {
    this.verificarR();
    if(this.espectativa== this.resultado){
      this.respuesta="Correcto";
    }else{
      this.respuesta="Incorrecto";
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado',
      subHeader: 'Tu respuesta es:',
      message: `Espectativa:${this.resultado} Realidad ${this.espectativa} Respuesta: ${this.respuesta}`,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.aleatorio();
    this.resultado=0;
  }


}
