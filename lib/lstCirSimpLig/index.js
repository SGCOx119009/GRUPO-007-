import {ListaCircularSimplementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function insertar_al_inicio_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;		
    }

    try{
        var DATO = await bootbox_prompt("Ingrese valor de nodo");
        if(DATO==null || DATO=="") return;
        if(lista.buscar1(DATO)==true) throw new Error("EL NODO YA SE INGRESO");
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){await bootbox_alert(e.message);}
}////////////////////////////////////////////////////////
export async function insertar_al_final_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);	
        lista.canvas=canvas;	
    }
    
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor de nodo");
        if(DATO==null || DATO=="") return;
        if(lista.buscar1(DATO)==true) throw new Error("EL NODO YA SE INGRESO");
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){await bootbox_alert(e.message);}
}//////////////////////////////////////////////////////////
export async function insertar_antes_X_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);	
        lista.canvas=canvas;	
    }
    
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null || DATO=="") return;
        if(lista.buscar1(DATO)==true) throw new Error("EL NODO YA SE INGRESO");
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || X=="") return;
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);  
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function insertar_despues_X_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;	
    }
    
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null || DATO=="") return;
        if(lista.buscar1(DATO)==true) throw new Error("EL NODO YA SE INGRESO");
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || X=="") return;
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_al_inicio_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;		
    }

    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_al_final_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;	
    }

    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        lista.elimina_final();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_X_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);	
        lista.canvas=canvas;	
    }

    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null || DATO=='') return;
        if(lista.buscar1(DATO)==false) throw new Error("EL NODO NO EXISTE");
        lista.elimina_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_antes_X_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;		
    }

    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null || DATO=='') return;
        if(lista.buscar1(DATO)==false) throw new Error("EL NODO NO EXISTE");
        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_despues_X_LC(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        lista=new ListaCircularSimplementeLigada(canvas);
        lista.canvas=canvas;		
    }

    try{
        if(lista.isVacio()==true)throw new Error("LA LISTA ESTA VACIA");
        var DATO = await bootbox_prompt("Ingrese valor del nodo X");
        if(DATO==null || DATO=='') return;
        if(lista.buscar1(DATO)==false) throw new Error("EL NODO NO EXISTE");
        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////