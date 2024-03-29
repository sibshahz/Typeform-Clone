import { ProductDisplay } from "../components/product-display/product-display.component";
import { SigninForm } from "../components/signin-form/signin-form.component";

const SignInPage = () => {
  return (
    <div className="flex flex-row bg-gray-black">
      <div className="basis-44 hidden lg:block">
        <ProductDisplay />
      </div>
      <div className="basis-full lg:basis-56">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignInPage;
