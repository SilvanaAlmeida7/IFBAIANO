const form = document.getElementById("register")

form.addEventListener("submit", async function(e){
  try{
    e.preventDefault()
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const nome = document.getElementById("nome").value


    if(!email || !nome || !senha){
      alert("Preencha todos os dados")
    }

    const body = JSON.stringify({email, nome, senha})

    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      body,
      headers: {
        "Content-Type" : "application/json"
      }
    })

    const user = await response.json()

    console.log(user)
  }catch(err){
    alert("Falha ao registrar")
  }
})
