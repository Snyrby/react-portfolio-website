const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;

const getProjects = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getProjects;