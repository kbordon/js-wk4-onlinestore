import { Album } from './album.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'albumTitle'
})
export class AlbumTitlePipe implements PipeTransform {

  // this is actually a pipe for the artist rather the title.
  transform(value: Album[], desiredArtist: string){
    let output: Album[] = [];
    if (desiredArtist === ''){
      console.log("No artist specified.");
      return value;
    } else {
      for( var i = 0; i < value.length; i++){
        if ( value[i].artist.toLowerCase() === desiredArtist.toLowerCase()){
          output.push(value[i]);
        }
      }
      return output;
    }
  }

}
