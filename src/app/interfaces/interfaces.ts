
export interface RespuestaTareas{
    status?: boolean;
    result?: Tarea[];
    message?: string
}

export interface Tarea{
    _id?: string;
    titulo?:string,
    subtitulo?:string;
    estado?:number;
    diaCreado?:string;
    diaModificacion?:string;
}