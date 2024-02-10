
import { Navbar, Card, SimpleSlider } from '../components'
import HeadRoom from "react-headroom"
import Wrapper from "../assets/wrappers/Landing"
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const products = [
  { id: 1, title: "brown chair", description: "good chair", price: 1300, category: "chair", img:"https://www.ikea.com/global/assets/range-categorisation/images/stools-22659.jpeg?f=m"}
]


function Landing() {

  const navigate = useNavigate()

  return (
    <Wrapper>
      <HeadRoom>
        <Navbar />
      </HeadRoom>
      <div className='flex justify-center mt-5'>
        <div className='flex gap-12 w-[80%] border-b-1 border-[#000] border-b-[1px] pb-3 border-[#c7c7c7]'>
          <div className='text-[12px]'>สินค้าทั้งหมด</div>
          <div className='text-[12px]'>ห้องต่างๆ</div>
          <div className='text-[12px]'>สินค้าราคาพิเศษ</div>
        </div>
      </div>

        <SimpleSlider products={products}/>

    </Wrapper>
  )
}

export default Landing
