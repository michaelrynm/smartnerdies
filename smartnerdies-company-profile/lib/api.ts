export const fetchData = async (url: string) => {
  try {
    const response = await fetch("https://ambitious-desk-9046e01712.strapiapp.com/api" + url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
