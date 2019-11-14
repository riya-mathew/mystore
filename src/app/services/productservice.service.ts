import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private products: Array<Product> = [{
      name: 'apple-pie',
      // tslint:disable-next-line: max-line-length
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: true,
      price: 150,
    }, {
      name: 'steak',
      // tslint:disable-next-line: max-line-length
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/a8/fa/04/royal-kitchen.jpg',
      description: 'good',
      imageAlt: 'steak',
      isAvailable: true,
      price: 400,
    }, {
      name: 'sushi',
      // tslint:disable-next-line: max-line-length
      image: 'https://www.thespruceeats.com/thmb/8SyyPw7aCSce8XFeXvDtA9_xcAc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/183341110-56a541b93df78cf772875a55.jpg',
      description: 'good',
      imageAlt: 'fish',
      isAvailable: true,
      price: 300,
    }, {
      name: 'mango shake',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.indianfoodforever.com/images/mango-milkshake.jpg',
      description: 'good',
      imageAlt: 'mango',
      isAvailable: true,
      price: 180,
    }, {
      name: 'kaju katli',
      // tslint:disable-next-line: max-line-length
      image: 'https://recipes.timesofindia.com/thumb/55048826.cms?width=1200&height=1200',
      description: 'good',
      imageAlt: 'kaju',
      isAvailable: true,
      price: 150,
    }, {
      name: 'waffles',
      // tslint:disable-next-line: max-line-length
      image: 'https://i1.wp.com/www.persnicketyplates.com/wp-content/uploads/2010/07/Buttermilk-Waffles-16.jpg?fit=800%2C1200&ssl=1',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: true,
      price: 200,
    }, {
      name: 'apple-pipe',
      // tslint:disable-next-line: max-line-length
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: true,
      price: 200,
    }, {
      name: 'apple-pipe',
      // tslint:disable-next-line: max-line-length
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: false,
      price: 200,
    }, {
      name: 'apple-pipe',
      // tslint:disable-next-line: max-line-length
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: false,
      price: 200,
    }, {
      name: 'apple-pipe',
      // tslint:disable-next-line: max-line-length
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Farkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg%3Fitok%3DiUlqw3oU&w=450&c=sc&poi=face&q=85',
      description: 'good',
      imageAlt: 'apple',
      isAvailable: false,
      price: 200,
    }];

  constructor(private http: HttpClient) {}
  getProducts() {
    // tslint:disable-next-line: no-unused-expression
     return this.http.get('http://localhost:3000/product');
  }
  addProducts(products) {
   return this.http.post ('http://localhost:3000/product/', products);
    console.log(this.products);

  }
  detailsdispay(id) {
    return this.http.get ('http://localhost:3000/product/' + id );
  }
  updateproducts(formData, id) {
    return this.http.put ('http://localhost:3000/product/' + id, formData);

  }
}

