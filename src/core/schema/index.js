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
  fullName: string().required().min(7),
  nationalCode: string().required().length(10),
  birthDate: string().required("تاریخ تولد خود را وارد کنید!"),
  gender: string().required("جنسیت خود را مشخص کنید!"),
});

export { bankAcountSchema, personalInfo };
