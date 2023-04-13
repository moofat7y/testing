import { toast } from "react-toastify";

export const Links = [
  { path: "/", name: "الرئيسية" },
  { path: "/specialists", name: "المختصين" },
  { path: "/blogs", name: "المدونة" },
  { path: "/videos", name: "فيديوهات" },
  { path: "/pricing", name: "البرامج" },
  { path: "/complaint", name: "الشكاوي" },
  { path: "/rooms", name: "الغرفة" },
  { path: "/times", name: "مواعيد الحجز" },
];

export const userMenu = ["Profile", "Logout"];
export const images = [
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
  "https://jo24.net/assets/2019-09-11/images/331914_8_1568206507.jpg",
];

// array of objects of blogs of 30 items
export const Blogs = [
  {
    id: 1,
    title: "كيف أنضم إلى مجموعات دعم الاكتئاب والقلق؟",
    date: "16 مارس 2023",
    image:
      "https://labayh.net/wp-content/uploads/2023/03/%D8%AD%D9%85%D9%84%D8%A9-%D9%86%D8%B4%D8%B1%D8%A9-%D8%A8%D8%B1%D9%8A%D8%AF%D9%8A%D8%A9-6-500x322.png",
    text: `  تهدف مجموعات دعم الاكتئاب والقلق إلى توفير مساحة آمنة وخالية من النقد والتقييم السلبي، يجتمع فيها الأشخاص الذين يعانون من الاكتئاب
      والقلق، ويشاركون فيها تجاربهم ومشاعرهم مع بعضهم البعض، ويقدمون
      فيها أيضًا الدعم العاطفي والتشجيع، تختص هذه المجموعات بالأشخاص
      الذين يتلقون العلاج النفسي، ولا تعد بديلًا عنه. يمكنك التواصل مع
      معالجك النفسي عبر تطبيق لبيه ليضمك لإحدى مجموعات دعم الاكتئاب
      والقلق للاستفادة من كل الميزات والفوائد التي تحققها هذه المجموعات.`,
  },
];
export const notifySucess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyInfo = (message) => {
  toast.info(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
