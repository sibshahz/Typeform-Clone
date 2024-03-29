import { useState } from "react";
import TypeformIcon from "../icons/typeform-icon";
import TypeformTextIcon from "../icons/typeform-texticon";
import SigninHeader from "../signin-header/signin-header.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import WarningIcon from "../icons/warning";

export const SigninForm = () => {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "This field cannot be left blank" })
      .email("Enter a valid email address"),
    password: z
      .string()
      .refine((value) => value.length > 0, {
        message: "This field cannot be left blank",
      })
      .refine(
        (value) =>
          /\d/.test(value) &&
          /[a-zA-Z]/.test(value) &&
          /[^a-zA-Z0-9\s]/.test(value),
        {
          message:
            "Use 8 or more characters with a mix of letters, numbers and symbols",
          path: [],
        }
      ),
    checkbox: z
      .boolean()
      .refine((value) => value === true, {
        message: "Please accept the terms and conditions to finish the signup",
      }),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log("Submitted data: ", data);
    reset();
  };

  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="bg-white min-h-screen lg:rounded-tl-2xl w-full lg:rounded-bl-2xl flex flex-col items-center">
      <SigninHeader />
      <div className="inline-flex grow flex-col w-full h-full items-center justify-center max-w-[542px]">
        <div className="logo-container flex flex-row gap-2 h-20 items-center">
          <TypeformIcon />
          <TypeformTextIcon />
        </div>
        <h2 className="font-extralight px-2 text-select text-2xl leading-9 mb-6 text-center">
          Get better data with conversational forms, surveys, quizzes & more.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-form max-w-64">
            <div className="field-group mb-4">
              <span className="block h-10 w-full rounded-[3px] border border-strong">
                <input
                  className="h-full w-full py-[6px] px-2 rounded-[3px] text-base leading-4 border-none"
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  name="email"
                  aria-label="Email"
                  data-qa="field-email"
                />
              </span>

              {errors.email && (
                <div className="flex flex-row gap-2 items-center">
                  <span className="w-4 h-4">
                    <WarningIcon />
                  </span>{" "}
                  <span className="text-error-red text-sm leading-normal pt-2 pr-0 pb-[6px]">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div className="field-group mb-4">
              <span className="block h-10 w-full rounded-[3px] border border-strong">
                <input
                  {...register("password")}
                  className="h-full w-full py-[6px] px-2 rounded-[3px] text-base leading-4 border-none"
                  type="password"
                  placeholder="Password"
                  name="password"
                  aria-label="Password"
                  data-qa="field-password"
                />
              </span>
              {errors.password && (
                <div className="flex flex-row gap-2 items-center">
                  <span className="w-4 h-4">
                    <WarningIcon />
                  </span>
                  <span className="text-error-red text-sm leading-normal pt-2 pr-0 pb-[6px]">
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>

            <div className="field-group mb-4 flex flex-col">
              <div className="flex flex-row gap-4">
                <input
                  {...register("checkbox")}
                  className="outline-none shadow-sm basis-full max-w-5 max-h-5 m-0 rounded-[3px] accent-black"
                  aria-labelledby="label-terms_and_consents"
                  data-checked="false"
                  type="checkbox"
                />
                <div className="terms text-gray-black text-sm leading-[18px] mb-4">
                  I agree to Typeform’s{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>
                  ,{" "}
                  <a className="underline" href="#">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a className="underline" href="#">
                    Data Processing Agreement
                  </a>
                  .
                </div>
              </div>
              {errors.checkbox && (
                <div className="flex flex-row gap-2 items-center shrink-1">
                  <span className="w-4 h-4">
                    <WarningIcon />
                  </span>
                  <span className="text-error-red text-sm leading-normal pt-2 pr-0 pb-[6px]">
                    {errors.checkbox.message}
                  </span>
                </div>
              )}
            </div>

            <div className="field-group options pl-9 pb-4 pr-2 mb-1">
              <div
                onClick={() => setShowOptions(!showOptions)}
                className="flex text-sm leading-8 m-0 flex-row justify-between items-center hover:cursor-pointer"
              >
                <span className="">See options</span>
                <svg
                  fill="none"
                  height="7"
                  viewBox="0 0 9 5"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                    fill="#5E5E5E"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>

              {showOptions && (
                <div className="options-panel text-sm flex flex-col gap-3 transition-height duration-500 ease-in-out">
                  <div className="option-item flex flex-col gap-3">
                    <div className="option-text">
                      Get useful tips, inspiration, and offers via
                      e-communication.
                    </div>
                    <div className="option-box flex flex-row gap-5 items-center">
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_one_yes"
                        name="fav_language"
                        value="Yes"
                      />
                      <label htmlFor="fav_one_yes">Yes</label>
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_one_no"
                        name="fav_language"
                        value="No"
                      />
                      <label htmlFor="fav_one_no">No</label>
                    </div>
                  </div>

                  <div className="option-item flex flex-col gap-3">
                    <div className="option-text">
                      Tailor Typeform to my needs based on my activity.
                      <a href="#" className="text-select">
                        See Privacy Policy
                      </a>
                    </div>
                    <div className="option-box flex flex-row gap-5 items-center">
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_two_yes"
                        name="fav_language_two"
                        value="Yes"
                      />
                      <label htmlFor="fav_two_yes">Yes</label>
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_two_no"
                        name="fav_language_two"
                        value="No"
                      />
                      <label htmlFor="fav_two_no">No</label>
                    </div>
                  </div>

                  <div className="option-item flex flex-col gap-3">
                    <div className="option-text">
                      Enrich my data with select third parties for more relevant
                      content.
                      <a href="#" className="text-select">
                        See Privacy Policy
                      </a>
                    </div>
                    <div className="option-box flex flex-row gap-5 items-center">
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_three_yes"
                        name="fav_language_three"
                        value="Yes"
                      />
                      <label htmlFor="fav_three_yes">Yes</label>
                      <input
                        className="w-5 h-5 accent-black transition-all duration-100 ease-out"
                        type="radio"
                        id="fav_three_no"
                        name="fav_language_three"
                        value="No"
                      />
                      <label htmlFor="fav_three_no">No</label>
                    </div>
                  </div>

                  <p className="text-select">
                    You can update your preferences in your Profile at any time
                  </p>
                </div>
              )}
            </div>

            <div className="field-group mb-4 w-full">
              <button
                type="submit"
                className=" w-230 mx-auto block bg-button-bg text-white rounded-[3px] border-none text-base h-10 leading-6 cursor-pointer"
              >
                Create my free account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
