const URL = `${process.env.NEXT_PUBLIC_API_URL}/headings`;

const getHeading = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getHeading;