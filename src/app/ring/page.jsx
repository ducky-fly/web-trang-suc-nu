"use client";
import React from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import ringData from "./components/data";

const Page = () => {
  const [data, setData] = React.useState(ringData);
  const [favorites, setFavorites] = React.useState([]);

  // Filter & sort state
  const [priceRange, setPriceRange] = React.useState(""); // "2"|"2"|"3"|"4"
  const [color, setColor] = React.useState(""); // "5"|"6"|"7"
  const [sortBy, setSortBy] = React.useState(""); // """", "priceAsc","priceDesc","nameAsc"

  const parsePrice = (item) => Number(String(item).replace(/\./g, "").trim()) || 0;

  // danh sách được lọc + sắp xếp
  const displayedData = React.useMemo(() => {
    let list = [...data];

    // phạm vi lọc theo giá
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

    // lọc theo màu
    if (color) {
      let colorName = color;
      if (color === "5") colorName = "Vang";
      else if (color === "6") colorName = "Vang hong";
      else if (color === "7") colorName = "Trang";
      list = list.filter(
        (item) => String(item.color).toLowerCase() === String(colorName).toLowerCase()
      );
    }

    // sắp xêp
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

  // Handlers passed to child components
  const handlePriceChange = (value) => setPriceRange(value);
  const handleColorChange = (value) => setColor(value);
  const handleSortChange = (value) => setSortBy(value);

  return (
    <div className=" flex flex-col items-center gap-[30px]">
      <div className=" w-[90%]">
        <p className=" text-[32px] text-[#9B8D6F] text-left">Nhẫn</p>
      </div>
      <div className="w-[90%] flex flex-row gap-[50px]">
        {/* Filters */}
        <Filters
          priceRange={priceRange}
          color={color}
          sortBy={sortBy}
          onPriceRangeChange={handlePriceChange}
          onColorChange={handleColorChange}
          onSortChange={handleSortChange}
        />

        {/* ProductGrid */}
        <ProductGrid
          products={displayedData}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default Page;

