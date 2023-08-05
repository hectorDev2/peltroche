export const getDiscountedPricePercentage = (
  originalPrice: number,
  discountedPrice: number
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

export const formatDataApi = (data: any[]) => {
  const dataFormatted = data.map((item) => {
    return {
      id: item.id,
      ...item.attributes,
      cover: item.attributes.cover.data[0].attributes.url,
    };
  });

  return dataFormatted;
};
export const formatInfoApi = (data: any[]) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
};

export const formatDataWithImagesApi = (data: any) => {
  console.log(data);

  const dataFormatted = data.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes,
      images: item.attributes.images.data.map(
        (image: {
          attributes: {
            url: string;
          };
        }) => {
          return image.attributes.url;
        }
      ),
    };
  });

  return dataFormatted;
};
