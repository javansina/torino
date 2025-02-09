import { object, string } from "yup";

const bankAcountSchema = object({
  shaba_code: string()
    .required("شماره شبارا وارد کنید")
    .length(16, "شماره کارت باید ۱۶ عدد باشد"),
  debitCard_code: string()
    .required("چرا خالیست؟!")
    .length(16, "شماره کارت باید ۱۶ عدد باشد"),
  accountIdentifier: string().min(1, "باید حداقل ۸ کاراکتر باشد"),
});

const personalInfo = object({
  fullName: string()
    .required("تکمیل این بخش ضروری است!")
    .matches(
      /^[a-zA-Z\u0600-\u06FF\s]*$/,
      "نام و نام خانوادگی فقط باید شامل حروف باشد",
    )
    .min(7, "تعداد کارکتر باید بیش از 7 مورد باشد!"),
  nationalCode: string()
    .required("تکمیل این بخش ضروری است!")
    .length(10, "کدملی باید شامل 10 رقم باشد!"),
  birthDate: string().required("تکمیل این بخش ضروری است!"),
  gender: string().required("جنسیت خود را مشخص کنید!"),
});

const email = object({
  email: string().required().min(10),
});

export { bankAcountSchema, personalInfo, email };
