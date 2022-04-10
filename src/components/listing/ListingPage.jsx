import React from "react";
import TrendingCard from "../product-card/TrendingCard/TrendingCard";
import ProductCardVertical from "../product-card/VerticalCard/ProductCardVertical";

import "./ListingPage.css";

const ListingPage = ({ item }) => {
  return (
    <main class="products-content">
      <p class="text-regular-weight text-left">Products</p>
      <p>(Showing all products)</p>
      <TrendingCard
        item={{
          productName: "Blue T-Shirt",
          productShortDescription: "Lorem Ipsum has been the dummy text",
          productLongDescription:
            "Lorem Ipsum has been the dummy text Lorem Ipsum has been the dummy text",
          trendingText: "Trend",
          categoryName: "men",
          soldBy: "Amazon",
          rating: 4.4,
          salePrice: 899,
          originalPrice: 999,
          discountPercent: 10,
          closeActive: false,
          wishlisted: true,
          imagePath: "/assets/product.jpg",
        }}
      />

      <div className="products">
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: true,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: true,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: true,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: false,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: true,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: false,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: true,
            imagePath: "/assets/product.jpg",
          }}
        />
        <ProductCardVertical
          item={{
            productName: "Blue T-Shirt",
            productShortDescription: "Lorem Ipsum has been the dummy text",
            productLongDescription: "",
            trendingText: "New",
            categoryName: "men",
            soldBy: "Amazon",
            rating: 4.4,
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false,
            wishlisted: false,
            imagePath: "/assets/product.jpg",
          }}
        />
      </div>
    </main>
  );
};

export default ListingPage;
