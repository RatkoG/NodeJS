// This won't run on the server but in the client
const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;
  const productElement = btn.closest("article");

  fetch("/admin/product/" + productId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      // This will remove the product from the DOM
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
