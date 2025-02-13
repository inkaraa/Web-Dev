import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../gallery/gallery.component';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
  showGallery?: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [CommonModule, GalleryComponent],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      description: 'The latest iPhone with cutting-edge technology.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      name: 'Samsung Galaxy S25 Ultra 5G',
      description: 'Experience innovation with the new Galaxy S25.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-chernyi-133435341/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hda/87361039925278.png?format=gallery-medium',
      name: 'HP Pavilion Laptop',
      description: 'High performance and reliability in one package.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/hp-pavilion-plus-16-ab0001ci-16-16-gb-ssd-1024-gb-win-11-a9du5ea-124550354/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/hb2/87361039990814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h0f/87361040056350.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h6c/87361040121886.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/85372238069790.jpg?format=gallery-medium',
      name: 'DELL XPS 15',
      description: 'Efficient computing with Dell XPS 15.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bdvf-15-117247427/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hdc/85372238135326.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise cancellation headphones.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/hcc/63756773982238.jpg?format=gallery-medium',
      name: 'Bose SoundLink Revolve',
      description: 'Portable, immersive, and powerful sound.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bose-soundlink-revolve-chernyi-11500325/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h39/63756774637598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h2c/63756775424030.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h3d/86289132912670.jpg?format=gallery-medium',
      name: 'LG UHD Thinq TV',
      description: 'A visual masterpiece with vibrant colors.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lg-75ut80006la-191-sm-chernyi-120456599/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h2a/86289132978206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h68/86289133043742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h87/86289133109278.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p4f/6783942.jpg?format=gallery-medium',
      name: 'Canon EOS R5 MK II',
      description: 'Capture every moment with precision and clarity.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/canon-eos-r5-mk-ii-rf24-105-mm-f-4l-is-usm-129566907/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p4f/6783943.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p4f/6783945.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p4f/6783946.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p5a/11568048.jpg?format=gallery-medium',
      name: 'GoPro HERO13',
      description: 'Rugged, versatile, and ready for any adventure.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-13-black-edition-123482859/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p5a/11568049.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p5d/11568038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p5b/11568040.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pb4/26221016.jpeg?format=gallery-medium',
      name: 'NVIDIA GeForce RTX 5090 Suprim',
      description: 'The most powerful GeForce GPU ever made',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/nvidia-geforce-rtx-5090-suprim-soc-edition-32-gb-135111869/?c=750000000',
      gallery: []
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/pca/14643752.jpeg?format=gallery-medium',
      name: 'Dyson HS05 Airwrap',
      description: 'No extreme heat damage. Measures airflow temperature over 40 times a second, intelligently controlling the heating element to keep the temperature under 302°F.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-vt-131849069/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p81/pcd/14643753.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pd4/14643755.jpeg?format=gallery-medium'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  share(product: Product, platform: string): void {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(product.link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    }
    window.open(url, '_blank');
  }

  toggleGallery(product: Product): void {
    product.showGallery = !product.showGallery;
  }
}