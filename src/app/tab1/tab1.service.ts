import { Injectable } from '@angular/core';
import {Sings} from '../tab1/tab1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private sings:Sings[]=[
    {
      "id": "1412134502",
      "divider":"A",
      "Name": "Anh Ta Bỏ Em Rồi",
      "Singer": "Hương Giang",
      "content":"Anh ta bỏ em rồi trong một chiều mưa rơi Những nỗi buồn mong cơn mưa hãy cuốn trôi Chẳng sợ ướt vai vì khi ngoảnh lại Lòng em từ lâu đã ướt đẫm rồi.",
      "image": "../assets/image/huonggiang.jpg",
      "img":"../assets/image/atber.jpg"
  },
  {
      "id": "1412134520",
      "divider":"S",
      "Name": "Sóng gió",
      "Singer": "Jack_KTM",
      "content":"Hồng trần trên đôi cánh tay,Họa đời em trong phút giây,Từ ngày thơ ấy còn ngủ mơ đến khi em thờ ơ,Lòng người anh đâu có hay,Một ngày khi vỗ cánh bay,Từ người yêu hóa thành người dưng đến khi ta tự xưng à,Thương em bờ vai nhỏ nhoi,Đôi mắt hóa mây đêm,Thương sao mùi dạ lý hương,Vương vấn mãi bên thềm,Đời phiêu du cố tìm một người thật lòng,Dẫu trời mênh mông anh nhớ em,Chim kia về vẫn có đôi,Sao chẳng số phu thê?,Em ơi đừng xa cách tôi,Trăng cố níu em về,Bình yên trên mái nhà,Nhìn đời ngược dòng,Em còn bên anh có phải không?,Trời ban ánh sáng, năm tháng tư bề",
      "image": "../assets/image/quangdung.jpg",
      "img":"../assets/image/songgio.jpg"
  },
  {
      "id": "1412145502",
      "divider":"C",
      "Name": "Cách Biệt",
      "Singer": "Đặng Thế Luân",
      "content":"Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa",
      "image": "./assets/image/dangtheluan.jpg",
      "img":"../assets/image/cb.jpg"
  },   
  {
    "id": "1412134504",
    "divider":"B",
    "Name": "Bước Qua Đời Nhau",
    "Singer": "Lê Bảo Bình",
    "content":"Mình bước qua đời nhau, để làm nhau đau Để làm nhau khóc gặp nhau không muốn chào Mình bước đời nhau, để lại thương đau Để lại vệt sâu có xóa mờ được đâu",
    "image": "../assets/image/lbb.jpg",
    "img":"../assets/image/bqdn.jpg"
},
  {
      "id": "1412144501",
      "divider":"G",
      "Name": "Gặp Nhau Giữa Rùng Mơ",
      "Singer": "Trọng Tấn, Tân Nhàn",
      "content":"Anh còn nợ em,Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
      "image": "../assets/image/trongtan.jpg",
      "img":"../assets/image/gngrm.jpg"
  },
  {
      "id": "1412143332",
      "divider":"Đ",
      "Name": "Đáp Mộ Cuộc Tình",
      "Singer": "Đan Nguyên",
      "content":"Anh còn nợ em, Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
      "image": "../assets/image/dangnguyen.jpg",
      "img":"../assets/image/dmct.jpg"
  }


  ]
  constructor() { }
  getAlltab1(){
    return[...this.sings]
  }
  getTab1(tab1Id:String){
    return {
      ...this.sings.find(Sings =>{
        return Sings.id === tab1Id
      })
    }
  }
  
  
}
