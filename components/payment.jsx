import PaymentForm from "./payment-form";

const PaymentDetails = () => {
  return (
    <div>
      <main>
        <section className="container">
          <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
            <h2 className="font-bold text-xl mb-8">Payment Details</h2>

            <PaymentForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentDetails;
