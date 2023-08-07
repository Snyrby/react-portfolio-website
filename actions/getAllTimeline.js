const URL = `${process.env.NEXT_PUBLIC_API_URL}/timelines`;

const getTimeline = async () => {
  const res = await fetch(URL);
  return res.json();
};

export default getTimeline;
