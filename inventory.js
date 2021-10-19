export default class Inventory {

    constructor(){
        this.inicio = null;
    }

    add(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo;
            return this.inicio;
        } else if(this.search(nuevo.getCode())){
            return null;
        } else {
            this._add(nuevo, this.inicio);
            return this.inicio;
        }
    }

    _add(nuevo, ultimo) {
        if(ultimo.siguiente == null){
            ultimo.siguiente = nuevo;
        } else {
            this._add(nuevo, ultimo.siguiente);
        }
    }

    
    search(codigo){
        if(!this.inicio){
            return null;
        }
        
        let aux = this.inicio;

        while(aux != null){
            if(aux.getCode() == codigo){
                return aux;
            }
            aux = aux.siguiente;
        }

        return null;
    }

    delete(codigo){
        let eliminado = null;

        if(!this.inicio){
            return null;
        }
        if(this.inicio.code == codigo){
            eliminado = this.inicio;
            this.inicio = this.inicio.siguiente;
            return eliminado;
        } else {
            let an = this.inicio;
            let ac = this.inicio.siguiente;

            while(ac != null){
                if(ac.code == codigo){
                    eliminado = ac;
                    an.siguiente = ac.siguiente;
                    eliminado.siguiente = null;
                    return eliminado;
                } else {
                    an = ac;
                    ac = ac.siguiente;
                }
            }
        }
        return eliminado;
    }
}