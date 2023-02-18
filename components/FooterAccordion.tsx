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

export function FooterAccordion(){
  return(
    <div class={`w-full flex justify-between border-y-1 border-[#ccc]`}>
      {footer.map(obj => {
        return(
          <div class={`w-[${100 / footer.length}%] p-6 border-r-1 border-[#d9d9d9] last-of-type:border-r-0`}>
            <h3 class="font-bold text-[18px] mb-[16px]">{obj.name}</h3>
            <ul>
              {
                obj.items.map(item => {
                  return(
                    <li class="text-[14px] py-[7px]">
                      <a href={item.link}>{item.text}</a>
                    </li>
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

export function FooterAccordionMobile(){
  return(
    <div class={`w-full flex-col justify-between border-t-1 border-[#ccc] pt-2.5`}>
      {footer.map(obj => {
        return(
          <details class={`w-full px-6 py-3 border-r-1 border-[#d9d9d9] last-of-type:border-r-0`}>
            <summary class="block border-b-1 border-[#ccc]">
              <h3 class="font-bold text-[18px] mb-[16px]">{obj.name}</h3>
            </summary>
            <ul>
              {
                obj.items.map(item => {
                  return(
                    <li class="text-[14px] py-[7px]">
                      <a href={item.link}>{item.text}</a>
                    </li>
                  )
                })
              }
            </ul>
          </details>
        )
      })
      }
    </div>
  )
}
