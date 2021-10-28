require('dotenv').config();
const path = require("path");
const express = require("express");
const { info } = require("console");

const app = express();
const port = process.env.PORT || 3000; 
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));


const Campeao = require("./models/campeao");
let msg = "";



app.set("view engine", "ejs");

app.get("/", (req, res) => {  
  res.render("index");
});

app.get("/cadastro", (req, res) => {  
  res.render("cadastro")
});

app.get("/editar/:id", async (req, res) => {  
  const campeao = await Campeao.findByPk(req.params.id);

  setTimeout(() => {
    msg = ""
  }, 1000)
  if (!campeao) {
    res.render("listac", { msg: "Campeão não encontrado!", campeoes: await Campeao.findAll() })
    
    
  }
  
  res.render("editar", { campeao })
  
})

app.post("/editar/:id", async (req, res) => {
  const campeao = await Campeao.findByPk(req.params.id);

  const { nome, idade, genero, dano, arma, imagem} = req.body;

  setTimeout(() => {
    msg = ""
  }, 1000)
  if (!nome) {
    res.redirect("/lista-campeoes", {
      msg: "Nome é obrigatório",
    })
}
  if (!idade) {
  res.redirect("/lista-campeoes", {
    msg: "Idade é obrigatória",
  })
}
  if (!genero) {
  res.redirect("/lista-campeoes", {
    msg: "Gênero é obrigatório",
  })
}
  if (!dano) {
  res.redirect("/lista-campeoes", {
    msg: "Dano é obrigatório",
  })
}
  if (!arma) {
  res.redirect("/lista-campeoes", {
    msg: "Arma é obrigatória",
  })
}
  if (!imagem) {
  res.redirect("/lista-campeoes", {
    msg: "Imagem é obrigatória",
  })
}
  campeao.nome = nome;
  campeao.idade = idade;
  campeao.genero = genero;
  campeao.dano = dano;
  campeao.arma = arma;
  campeao.imagem = imagem;



  const campeaoEditado = await campeao.save();

  setTimeout(() => {
    msg = ""
  }, 1000)
  res.render("detalhes", { 
    msg: "Campeão editado com sucesso!", 
    campeao: campeaoEditado,
  });
   

  
})



app.get("/detalhes/:id", async (req, res) => { 
  const campeao = await Campeao.findByPk(req.params.id);
  setTimeout(() => {
    msg = ""
  }, 1000)
  if (!campeao) {
    res.render("listac", { msg: "Campeão não encontrado!", campeoes: await Campeao.findAll() })
  }
  res.render("detalhes", {
    campeao,
  });
});

app.get("/lista-campeoes", async (req, res) => {
  const campeoes = await Campeao.findAll();
  res.render("listac", {
    campeoes,
    msg,
  });
});


app.post("/lista-campeoes", async (req, res) => {
  const { nome, idade, genero, dano, arma, imagem} = req.body;
  
  if (!nome) {
      res.redirect("/lista-campeoes", {
        msg: "Nome é obrigatório",
      })
  }
  if (!idade) {
    res.redirect("/lista-campeoes", {
      msg: "Idade é obrigatória",
    })
}
  if (!genero) {
    res.redirect("/lista-campeoes", {
      msg: "Gênero é obrigatório",
    })
}
  if (!dano) {
    res.redirect("/lista-campeoes", {
      msg: "Dano é obrigatório",
    })
}
  if (!arma) {
    res.redirect("/lista-campeoes", {
      msg: "Arma é obrigatória",
    })
}
  if (!imagem) {
    res.redirect("/lista-campeoes", {
      msg: "Imagem é obrigatória",
    })
}
  let campeaoEditado = await Campeao.create({
    nome, idade, genero, dano, arma, imagem,
  })
  msg = `${nome}, foi adicionado a lista de campeões.`;
  setTimeout(() => {
    msg = ""
  }, 1000)

  res.render("listac", { msg: msg, campeoes: await Campeao.findAll() });
   
});

app.post("/deletar/:id", async (req, res) => {
  const campeao = await Campeao.findByPk(req.params.id)

  setTimeout(() => {
    msg = ""
  }, 1000)
  if (!campeao) {
    res.redirect("/lista-campeoes", { msg: "Campeão não encontrado!", })
    }
  
    await campeao.destroy();

    res.render("listac", { msg: `Campeão ${campeao.nome} deletado com sucesso!`, campeoes: await Campeao.findAll() })
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));


