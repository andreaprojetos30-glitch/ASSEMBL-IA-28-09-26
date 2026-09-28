/**
 * Fatos, números e fontes desta apresentação.
 * Narrativa fixa das telas fica no HTML.
 * Novas etapas acrescentam objetos aqui sem reescrever a navegação.
 *
 * Origem interna:
 * - vizinhos.xlsx (planilha da assembleia)
 * - Logo.docx
 * - foto no empreendimento1/2 - grupo bloco.jpeg
 */
window.PDS = {
  screens: [
    { id: "visao", label: "Visão" },
    { id: "entorno", label: "Entorno" },
    { id: "hidrico", label: "Água" },
    { id: "caminho", label: "Solução" }
  ],

  hidrico: {
    details: {
      problema: {
        title: "28/07 · Problema",
        lines: [
          "Queda de fase na rede elétrica externa.",
          "Travamento e queima total da bomba principal (Ebara).",
          "29/07 — Remoção. Parecer: queima por sobrecarga de tensão.",
          "30/07 — Medição interna: tensão acima do limite permitido."
        ],
        source: "Cronologia interna do caso Energisa."
      },
      acao: {
        title: "31/07 · Ação",
        lines: [
          "31/07 — Ressarcimento nº 224891128.",
          "31/07 — Medição de tensão nº 9810485715.",
          "05/08 — Chamado nº 225317206. OS nº 1016696210.",
          "Medidor contínuo. Sobretensão nos horários de pico solar.",
          "06/08 — Ofício na sede da Energisa. Protocolo nº 00641.000763/2026."
        ],
        source: "Cronologia interna do caso Energisa."
      },
      acompanhamento: {
        title: "25/08 · Acompanhamento",
        lines: [
          "19/08 — Reabertura do ressarcimento. Processo nº 202602409.",
          "20/08 — Carta de negativa do ressarcimento.",
          "Laudo: queima de duas centrais da cerca elétrica, pelo mesmo motivo.",
          "25/08 — Relatório da Energisa. Carta datada de 24/08/2026.",
          "UC 185848305389. Medição de 12/08 a 19/08, a cada 10 minutos.",
          "1.008 leituras. Ligação trifásica. Tensão nominal: 220 V.",
          "Faixa adequada no documento: 202 V a 231 V.",
          "Limites: DRP 3% e DRC 0,5%.",
          "Fase A — máx. 244,93 V · DRP 4,46% · DRC 12,1%.",
          "Fase B — máx. 245,61 V · DRP 6,15% · DRC 14,98%.",
          "Fase C — máx. 239,69 V · DRP 8,03% · DRC 9,32%.",
          "As três fases ficaram acima dos dois limites.",
          "Carta: necessidade de aprimoramento na rede.",
          "Compensação prevista até a tensão normalizar no ponto de entrega."
        ],
        source: "Carta de medição da Energisa, 24/08/2026, e cronologia interna."
      },
      situacao: {
        title: "19/09 · Situação",
        lines: [
          "03/09 — Ouvidoria Energisa nº 63760. Prazo de 10 dias úteis.",
          "14/09 — Ouvidoria da ARPB nº 00001.082095/2026-6906.",
          "18/09 — Resposta sem posição sobre o ressarcimento.",
          "Novo chamado nº 64365. Previsão de resolução até 28/09/2026.",
          "19/09 — Ouvidoria nº 64384.",
          "Pedido de acesso aos projetos de melhoria da rede e de contato da manutenção.",
          "19/09 — ANEEL nº 3070901062682.",
          "Prazos do PRODIST não se aplicam a este caso.",
          "Orientação da ANEEL: aguardar o prazo estipulado."
        ],
        source: "Cronologia interna do caso Energisa. Último registro: 19/09/2026."
      },
      outorga: {
        title: "Outorga nº 35845",
        lines: [
          "AESA. Renovação. Uso indicado no documento: abastecimento público.",
          "Processo nº 03934/2026. Expedida em 09/08/2026. Validade: 09/08/2027.",
          "Poço tubular. Vazão: 7,10 m³/h. Volume anual: 52.600 m³.",
          "54 habitações. Bomba submersa.",
          "Finalidade escrita: limpeza em geral, prevenção e combate a incêndios, jardinagem e outras finalidades.",
          "Se a água for usada como solução alternativa de abastecimento coletivo, a outorga prevê medidor por unidade.",
          "Em verificação: atendimento direto às residências."
        ],
        source: "Outorga AESA nº 35845, Condomínio Residencial Porta do Sol."
      },
      hidrometro: {
        title: "Hidrômetro",
        lines: [
          "Outorga AESA nº 35845, condicionante II.",
          "Quando a água for usada como solução alternativa de abastecimento coletivo, os usuários deverão instalar medidor para contabilizar o seu consumo.",
          "Finalidade no documento: contabilizar o consumo.",
          "Prazo escrito: até a próxima renovação da outorga.",
          "Referência: documento de 09/08/2026. Processo nº 03934/2026. Validade: 09/08/2027."
        ],
        source: "Outorga AESA nº 35845, condicionante II."
      },
      juridico: {
        title: "Análise jurídica",
        lines: [
          "Histórico e documentos do caso Energisa em análise jurídica.",
          "Status: em análise.",
          "Sem conclusão sobre responsabilidade."
        ],
        source: "Encaminhamento da administração. Esta tela não traz parecer jurídico."
      },
      gerador: {
        title: "Gerador",
        lines: [
          "Proposta para manter sistemas essenciais quando a energia é interrompida.",
          "Não está apresentado como correção de oscilação ou de defeito da rede."
        ],
        source: "Proposta da administração para a assembleia."
      }
    }
  },

  place: {
    name: "Condomínio Residencial Porta do Sol",
    short: "Porta do Sol",
    line: "Avenida Hilton Souto Maior · Portal do Sol · João Pessoa",
    here: "Você está aqui",
    detail:
      "O ponto correspondente no OpenStreetMap está nomeado como Porta do Sol Residence Privê — o mesmo condomínio indicado na planilha de vizinhos da assembleia.",
    anchor: {
      label: "Ponta do Seixas",
      note: "cerca de 1,7 km a nordeste, em linha reta",
      x: 86,
      y: 11
    }
  },

  neighbors: [
    {
      id: "cabo-branco",
      name: "Cabo Branco Residence Privê",
      short: "Cabo Branco Privê",
      x: 60,
      y: 30,
      distance: "cerca de 240 m",
      fact: "Condomínio horizontal de casas.",
      sale: {
        price: "R$ 1.950.000",
        detail: "Casa anunciada com 4 suítes e 400 m².",
        publisher: "MGF Imóveis · anúncio Imoveis JP",
        url: "https://pb.mgfimoveis.com.br/casa-no-condominio-cabo-branco-prive-4-suites-400m-venda-pb-joao-pessoa-290275493",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-cabo"]
    },
    {
      id: "extremo",
      name: "Residencial Extremo Oriental",
      short: "Extremo Oriental",
      x: 74,
      y: 46,
      distance: "cerca de 530 m",
      fact: "Condomínio de casas.",
      sale: {
        price: "R$ 2.550.000",
        detail: "Casa anunciada com 5 suítes e 410 m².",
        publisher: "Deztop",
        url: "https://deztop.com/br/imovel/295816010/casa-condominio-5-dormitorios-joao-pessoa-condominio-extremo",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-extremo"]
    },
    {
      id: "americas",
      name: "Condomínio das Américas",
      short: "Das Américas",
      x: 66,
      y: 28,
      distance: "eixo da orla",
      fact: "Condomínio de casas de alto padrão.",
      sale: {
        price: "R$ 5.800.000",
        detail: "Casa anunciada com 6 suítes e cerca de 394 m².",
        publisher: "Luxo Capital Imobiliário",
        url: "https://www.luxocapitalimobiliario.com.br/imovel/casa-no-condominio-das-americas-joao-pessoa-portal-do-sol-6-quartos-4-garagens-venda-ref-116/",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-americas"]
    },
    {
      id: "greenhouse",
      name: "Green House Alliance",
      short: "Green House",
      x: 28,
      y: 62,
      distance: "lançamento",
      fact: "Condomínio de casas da Alliance, em construção.",
      sale: {
        price: "A partir de R$ 2.269.733",
        detail: "Casa de 182 m². Preço anunciado de lançamento.",
        publisher: "Apto",
        url: "https://apto.vc/br/pb/joao-pessoa/portal-do-sol/alliance-green-house",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Valor inicial, não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-greenhouse"]
    },
    {
      id: "bloco",
      name: "Empreendimento Grupo Bloco",
      short: "Grupo Bloco",
      x: 38,
      y: 70,
      distance: "Em frente",
      fact: "Empreendimento em frente ao condomínio. Imagens do material da assembleia.",
      sale: {
        price: "Sem preço publicado",
        detail: "Não há anúncio de venda com valor localizado para este empreendimento.",
        publisher: "",
        url: "",
        note: "Busca em 27 de setembro de 2026. A planilha da assembleia identifica o Grupo Bloco, sem valor de venda."
      },
      photos: [
        { src: "assets/grupo-bloco-1.jpg", alt: "Imagem do empreendimento Grupo Bloco, vista aérea, constante no material da assembleia." },
        { src: "assets/grupo-bloco-2.jpg", alt: "Imagem do empreendimento Grupo Bloco, fachada, constante no material da assembleia." }
      ],
      sourceIds: ["vizinhos", "fotos-bloco"]
    }
  ],

  stats: [
    {
      id: "altiplano-m2",
      value: 10550,
      format: "currency",
      label: "Altiplano Cabo Branco",
      note: "Preço médio anunciado por m²",
      sourceId: "myside"
    },
    {
      id: "altiplano-12m",
      value: 14.3,
      format: "percent",
      decimals: 1,
      label: "Altiplano Cabo Branco",
      note: "Variação em 12 meses · anúncios",
      sourceId: "myside"
    },
    {
      id: "jp-12m",
      value: 8.12,
      format: "percent",
      decimals: 2,
      label: "João Pessoa",
      note: "Variação em 12 meses · FipeZAP",
      sourceId: "fipe"
    }
  ],

  sources: [
    {
      id: "vizinhos",
      title: "Planilha de vizinhos da assembleia",
      publisher: "Material interno — vizinhos.xlsx",
      date: "Arquivo da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports:
        "Nomes e endereços do Cabo Branco Residence Privê, Green House Alliance, Residencial Extremo Oriental, Condomínio das Américas e Empreendimento Grupo Bloco. Também a indicação de 1,5 km entre o Green House e a Praia do Seixas, e de que o Grupo Bloco fica em frente ao condomínio."
    },
    {
      id: "fotos-bloco",
      title: "Imagens do Grupo Bloco",
      publisher: "Material interno — fotos do empreendimento",
      date: "Arquivos da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports: "Fotografias ou imagens de divulgação usadas apenas no card do empreendimento em frente."
    },
    {
      id: "osm",
      title: "OpenStreetMap — pontos nomeados",
      publisher: "OpenStreetMap",
      date: "Consulta ao Nominatim em 27 de setembro de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://www.openstreetmap.org/?mlat=-7.15883&mlon=-34.80834#map=16/-7.1588/-34.8050",
      supports:
        "Coordenadas de Porta do Sol Residence Privê (−7,15883, −34,80834), Condomínio Residence Cabo Branco Privê e Condomínio Extremo Oriental. Distâncias em linha reta: cerca de 240 m e cerca de 530 m. Ponta do Seixas a cerca de 1,7 km a nordeste. Não é distância por rua."
    },
    {
      id: "scielo",
      title: "O solo urbano e a apropriação da natureza na cidade",
      publisher: "Revista Sociedade & Natureza — SciELO",
      date: "Artigo acadêmico",
      accessed: "27 de setembro de 2026",
      url: "https://www.scielo.br/j/sn/a/4H4hNqPtJBrxrkqmtYQcYMt/?format=html&lang=pt",
      supports:
        "O Cabo Branco Residence Privê é citado como loteamento de condomínio fechado horizontal, aprovado em 1998, no litoral sul de João Pessoa."
    },
    {
      id: "venda-cabo",
      title: "Casa no Condomínio Cabo Branco Privê, 4 suítes e 400 m²",
      publisher: "MGF Imóveis · anúncio de Imoveis JP",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://pb.mgfimoveis.com.br/casa-no-condominio-cabo-branco-prive-4-suites-400m-venda-pb-joao-pessoa-290275493",
      supports: "Preço anunciado de R$ 1.950.000 para uma casa de 400 m² no Cabo Branco Residence Privê. É um anúncio, não a média do condomínio."
    },
    {
      id: "venda-extremo",
      title: "Casa de alto padrão no Condomínio Extremo Oriental",
      publisher: "Deztop",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://deztop.com/br/imovel/295816010/casa-condominio-5-dormitorios-joao-pessoa-condominio-extremo",
      supports: "Preço anunciado de R$ 2.550.000 para uma casa de 410 m² com 5 suítes no Residencial Extremo Oriental."
    },
    {
      id: "venda-americas",
      title: "Casa no Condomínio das Américas",
      publisher: "Luxo Capital Imobiliário",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://www.luxocapitalimobiliario.com.br/imovel/casa-no-condominio-das-americas-joao-pessoa-portal-do-sol-6-quartos-4-garagens-venda-ref-116/",
      supports: "Preço anunciado de R$ 5.800.000 para uma casa de cerca de 394 m² com 6 suítes no Condomínio das Américas."
    },
    {
      id: "venda-greenhouse",
      title: "Alliance Green House",
      publisher: "Apto",
      date: "Página do lançamento",
      accessed: "27 de setembro de 2026",
      url: "https://apto.vc/br/pb/joao-pessoa/portal-do-sol/alliance-green-house",
      supports: "Preço anunciado a partir de R$ 2.269.733 para a planta de 182 m². Empreendimento em construção, da Alliance."
    },
    {
      id: "americas",
      title: "Condomínio das Américas",
      publisher: "Site do empreendimento",
      date: "Página consultada em 2026",
      accessed: "27 de setembro de 2026",
      url: "https://condominiodasamericas.com.br/",
      supports:
        "Condomínio de alto padrão na Av. Panorâmica, com parque informado em cerca de 66 mil m². O número 500 do endereço é o da planilha da assembleia; o material comercial do empreendimento também usa a Av. Panorâmica, sem o mesmo número em todas as páginas."
    },
    {
      id: "fipe",
      title: "Índice FipeZAP — informe de venda residencial de agosto de 2026",
      publisher: "Fundação Instituto de Pesquisas Econômicas (FIPE)",
      date: "Agosto de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://downloads.fipe.org.br/indices/fipezap/fipezap-202608-residencial-venda.pdf",
      supports:
        "João Pessoa: preço médio de R$ 8.387/m² e alta de 8,12% em 12 meses. No mesmo informe, o Índice FipeZAP nacional acumulou 5,49% em 12 meses. O índice acompanha preços de anúncios de apartamentos prontos, não avaliação de casas do Porta do Sol."
    },
    {
      id: "myside",
      title: "10 bairros mais caros de João Pessoa (PB) em 2026",
      publisher: "MySide",
      date: "Atualizado em 4 de setembro de 2026; valores atribuídos ao FipeZAP de agosto de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://myside.com.br/guia-imoveis/bairros-mais-caros-joao-pessoa-pb",
      supports:
        "Altiplano Cabo Branco: R$ 10.550/m² e +14,30% em 12 meses. Portal do Sol, no mesmo recorte e fora dos números principais da tela: R$ 5.722/m² e +6,50% em 12 meses. O preço médio da cidade citado na página (R$ 8.387/m²) coincide com o informe oficial de agosto de 2026. São preços de anúncio."
    },
    {
      id: "cronologia-energisa",
      title: "Cronologia dos fatos — sobretensão, caso Energisa",
      publisher: "Material interno — cronologia do condomínio",
      date: "Registros de 28/07/2026 a 19/09/2026",
      accessed: "27 de setembro de 2026",
      url: "",
      supports:
        "Queima da bomba em 28/07/2026, pedidos, protocolos, negativa de ressarcimento, relatório de 25/08 e a situação em 19/09, com previsão de resolução até 28/09/2026."
    },
    {
      id: "carta-energisa",
      title: "Carta de medição — resultado do processo",
      publisher: "Energisa Paraíba",
      date: "João Pessoa, 24 de agosto de 2026",
      accessed: "27 de setembro de 2026",
      url: "",
      supports:
        "UC 185848305389. Medição de 12/08 a 19/08/2026, 1.008 leituras, 220 V, trifásica. Faixa de 202 V a 231 V. DRP e DRC acima do permitido nas três fases. Necessidade de aprimoramento na rede e compensação até a normalização."
    },
    {
      id: "outorga",
      title: "Outorga do direito de uso de água nº 35845",
      publisher: "AESA — Agência Executiva de Gestão das Águas do Estado da Paraíba",
      date: "09 de agosto de 2026. Validade até 09 de agosto de 2027",
      accessed: "27 de setembro de 2026",
      url: "",
      supports:
        "Renovação. Poço tubular, vazão de 7,10 m³/h, volume anual de 52.600 m³, 54 habitações e bomba submersa. Finalidade escrita: limpeza em geral, prevenção e combate a incêndios, jardinagem e outras finalidades."
    },
    {
      id: "logo",
      title: "Marca do condomínio",
      publisher: "Material interno — Logo.docx",
      date: "Arquivo da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports: "Logotipo e cor grafite da identidade visual."
    }
  ]
};
