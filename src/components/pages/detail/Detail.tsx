import { useParams } from 'react-router-dom';
import './detail.scss'
import { useEffect } from 'react';
const Detail = () => {
    // const {} = useProduct()
    const {id} = useParams()
    // useEffect(() => {
    //     getOneProduct(id)
    // }, [])
    return (
        <section id="detail">
            <div className="container">
                <div className="detail">
                    <img src="https://img.freepik.com/free-psd/monstera-deliciosa-plant-pot-lush-green-leaves-home-decor-indoor-plant-tropical-foliage-vibrant-green-potted-plant-houseplant-greenery-plant-photography_191095-84025.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <div className="info">
                        <div className="title">
                            <h2>Barberton Daisy</h2>
                        <h5>$180.00</h5>
                            </div> 
                        <div className="description">
                        <h4>Short Description:</h4>
                        <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off <br />
                         the ground. The ceramic cylinder planters come with a wooden stand to help elevate <br />
                         your plants off the ground. 
                        </p>
                        </div>
                        <div className="btns">
                            <div className="counter">
                                <button className='increment'>-</button>
                                <p>1</p>
                                <button className='decrement'>+</button>
                            </div>
                            <button className='buy'>Buy Now</button>
                            <button className='add'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;