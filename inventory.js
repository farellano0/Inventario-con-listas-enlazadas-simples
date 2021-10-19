export default class Inventory {

    constructor(){
        this.inicio = null;
        this.length = 0;
    }

    add(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo;
            this.length++;
            return this.inicio;
        } else if(this.search(nuevo.getCode())){
            return null;
        } else {
            this._add(nuevo, this.inicio);
            this.length++
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
            this.length --;
            return eliminado;
        } else {
            let an = this.inicio;
            let ac = this.inicio.siguiente;

            while(ac != null){
                if(ac.code == codigo){
                    eliminado = ac;
                    an.siguiente = ac.siguiente;
                    eliminado.siguiente = null;
                    this.length --;
                    return eliminado;
                } else {
                    an = ac;
                    ac = ac.siguiente;
                }
            }
        }
        return eliminado;
    }

    insert(nuevo, position){
        let aux = null;

        if(this.length < position){
           return null;

        } else if(this.search(nuevo.getCode())){
            return null;

        } else if(position == 1){
            aux = this.inicio;
            this.inicio = nuevo;
            this.inicio.siguiente = aux;
            return nuevo;

        } else if(position > 1 && position <= this.length){
            let i = 2
            let an = this.inicio;
            let ac = this.inicio.siguiente;

            while(i <= position){
                if(i != position){
                    an = ac;
                    ac = ac.siguiente;
                    i++;
                } else {
                    an.siguiente = nuevo;
                    nuevo.siguiente = ac
                    return nuevo;
                }
            }
        } else {
            return null;
        }
    }
}