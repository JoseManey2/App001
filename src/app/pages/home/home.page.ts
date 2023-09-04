import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

texto:string='';

  constructor(private router:Router) {}

  hacerClick()
  {
    this.texto="Hola Mundo"
    console.log(this.texto);
    this.router.navigate(['pagina1']);
    if(this.texto!="")
    {
      console.log("No esta vacio");
    }
    else(this.texto!="")
    {
      console.log("");
    }

  }

}
