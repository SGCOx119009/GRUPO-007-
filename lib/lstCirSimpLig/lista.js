class Nodo{
    info=0;
    liga=null;
}

export class ListaCircularSimplementeLigada{
    INICIO=null;
    LISTA_CANVAS=null;

    inserta_inicio(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
        }
        else{
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            var F=P;
            while(F.liga!=P) F=F.liga;
            F.liga=Q;
            Q.liga=P;
            P=Q;
        }
    this.INICIO=P;
    }////////////////////////////////////////////////////////////////////////////////////////
    inserta_final(DATO){
        var P=this.INICIO;
        var T=P;
        while(T.liga!=P) T=T.liga;
        var Q=new Nodo();
        Q.info=DATO;
        T.liga=Q;
        Q.liga=P;
        this.INICIO=P; 
     }////////////////////////////////////////////////////////////////////////////////////////
    inserta_antes_X(DATO, X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            else BAND=0;
        }

        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                var U=P;
                while(U.liga!=P) U=U.liga;
                X1.liga=P;
                P=X1;
                U.liga=P;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else throw new Error("ERROR 102: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
    }////////////////////////////////////////////////////////////////////////////////////////
    inserta_despues_X(DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1){
            if(Q.liga!=P) Q=Q.liga;
            else BAND=0;
        }

        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else throw new Error("ERROR 102: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    // ELIMINACION DE LISTAS CIRCULARES SIMPLEMENTE LIGADAS
    /////////////////////////////////////////////////////////////////////////////////////////
    elimina_inicio(){
        var P=this.INICIO;
        var Q=P;
        var U=P;
        while(U.liga!=P) U=U.liga;
        U.liga=P.liga;
        P=P.liga;
        if(Q==P) P=null;
        this.INICIO=P;
    }////////////////////////////////////////////////////////////////////////////////////////
    elimina_final(){
        var P=this.INICIO;
        var Q=P;
        var T;
        while(Q.liga!=P){
            T=Q;
            Q=Q.liga; 
        }
        if(Q==P)P=null;
        else T.liga=P;
        this.INICIO=P;
    }////////////////////////////////////////////////////////////////////////////////////////
    elimina_X(DATO){
        var P=this.INICIO;
        var Q=P;
        var T=P;
        var BAND=1;
        var atras;
        while(T.info!=DATO && BAND==1 ){
            if(T.liga!=P){
                atras=T;
                T=T.liga;
            }
            else BAND=0;
        }
        while(Q.liga!=P) Q=Q.liga;

        if(BAND==1){
            if(T==P){
                if(P==Q) P=null;
                    else{
                    P=P.liga;
                    Q.liga=P;
                    }
            }
            else atras.liga=T.liga;
        }
        else throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
    }////////////////////////////////////////////////////////////////////////////////////////
    elimina_antes_X(DATO){
        var P=this.INICIO;
        var Q=P;
        var T;

        while(Q.liga!=P){
            T=Q;
            Q=Q.liga;
        }

        if(P.info==DATO) throw new Error('ERROR 201: NO EXISTE UN NODO ANTERIOR');
        else{
            var adelante=P;
            var BAND=1;
            var atras;
            var aux;
            while(adelante.info!=DATO && BAND==1){
                if(adelante.liga!=P){
                    aux=atras;
                    atras=adelante;
                    adelante=adelante.liga;
                }
                else BAND=0;
            }
            if(BAND==0) throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA")
            if(P.liga==adelante){
                P=adelante;
                Q.liga=P;
            }
            else aux.liga=adelante;
        }
        this.INICIO=P;
    }//////////////////////////////////////////////////////////////////////
    elimina_despues_X(DATO){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while(Q.info!=DATO && BAND==1 ){
            if(Q.liga!=P) Q=Q.liga;
            else BAND=0;
        }

        if(BAND==1){
            if(Q.liga==P){
                if(P.liga!=P){
                    T = P.liga;
                    Q.liga=T;
                    P=T;
                }
                else throw new Error('ERROR 201: NO EXISTE UN NODO ANTERIOR');
            }
            else{
                T=Q.liga;
                Q.liga=T.liga;
            }
        }
        else throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    // IMPRESION DE LA LISTA
    /////////////////////////////////////////////////////////////////////////////////////////
    isVacio() {
        if (this.INICIO == null) return true;
        else return false;
    }////////////////////////////////////////////////////////////////////////////////////////
    buscar1(DATO){
        if(this.INICIO==null) return false;
        
        var encontrado=false;
        var	tmp=this.INICIO;
        var P=this.INICIO;

        do{
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
        }while(tmp!=P); 
        return encontrado;
    }////////////////////////////////////////////////////////////////////////////////////////
    dibujarNodosLog(){
        var P=this.INICIO;
        var cad="";
        if(P!=null){
            var F=P;
            if(F.liga==P){
                cad+=P.info+"::";
                cad+=P.liga.info;
            }
            else{
                while(F.liga!=P){
                    cad+=F.info+"::";
                    F=F.liga;
                }    
                cad+=F.info+"::";
                cad+=F.liga.info;
            }   
        }
        console.log(cad);
        return cad;
    }////////////////////////////////////////////////////////////////////////////////////////
    dibujarNodos(valor) {

        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');
        let tmp = this.INICIO;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = 0;
        var y = 25;
        var ctd = 0;
        var aux = 0;

        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.2; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
             if(window.innerHeight<350){canvas.height = window.innerHeight*0.2; }
             else{canvas.height = window.innerHeight*0.1; }
        }

        var nodo = null;

        while (tmp != null) {

            if (valor != undefined && tmp.info == valor) {
                //RECTANGULO
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.fillRect(x, y, 55, 30);

                nodo = {};
                nodo.x = x;
                nodo.y = y;
                nodo.width = 55;
                nodo.height = 30;
                nodo.info = tmp.info;
            } else {
                //RECTANGULO
                ctx.beginPath();
                ctx.fillStyle = "#05739f";
                ctx.fillRect(x, y, 55, 30);
            }

            //DATO
            ctx.fillStyle = "black";
            ctx.font = '15px Arial black';
            ctx.fillText(tmp.info, x + 20, y + 20);
            ctx.closePath();

            if (tmp.liga != this.INICIO){
                if (x > canvas.width-150){
                    // LIGA 
                    // PRIMERA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 30, y + 30);
                    ctx.lineTo(x + 30, y + 40);
                    ctx.closePath();
                    ctx.stroke();
                    // LINEA HORIZONTAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 30, y + 40);
                    ctx.lineTo(x + 27 - x + 80, y + 40);
                    ctx.closePath();
                    ctx.stroke();
                    // SEGUNDA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 27 - x + 80,y + 40);
                    ctx.lineTo(x + 27 - x + 80,y + 45);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle="white";
                    ctx.moveTo(x + 27 - x + 80 - 5, y + 45);
                    ctx.lineTo(x + 27 - x + 80, y + 45 + 5);
                    ctx.lineTo(x + 27 - x + 80 + 5, y + 45);
                    ctx.closePath();
                    ctx.fill();
                    ctd = 0;
                    x = 80;
                    y = y + 50;
                    aux = 1;
                }
                else{
                    // LIGA
                    // LINEA HORZONTAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 55, y + 15);
                    ctx.lineTo(x + 55 + 20, y + 15);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle = "white";
                    ctx.moveTo(x + 55 + 18, y + 11);
                    ctx.lineTo(x + 55 + 18 + 7, y + 15);
                    ctx.lineTo(x + 55 + 18, y + 19);
                    ctx.closePath();
                    ctx.fill();

                    if (aux == 1){
                        x = (80*++ctd) + 80;
                    }
                    else{
                        x = 80*++ctd;
                    }
                }
            }
            else{
                // LIGA CIRCULAR
                // PRIMERA LIGA HORIZONTAL
                ctx.beginPath();
                ctx.strokeStyle="white";
                ctx.moveTo(x + 55, y + 15);
                ctx.lineTo(x + 55 + 20, y + 15);
                ctx.closePath();
                ctx.stroke();
                // PRIMERA LINEA VERTICAL
                ctx.beginPath();
                ctx.strokeStyle="white";
                ctx.moveTo(x + 55 + 20, y + 15);
                ctx.lineTo(x + 55 + 20, y + 40);
                ctx.closePath();
                ctx.stroke();
                // SEGUNDA LINA HORIZONTAL
                ctx.beginPath();
                ctx.strokeStyle="white";
                ctx.moveTo(x + 55 + 20, y + 40);
                ctx.lineTo(x + 27 - x, y + 40);
                ctx.closePath();
                ctx.stroke();
                // SEGUNDA LINEA VERTICAL
                ctx.beginPath();
                ctx.strokeStyle="white";
                ctx.moveTo(x + 27 - x, y + 40);
                ctx.lineTo(x + 27 - x, y - y + 50 + 5);
                ctx.closePath();
                ctx.stroke();
                // CABEZA DE LA FLECHA
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.moveTo(x + 27 - x - 5, y - y + 55 + 5);
                ctx.lineTo(x + 27 - x, y - y + 53);
                ctx.lineTo(x + 27 - x + 5, y - y + 55 + 5);
                ctx.closePath();
                ctx.fill();
            }

            if (tmp.liga == this.INICIO){
                break;
            }
            tmp = tmp.liga;

        }
        
        if (nodo != null) {
            setTimeout(function() {
                ctx.beginPath();
                ctx.fillStyle = "#05739f";
                ctx.fillRect(nodo.x, nodo.y, nodo.width, nodo.height);

                //DATO
                ctx.fillStyle = "black";
                ctx.font = '15px Arial black';
                ctx.fillText(nodo.info, nodo.x + 20, nodo.y + 20);
                ctx.closePath();
            }, 500);
        }
    }
}
