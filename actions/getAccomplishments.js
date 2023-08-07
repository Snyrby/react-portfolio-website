const URL = `${process.env.NEXT_PUBLIC_API_URL}/accomplishments`;

const getAccomplishments = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getAccomplishments;