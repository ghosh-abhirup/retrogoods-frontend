import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="size-full p-4">
      <div className="my-5 relative flex items-center justify-end">
        <div className="size-[65%] rounded-xl overflow-hidden">
          <img src="https://theretrogoods.in/cdn/shop/files/lensball-blue-and-purple-lights.jpg?v=1677527678&width=1500" alt="image" className="" />
        </div>

        <div className="main_card">
          <p className="text-xl font-bold w-3/4 mx-auto text-center">Design your home with passion</p>
          <p className="italic">Bring your dreams to life</p>
          {/* <Button>Shop now</Button> */}
        </div>
      </div>
    </div>
  );
}
