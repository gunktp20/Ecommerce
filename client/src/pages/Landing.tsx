import { Navbar, Card, SimpleSlider ,Footer} from "../components";
import HeadRoom from "react-headroom";
import Wrapper from "../assets/wrappers/Landing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wallpaper from "../assets/images/furniture-ecommerce (1).jpg";



import { Link, useNavigate } from "react-router-dom";

const category = [
  {
    name: `อุปกรณ์จัดเก็บของใช้`,
    img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fcategory%2FOrganization%2Fdrawer-and-shelf.png&w=128&q=75`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `ผ้าเเละสิ่งทอ`,
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
    name: `โคมไฟ หลอดไฟเเละไฟประดับ`,
    img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F7%2F170097648_f_paribosta_bk_1_.jpg&w=1920&q=75`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `อุปกรณ์ครัว`,
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

function SampleNextArrow(props : {
  className?: string;
  style?: object;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",justifyContent:"center", background: "#1f2937", borderRadius:"100%" ,width:"30px", height:"30px", alignItems:"center"}}
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
      style={{ ...style, display: "flex",justifyContent:"center", background: "#1f2937", borderRadius:"100%" ,width:"30px", height:"30px", alignItems:"center"}}
      onClick={onClick}
    />
  );
}

function Landing() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SamplePrevArrow/>,
    prevArrow: <SampleNextArrow/>,
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

      <div className="w-[100%] flex justify-center relative">
        <img src={Wallpaper} className="w-[80%] h-[500px] object-cover"></img>
        <div className=" w-[520px] h-[100px] absolute top-[8rem] left-[17rem] flex flex-col">
          <p className="mb-5 text-[35px] font-bold">
            Welcome to our Application{" "}
          </p>
          <p className="text-[13.3px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum,
            unde officia accusamus provident voluptas, vero at pariatur nostrum,
            odio porro debitis quisquam quos ipsa voluptates suscipit distinctio
            qui omnis!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex gap-12 w-[80%] border-b-1 border-[#000] border-b-[1px] pb-3 border-[#c7c7c7]">
          <div className="text-[12px]">สินค้าทั้งหมด</div>
          <div className="text-[12px]">ห้องต่างๆ</div>
          <div className="text-[12px]">สินค้าราคาพิเศษ</div>
        </div>
      </div>  
      
      <div className="w-[100%] flex justify-center relative">
      
        <div className="w-[80%]  relative mt-5">
        <Link className="h-fit absolute right-0 text-sm top-[-0.5rem] cursor-pointer w-max z-[1000]" to="/product">view all</Link>
          <Slider {...settings}>
            {category.map((d) => (
              <div key={d.name} className="h-[300px] text-black rounded-xl">
                <div className=" flex justify-center items-center rounded-t-xl">
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
      <Footer/>
    </Wrapper>
  );
}

export default Landing;
