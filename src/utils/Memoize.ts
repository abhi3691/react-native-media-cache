import shorthash from 'shorthash';
import RNFS from 'react-native-fs';
import { Platform } from 'react-native';

interface src {
  uri: string;
}
const memoize = async (url: string): Promise<src> => {
  // console.log(url);
  let UrlType = url.split('.').reverse()[0];
  var source = { uri: '' }; //variable we will send it back to our component
  const name = shorthash.unique(url); //creating a unique id
  const extension = Platform.OS === 'android' ? 'file://' : ''; //extension for the file path
  const path = `${extension}${RNFS.CachesDirectoryPath}/${name}.${UrlType}`; //the path we are going to save data
  //for videos, you might need .mp4 extension after name
  try {
    await RNFS.exists(path).then(async (exists: any) => {
      //check if the data is already downloaded
      if (exists) {
        source = { uri: path }; //if it is then set the source
      } else {
        await RNFS.downloadFile({
          fromUrl: url,
          toFile: path, //download the data if it is not already downloaded
        })
          .promise.then(() => {
            source = { uri: path }; //set the source after downloading is completed
          })
          .catch((err: any) => {
            console.log('err downloadFile', err);
          });
      }
    });
  } catch (err) {
    console.log('err downloadFile', err);
  }

  return source; //return the source to our component
};

export default memoize;
