class Nodo{
    info=0;
    ligaDer=null;
    ligaIzq=null;
}

export class ListaDoblementeLigada{
   INICIO=null;
   FIN=null;
   LISTA_CANVAS=null;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // INSERCION DE LISTAS DOBLEMENTE ENLAZADAS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    inserta_inicio(DATO){
        if(this.INICIO==null){
            var Q=new Nodo();
            Q.info=DATO;
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;
            P=Q;
            this.INICIO=P;    
        }
    }///////////////////////////////////////////////////////////////////////////////////////////////////////////
    inserta_final(DATO){
        var F=this.FIN;
        var Q=new Nodo();
        Q.info=DATO;
        F.ligaDer=Q;
        Q.ligaIzq=F;
        Q.ligaDer=null;
        F=Q;
        this.FIN=F;
    }///////////////////////////////////////////////////////////////////////////////////////////////////////////
    inserta_antes_X(DATO,X){
        var P=this.INICIO;
        var Q=P;

        while(Q.ligaDer!=null && Q.info!=X) Q=Q.ligaDer;
        
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            if(P==Q){
                P=T;
                T.ligaIzq=null;
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else throw new Error("ERROR 101: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
    }///////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;

        while((Q.ligaDer!=null)&&(Q.info!=X)) Q=Q.ligaDer;

        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
            T.ligaIzq=Q;
            if(F==Q) F=T;
            else T.ligaDer.ligaIzq=T;    
        }
        else throw new Error("ERROR 101: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
        this.INICIO=P;
        this.FIN=F;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ELIMINACION DE LISTAS DOBLEMENTE ENLAZADAS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    elimina_inicio(){
        var Q = this.INICIO;
        this.INICIO = Q.ligaDer;
        if(this.INICIO!=null) this.INICIO.ligaIzq=null;
        Q=null;
    }///////////////////////////////////////////////////////////////////////////////////////////////////////////
    elimina_final(){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=F;
        if(Q.ligaIzq!=null){
            F=Q.ligaIzq;
            F.ligaDer=null;
        }
        else{
            F=null;
            P=null;
        }
        Q=null;
        this.INICIO=P;
        this.FIN=F;
    }///////////////////////////////////////////////////////////////////////////////////
    elimina_X(X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        
        while((Q.ligaDer!=null)&&(Q.info!=X)) Q=Q.ligaDer;
        
        if(Q.info==X){
            if((Q==P)&&(Q==F)){
                P=null;
                F=null;
            }
            else{
                if(Q==P){
                    P=Q.ligaDer;
                    P.ligaIzq=null;
                }
                else{
                    if(Q==F){
                        F=Q.ligaIzq;
                        F.ligaDer=null;
                    }
                    else{
                        var T=Q.ligaIzq;
                        var R=Q.ligaDer;
                        T.ligaDer=R;
                        R.ligaIzq=T;
                    }
                }
            }
        Q=null;
        this.INICIO=P;
        this.FIN=F;
        }
        else throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
    }//////////////////////////////////////////////////////////////////////////////////
    elimina_antes_X(X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
         
        while((Q.ligaDer!=null)&&(Q.info!=X)) Q=Q.ligaDer;
        
        if(Q.info==X){
            if(P==Q) throw new Error("ERROR 201: NO EXISTE UN NODO ANTERIOR");
            else{
                var T=Q.ligaIzq;
                if(P==T){
                    P=Q;
                    P.ligaIzq=null;
                }
                else{
                    var R=T.ligaIzq;
                    Q.ligaIzq=R;
                    R.ligaDer=Q;
                }
        T=null;
            }
        this.INICIO=P;
        this.FIN=F;
        }
        else throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
    }//////////////////////////////////////////////////////////////////////////////////
    elimina_despues_X(X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
         
        while((Q.ligaDer!=null)&&(Q.info!=X)) Q=Q.ligaDer;
        
        if(Q.info==X){
            if(F==Q) throw new Error("ERROR 201: NO EXISTE UN NODO POSTERIOR");
            else{
                var T=Q.ligaDer;
                if(F==T){
                    F=Q;
                    F.ligaDer=null;
                }
                else{
                    var R=T.ligaDer;
                    Q.ligaDer=R;
                    R.ligaIzq=Q;
                }
            T=null;
            }
        this.INICIO=P;
        this.FIN=F;
        }
        else throw new Error("ERROR 202: EL ELEMENTO (X) NO SE ENCUNETRA EN LA LISTA");
    }
    ////////////////////////////////////////////////////////////////////////////////
    //                          IMPRESION DE LA LISTA                             //
    ////////////////////////////////////////////////////////////////////////////////
    isVacio(){
        if(this.INICIO==null) return true;
        else return false;
    }///////////////////////////////////////////////////////////////////////////////
    buscar2(DATO){

        var encontrado = false;
        var tmp = this.INICIO;

        while (tmp != null) {
            if (tmp.info == DATO) {
                encontrado = true;
                break;
            }
            tmp = tmp.ligaDer;
        }
        return encontrado;
    }////////////////////////////////////////////////////////////////////////////////////////
    dibujarNodosLogDer(){
        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);
    }///////////////////////////////////////////////////////////////////////////////
    dibujarNodosLogIzq(){
        var F=this.FIN;
        var cad="";
        while(F!=null){
            cad+=F.info+"::";
            F=F.ligaIzq;
        }
        console.log(cad);
    }///////////////////////////////////////////////////////////////////////////////
    dibujarNodos(valor){
        
        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');
        var tmp = this.INICIO;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = 0;
        var y = 25;
        var ctd = 0;

        //responsive canvas
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

            if(tmp.ligaDer != null){
                if(x > canvas.width-150){
                    //LIGA DERECHA
                    // PRIMERA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 35, y + 30);
                    ctx.lineTo(x + 35, y + 50);
                    ctx.closePath();
                    ctx.stroke();
                    // LINEA HORIZONTAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 35, y + 50);
                    ctx.lineTo(x + 33 - x, y + 50);
                    ctx.closePath();
                    ctx.stroke();
                    // SEGUNDA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 33 - x,y + 50);
                    ctx.lineTo(x + 33 - x,y + 55);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle="white";
                    ctx.moveTo(x + 33 - x - 5, y + 55);
                    ctx.lineTo(x + 33 - x, y + 55 + 5);
                    ctx.lineTo(x + 33 - x + 5, y + 55);
                    ctx.closePath();
                    ctx.fill();

                    // LIGA IZQUIERDA
                    // PRIMERA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.moveTo(x + 25, y + 30);
                    ctx.lineTo(x + 25, y + 43);
                    ctx.closePath();
                    ctx.stroke();
                    // LINEA HORIZONTAL
                    ctx.beginPath();
                    ctx.moveTo(x + 25, y + 43);
                    ctx.lineTo(x + 25 - x, y + 43);
                    ctx.closePath();
                    ctx.stroke();
                    // SEGUNDA LINEA VERTICAL
                    ctx.beginPath();
                    ctx.moveTo(x + 25 - x,y + 43);
                    ctx.lineTo(x + 25 - x,y + 60);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle = "white";
                    ctx.moveTo(x + 30, y + 35);
                    ctx.lineTo(x + 35, y + 30);
                    ctx.lineTo(x + 40, y + 35);
                    ctx.closePath();
                    ctx.fill();

                    ctd = 0;
                    x = 0;
                    y = y + 60;
                }
                else{
                    // LIGA DERECHA
                    // LINEA HORIZONTAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 55, y + 10);
                    ctx.lineTo(x + 55 + 20, y + 10);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle = "white";
                    ctx.moveTo(x + 55 + 20, y + 5);
                    ctx.lineTo(x + 55 + 20 + 5, y + 10);
                    ctx.lineTo(x + 55 + 20, y + 15);
                    ctx.closePath();
                    ctx.fill();

                    // LIGA IZQUIERDA
                    // LINEA HORIZONTAL
                    ctx.beginPath();
                    ctx.strokeStyle="white";
                    ctx.moveTo(x + 60, y + 20);
                    ctx.lineTo(x + 60 + 20, y + 20);
                    ctx.closePath();
                    ctx.stroke();
                    // CABEZA DE LA FLECHA
                    ctx.beginPath();
                    ctx.fillStyle = "white";
                    ctx.moveTo(x + 60, y + 15);
                    ctx.lineTo(x + 55, y + 20);
                    ctx.lineTo(x + 60, y + 25);
                    ctx.closePath();
                    ctx.fill();
                    x = 80*++ctd;
                }     
            }
            tmp = tmp.ligaDer;
        }

        if (nodo != null) {
            setTimeout(function(){
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