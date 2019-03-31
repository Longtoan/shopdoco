import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shopping, News } from './product';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  shopping: Shopping[] = [

    {
      Id: 1,
      Name: "Bộ Đồ Sứ",
      encoder: "h1234",
      imageUrl: "https://anh.24h.com.vn/upload/1-2016/images/2016-02-05/1454681701-1454675930-img_7609.jpg"
    },
    {
      Id: 2,
      Name: "Bàn Ủi",
      encoder: "s1234",
      imageUrl: "http://buondoco.com/images/post/2016/04/25/00//doco1-3e37c.JPG"
    },
    {
      Id: 3,
      Name: "Lư Hương Trầm",
      encoder: "b1234",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQru8xUVBp650sJFHRivo-f41znXeDHcQNs0EDQ-8MHpKnoCa"
    },
    {
      Id: 4,
      Name: "Dê Đồng",
      encoder: "p1234",
      imageUrl: "http://sohanews.sohacdn.com/k:2015/45-1423728444-pwum15-xhro-1423733201130/chiem-nguong-de-dong-gia-bac-trieu-o-cho-do-co-ha-noi.jpg"
    },
    {
      Id: 5,
      Name: "Hủ Đựng Tiền",
      encoder: "k1234",
      imageUrl: "https://anh.24h.com.vn/upload/1-2015/images/2015-02-12/1423728443-izck10_lelr.jpg"
    },
    {
      Id: 6,
      Name: "Hộp Phấn",
      encoder: "a1234",
      imageUrl: "http://www.docobaotam.com/wp-content/uploads/2015/10/hop-phan-chu-dau-do-vot-bien.jpg"
    },
    {
      Id: 7,
      Name: "Thố Tiềm Sâm",
      encoder: "c1234",
      imageUrl: "http://www.docobaotam.com/wp-content/uploads/2015/11/tho-tiem-sam-2.jpg"
    },
    {
      Id: 8,
      Name: "Hộp Phấn Chu Đậu",
      encoder: "x1234",
      imageUrl: "http://tinhhoagomviet.vn/static/upload/1410664920_24.jpg"
    }
  ];

  tintuc: News[] = [
    {
      Id: 1,
      Name: "Buôn lậu cổ vật ở Ai Cập",
      Tittle: "Hầu như tuần nào truyền thông Ai Cập cũng ăn mừng việc một lô cổ vật được trao trả. Tuy nhiên, chúng chỉ là những món đồ nhỏ trong số 3 tỷ USD đồ cổ bị tuồn ra nước ngoài.",
      imageUrl: "https://znews-photo.zadn.vn/w660/Uploaded/mdf_xqymrk/2018_10_27/103919843x2700x467_thumb.jpg",
    },
    {
      Id: 2,
      Name: "Gốm sứ trăm triệu nổi tiếng ở Cappadocia",
      Tittle: "Dòng gốm sứ chế tác riêng cho tầng lớp hoàng gia, đặc trưng bởi các họa tiết nổi vẽ thủ công và đa dạng màu sắc thu hút sự chú ý của du khách khi đến vùng Cappadocia (Thổ Nhĩ Kỳ).",
      imageUrl: "https://znews-photo.zadn.vn/w660/Uploaded/lerl/2018_05_25/5555.jpg",
    },
    {
      Id: 3,
      Name: "Bát sứ nghìn năm của Trung Quốc đạt giá gần 40 triệu USD",
      Tittle: "Nhà đấu giá Sotheby's cho hay chiếc bát có niên đại từ đời nhà Tống, vốn được người xưa thiết kế để rửa bút lông, đã lập kỷ lục về đấu giá đồ sứ Trung Quốc.",
      imageUrl: "https://znews-photo.zadn.vn/w660/Uploaded/mfqim/2017_10_03/batsuruabutJPG62251507017910.jpg",
    }
  ]

  constructor() { }
  getAllshopping(): Observable<Shopping[]> {
    return of(this.shopping);
  }
  getAllnew(): Observable<News[]> {
    return of(this.tintuc);
  }

  getAllshoppingID(id:number): Observable<Shopping>{
    return of(this.shopping.find(d=>d.Id==id))
  }
}
