export class SharedValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value

    }
    getValue() {
        return this.value
    }
    setValue(value: string) {

        if (value.length < 1) {
            throw new Error("value has to be a string and has to have at least a character")
        }
        this.value = value
    }

}

// condicion de carrera - en este caso el componmente
// se renderiza con el valor incial pero una ves que se actualiza desde el 
// objeto ya no se vulve a actualizar en el componenete

export const sharedValueChildren = new SharedValueChildren("");