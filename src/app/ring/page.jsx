"use client";
import React from "react";
import HeartIcon from "./../../assets/icons/heart_icon";
// import hinh1 from "../../assets/images/nhan-cuoi-a111-gold-thumb-300x300 1.png";
// import hinh2 from "../../assets/images/nhan-cuoi-f325-gold-thumb-300x300 1.png";
// import hinh3 from "../../assets/images/nhan-cuoi-h118-gold-thumb-300x300 1.png";
// import hinh4 from "../../assets/images/nhan-cuoi-s215-gold-thumb 1.png";
// import hinh5 from "../../assets/images/nhan-cuoi-s233-gold-thumb-300x300 1.png";

const Page = () => {
  const [data, setData] = React.useState([
    {
      product_id: "13791d8b-6e84-4a93-9124-fe8ed4f2e1a2",
      name: "nhan vang",
      material: "vang",
      description: "lam bang vang nguyen chat",
      color: "Vang",
      category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
      price: "30.000.000",
      discount_price: "100000.00",
      stock_quantity: 12,
      status: "active",
      created_at: "2025-10-15 15:45:34",
      updated_at: "2025-10-15 15:45:34",
      Category: {
        category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
        name: "nhan",
      },
      ProductImages: [
        {
          image_id: "c5973566-1e1e-4f67-a8d0-1c8eff278de0",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517939/doana/product_images/qeue9damrsvzi2datmhl.webp",
          is_main: false,
        },
        {
          image_id: "9895a2fd-8ca3-4628-8b97-c2f42621e684",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517938/doana/product_images/xeqshuhowzr3a5oy5f77.webp",
          is_main: false,
        },
        {
          image_id: "64aa2342-fadd-460c-91d2-8b5241a722e7",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517937/doana/product_images/sjaoghuerrdlozvuxaae.webp",
          is_main: false,
        },
        {
          image_id: "0ecb8cda-fca3-41c8-a252-e5a2bbdbbb90",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517940/doana/product_images/etemmmjrkivoktddpfbf.webp",
          is_main: true,
        },
      ],
    },
    {
      product_id: "13791d8b-6e84-4a93-9124-fe8xd4f2e1a2",
      name: "nhan bac",
      material: "bac",
      description: "lam bang bac",
      color: "Vang hong",
      category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
      price: "10.000.000",
      discount_price: "100000.00",
      stock_quantity: 12,
      status: "active",
      created_at: "2025-10-15 15:45:34",
      updated_at: "2025-10-15 15:45:34",
      Category: {
        category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
        name: "nhan",
      },
      ProductImages: [
        {
          image_id: "c5973566-1e1e-4f67-a8d0-1c8eff278de0",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517939/doana/product_images/qeue9damrsvzi2datmhl.webp",
          is_main: false,
        },
        {
          image_id: "9895a2fd-8ca3-4628-8b97-c2f42621e684",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517938/doana/product_images/xeqshuhowzr3a5oy5f77.webp",
          is_main: true,
        },
        {
          image_id: "64aa2342-fadd-460c-91d2-8b5241a722e7",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517937/doana/product_images/sjaoghuerrdlozvuxaae.webp",
          is_main: false,
        },
        {
          image_id: "0ecb8cda-fca3-41c8-a252-e5a2bbdbbb90",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517940/doana/product_images/etemmmjrkivoktddpfbf.webp",
          is_main: false,
        },
      ],
    },
    {
      product_id: "13791d8b-6e84-4a93-2324-fe8ed4f2e1a2",
      name: "nhan kim cuong",
      material: "kim cuong",
      description: "lam bang kim cuong nguyen chat",
      color: "Trang",
      category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
      price: "50.000.000",
      discount_price: "100000.00",
      stock_quantity: 12,
      status: "active",
      created_at: "2025-10-15 15:45:34",
      updated_at: "2025-10-15 15:45:34",
      Category: {
        category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
        name: "nhan",
      },
      ProductImages: [
        {
          image_id: "c5973566-1e1e-4f67-a8d0-1c8eff278de0",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517939/doana/product_images/qeue9damrsvzi2datmhl.webp",
          is_main: true,
        },
        {
          image_id: "9895a2fd-8ca3-4628-8b97-c2f42621e684",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517938/doana/product_images/xeqshuhowzr3a5oy5f77.webp",
          is_main: false,
        },
        {
          image_id: "64aa2342-fadd-460c-91d2-8b5241a722e7",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517937/doana/product_images/sjaoghuerrdlozvuxaae.webp",
          is_main: false,
        },
        {
          image_id: "0ecb8cda-fca3-41c8-a252-e5a2bbdbbb90",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517940/doana/product_images/etemmmjrkivoktddpfbf.webp",
          is_main: false,
        },
      ],
    },
    {
      product_id: "13791d8b-6e84-4a13-9124-fe8ed4f2e1a2",
      name: "nhan dong",
      material: "dong",
      description: "lam bang kim cuong nguyen chat",
      color: "Vang",
      category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
      price: "20.000.000",
      discount_price: "100000.00",
      stock_quantity: 12,
      status: "active",
      created_at: "2025-10-15 15:45:34",
      updated_at: "2025-10-15 15:45:34",
      Category: {
        category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
        name: "nhan",
      },
      ProductImages: [
        {
          image_id: "c5973566-1e1e-4f67-a8d0-1c8eff278de0",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517939/doana/product_images/qeue9damrsvzi2datmhl.webp",
          is_main: false,
        },
        {
          image_id: "9895a2fd-8ca3-4628-8b97-c2f42621e684",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517938/doana/product_images/xeqshuhowzr3a5oy5f77.webp",
          is_main: false,
        },
        {
          image_id: "64aa2342-fadd-460c-91d2-8b5241a722e7",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517937/doana/product_images/sjaoghuerrdlozvuxaae.webp",
          is_main: true,
        },
        {
          image_id: "0ecb8cda-fca3-41c8-a252-e5a2bbdbbb90",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517940/doana/product_images/etemmmjrkivoktddpfbf.webp",
          is_main: false,
        },
      ],
    },
    {
      product_id: "13792f8b-6e84-4a93-9124-fe8ed4f2e1a2",
      name: "nhan bach kim",
      material: "bach kim",
      description: "lam bang bach kim nguyen chat",
      color: "Vang hong",
      category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
      price: "40.000.000",
      discount_price: "100000.00",
      stock_quantity: 12,
      status: "active",
      created_at: "2025-10-15 15:45:34",
      updated_at: "2025-10-15 15:45:34",
      Category: {
        category_id: "dbca287b-c6f7-4790-b2e9-927ff662020e",
        name: "nhan",
      },
      ProductImages: [
        {
          image_id: "c5973566-1e1e-4f67-a8d0-1c8eff278de0",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517939/doana/product_images/qeue9damrsvzi2datmhl.webp",
          is_main: false,
        },
        {
          image_id: "9895a2fd-8ca3-4628-8b97-c2f42621e684",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517938/doana/product_images/xeqshuhowzr3a5oy5f77.webp",
          is_main: false,
        },
        {
          image_id: "64aa2342-fadd-460c-91d2-8b5241a722e7",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517937/doana/product_images/sjaoghuerrdlozvuxaae.webp",
          is_main: false,
        },
        {
          image_id: "0ecb8cda-fca3-41c8-a252-e5a2bbdbbb90",
          image_url:
            "https://res.cloudinary.com/dihqq66r4/image/upload/v1760517940/doana/product_images/etemmmjrkivoktddpfbf.webp",
          is_main: true,
        },
      ],
    },
  ]);

  const [favorites, setFavorites] = React.useState([]);

  // Filter & sort state
  const [priceRange, setPriceRange] = React.useState(""); // '1'|'2'|'3'|'4'
  const [color, setColor] = React.useState(""); // '5'|'6'|'7'
  const [sortBy, setSortBy] = React.useState(""); // '', 'priceAsc','priceDesc','nameAsc'

  const parsePrice = (item) => Number(String(item).replace(/\./g, "").trim()) || 0;

  // Compute filtered + sorted list
  const displayedData = React.useMemo(() => {
    let list = [...data];

    // Price range filter
    if (priceRange) {
      let min = 0, max = Infinity;
          
      if (priceRange.includes("-")) {
        const [minStr, maxStr] = priceRange.split("-");
        min = Number(minStr);
        max = Number(maxStr);
      } else {
        if (priceRange === "1") {
          min = 10;
          max = 20;
        } else if (priceRange === "2") {
          min = 20;
          max = 30;
        } else if (priceRange === "3") {
          min = 30;
          max = 40;
        } else if (priceRange === "4") {
          min = 40;
          max = 100;
        }
      }
      list = list.filter((item) => {
        const price = parsePrice(item.price);
        return price >= min * 1_000_000 && price <= max * 1_000_000;
      });
    }

    // Color filter
    if (color) {
      let colorName = color;
      if (color === "5") colorName = "Vang";
      else if (color === "6") colorName = "Vang hong";
      else if (color === "7") colorName = "Trang";
      list = list.filter(
        (item) => String(item.color).toLowerCase() === String(colorName).toLowerCase()
      );
    }

    // Sorting
    if (sortBy === "priceAsc") {
      list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "priceDesc") {
      list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "nameAsc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [data, priceRange, color, sortBy]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // const soluongnhan = () => {
  //   let count = 0;
  //   for (let index = 0; index < data.length; index++) {
  //     const element = data[index];
  //     if (element.Category.name === "nhan") {
  //       count += 1;
  //     }
  //   }
  //   return count;
  // };

  const soluongnhan = () => {
    // Đếm số sản phẩm đang hiển thị sau khi áp dụng bộ lọc
    return displayedData.length;
  };

  const downToUpClick = () => {
    setSortBy("priceAsc");
  };
  const upToDownClick = () => {
    setSortBy("priceDesc");
  };
  const aToZClick = () => {
    setSortBy("nameAsc");
  };

  return (
    <div className=" flex flex-col items-center gap-[30px]">
      <div className=" w-[90%]">
        <p className=" text-[32px] text-[#9B8D6F] text-left">Nhẫn</p>
      </div>
      <div className="w-[90%] flex flex-row gap-[50px]">
        {/* bo loc */}
        <div className=" flex flex-col gap-[11px]">
          <p className="text-[24px]">Bộ lọc</p>
          <div
            className="flex flex-col gap-2 ml-[20px] text-[15px]"
            style={{ accentColor: "black" }}
          >
            {/* loc theo gia tien */}
            <p className="text-[20px]">Theo giá</p>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceGroup"
                value="1"
                checked={priceRange === "1"}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2 cursor-pointer"
              />
              <p>Từ 10 triệu đến  20 triệu</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceGroup"
                value="2"
                checked={priceRange === "2"}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2 cursor-pointer"
              />
              <p>Từ 20 triệu đến  30 triệu</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceGroup"
                value="3"
                checked={priceRange === "3"}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2 cursor-pointer"
              />
              <p>Từ 30 triệu đến  40 triệu</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceGroup"
                value="4"
                checked={priceRange === "4"}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2 cursor-pointer"
              />
              <p>Từ 40 triệu đến  100 triệu</p>
            </label>
            {/* loc theo mau sac */}
            <p className="text-[20px]">Màu sắc</p>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="colorGroup"
                value="5"
                checked={color === "5"}
                onChange={(e) => setColor(e.target.value)}
                className="mr-2 appearance-none w-[13] h-[13] border-2 border-[#F1DC87] rounded-full checked:bg-[#F1DC87] cursor-pointer"
              />
              <p>Vàng</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="colorGroup"
                value="6"
                checked={color === "6"}
                onChange={(e) => setColor(e.target.value)}
                className="mr-2 appearance-none w-[13] h-[13] border-2 border-[#F2BAA8] rounded-full checked:bg-[#F2BAA8] cursor-pointer"
              />
              <p>Vàng hồng</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="colorGroup"
                value="7"
                checked={color === "7"}
                onChange={(e) => setColor(e.target.value)}
                className="mr-2 appearance-none w-[13] h-[13] border-2 border-[#D6D6D6] rounded-full checked:bg-[#D6D6D6] cursor-pointer"
              />
              <p>Trắng</p>
            </label>
            {/* loc theo chat lieu */}
            <p className="text-[20px]">Chất liệu</p>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="materialGroup"
                value="8"
                className="mr-2 cursor-pointer"
              />
              <p>14K</p>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="materialGroup"
                value="9"
                className="mr-2 cursor-pointer"
              />
              <p>18k</p>
            </label>
          </div>

          <p className="text-[24px]">Sắp xếp</p>
          <div className="flex flex-col gap-2" style={{ accentColor: "black" }}>
            <label
              className="flex items-center cursor-pointer"
              onClick={downToUpClick}
            >
              <input
                type="radio"
                name="sortGroup"
                value="1"
                checked={sortBy === "priceAsc"}
                onChange={() => setSortBy("priceAsc")}
                className="mr-2 cursor-pointer"
              />

              <p>Giá từ thấp đến cao</p>
            </label>

            <label
              className="flex items-center cursor-pointer"
              onClick={upToDownClick}
            >
              <input
                type="radio"
                name="sortGroup"
                value="2"
                checked={sortBy === "priceDesc"}
                onChange={() => setSortBy("priceDesc")}
                className="mr-2 cursor-pointer"
              />

              <p>Giá từ cao đến thấp</p>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sortGroup"
                value="3"
                checked={sortBy === "bestSeller"}
                onChange={() => setSortBy("bestSeller")}
                className="mr-2 cursor-pointer"
              />
              <p>Bán chạy</p>
            </label>

            <label
              className="flex items-center cursor-pointer"
              onClick={aToZClick}
            >
              <input
                type="radio"
                name="sortGroup"
                value="4"
                checked={sortBy === "nameAsc"}
                onChange={() => setSortBy("nameAsc")}
                className="mr-2 cursor-pointer"
              />
              <p>A-Z</p>
            </label>
          </div>
        </div>
        {/* hien san pham */}
        <div className="flex flex-col mb-[50px] gap-[25px]">
          <p>Hiện có {soluongnhan()} sản phẩm</p>
          <div className="grid grid-cols-4 gap-[30px]">
            {displayedData.map((item, index) => (
              <div
                key={index}
                className="w-[250px] h-[350px] flex flex-col justify-around border border-[#D6D6D6] hover:shadow-xl transition-shadow duration-300 rounded-md cursor-pointer relative"
              >
                {item.ProductImages.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.is_main === true && (
                        <img src={item.image_url}></img>
                      )}
                    </div>
                  );
                })}
                <div className="text-[20px] font-medium ml-[15px]">
                  {item.name}
                </div>
                <div className="text-[16px] text-[#C0C0C0] mt-[20px] mb-[10px] ml-[15px]">
                  {item.price}
                </div>
                <div className=" absolute top-[10px] right-[10px]">
                  <HeartIcon
                    isFavorite={favorites.includes(item.product_id)}
                    onClick={() => toggleFavorite(item.product_id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
