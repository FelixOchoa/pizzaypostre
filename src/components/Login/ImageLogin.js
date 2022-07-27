export const ImageLogin = () => {
  return (
    <div
      className="hidden bg-cover lg:block lg:w-2/3"
      style={{
        backgroundImage:
          "url(https://www.thegourmetjournal.com/wp-content/uploads/2020/09/Pizza.jpg)",
      }}
    >
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
        <div>
          <h2 className="text-4xl font-bold text-white">
            En Pizzas & Postres podrás:
          </h2>

          <p className="max-w-xl mt-3 text-gray-300">
            Consultar todos los restaurantes en dónde se vendan las mejores
            pizzas y postres, lo único que tenes que hacer es confiar en nuestra
            opinión.
          </p>
        </div>
      </div>
    </div>
  );
};
