import { createCanvas } from "canvas";
import { Cords } from "./typings/class"

export const Ant = class {
    #position: Cords
    #view: number;
    #canvas!: any;
    #ctx!: CanvasRenderingContext2D;
    #PenDown: boolean;
    #color: string;

    constructor(){
        this.#position = { x: 0, y: 0 }
        this.#view = 90; //90 up | 180 right | 240 down | 360 left
        this.#PenDown = true
        this.#color = '#ffffff'

        this.#init()
    }
    
    #init(): void {
        this.#canvas = createCanvas(500, 500);
        this.#ctx = this.#canvas.getContext('2d');
        this.#ctx.moveTo(250, 250);
        this.#position.x = 250
        this.#position.y = 250
    }   

    lootAt(degrees: number): this {
        if(degrees > 360) throw Error("Degress can't be bigger than 360");
        this.#view = degrees

        return this
    }

    clear(): this {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        
        return this
    }

    walk(pixels: number): this {
        if(this.#PenDown == true) {
            this.#ctx.beginPath()
            this.#ctx.moveTo(this.#position.x, this.#position.y);
            let cords = this.#getDegressPosition(pixels)
            this.#ctx.lineTo(cords.x,cords.y);
            this.#updatePosition({ x: cords.x, y: cords.y });
    
            this.#ctx.stroke();
        } else {
            this.#ctx.moveTo(this.#position.x, this.#position.y);
            let cords = this.#getDegressPosition(pixels)
            this.#updatePosition({ x: cords.x, y: cords.y });
        }
        return this
    }

    setColor(color: string){
        
    }


    penDown(on: boolean): this {
        this.#PenDown = on
        
        return this
    }

    save(): void {
        let image = this.#canvas.toDataURL()
        console.log(image)
    }

    #updatePosition(cords: { x: number | null, y: number | null}){
        if(cords.x){
            this.#position.x = cords.x
        }
        if(cords.y){
            this.#position.y = cords.y
        }
    }

    #getDegressPosition(pixels: number): Cords {
        let cords: Cords = {
            x: this.#position.x,
            y: this.#position.y
        }

        if(this.#view > 1 && this.#view < 89){

        } 

        if(this.#view > 91 && this.#view < 179){

        }

        if(this.#view > 181 && this.#view < 269){

        }

        if(this.#view > 271 && this.#view < 360){

        }

        if(this.#view > 91 && this.#view < 179){

        }

        if(this.#view == 0){
            cords.x = cords.x - pixels
        }

        if(this.#view == 90){
            cords.y = cords.y - pixels
        }

        if(this.#view == 180){
            cords.x = cords.x + pixels
        }

        if(this.#view == 270){
            cords.y = cords.y + pixels
        }

        return cords;
    }
}
