import { db } from "../../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const collectionPizza = collection(db, "pizzas");

const getPizza = async () => {
  const docPizza = await getDocs(collectionPizza);
  const listPizza = docPizza.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return listPizza;
};

export default getPizza;
