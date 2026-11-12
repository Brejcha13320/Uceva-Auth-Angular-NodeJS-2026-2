export interface Task {
    id: string;
    titulo: string;
    descripcion: string;
    prioridad: string;
    estado: StateTask;
    createdAt: Date;
    updatedAt: Date;
}

export type StateTask = 'COMPLETADA' | 'PROCESO' | 'PENDIENTE';