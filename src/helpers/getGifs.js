import { gsUrlApi, Api_key } from '../Configuracion/Config'
 
export const getGifts = async (category) => {
    const url = `${gsUrlApi}${encodeURI( category)}&limit=12&api_key=${Api_key}`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    
    return gifs;
  }