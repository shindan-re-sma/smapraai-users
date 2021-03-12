const brandOptions = [
  {
    series: "iPhone",
    label: "選択してください",
    value: "",
    volume: [{ label: "選択してください", value: "" }],
  },
  {
    series: "Android",
    label: "選択してください",
    value: "",
    volume: [{ label: "選択してください", value: "" }],
  },
  {
    series: "Huawei",
    label: "選択してください",
    value: "",
    volume: [{ label: "選択してください", value: "" }],
  },
  {
    series: "iPhone",
    label: "iPhone 6S",
    value: "iphone6s",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "16GB",
        value: "16GB",
      },
      {
        label: "32GB",
        value: "32GB",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 6 Plus",
    value: "iphone6plus",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "16GB",
        value: "16GB",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 6s Plus",
    value: "iphone6splus",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "16GB",
        value: "16GB",
      },
      {
        label: "32GB",
        value: "32GB",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },

  {
    series: "iPhone",
    label: "iPhone SE",
    value: "iphonese",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "16GB",
        value: "16GB",
      },
      {
        label: "32GB",
        value: "32GB",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 7",
    value: "iphone7",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "32GB",
        value: "32GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 7 Plus",
    value: "iphone7plus",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "32GB",
        value: "32GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 8",
    value: "iphone8",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 8 Plus",
    value: "iphone8plus",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone X",
    value: "iphonex",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone XS",
    value: "iphonexs",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone XS Max",
    value: "iphonexsmax",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone XR",
    value: "iphonexr",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 11",
    value: "iphone11",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 11 Pro",
    value: "iphone11pro",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 11 Pro Max",
    value: "iphone11promax",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone SE (第2世代) ",
    value: "iphonese2",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 12 mini",
    value: "iphone12mini",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 12",
    value: "iphone12",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 12 Pro",
    value: "iphone12pro",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  {
    series: "iPhone",
    label: "iPhone 12 Pro Max",
    value: "iphone12promax",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "128GB",
        value: "128GB",
      },
      {
        label: "256GB",
        value: "256GB",
      },
      {
        label: "512GB",
        value: "512GB",
      },
    ],
  },
  //Android
  {
    series: "Android",
    label: "Galaxy A21",
    value: "galaxya21",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy A41",
    value: "galaxya41",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S20+ 5G",
    value: "galaxys20+5g",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S20 5G",
    value: "galaxys205g",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy Z Flip",
    value: "galaxyzflip",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy A7",
    value: "galaxya7",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy Note 10+",
    value: "galaxynote10+",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy A20",
    value: "galaxya20",
    volume: [
      {
        label: "32GB",
        value: "32GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S10",
    value: "galaxys10",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S10+",
    value: "galaxys10+",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy A30",
    value: "galaxya30",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy Note 9",
    value: "galaxynote9",
    volume: [
      {
        label: "128GB",
        value: "128GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy Feel2",
    value: "galaxyfeel2",
    volume: [
      {
        label: "32GB",
        value: "32GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S9",
    value: "galaxys9",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S9+",
    value: "galaxys9+",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S8",
    value: "galaxys8",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Android",
    label: "Galaxy S8+",
    value: "galaxys8+",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  //Huawei
  {
    series: "Huawei",
    label: "Huawei P30 Pro",
    value: "huaweip30pro",
    volume: [
      {
        label: "選択してください",
        value: "",
      },
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P30 lite Premium",
    value: "huaweip30litepremium",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P30 lite",
    value: "huaweip30lite",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P30",
    value: "huaweip30",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P20",
    value: "huaweip20",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P20 Pro",
    value: "huaweip20pro",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
  {
    series: "Huawei",
    label: "Huawei P20 lite",
    value: "huaweip20lite",
    volume: [
      {
        label: "64GB",
        value: "64GB",
      },
    ],
  },
];

export default brandOptions;
