import Product from "../../assets/images/product-sample@3x.webp";
export const ProductDisplay = () => {
  return (
    <div className="bg-gray-black min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-center text-white text-4xl leading-11 mb-9 font-normal">
          Sign up <br /> and come on in
        </h1>
        <div className="w-full max-w-366">
          <img src={Product} />
        </div>
      </div>
      <p className="absolute bottom-[24px] text-white text-sm">© Typeform </p>
    </div>
  );
};
