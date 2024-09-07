document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filtroBoton");
  const pools = document.querySelectorAll(".filtroPiscina");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.id;
      console.log(`Botón clickeado: ${filter}`);

      filterPools(filter);
    });
  });

  function filterPools(filter) {
    pools.forEach((pool) => {
      const poolFilter = pool.id;

      if (filter === "Todo" || filter === poolFilter) {
        pool.style.display = "block"; 
        console.log(`Piscina mostrada: ${pool.id}`);
      } else {
        pool.style.display = "none"; 
        console.log(`Piscina oculta: ${pool.id}`);
      }
    });
  }
});
