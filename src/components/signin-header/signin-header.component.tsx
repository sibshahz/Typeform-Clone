import SelectComponent from "./select.component";

const SigninHeader = () => {
  return (
    <div className="flex flex-row justify-between py-3 px-6 items-center w-full">
      <div className="language-selector">
        <SelectComponent />
      </div>
      <div className="login-container flex flex-row items-center">
        <p className="mr-2 text-alert text-sm">Already have an account?</p>
        <div className="min-w-16 inline-flex flex-col justify-center content-center text-center">
          <a
            className="text-black hover:opacity-80 transition-opacity duration-100 ease-in text-xs leading-[1.5] py-[3px] px-[10px] border border-black rounded-md w-full font-medium"
            href="#"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SigninHeader;
