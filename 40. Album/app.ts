//Describing A Function
function make_album(artist_name:string,album_title:string,tracks?:number){
  let album:{artist:string,album:string,tracks?:number}={
    artist:artist_name,
    album:album_title
  }
  if(tracks !== undefined){
    album.tracks=tracks;
  }
  return album;
}

//Calling A Function Three Times With Different Values
console.log(make_album('Sana','Album Title 1'))
console.log(make_album('Hina','Album Title 2'))
console.log(make_album('Shamim','Album Title 3',10))//Calling A Function With 3rd Parameter