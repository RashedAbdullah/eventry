import PaymentDetails from "@/components/payment";

const Payment = ({ params: { id } }) => {
  return <PaymentDetails id={id} />;
};

export default Payment;
