
const FILE_NAME = "usuarios.json";

async function getUsuarios() {
    const file = Bun.file(FILE_NAME);
    const dados = await file.text();
    const usuarios = JSON.parse(dados);
    return usuarios;
}

export async function adiciona(usuario){
    const usuarios = await getUsuarios() 
    usuarios.push(usuario)
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function remove(usuario){
    const usuarios = await getUsuarios();
   const index =  usuarios.findIndex((u) => u.nome === usuario.nome)
   usuarios.splice(index, 1)
   await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function altera(usuario){
    const usuarios = await getUsuarios() 
    usuarios.forEach((u) => {
        if(u.nome === usuario.nome){
            u = usuario
        }
    })
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function exibe(){
    const file = Bun.file(FILE_NAME); 
    const dados = await file.text();
    console.log(dados)
}