import Icon from "./ui/Icon.tsx";

export const footer = [
  {
    "name": "Sobre",
    "items": [
      {"text": "Smartphones", "link": "#"},
      {"text": "Tablets", "link": "#"},
      {"text": "Informática", "link": "#"},
      {"text": "Aúdio", "link": "#"},
      {"text": "Watches", "link": "#"},
      {"text": "Smart Switch", "link": "#"},
      {"text": "Acessórios", "link": "#"},
      {"text": "TVs", "link": "#"},
      {"text": "Lifestyle TVs", "link": "#"},
      {"text": "Som", "link": "#"},
      {"text": "Geladeiras", "link": "#"},
      {"text": "Lavanderia", "link": "#"},
      {"text": "Ar-Condicionado", "link": "#"},
      {"text": "Monitores", "link": "#"},
      {"text": "Aspiradores", "link": "#"},
      
    ]
  },
  {
    "name": "Loja Online",
    "items": [
      {"text": "Promoções", "link": "#"},
      {"text": "Smartphones", "link": "#"},
      {"text": "Tablets ", "link": "#"},
      {"text": "Televisores ", "link": "#"},
      {"text": "Eletrodomésticos ", "link": "#"},
      {"text": "Ajuda para Comprar ", "link": "#"},
      {"text": "Perguntas Frequentes", "link": "#"},
      {"text": "Samsung Rewards ", "link": "#"},
      {"text": "Consulte o status do seu pedido ", "link": "#"},
      {"text": "Política de devolução", "link": ""},
      {"text": "Privacidade Loja Online", "link": ""},
      {"text": "Samsung para Estudantes ", "link": ""},
      {"text": "Samsung para Empresas  ", "link": ""},
      {"text": "Explore ", "link": ""},
      {"text": "Avalie a experiência de compra  ", "link": ""},
    ]
  },
  {
    "name": "Suporte",
    "items": [
      {"text": "Suporte de Produtos", "link": ""},
      {"text": "Agendar Reparo", "link": ""},
      {"text": "Acompanhar Reparo", "link": ""},
      {"text": "Telefones", "link": ""},
      {"text": "Contatos Online", "link": ""},
      {"text": "Centro de Serviços", "link": ""},
      {"text": "Informações de Garantia", "link": ""},
      {"text": "Comunidade", "link": ""},
      {"text": "E-mail para o CEO", "link": ""},

    ]
  },
  {
    "name": "Quem Somos",
    "items": [
      {"text": "Informações da empresa", "link": ""},
      {"text": "Área de negócios", "link": ""},
      {"text": "Identidade da marca", "link": ""},
      {"text": "Carreiras", "link": ""},
      {"text": "Relações com investidores ", "link": ""},
      {"text": "Notícias ", "link": ""},
      {"text": "Ética", "link": ""},
      {"text": "Design Samsung ", "link": ""},
    ]
  },
  {
    "name": "Sustentabilidade",
    "items": [
      {"text": "Visão geral", "link": ""},
      {"text": "Meio ambiente", "link": ""},
      {"text": "Cidadania corporativa", "link": ""},
      {"text": "Responsabilidade digital", "link": ""},
      {"text": "Segurança e Privacidade", "link": ""},
      {"text": "Acessibilidade", "link": ""},
      {"text": "Trabalho e direitos humanos", "link": ""},
      {"text": "Diversidade e inclusão", "link": ""},
      {"text": "Cadeia de suprimentos sustentável", "link": ""},
    ]
  }
]

function FooterAccordion(){
  console.log(footer)
  return(
    <div class="w-full py-3 flex justify-between">
      {footer.map(obj => {
        return(
          <div>
            <h3 class="font-bold text-[18px]">{obj.name}</h3>
            <ul>
              {
                obj.items.map(item => {
                  return(
                    <li><a href={item.link}>{item.text}</a></li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
      }
    </div>
  )
}

export default FooterAccordion;
