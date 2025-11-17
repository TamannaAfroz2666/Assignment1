2.What is the use of the keyof keyword in TypeScript? Provide an example.
keyof হলো TypeScript-এর একটা টাইপ অপারেটর, যা কোনো অবজেক্ট টাইপের ভেতরের সব প্রপার্টির নাম (কী) গুলোকে একসাথে জড়ো করে একটা ইউনিয়ন অফ লিটারেল টাইপ বানায়।
keyof বলে দেবে এই অবজেক্টে শুধু এই এই কয়টা কী দিয়ে ঢোকা যাবে ।কাইন্ড অফ রেস্ট্রিক্টেড এরিয়া বানায় যাতে ডাটা মেস না করে
example:
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;

4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
enum হলো TypeScript-এর একটা স্পেশাল টাইপ যেটা দিয়ে একটা নির্দিষ্ট সেট অফ কনস্ট্যান্ট ভ্যালু গুলোকে একটা গ্রুপ করে ।enum স্পেশালি এপিআই ইউজিং বেশি ইউজ হয় 

enum ApiStatus {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
  Idle = "IDLE"
}

type ApiResponse<T> = {
  status: ApiStatus;
  data?: T;
  error?: string;
};

const userApi: ApiResponse<{ id: number; name: string }> = {
  status: ApiStatus.Success,
  data: { id: 1, name: "Rahim" }
};
