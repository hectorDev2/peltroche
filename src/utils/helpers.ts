export const getDiscountedPricePercentage = (
  originalPrice: number,
  discountedPrice: number
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

export const formatAllProducts = (data: any[]) => {
  const dataFormatted = data.map((item) => {
    return {
      ...item,
      attributes: {
        ...item.attributes,
        images: item.attributes.images.data.map((image: any) => {
          return image.attributes.url;
        }),
      },
    };
  });

  return dataFormatted;
};

export const formatProduct = (data: {
  id: any;
  attributes: {
    images: any;
  };
}) => {
  const dataFormatted = {
    ...data,
    attributes: {
      ...data.attributes,
      images: data.attributes.images.data.map((image: any) => {
        return image.attributes.url;
      }),
    },
  };
  console.log(dataFormatted);

  return dataFormatted;
};
