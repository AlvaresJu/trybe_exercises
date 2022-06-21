import Image from "./Image";
import OrderList from "./OrderList";
import UsersData from "./UsersData";

function App() {
  return (
    <>
      <h1>Fixation Exercise 1 - Props</h1>
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      <br></br>
      <OrderList />
      <br></br>
      <UsersData />
    </>
  );
}

export default App;
