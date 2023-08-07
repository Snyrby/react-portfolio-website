const URL = `${process.env.NEXT_PUBLIC_API_URL}/about`;

const getAbout = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getAbout;