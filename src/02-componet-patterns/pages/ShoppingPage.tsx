import { ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components"
import { products } from "../data/products"


const product = products[0];


export const ShoppingPage = () => {

  return (
    <div className="bg-dark">
      <h1>Shopping Store</h1>
      <hr/>

      <ProductCard
        key={ product.id}
        product={ product}
        initialValues = {{
          count: 6,
          maxCount: 10,
        }}
      >
        {
          ({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />                 
            </>
          )
        }
      </ProductCard>                

    </div>
  )
}
