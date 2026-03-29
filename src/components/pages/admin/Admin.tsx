import { useForm } from 'react-hook-form';
import './admin.scss'

interface IProductData{
    title: string
    image: string
    price: string
    description: string
}
const Admin = () => {
    const {handleSubmit, register, reset, formState} = useForm<IProductData>()
    const handleData = (data: IProductData) => {
        reset()
    }
    return (
        <section id="admin">
            <div className="container">
                <form onSubmit={handleSubmit(handleData)} className="admin">
                    <h2>
                        CREATE NEW PRODUCT
                    </h2>
                    <input {...register("title", {
                        required: "Title of product is REQUIRED!"
                    })} type="text" placeholder='Enter Title of Product' />
                    <input {...register("image", {
                        required: "Img of product is REQUIRED!"
                    })} type="text" placeholder='Enter Image of Product' />
                    <input {...register("price", {
                        required: "You have to show the Price!"
                    })} type="text" placeholder='Enter Price of Product' />
                    <input {...register("description", {
                        required: "Please, leave some description!"
                    })} type="text" placeholder='Enter Description' />
                    <button type='submit'>Create</button>
                </form>
            </div>
        </section>
    );
};

export default Admin;