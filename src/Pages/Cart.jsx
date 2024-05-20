import PropType from "prop-types";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const CartComponent = (props) => {
  return (
    <>
      <div>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <p>Quantity: {props.quantity}</p>
        <button onClick={props.onRemove}>Remove</button>
        <hr className="bg-black w-96 h-0.5" />
      </div>
    </>
  );
};
CartComponent.propTypes = {
  name: PropType.string,
  price: PropType.number,
  quantity: PropType.number,
  onRemove: PropType.func.isRequired,
};

const CheckoutModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
          aria-hidden="true"
        ></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

CheckoutModal.propTypes = {
  isOpen: PropType.string,
  closeModal: PropType.string,
};
const Cart = () => {
  const [items, setItems] = useState([
    { id: 3, name: "Item 1", price: 20, quantity: 2 },
    { id: 1, name: "Item 1", price: 20, quantity: 2 },
    { id: 2, name: "Item 1", price: 20, quantity: 2 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
    setItems([]); // Clear items on checkout
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Calculate total price and total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="grid grid-cols-2 custom-height place-items-center">
        <div>
          <h1 className="text-4xl">Your Items:</h1>
          {items.map((item) => (
            <CartComponent
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveItem(item.id)}
            />
          ))}
        </div>
        <div>
          <h2>Summary</h2>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <CheckoutModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export { Cart };
