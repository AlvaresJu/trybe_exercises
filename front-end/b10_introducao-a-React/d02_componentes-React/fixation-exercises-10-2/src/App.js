import Image from "./Image";
import OrderList from "./OrderList";

function App() {
  return (
    <>
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      <br></br>
      <OrderList />
    </>
  );
}

export default App;
