import { Navbar, Card, SimpleSlider, Footer } from "../components";
import HeadRoom from "react-headroom";
import Wrapper from "../assets/wrappers/Landing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wallpaper from "../assets/images/furniture-ecommerce (1).jpg"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

interface IProduct {
    id:string
    name:string
    description:string 
    price:number 
    img:string 
    category:string
}

const category = [
    {
        name: `ตู้เก็บของ`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fcategory%2FOrganization%2Fdrawer-and-shelf.png&w=128&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `ชุดห้องนอน`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129736_c_LUXU-VELVET_GY.jpg&w=1920&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `เฟอร์นิเจอร์`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fcategory%2FSofa-7.png&w=256&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `ของตกเเต่งบ้าน`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F7%2F170113729_1567052578724oGBx_2.jpg&w=1920&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `โคมไฟเเละหลอดไฟ`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F7%2F170097648_f_paribosta_bk_1_.jpg&w=1920&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `อุปกรณ์เครื่องครัว`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170118801_op1_Paradox_SV.JPG&w=1920&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `สินค้าสำหรับห้องน้ำ`,
        img: `https://cdn.homepro.co.th/ART_IMAGE/10/260/1026083/447x447/21082023_1026083$Imagec1.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `อุปกรณ์ซักรีดเเละทำความสะอาด`,
        img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170116659_op1_MANNO_BE.jpg&w=1920&q=75`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

function SampleNextArrow(props: {
    className?: string;
    style?: object;
    onClick?: () => void;
}) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", background: "#1f2937", borderRadius: "100%", width: "30px", height: "30px", alignItems: "center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: {
    className?: string;
    style?: object;
    onClick?: () => void;
}) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", background: "#1f2937", borderRadius: "100%", width: "30px", height: "30px", alignItems: "center" }}
            onClick={onClick}
        />
    );
}

