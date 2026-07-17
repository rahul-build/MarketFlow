import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold">Product #{id}</h1>

      <p className="mt-4 text-gray-600">Product details page.</p>
    </div>
  );
}

export default ProductDetails;
