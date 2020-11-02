const nodemailer = require("nodemailer");

const user = "orcvillatransp@hotmail.com"
const pass = "orcsitecarreto3"

const transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 25,
    auth: { user, pass }
})

class SendMail {

    static async Send(cliente) {

        await transporter.sendMail({
            from: user,
            to: "villa.transportes@hotmail.com",
            subject: "***Novo orçamento!***",
            text: "Nome: " + cliente.name + " " + " " + "\n\r" +
                "Telefone: " + cliente.tel + " " + " " + "\n\r" +
                "Email: " + cliente.email + " " + " " + "\n\r" +
                " " + "\n\r" +
                "Endereco: " + cliente.address + " " + " " + "\n\r" +
                "Numero/Complemento: " + cliente.address2 + " " + " " + "\n\r" +
                "CEP: " + cliente.address3 + " " + " " + "\n\r" +
                "Estado: " + cliente.state + " " + " " + "\n\r" +
                "Cidade: " + cliente.city + " " + " " + "\n\r" +
                "Origem: " + cliente.subject + " " + " " + "\n\r" +
                "Qual andar?: " + cliente.floor + " " + " " + "\n\r" +
                " " + "\n\r" +
                "Endereco destino: " + cliente.addressdest + " " + " " + "\n\r" +
                "Numero/Complemento destino: " + cliente.address2dest + " " + " " + "\n\r" +
                "CEP destino: " + cliente.address3dest + " " + " " + "\n\r" +
                "Estado destino: " + cliente.statedest + " " + " " + "\n\r" +
                "Cidade destino: " + cliente.citydest + " " + " " + "\n\r" +
                "Destino: " + cliente.subject2 + " " + " " + "\n\r" +
                "Qual andar? destino: " + cliente.floordest + " " + " " + "\n\r" +
                "Relação de itens: " + "\n\r" + cliente.bio + " " + " " + "\n\r" +
                " " + "\n\r" +
                "Precisa de ajudantes?: " + cliente.ajudantes + " " + " " + "\n\r" +
                "Quantos ajudantes?: " + cliente.qtdeajudantes + " " + " " + "\n\r" +
                "Precisa de embalagem?: " + cliente.packing + " " + " " + "\n\r" +
                "Quantos lances de escadas? (origem e destino): " + cliente.escadas + " ",
        })

    }

}

module.exports = SendMail;