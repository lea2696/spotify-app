import { Pipe, PipeTransform} from "@angular/core"

@Pipe ({
    name: "songDuration",

})
export class songDurationPipe implements PipeTransform{
    transform(song:any){
        let songSeg=song/1000;
            let duracionMin = Math.floor(songSeg/60);
            let duracionSeg:any = Math.floor(songSeg%60);
            if(duracionSeg<10){
                    duracionSeg= `0${duracionSeg}`
            }
          return `${duracionMin}:${duracionSeg}`
    }
    
}