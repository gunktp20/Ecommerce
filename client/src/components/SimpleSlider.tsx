import React from "react"
import Slider from "react-slick"

interface IProp {
    products: {
        id: number,
        title: string,
        description: string,
        price: number
        category: string
        img:string
    }[]
}

function SimpleSlider(props: IProp) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ]
    };
    return (
       <div className="bg-red-500 flex">
         <Slider {...settings} className="flex w-[100%]">
            {props.products && props.products.map((product) => {
                return <div className="w-[100px] bg-blue-500">
                    <img src={product.img} className="w-[50px] h-[50px] object-cover"></img>
                </div>
            })}
        </Slider>
       </div>
    )
}

export default SimpleSlider
