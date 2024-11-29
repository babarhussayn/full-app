import Image from "next/image";
import Link from "next/link";
import { getData } from "@/constants/service";

const BestSellerPage = async () => {
  const products = await getData("product/all-product");
  console.log("product: ", products.data[0]);
  return (
    <section className="w-full min-h-screen">
      <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center flex-col gap-12">
          <div className="flex justify-center m-8 gap-8">
            <h2 className="font-bold text-4xl">Best Sellers</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
              {products && products.data.length > 0 ? (
                products.data.map((items, index) => (
                  <div key={index}>
                    <div className="flex justify-center items-center flex-col gap-4 border ">
                      <Link href={`/product-detail/${items.name}`}>
                        <div>
                          {items?.imageurl && items.imageurl[0] ? (
                            <Image
                              src={items.imageurl[0]}
                              alt="image"
                              width={250}
                              height={100}
                              objectFit="cover"
                            />
                          ) : (
                            <div>No image available</div> // Fallback for no image
                          )}
                        </div>
                      </Link>
                      <div className="flex justify-center items-center flex-col gap-4 p-4">
                        <h4>{items.name.toLocaleUpperCase()}</h4>
                        <p>{items.title.toLocaleUpperCase()}</p>
                        <span>{items.price}</span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div> No data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerPage;
