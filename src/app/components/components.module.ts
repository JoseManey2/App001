import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EncabezadoComponent ,FooterComponent], 
  exports: [EncabezadoComponent, FooterComponent], 
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