const products = [
    {
        id: "1",
        name: "ชุดห้องนอน รุ่นเฮซ (เตียง, ตู้เสื้อผ้า 4 บาน, โต๊ะเครื่องแป้ง) - สีเทาอ่อน/ไลท์ โอ๊ค",
        description: "หมอน",
        price: 1500,
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F1%2F110035516_1637151697263KlPf.jpg&w=1920&q=75",
        category: "ชุดห้องนอน"
    },
    {
        id: "2",
        name: "FURINBOX ชุดโต๊ะทานอาหาร 4 ที่นั่ง รุ่นฟิน - สีไม้น้ำตาลกลาง",
        description: "เฟอร์นิเจอร์",
        price: 2000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F3%2F7%2F370000240_f_FYN_MW.JPG&w=1920&q=75"
    },
    {
        id: "3",
        name: "ซื้อโซฟาผ้าปรับระดับ 3 ที่นั่ง รุ่นเจย์เดน แถมฟรี! โซฟาผ้าปรับระดับ 1 ที่นั่ง เฟอร์นิเจอร์",
        description: "เฟอร์นิเจอร์",
        price: 5000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23001957_36512_mx.jpg&w=1920&q=75"
    },
    {
        id: "4",
        name: " โซฟาหนังแท้ปรับระดับไฟฟ้า 1 ที่นั่ง รุ่นไคล์ - สีน้ำตาล",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F1%2F110021101_1588760020176NbNv_3.jpg&w=1920&q=75"
    },
    {
        id: "5",
        name: "ชุดโต๊ะทานอาหารหินอ่อน รุ่นมาซซินี+รีคเกอร์ (4 ที่นั่ง) ราคาพิเศษ",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23002200_37299_bf.jpg&w=1920&q=75"
    },
    {
        id: "6",
        name: "หมอนอิง รุ่นลักซ์ซู-แรบบี้ ขนาด 30 X 50 ซม. - สีเทาอ่อน",
        description: "ผ้าเเละสิ่งทอ",
        price: 1500,
        category: "ผ้าเเละสิ่งทอ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170135051_c_LUXU-RABBY_LGY.JPG&w=1920&q=75"
    },
    {
        id: "7",
        name: "ชั้นวางของบานเปิด 5 ชั้น รุ่นไทดี้ - ลายไม้ธรรมชาติ",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F2%2F120019029_1536641823511LwdH_2.jpg&w=1920&q=75"
    },
    {
        id: "8",
        name: "ตู้วางรองเท้า รุ่นเพซโซ่ ขนาด 60 ซม.",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120017684_pc_PEZZO_NT_WT.jpg&w=1920&q=75"
    },
    {
        id: "9",
        name: " รูปภาพพร้อมกรอบ รุ่นจูเรียต ขนาด 40 X 60 ซม. - สีดำ/ขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170133446_c_JULIET_BK_WT.JPG&w=1920&q=75"
    },
    {
        id: "10",
        name: "แจกันตั้งโต๊ะ รุ่นนาทาชา ขนาด 9.5 นิ้ว - สีขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129568_f_NATACHA_WT.JPG&w=1920&q=75"
    },
    {
        id: "11",
        name: "โคมไฟตั้งโต๊ะ รุ่นเอลลินอร์ - สีชมพู",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170102828.jpg&w=1920&q=75"
    },
    {
        id: "12",
        name: "โคมไฟตั้งโต๊ะ รุ่นมาร์กี้ - สีเหลือง",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170131318_c_MARGIE_YL.JPG&w=1920&q=75"
    },
    {
        id: "13",
        name: "ชุดคู่กระทะเหล็กหล่อ พร้อมฝา รุ่นไมย์เออร์ 3 ชิ้น - สีดำ",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170126319_1654585111702biaP.jpg&w=1920&q=75"
    },
    {
        id: "14",
        name: "ชุดมีดทำครัว 14 ชิ้น+กล่อง เพรสทีจ - สีเทา",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170081544.jpg&w=1920&q=75"
    },
    {
        id: "15",
        name: "ชั้นวางในห้องน้ำ รุ่นโกฮาน ขนาด 33 X 30 X 80 ซม. - สีขาว/ธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170132806_pc_GOHAN_WT_NT.JPG&w=1920&q=75"
    },
    {
        id: "16",
        name: "ชั้นวางสแตนเลส 1 ชั้น รุ่นร็อคกี้ ขนาด 39 ซม. - สีเงิน",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170071452.jpg&w=1920&q=75"
    },
    {
        id: "17",
        name: "ชั้นวางของ 3 ชั้น พร้อมล้อ รุ่นไคท - สีธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129749_pc_KITE_NT.jpg&w=1920&q=75"
    },
    {
        id: "18",
        name: "ตะกร้าผ้าผักตบชวา รุ่นสาน ขนาด 40 X 40 X 46 ซม. - สีธรรมชาติ",
        description: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        price: 1000,
        category: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170127497_c_SAAN_NT.jpg&w=1920&q=75"
    },
    {
        id: "19",
        name: "ชุดห้องนอน รุ่นเฮซ (เตียง, ตู้เสื้อผ้า 4 บาน, โต๊ะเครื่องแป้ง) - สีเทาอ่อน/ไลท์ โอ๊ค",
        description: "หมอน",
        price: 1500,
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F1%2F110035516_1637151697263KlPf.jpg&w=1920&q=75",
        category: "ชุดห้องนอน"
    },
    {
        id: "20",
        name: "FURINBOX ชุดโต๊ะทานอาหาร 4 ที่นั่ง รุ่นฟิน - สีไม้น้ำตาลกลาง",
        description: "เฟอร์นิเจอร์",
        price: 2000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F3%2F7%2F370000240_f_FYN_MW.JPG&w=1920&q=75"
    },
    {
        id: "21",
        name: "ซื้อโซฟาผ้าปรับระดับ 3 ที่นั่ง รุ่นเจย์เดน แถมฟรี! โซฟาผ้าปรับระดับ 1 ที่นั่ง เฟอร์นิเจอร์",
        description: "เฟอร์นิเจอร์",
        price: 5000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23001957_36512_mx.jpg&w=1920&q=75"
    },
    {
        id: "22",
        name: " โซฟาหนังแท้ปรับระดับไฟฟ้า 1 ที่นั่ง รุ่นไคล์ - สีน้ำตาล",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F1%2F110021101_1588760020176NbNv_3.jpg&w=1920&q=75"
    },
    {
        id: "23",
        name: "ชุดโต๊ะทานอาหารหินอ่อน รุ่นมาซซินี+รีคเกอร์ (4 ที่นั่ง) ราคาพิเศษ",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23002200_37299_bf.jpg&w=1920&q=75"
    },
    {
        id: "24",
        name: "หมอนอิง รุ่นลักซ์ซู-แรบบี้ ขนาด 30 X 50 ซม. - สีเทาอ่อน",
        description: "ผ้าเเละสิ่งทอ",
        price: 1500,
        category: "ผ้าเเละสิ่งทอ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170135051_c_LUXU-RABBY_LGY.JPG&w=1920&q=75"
    },
    {
        id: "25",
        name: "ชั้นวางของบานเปิด 5 ชั้น รุ่นไทดี้ - ลายไม้ธรรมชาติ",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F2%2F120019029_1536641823511LwdH_2.jpg&w=1920&q=75"
    },
    {
        id: "26",
        name: "ตู้วางรองเท้า รุ่นเพซโซ่ ขนาด 60 ซม.",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120017684_pc_PEZZO_NT_WT.jpg&w=1920&q=75"
    },
    {
        id: "27",
        name: " รูปภาพพร้อมกรอบ รุ่นจูเรียต ขนาด 40 X 60 ซม. - สีดำ/ขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170133446_c_JULIET_BK_WT.JPG&w=1920&q=75"
    },
    {
        id: "28",
        name: "แจกันตั้งโต๊ะ รุ่นนาทาชา ขนาด 9.5 นิ้ว - สีขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129568_f_NATACHA_WT.JPG&w=1920&q=75"
    },
    {
        id: "29",
        name: "โคมไฟตั้งโต๊ะ รุ่นเอลลินอร์ - สีชมพู",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170102828.jpg&w=1920&q=75"
    },
    {
        id: "30",
        name: "โคมไฟตั้งโต๊ะ รุ่นมาร์กี้ - สีเหลือง",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170131318_c_MARGIE_YL.JPG&w=1920&q=75"
    },
    {
        id: "31",
        name: "ชุดคู่กระทะเหล็กหล่อ พร้อมฝา รุ่นไมย์เออร์ 3 ชิ้น - สีดำ",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170126319_1654585111702biaP.jpg&w=1920&q=75"
    },
    {
        id: "32",
        name: "ชุดมีดทำครัว 14 ชิ้น+กล่อง เพรสทีจ - สีเทา",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170081544.jpg&w=1920&q=75"
    },
    {
        id: "33",
        name: "ชั้นวางในห้องน้ำ รุ่นโกฮาน ขนาด 33 X 30 X 80 ซม. - สีขาว/ธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170132806_pc_GOHAN_WT_NT.JPG&w=1920&q=75"
    },
    {
        id: "34",
        name: "ชั้นวางสแตนเลส 1 ชั้น รุ่นร็อคกี้ ขนาด 39 ซม. - สีเงิน",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170071452.jpg&w=1920&q=75"
    },
    {
        id: "35",
        name: "ชั้นวางของ 3 ชั้น พร้อมล้อ รุ่นไคท - สีธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129749_pc_KITE_NT.jpg&w=1920&q=75"
    },
    {
        id: "36",
        name: "ตะกร้าผ้าผักตบชวา รุ่นสาน ขนาด 40 X 40 X 46 ซม. - สีธรรมชาติ",
        description: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        price: 1000,
        category: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170127497_c_SAAN_NT.jpg&w=1920&q=75"
    },
    {
        id: "1",
        name: "ชุดห้องนอน รุ่นเฮซ (เตียง, ตู้เสื้อผ้า 4 บาน, โต๊ะเครื่องแป้ง) - สีเทาอ่อน/ไลท์ โอ๊ค",
        description: "หมอน",
        price: 1500,
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F1%2F110035516_1637151697263KlPf.jpg&w=1920&q=75",
        category: "ชุดห้องนอน"
    },
    {
        id: "2",
        name: "FURINBOX ชุดโต๊ะทานอาหาร 4 ที่นั่ง รุ่นฟิน - สีไม้น้ำตาลกลาง",
        description: "เฟอร์นิเจอร์",
        price: 2000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F3%2F7%2F370000240_f_FYN_MW.JPG&w=1920&q=75"
    },
    {
        id: "3",
        name: "ซื้อโซฟาผ้าปรับระดับ 3 ที่นั่ง รุ่นเจย์เดน แถมฟรี! โซฟาผ้าปรับระดับ 1 ที่นั่ง เฟอร์นิเจอร์",
        description: "เฟอร์นิเจอร์",
        price: 5000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23001957_36512_mx.jpg&w=1920&q=75"
    },
    {
        id: "4",
        name: " โซฟาหนังแท้ปรับระดับไฟฟ้า 1 ที่นั่ง รุ่นไคล์ - สีน้ำตาล",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F1%2F110021101_1588760020176NbNv_3.jpg&w=1920&q=75"
    },
    {
        id: "5",
        name: "ชุดโต๊ะทานอาหารหินอ่อน รุ่นมาซซินี+รีคเกอร์ (4 ที่นั่ง) ราคาพิเศษ",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23002200_37299_bf.jpg&w=1920&q=75"
    },
    {
        id: "6",
        name: "หมอนอิง รุ่นลักซ์ซู-แรบบี้ ขนาด 30 X 50 ซม. - สีเทาอ่อน",
        description: "ผ้าเเละสิ่งทอ",
        price: 1500,
        category: "ผ้าเเละสิ่งทอ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170135051_c_LUXU-RABBY_LGY.JPG&w=1920&q=75"
    },
    {
        id: "7",
        name: "ชั้นวางของบานเปิด 5 ชั้น รุ่นไทดี้ - ลายไม้ธรรมชาติ",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F2%2F120019029_1536641823511LwdH_2.jpg&w=1920&q=75"
    },
    {
        id: "8",
        name: "ตู้วางรองเท้า รุ่นเพซโซ่ ขนาด 60 ซม.",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120017684_pc_PEZZO_NT_WT.jpg&w=1920&q=75"
    },
    {
        id: "9",
        name: " รูปภาพพร้อมกรอบ รุ่นจูเรียต ขนาด 40 X 60 ซม. - สีดำ/ขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170133446_c_JULIET_BK_WT.JPG&w=1920&q=75"
    },
    {
        id: "10",
        name: "แจกันตั้งโต๊ะ รุ่นนาทาชา ขนาด 9.5 นิ้ว - สีขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129568_f_NATACHA_WT.JPG&w=1920&q=75"
    },
    {
        id: "11",
        name: "โคมไฟตั้งโต๊ะ รุ่นเอลลินอร์ - สีชมพู",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170102828.jpg&w=1920&q=75"
    },
    {
        id: "12",
        name: "โคมไฟตั้งโต๊ะ รุ่นมาร์กี้ - สีเหลือง",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170131318_c_MARGIE_YL.JPG&w=1920&q=75"
    },
    {
        id: "13",
        name: "ชุดคู่กระทะเหล็กหล่อ พร้อมฝา รุ่นไมย์เออร์ 3 ชิ้น - สีดำ",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170126319_1654585111702biaP.jpg&w=1920&q=75"
    },
    {
        id: "14",
        name: "ชุดมีดทำครัว 14 ชิ้น+กล่อง เพรสทีจ - สีเทา",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170081544.jpg&w=1920&q=75"
    },
    {
        id: "15",
        name: "ชั้นวางในห้องน้ำ รุ่นโกฮาน ขนาด 33 X 30 X 80 ซม. - สีขาว/ธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170132806_pc_GOHAN_WT_NT.JPG&w=1920&q=75"
    },
    {
        id: "16",
        name: "ชั้นวางสแตนเลส 1 ชั้น รุ่นร็อคกี้ ขนาด 39 ซม. - สีเงิน",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170071452.jpg&w=1920&q=75"
    },
    {
        id: "17",
        name: "ชั้นวางของ 3 ชั้น พร้อมล้อ รุ่นไคท - สีธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129749_pc_KITE_NT.jpg&w=1920&q=75"
    },
    {
        id: "18",
        name: "ตะกร้าผ้าผักตบชวา รุ่นสาน ขนาด 40 X 40 X 46 ซม. - สีธรรมชาติ",
        description: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        price: 1000,
        category: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170127497_c_SAAN_NT.jpg&w=1920&q=75"
    },
    {
        id: "19",
        name: "ชุดห้องนอน รุ่นเฮซ (เตียง, ตู้เสื้อผ้า 4 บาน, โต๊ะเครื่องแป้ง) - สีเทาอ่อน/ไลท์ โอ๊ค",
        description: "หมอน",
        price: 1500,
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F1%2F110035516_1637151697263KlPf.jpg&w=1920&q=75",
        category: "ชุดห้องนอน"
    },
    {
        id: "20",
        name: "FURINBOX ชุดโต๊ะทานอาหาร 4 ที่นั่ง รุ่นฟิน - สีไม้น้ำตาลกลาง",
        description: "เฟอร์นิเจอร์",
        price: 2000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F3%2F7%2F370000240_f_FYN_MW.JPG&w=1920&q=75"
    },
    {
        id: "21",
        name: "ซื้อโซฟาผ้าปรับระดับ 3 ที่นั่ง รุ่นเจย์เดน แถมฟรี! โซฟาผ้าปรับระดับ 1 ที่นั่ง เฟอร์นิเจอร์",
        description: "เฟอร์นิเจอร์",
        price: 5000,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23001957_36512_mx.jpg&w=1920&q=75"
    },
    {
        id: "22",
        name: " โซฟาหนังแท้ปรับระดับไฟฟ้า 1 ที่นั่ง รุ่นไคล์ - สีน้ำตาล",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F1%2F110021101_1588760020176NbNv_3.jpg&w=1920&q=75"
    },
    {
        id: "23",
        name: "ชุดโต๊ะทานอาหารหินอ่อน รุ่นมาซซินี+รีคเกอร์ (4 ที่นั่ง) ราคาพิเศษ",
        description: "เฟอร์นิเจอร์",
        price: 1500,
        category: "เฟอร์นิเจอร์",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F5%2F3%2F5323_fur_23002200_37299_bf.jpg&w=1920&q=75"
    },
    {
        id: "24",
        name: "หมอนอิง รุ่นลักซ์ซู-แรบบี้ ขนาด 30 X 50 ซม. - สีเทาอ่อน",
        description: "ผ้าเเละสิ่งทอ",
        price: 1500,
        category: "ผ้าเเละสิ่งทอ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170135051_c_LUXU-RABBY_LGY.JPG&w=1920&q=75"
    },
    {
        id: "25",
        name: "ชั้นวางของบานเปิด 5 ชั้น รุ่นไทดี้ - ลายไม้ธรรมชาติ",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F2%2F120019029_1536641823511LwdH_2.jpg&w=1920&q=75"
    },
    {
        id: "26",
        name: "ตู้วางรองเท้า รุ่นเพซโซ่ ขนาด 60 ซม.",
        description: "ตู้เก็บของ",
        price: 1500,
        category: "ตู้เก็บของ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120017684_pc_PEZZO_NT_WT.jpg&w=1920&q=75"
    },
    {
        id: "27",
        name: " รูปภาพพร้อมกรอบ รุ่นจูเรียต ขนาด 40 X 60 ซม. - สีดำ/ขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170133446_c_JULIET_BK_WT.JPG&w=1920&q=75"
    },
    {
        id: "28",
        name: "แจกันตั้งโต๊ะ รุ่นนาทาชา ขนาด 9.5 นิ้ว - สีขาว",
        description: "ของตกเเต่งบ้าน",
        price: 1500,
        category: "ของตกเเต่งบ้าน",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129568_f_NATACHA_WT.JPG&w=1920&q=75"
    },
    {
        id: "29",
        name: "โคมไฟตั้งโต๊ะ รุ่นเอลลินอร์ - สีชมพู",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170102828.jpg&w=1920&q=75"
    },
    {
        id: "30",
        name: "โคมไฟตั้งโต๊ะ รุ่นมาร์กี้ - สีเหลือง",
        description: "โคมไฟเเละหลอดไฟ",
        price: 1500,
        category: "โคมไฟเเละหลอดไฟ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170131318_c_MARGIE_YL.JPG&w=1920&q=75"
    },
    {
        id: "31",
        name: "ชุดคู่กระทะเหล็กหล่อ พร้อมฝา รุ่นไมย์เออร์ 3 ชิ้น - สีดำ",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170126319_1654585111702biaP.jpg&w=1920&q=75"
    },
    {
        id: "32",
        name: "ชุดมีดทำครัว 14 ชิ้น+กล่อง เพรสทีจ - สีเทา",
        description: "อุปกรณ์เครื่องครัว",
        price: 1000,
        category: "อุปกรณ์เครื่องครัว",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170081544.jpg&w=1920&q=75"
    },
    {
        id: "33",
        name: "ชั้นวางในห้องน้ำ รุ่นโกฮาน ขนาด 33 X 30 X 80 ซม. - สีขาว/ธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170132806_pc_GOHAN_WT_NT.JPG&w=1920&q=75"
    },
    {
        id: "34",
        name: "ชั้นวางสแตนเลส 1 ชั้น รุ่นร็อคกี้ ขนาด 39 ซม. - สีเงิน",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170071452.jpg&w=1920&q=75"
    },
    {
        id: "35",
        name: "ชั้นวางของ 3 ชั้น พร้อมล้อ รุ่นไคท - สีธรรมชาติ",
        description: "สินค้าสำหรับห้องน้ำ",
        price: 1000,
        category: "สินค้าสำหรับห้องน้ำ",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129749_pc_KITE_NT.jpg&w=1920&q=75"
    },
    {
        id: "36",
        name: "ตะกร้าผ้าผักตบชวา รุ่นสาน ขนาด 40 X 40 X 46 ซม. - สีธรรมชาติ",
        description: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        price: 1000,
        category: "อุปกรณ์ซักรีดเเละทำความสะอาด",
        img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170127497_c_SAAN_NT.jpg&w=1920&q=75"
    },
]

