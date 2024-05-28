export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  return (
    <div className="ThankYou">
      <h1>Thank You!</h1>
      <p>Your order has been received.</p>
    </div>
  )
}