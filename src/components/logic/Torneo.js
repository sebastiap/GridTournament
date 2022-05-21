export var	personajes = [
		{
		  id: 90,
		  nombre: 'Goku',
		  raza:'saiyan',
		  ki:'divino',
		  vivo: true
		},
		{
		  id: 80,
		  nombre: 'Vegeta',
		  raza:'saiyan',
		  ki:'divino',
		  vivo: true
		},
		{
		  id: 60,
		  nombre: 'Gohan',
		  raza:'saiyan',
		  ki:'mistico',
		  vivo: true
		},
		{
		  id: 30,
		  nombre: 'Krilin',
		  raza:'humano',
		  ki:'normal',
		  vivo: true
		},
		{
		  id: 10,
		  nombre: 'Roshi',
		  raza:'humano',
		  ki:'normal',
		  vivo: true
		},
		{
		  id: 1000,
		  nombre: 'Broly',
		  raza:'LSaiyan',
		  ki:'normal',
		  vivo: true
		}
	  ];

	 export var formas = [
		{
		  id: 10,
		  modo: 'Raged',
		  raza:'NO',
		  ki:'NO',
		  aura:"#b30000",
		  user: 'TODOS' //Significa que lo puede usar cualquiera
		},
		{
		  id: 20,
		  modo: 'Kaioken',
		  raza:'NO',
		  ki:'NO',
		  aura:"red",
		  user: 'Goku'
		},
		{
		  id: 50,
		  modo: 'SS',
		  raza:'saiyan',
		  ki:'NO',
		  aura:"#fff4b3",
		  user: 'saiyan'
		},
		{
		  id: 100,
		  modo: 'SS2',
		  raza:'saiyan',
		  ki:'NO',
		  aura:"gold",
		  user: 'saiyan'
		},
		{
		  id: 400,
		  modo: 'SS3',
		  raza:'saiyan',
		  ki:'NO',
		  aura:"#ccad00",
		  user: 'saiyan'
		},
		{
		  id: 500,
		  modo: 'SS4',
		  raza:'GT',
		  ki:'NO',
		  aura:"gold",
		  user: 'Vegeta'
		},
		{
		  id: 1000,
		  modo: 'SSGOD',
		  raza:'Dios',
		  ki:'divino',
		  aura:"#DC143C",
		  user: 'NO'
		},
		{
		  id: 1500,
		  modo: 'SSBLUE',
		  raza:'Dios',
		  ki:'divino',
		  aura:"lightblue",
		  user: 'NO'
		},
		{
		  id: 700,
		  modo: 'MYSTIC',
		  raza:'Dios',
		  ki:'mistico',
		  aura:"#bfbfbf",
		  user: 'NO'
		},
		{
		  id: 120,
		  modo: 'ULTRA-EGO',
		  raza:'NO',
		  ki:'NO',
		  aura:"silver",
		  user: 'Krilin'
		},
			  {
		  id: 3000,
		  modo: 'UI',
		  raza:'NO',
		  ki:'NO',
		  aura:"silver",
		  user: 'Goku'
		},
			  {
		  id: 101,
		  modo: 'OOZARU CONTENIDO',
		  raza:'NO',
		  ki:'NO',
		  aura:"#ace600",
		  user: 'Broly'
		}
		,
			  {
		  id: 900,
		  modo: 'SS Mutante',
		  raza:'NO',
		  ki:'NO',
		  aura:"#39e600",
		  user: 'Broly'
		}
		,
			  {
		  id: 2000,
		  modo: 'SS Legendario',
		  raza:'NO',
		  ki:'NO',
		  aura:"#00b33c",
		  user: 'Broly'
		}
	  ];
export var imgenemigo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKbl87oT29ufSZv3iW4JrpBbm2K9GFcn7lf2zP7eJ62yGxEZhig";
export var	options= [
		  {nombre: 'TAIYOKEN', pj: 'Krilin' , usos:2}, // ciega, sirve para empujar
		  {nombre: 'ESCUDO', pj: 'TODOS', usos:2}, // convierte un estuviste cerca en una victoria
		  {nombre: 'PARALISIS', pj: 'Roshi', usos:1},// paraliza , sirve para empujar 100/100?
		  {nombre: 'EXPLOSION', pj: 'Vegeta', usos:1}, //multiplica el nivelpelea x 5
		  {nombre: 'MAFUBA', pj: 'Roshi', usos:1}, // Gana de una contra cualquier enemigo
		  {nombre: 'KAME', pj: 'TODOS', usos:3 // Multiplica el poder x2 pero resta el poder base para proximas peleas
		  }
		  ];

