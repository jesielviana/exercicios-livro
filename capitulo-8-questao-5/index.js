import { adiciona, remove, altera, exibe } from './usuarios'


while (true) {
    console.log(`Digite uma opção: 
        1 - Adicionar
        2 - Remover
        3 - Alterar 
        4 - Listar
        0 - Sair `)

    const opcao = prompt(": ")

    if (opcao === '0') break

    switch (opcao) {
        case '1':
            await addUsuario()
            break
        case '2':
            await removeUsuario()
            break
        case '3':
            await alteraUsuario()
            break
        case '4':
            await exibe()
            break
        default:
            console.log('Invalido')

    }
}

async function addUsuario() {
    const nome = prompt('Nome: ')
    const email = prompt('Email: ')
    const senha = prompt('Senha: ')

    const usuario = {
        nome, email, senha
    }

    await adiciona(usuario)
}

async function removeUsuario() {
    const nome = prompt('Nome: ')

    const usuario = {
        nome
    }

    await remove(usuario)
}

async function alteraUsuario() {
    const nome = prompt('Nome atual: ')
    const email = prompt('Novo email: ')
    const senha = prompt('Nova senha: ')

    const usuario = {
        nome, email, senha
    }

    await altera(usuario)
}