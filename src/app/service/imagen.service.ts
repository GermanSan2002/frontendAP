import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { getDownloadURL, list } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + name);
    uploadBytes(imgRef, file).then(response => { this.getImages() }).catch(error => console.log(error));
  }

  public getImages(): void {
    const imgRef = ref(this.storage, 'imagen');
    list(imgRef).then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
      }
    }).catch(error => console.log(error));
  }
}
