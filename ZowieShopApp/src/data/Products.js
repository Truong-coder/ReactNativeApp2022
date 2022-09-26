import React from 'react';
import ReactDOM from "react-dom";

const products = [
  {
    _id: "1",
    name: "Màn hình gaming ZOWIE 144Hz TN  DyAc™ 24 inch 1ms | XL2411K",
    image:
      "https://image.benq.com/is/image/benqco/xl2411k-01?$ResponsivePreset$&fmt=png-alpha",
    description:
      "XL2411K là phiên bản cập nhật mới nhất cho dòng màn hình 24 inch, 144Hz của ZOWIE. XL2411K không chỉ cải thiện về mặt thiết kế mà còn củng cố thêm sự ổn định trong lối chơi cho người dùng. Điểm quan trọng nhất là mẫu màn 24inch này đã được cập nhật công nghệ DyAc mạnh mẽ.",
    price: 252.64 ,
    countInStock: 10,
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Màn hình gaming ZOWIE 240Hz TN DyAc+™ 24.5 inch 0.5ms | XL2546K",
    image:
    "https://image.benq.com/is/image/benqco/xl2746k-front?$ResponsivePreset$&fmt=png-alpha",
    description: 
    "Đây hiện là mẫu màn hình hàng đầu trong dòng sản phẩm 24,5 inch, 240Hz của ZOWIE. Với công nghệ tấm nền <q>Fast Liquid Crystal</p> mới được cho ra mắt, mẫu màn hình 24 inch này có khả năng đem tới sự 'mượt mà' và 'rõ ràng' nhất qua công nghệ DyAc+™ tiên tiến.",
    price: 556.73,
    countInStock: 10,
    rating: 5,
    numReviews: 5,
  },
  {
    _id: "3",
    name: "Màn hình gaming ZOWIE 240Hz TN DyAc+™ 27 inch 0.5ms | XL2746K",
    image:
    "https://image.benq.com/is/image/benqco/xl2746k-front?$ResponsivePreset$&fmt=png-alpha",
    description:
    "XL2746K là phiên bản cập nhật mới nhất cho dòng màn hình 27 inch, 240Hz của ZOWIE. XL2746K với nhiều cải thiện về mặt thiết kế, chúng tôi củng cố thêm sự ổn định trong lối chơi cho người dùng. Điểm quan trọng nhất là mẫu màn 27inch này đã được cập nhật công nghệ DyAc+™ mạnh mẽ.",
    price: 738,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "4",
    name: "Màn hình gaming ZOWIE 144Hz DyAc™ 24 inch 1ms | XL2411P",
    image:
      "https://image.benq.com/is/image/benqco/xl2411-1?$ResponsivePreset$&fmt=png-alpha",
    description:
    "Màn hình chơi game XL2411P là phiên bản mới nhât của nguyên bản XL2411. Được đi kèm với cổng Display Port cũng như là ColorVibrance. giúp các game thủ nhận diện kẻ địch tốt hơn trên mặt trận. Sử dụng kèm với Black eQualizer sẽ mang lại cho game thủ những cảm nhận hình ảnh không thể tuyệt hơn.",
    price: 210,
    countInStock: 0,
    rating: 5,
    numReviews: 9,
  },
  {
    _id: "5",
    name: "Màn hình gaming ZOWIE 240Hz DyAc™ 24.5 inch 1ms | XL2546",
    image:
      "https://image.benq.com/is/image/benqco/xl2536-1-front?$ResponsivePreset$&fmt=png-alpha",
    description:
    "Màn hình 240Hz XL2546 là mẫu cao cấp trong dàn sản phẩm ZOWIE's XL-series. So với XL2540, XL2546 mang đến Proprietary Dynamic Accuracy Technology (DyAc), cùng sở hữu sự mượt mà, trong trẻo khác. Màn hình XL2546 được sử dụng trong nhiều giải đấu danh tiếng, như là CS:GO Faceit Major 2018, PUBG Asia Invitational 2019, eXTRMEMSLAND Asia Open,.. và nhiều hơn thế! Là sự lưa chọn hàng đầu cho các game thủ chuyên nghiệp và các nhà tổ chức giải đấu. ",
    price: 300,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "6",
    name: "Màn hình gaming ZOWIE 240Hz DyAc™ 24.5 inch 1ms | XL2540",
    image:
      "https://c1.staticflickr.com/1/370/32394952860_852e04b245_z.jpg",
    description:
    "Màn hình BenQ ZOWIE XL2540 có kích thước 24.5” sử dụng tấm nền TN hỗ trợ 16.7 triệu màu (6-bit + FRC) màu sắc cũng như độ tương phản điển hình cho màn hình chính (1000: 1). Màn hình có độ sáng lên đến 400 cd/m2 (400 nits) cao hơn so với các màn hình TN hiện nay và có tần số quét 240Hz đảm bảo độ mượt và cảm giác tốt nhất dành cho các game thủ. ",
    price: 270,
    countInStock: 5,
    rating: 5,
    numReviews: 2,
  },
];
export default products;
