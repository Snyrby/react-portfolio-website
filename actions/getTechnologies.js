const URL = `${process.env.NEXT_PUBLIC_API_URL}/tags`;

const getTechnologies = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getTechnologies;