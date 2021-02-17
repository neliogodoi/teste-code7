export class Debt{
    private _id: string;
    private _idUser: number;
    private _motivo: string;
    private _valor: number;
    private _data: number;

    public get idUser(): number {
        return this._idUser;
    }
    public set idUser(value: number) {
        this._idUser = value;
    }
    
    public get motivo(): string {
        return this._motivo;
    }
    public set motivo(value: string) {
        this._motivo = value;
    }
    
    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    
    public get data(): number {
        return this._data;
    }
    public set data(value: number) {
        this._data = value;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

}