export function Luchar() { 
			this.logtorneo = this.logtorneo + "\n" +  this.lineacomando;
			if (this.tecnica != 'Ninguna') { //PUNTOS EXTRAS POR HABILIDAD
			this.puntaje = this.puntaje + 50;
				if (this.tecnica === 'MAFUBA') {
				this.options[4].usos--;
				}
				else if (this.tecnica === 'PARALISIS') {
				this.options[2].usos--;
				}
				else if (this.tecnica === 'TAIYOKEN') {
				this.options[0].usos--;
				}
				else if (this.tecnica === 'EXPLOSION') {
				this.options[3].usos--;
				}
				else if (this.tecnica === 'KAME') { // VER SI LO HAGO POR PJ
				this.options[5].usos--;
				}
				else if (this.tecnica === 'ESCUDO') { // VER SI LO HAGO POR PJ
				this.options[1].usos--;
				}
			}
			  if (this.resultado === 'Victoria') {
				this.puntaje = this.puntaje + 100;
			  }
			  else if (this.resultado === 'Overkill') {
				this.puntaje = this.puntaje + 10;
			  }
			  else if (this.resultado === 'Estuviste Cerca')  {
				this.puntaje = this.puntaje + 50;
				this.personaje.vivo = false;
				this.personaje = 0;
			  }
			  else if (this.resultado === 'Derrota Aplastante') {
				  this.puntaje = this.puntaje + 5;
				  this.personaje.vivo = false;
				  this.personaje = 0;
			  }
			  else if (this.resultado === 'Victoria con lo justo') {
				  this.puntaje = this.puntaje + 75;
				  this.personaje = 0;
		
			  }else //empate
			  {
				this.puntaje = this.puntaje + 20;
			  }
			this.nroenemigo++;
			this.tecnica = 'Ninguna';
			// this.personaje = 0;
			// this.forma = 1;
			};
			export function	Empujar() { // Si se usa una tecnica distinta algun cartel y no baja uso? , 2) Pongo chanceempuje tambien?
			  if (this.tecnica === 'PARALISIS') { 
			  this.modalempuje = 'saco de la pista al enemigo!';
			  this.options[2].usos--;
			  //  cambiarenemigo() ;
			  this.nroenemigo++;
			  this.puntaje = this.puntaje + 100;
			  } 
			  else if (this.tecnica === 'TAIYOKEN') 
			  { 
				  this.options[0].usos--;
				  if (this.chanceescape > 50) {
					 this.modalempuje = 'saco de la pista al enemigo!';   
					 this.nroenemigo++;
					 this.puntaje = this.puntaje + 100;}
				  else {this.modalempuje = 'fallo el empujon!' }
			  }
			  else
				if (this.chanceescape > 70) {      
				  this.modalempuje = 'saco de la pista al enemigo!';  
				  this.nroenemigo++;
				  this.puntaje = this.puntaje + 100; }
				else
			   { this.modalempuje = 'fallo el empujon!'}
			  this.tecnica = 'Ninguna';
			};
		
			export function	Huir() {
			if (this.enemigoshuidos.length >= 3) { // Ver que hacer con los que te estan persiguiendo
			this.modalhuida = ', hay Muchos personajes persiguiendote!!';
			}
			else if (this.tecnica === 'TAIYOKEN') {
				this.options[0].usos--;
				this.modalhuida = 'escapo al otro lado de la pista!';
				this.enemigoshuidos.push({nombre: 'ENE' + this.nroenemigo,poder: this.enemigo,nro:this.nroenemigo});
				this.nroenemigo++;
			}
			else if (this.chanceescape > 70) { 
			  this.modalhuida = 'escapo al otro lado de la pista!'  
			  this.enemigoshuidos.push({nombre: 'ENE' + this.nroenemigo,poder: this.enemigo,nro:this.nroenemigo});
			  this.nroenemigo++; }
			else {this.modalhuida = 'no pudo escapar!';}
			this.tecnica = 'Ninguna';
		
			};

