import { ProductDisplay } from "../components/product-display/product-display.component";
import { SignupForm } from "../components/signup-form/signup-form.component";

const SignupPage = () => {
  return (
    <div className="flex flex-row bg-gray-black">
      <div className="basis-44 hidden lg:block">
        <ProductDisplay />
      </div>
      <div className="basis-full lg:basis-56">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
