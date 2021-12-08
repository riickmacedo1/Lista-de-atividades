var atividades = [];
document.querySelector("input[type=submit]").addEventListener("click", () => {
  var atividadeDiaria = document.querySelector("input[name=atividade]");

  atividades.push({
    atividade: atividadeDiaria.value,
  });

  let atividadeLista = document.querySelector(".atividade-lista");
  atividadeLista.innerHTML = "";

  atividades.map((val) => {
    atividadeLista.innerHTML +=
      `

    <div class="atividade-lista-single">
        <h3>` +
      val.atividade +
      `</h3>
    </div>
    
    `;

    atividadeDiaria.value = "";

    document
      .querySelector("button[name=limpar]")
      .addEventListener("click", () => {
        atividades = [];
        document.querySelector(".atividade-lista").innerHTML = "";
      });
  });
});
