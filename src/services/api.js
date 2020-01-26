const API_PATH = "http://localhost:4000/prices";

const getPlans = async () => {
  try {
    const jsonData = await fetch(API_PATH);
    const data = await jsonData.json();

    return data.shared ? data : [];
  } catch (error) {
    alert(error);
  }
};

export { getPlans };