function ProductList() {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [productsList, setProductsList] = useState<IProduct[]>(products)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [postsPerPage, setPostsPerPage] = useState<number>(6)

    const filterByCategory = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory)
    }


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
        ]
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts =  productsList.slice(indexOfFirstPost, indexOfLastPost)

    console.log(currentProducts)

    const paginate = (pageNumber : number) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        if (selectedCategory) {
            const filteredProducts = products.filter((p) => {
                return p.category === selectedCategory;
            })
            setProductsList(filteredProducts)
        }

    }, [selectedCategory])

    return (
        <Wrapper>
            <div className="bg-[#111111] w-[100%] flex justify-center text-[#fff] text-[12px] pt-2 pb-2 gap-[10rem]">
                <div>บริการผ่อนชำระ 0%</div>
                <div>จัดส่งเริ่มต้นที่ 99 บาท</div>
                <div>นโยบายเปลี่ยนคืนสินค้าใน 365 วัน</div>
            </div>
            <HeadRoom>
                <Navbar />
            </HeadRoom>

            <div className="flex justify-center mt-5">
                <div className="flex gap-12 w-[80%] border-b-1 border-[#000] border-b-[1px] pb-3 border-[#c7c7c7]">
                    <div className="text-[12px]">สินค้าทั้งหมด</div>
                    <div className="text-[12px]">ห้องต่างๆ</div>
                    <div className="text-[12px]">สินค้าราคาพิเศษ</div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center ">
                <div className="w-[80%]">
                    <Slider {...settings}>
                        {category.map((d) => (
                            <div key={d.name} className="h-[300px] text-black rounded-xl" onClick={() => {
                                filterByCategory(d.name)
                            }}>
                                <div className="flex justify-center items-center rounded-t-xl">
                                    <img src={d.img} alt="" className="h-40 w-44 " />
                                </div>

                                <div className="text-[12px] flex flex-col items-center pt-2 justify-center gap-4">
                                    <div>{d.name}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="w-[100%] flex justify-center">
                <div className="w-[80%] grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
                    {currentProducts && currentProducts.map((p) => {
                        return <Card title={p.name} description={p.description} price={p.price} category={p.category} img={p.img}/>
                    })}
                </div>
            </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={currentProducts.length} paginate={paginate}/>
            <Footer />
        </Wrapper>
    );
}

export default ProductList;
